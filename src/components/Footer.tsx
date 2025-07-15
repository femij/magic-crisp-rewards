import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-warm-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Magic Rewards</span>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start earning rewards?
            </h3>
            <p className="text-white/80 mb-6">
              Join thousands of smart shoppers who are already earning points on every purchase.
            </p>
            <Button variant="outline-warm" size="lg" className="bg-white text-warm-brown hover:bg-white/90">
              Get Started Today
            </Button>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 Magic Rewards. All rights reserved. Secure banking technology powered by Open Banking.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}