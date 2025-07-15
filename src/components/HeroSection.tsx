import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-shopping.jpg";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-orange/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-warm opacity-[0.03] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full shadow-glass">
              <div className="w-2 h-2 bg-gradient-warm rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-warm-brown">Trusted by 50,000+ users</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Earn points{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-warm-orange to-warm-brown bg-clip-text text-transparent">
                    every time
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-warm rounded-full transform scale-x-0 animate-scale-in" style={{animationDelay: '1s'}}></div>
                </span>{" "}
                you buy{" "}
                <span className="relative">
                  <span className="text-warm-orange">online</span>
                  <Zap className="absolute -top-2 -right-6 w-6 h-6 text-warm-orange animate-pulse" />
                </span>{" "}
                or{" "}
                <span className="text-warm-orange">in-store</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Automatically earn loyalty points when you pay with your card or bank transfer 
                at partner merchant stores. 
                <span className="font-semibold text-warm-brown"> Redeem your points for cash.</span>
              </p>
            </div>
            
            {/* Email signup */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-1">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="h-14 text-base pl-4 pr-12 rounded-2xl border-2 border-warm-orange/20 focus:border-warm-orange shadow-subtle focus:shadow-soft transition-all duration-300"
                  />
                  <Shield className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-warm-orange/60" />
                </div>
                <Button variant="hero" className="h-14 px-8 text-lg font-bold group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
              
              <p className="text-sm text-text-light">
                Join free • No credit card required • Start earning immediately
              </p>
            </div>
            
            {/* Features badge */}
            <div className="flex items-center gap-3 glass p-6 rounded-2xl shadow-glass max-w-md">
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center shadow-soft">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-warm-brown">Get rewarded automagically</h3>
                <p className="text-sm text-text-light">No extra steps, just shop and earn</p>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative lg:order-2 animate-scale-in" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-floating hover:shadow-warm transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02]">
                <img 
                  src={heroImage} 
                  alt="Happy couple shopping with Magic Rewards" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/10 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 glass p-4 rounded-2xl shadow-glass animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">+5</span>
                  </div>
                  <span className="text-sm font-semibold text-warm-brown">Points earned!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-glass animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">₦</span>
                  </div>
                  <span className="text-sm font-semibold text-warm-brown">Cash reward ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}