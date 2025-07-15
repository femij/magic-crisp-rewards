import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="glass-subtle sticky top-0 z-50 border-b border-warm-orange/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-floating group-hover:shadow-warm transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-warm-orange-light rounded-full animate-pulse opacity-80"></div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
                Magic Rewards
              </span>
              <Sparkles className="absolute -top-2 -right-6 w-4 h-4 text-warm-orange animate-pulse" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex font-medium">
              Sign In
            </Button>
            <Button variant="warm" className="font-semibold shadow-floating hover:shadow-warm">
              Sign Up For Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}