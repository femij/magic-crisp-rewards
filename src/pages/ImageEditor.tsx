import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const API_ENDPOINT = "wss://ws-api.runware.ai/v1";

export default function ImageEditor() {
  const [apiKey, setApiKey] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedImageUrl, setEditedImageUrl] = useState("");

  const editImage = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsEditing(true);

    try {
      const ws = new WebSocket(API_ENDPOINT);

      await new Promise<void>((resolve, reject) => {
        ws.onopen = () => {
          // Authenticate
          const authMessage = [{
            taskType: "authentication",
            apiKey: apiKey,
          }];
          ws.send(JSON.stringify(authMessage));
          resolve();
        };

        ws.onerror = reject;
      });

      // Wait for authentication
      await new Promise<void>((resolve) => {
        ws.onmessage = (event) => {
          const response = JSON.parse(event.data);
          if (response.data?.[0]?.taskType === "authentication") {
            resolve();
          }
        };
      });

      // Convert image to base64
      const response = await fetch("/src/assets/payment-methods-original.jpg");
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });

      const taskUUID = crypto.randomUUID();

      // Send image editing request
      const editMessage = [{
        taskType: "imageInference",
        taskUUID,
        inputImage: base64,
        positivePrompt: "Transform the silver phone lying flat on the desk to show its screen with a payment app interface displaying colorful payment cards. Keep everything else identical - the hand holding the phone, laptop, and background unchanged.",
        model: "runware:100@1",
        width: 1024,
        height: 768,
        numberResults: 1,
        outputFormat: "JPEG",
        strength: 0.75,
      }];

      ws.send(JSON.stringify(editMessage));

      // Wait for result
      ws.onmessage = (event) => {
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "An error occurred";
          toast.error(errorMessage);
          setIsEditing(false);
          ws.close();
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "imageInference" && item.taskUUID === taskUUID) {
              setEditedImageUrl(item.imageURL);
              toast.success("Image edited successfully! Download and replace the file in src/assets/payment-methods.jpg");
              setIsEditing(false);
              ws.close();
            }
          });
        }
      };

    } catch (error) {
      console.error("Error editing image:", error);
      toast.error("Failed to edit image. Please check your API key and try again.");
      setIsEditing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">Image Editor - Payment Methods</h1>
          
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-4">
                This tool will edit the phone on the desk to show its screen instead of its back.
                Get your Runware API key from{" "}
                <a 
                  href="https://runware.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  runware.ai
                </a>
              </p>
              
              <div className="flex gap-4">
                <Input
                  type="password"
                  placeholder="Enter your Runware API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={editImage} 
                  disabled={isEditing}
                >
                  {isEditing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Edit Image
                </Button>
              </div>
            </div>

            {editedImageUrl && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Edited Image:</h2>
                <img 
                  src={editedImageUrl} 
                  alt="Edited payment methods" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href={editedImageUrl} 
                      download="payment-methods.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Image
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    After downloading, replace the file at <code>src/assets/payment-methods.jpg</code>
                  </p>
                </div>
              </div>
            )}

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> For a better workflow, consider enabling Lovable Cloud to use serverless functions for image processing without exposing API keys.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
