import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ArrowRight, Mail, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-warm-brown via-warm-brown to-warm-brown-light text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold">Magic Rewards</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Ready to start earning 
                    <span className="block text-warm-orange-light">magical rewards?</span>
                  </h3>
                  <p className="text-xl text-white/80 leading-relaxed">
                    Join thousands of smart shoppers who are already earning points on every purchase.
                    Start your journey today and turn every transaction into a reward.
                  </p>
                </div>
              </div>
              
              {/* Email signup */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                  <div className="relative flex-1">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 rounded-xl backdrop-blur-sm"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  </div>
                  <Button 
                    variant="outline-warm" 
                    size="lg" 
                    className="h-12 bg-white text-warm-brown hover:bg-white/90 border-white font-bold group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                <p className="text-sm text-white/60">
                  Free to join • No credit card required • Start earning today
                </p>
              </div>
            </div>
            
            {/* Right side - Stats/Features */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "50,000+", label: "Active Users" },
                  { icon: Award, value: "₦2M+", label: "Rewards Paid" },
                  { icon: Shield, value: "99.9%", label: "Uptime" },
                  { icon: Star, value: "4.9", label: "User Rating" }
                ].map((stat, index) => (
                  <div key={index} className="glass-subtle p-6 rounded-2xl text-center backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-warm-orange-light mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                {[
                  "Automatic point earning on every purchase",
                  "Instant cash redemption to your bank account", 
                  "Bank-grade security with Open Banking technology",
                  "Works online and in-store with any payment method"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-warm-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-white/60 text-sm">
                © 2024 Magic Rewards. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-4 text-sm text-white/60">
                <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Shield className="w-4 h-4" />
              <span>Secured by Open Banking Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}