import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-shopping.jpg";

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Earn points every time you buy{" "}
              <span className="text-warm-orange">online</span> or{" "}
              <span className="text-warm-orange">in-store</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Automatically earn loyalty points when you pay with your card or bank transfer 
              at partner merchant stores. Redeem your points for cash. Unlock badges when you hit milestones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 h-12 text-base"
              />
              <Button variant="hero" size="lg" className="h-12 px-8">
                Sign Up For Free
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-warm-orange font-medium bg-accent/50 p-4 rounded-lg border border-accent">
              <Sparkles className="w-5 h-5" />
              <span>Get rewarded automagically</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Happy couple shopping with Magic Rewards" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}