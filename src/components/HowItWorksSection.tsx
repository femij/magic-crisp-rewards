import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import connectBanksImage from "@/assets/connect-banks.jpg";
import paymentMethodsImage from "@/assets/payment-methods.jpg";
import rewardsMagicImage from "@/assets/rewards-magic.jpg";

const steps = [
  {
    number: "01",
    title: "Connect bank accounts",
    description: "Link one or two or all of your bank accounts that you use for making payments or the ones that your debit card is associated with to Magic Rewards.",
    image: connectBanksImage,
    features: ["Bank-grade security", "Multiple accounts", "Instant setup"]
  },
  {
    number: "02", 
    title: "Pay online or in-store",
    description: "Buy from merchant in-store or online and pay with debit card or bank transfer from any of your bank accounts connected to Magic Rewards.",
    image: paymentMethodsImage,
    features: ["Any payment method", "Online & offline", "All merchants"]
  },
  {
    number: "03",
    title: "No extra action. Be rewarded",
    description: "No extra interaction is needed. Enjoy your purchase. Your points will be automagically credited to your Magic Rewards profile.",
    image: rewardsMagicImage,
    features: ["Automatic rewards", "Instant points", "Cash redemption"]
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-warm-orange/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-warm-brown/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full shadow-glass">
            <span className="text-sm font-medium text-warm-orange">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-brown">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start earning rewards on every purchase
          </p>
        </div>
        
        {/* Steps grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-warm-orange to-transparent z-10 transform -translate-y-1/2">
                  <ArrowRight className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 text-warm-orange" />
                </div>
              )}
              
              <Card className="border-0 shadow-glass hover:shadow-floating transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-[1.02] bg-gradient-to-br from-card to-soft-cream">
                <CardContent className="p-0">
                  {/* Step number */}
                  <div className="relative p-6 pb-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-2xl shadow-warm text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-[4/3] mx-6 mb-6 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-500">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-0 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-warm-orange transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-warm-orange flex-shrink-0" />
                          <span className="text-sm text-warm-brown font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-3xl shadow-glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-warm-brown mb-4">
              Ready to start earning?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands who are already earning points on every purchase
            </p>
            <div className="flex justify-center">
              <Button variant="warm" size="lg" className="font-bold">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}