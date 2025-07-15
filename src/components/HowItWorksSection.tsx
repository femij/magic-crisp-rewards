import { Card, CardContent } from "@/components/ui/card";
import connectBanksImage from "@/assets/connect-banks.jpg";
import paymentMethodsImage from "@/assets/payment-methods.jpg";
import rewardsMagicImage from "@/assets/rewards-magic.jpg";

const steps = [
  {
    title: "Connect bank accounts",
    description: "Link one or two or all of your bank accounts that you use for making payments or the ones that your debit card is associated with to Magic Rewards.",
    image: connectBanksImage,
  },
  {
    title: "Pay online or in-store",
    description: "Buy from merchant in-store or online and pay with debit card or bank transfer from any of your bank accounts connected to Magic Rewards.",
    image: paymentMethodsImage,
  },
  {
    title: "No extra action. Be rewarded",
    description: "No extra interaction is needed. Enjoy your purchase. Your points will be automagically credited to your Magic Rewards profile.",
    image: rewardsMagicImage,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown mb-4">
            How it works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}