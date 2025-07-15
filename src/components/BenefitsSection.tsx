import { Check, Shield, Smartphone, Gift, Mail, Bell, DollarSign, Star } from "lucide-react";
import rewardsMagicImage from "@/assets/rewards-magic.jpg";

const benefits = [
  {
    icon: Shield,
    text: "Increased privacy by not sharing your phone number or email with store attendants",
  },
  {
    icon: Smartphone,
    text: "No need to present another plastic card or any app at checkout",
  },
  {
    icon: Check,
    text: "Earn points even when your smartphone is not present at checkout",
  },
  {
    icon: Gift,
    text: "Select merchants offer up to 5% extra reward points on your birthday",
  },
  {
    icon: Mail,
    text: "Your reward points will be auto-tracked and sent to your email",
  },
  {
    icon: Bell,
    text: "Get notified when your points are redeemable",
  },
  {
    icon: DollarSign,
    text: "Redeem your points as cash into your bank account",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-4">
            What you enjoy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a seamless rewards system that works behind the scenes to maximize your benefits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-warm transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-foreground leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src={rewardsMagicImage} 
              alt="Happy shopping experience" 
              className="w-full h-auto rounded-2xl shadow-warm"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-warm-orange" />
              <h3 className="text-2xl font-bold text-warm-brown">
                Secure & Trustworthy
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Magic Rewards uses secured Open Banking technology to ensure your financial data 
              remains safe and protected. We prioritize your privacy and security above everything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}