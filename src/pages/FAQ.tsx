import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Star, Sparkles } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Magic Rewards?",
      answer: "Magic Rewards is a cashback rewards program that allows you to earn points on every purchase you make, both online and in-store. You can then redeem these points for cash directly to your bank account."
    },
    {
      question: "How do I earn rewards?",
      answer: "You earn rewards automatically on every purchase you make with your linked payment methods. Simply connect your bank account or payment cards, and we'll track your transactions securely using Open Banking technology. Points are credited to your account instantly after each qualifying purchase."
    },
    {
      question: "How do I redeem my rewards?",
      answer: "Redeeming your rewards is simple! Once you've accumulated enough points, go to your account dashboard and select 'Redeem'. Choose your preferred redemption method (bank transfer or mobile money), enter the amount, and your cash will be transferred directly to your account within 24 hours."
    },
    {
      question: "Is there a minimum amount I need to redeem?",
      answer: "Yes, the minimum redemption amount is ₦500 worth of points. This helps us process transactions efficiently and minimize transfer fees for you."
    },
    {
      question: "How does Magic Rewards make money?",
      answer: "We partner with merchants and brands who pay us a commission when you make purchases. We share a portion of this commission with you as cashback rewards. This means you earn rewards at no cost to you!"
    },
    {
      question: "Is my financial information secure?",
      answer: "Absolutely! We use bank-grade encryption and Open Banking technology regulated by financial authorities. We never store your banking credentials or card numbers. All connections are read-only, meaning we can only view transaction data – we cannot move money or access your accounts."
    },
    {
      question: "Which banks and payment methods are supported?",
      answer: "We support all major Nigerian banks including GTBank, Access Bank, First Bank, UBA, Zenith Bank, and many others. You can connect debit cards, credit cards, and mobile money accounts. We're constantly adding more partners to expand our coverage."
    },
    {
      question: "Do rewards expire?",
      answer: "Your points remain valid for 12 months from the date they were earned. As long as your account remains active (at least one transaction every 6 months), your points will continue to roll over."
    },
    {
      question: "Can I use Magic Rewards for international purchases?",
      answer: "Currently, Magic Rewards focuses on transactions made in Nigeria. However, we're working on expanding internationally. Stay tuned for updates!"
    },
    {
      question: "How will I know when I've earned rewards?",
      answer: "You'll receive instant notifications via WhatsApp and email every time you earn points. You can also check your Magic Rewards dashboard anytime to see your point balance and transaction history."
    },
    {
      question: "What if I return a purchase?",
      answer: "If you return an item or get a refund for a purchase, the corresponding points will be deducted from your account. If you've already redeemed those points, the amount may be deducted from your next earnings."
    },
    {
      question: "Can I refer friends and family?",
      answer: "Yes! Our referral program rewards you when friends sign up using your unique referral code. Both you and your friend will receive bonus points when they make their first purchase."
    },
    {
      question: "Is there a fee to join Magic Rewards?",
      answer: "No! Magic Rewards is completely free to join and use. There are no membership fees, monthly charges, or hidden costs."
    },
    {
      question: "What happens to my points if I close my account?",
      answer: "If you decide to close your account, you'll have 30 days to redeem any remaining points. After that period, unused points will be forfeited."
    },
    {
      question: "Can I have multiple accounts?",
      answer: "Each person is allowed one Magic Rewards account. Multiple accounts may result in suspension of all associated accounts and forfeiture of points."
    },
    {
      question: "How long does it take for points to appear in my account?",
      answer: "Most points appear instantly after a transaction. In some cases, it may take up to 48 hours for points to be credited, especially for larger purchases that require merchant verification."
    },
    {
      question: "What if I don't receive my cashback redemption?",
      answer: "Redemptions typically process within 24 hours. If you haven't received your cashback after 48 hours, please contact our support team with your transaction ID, and we'll investigate immediately."
    },
    {
      question: "Can I connect multiple bank accounts?",
      answer: "Yes! You can connect multiple bank accounts and payment cards to maximize your earning potential across all your purchases."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team 24/7 through the in-app chat, email us at support@magicrewards.com, or call us at 1-800-MAGIC-REWARDS. We typically respond within 2 hours during business hours."
    },
    {
      question: "Are there any excluded purchases?",
      answer: "Most purchases qualify for rewards. However, certain categories like cash advances, money transfers, gift card purchases, and gambling transactions are excluded from earning points."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-warm-orange/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Header */}
      <header className="glass-subtle sticky top-0 z-50 border-b border-warm-orange/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
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
            </Link>
            
            <Button variant="warm" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="glass-subtle rounded-3xl shadow-floating p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-warm">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          
          <p className="text-foreground/80 mb-8 text-lg">
            Find answers to common questions about Magic Rewards. Can't find what you're looking for? 
            <a href="mailto:support@magicrewards.com" className="text-warm-orange hover:text-warm-brown font-semibold ml-1 transition-colors">
              Contact our support team
            </a>.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-warm-orange/20 rounded-lg px-6 bg-warm-orange/5 hover:bg-warm-orange/10 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground text-lg pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 pt-8 border-t border-warm-orange/20">
            <div className="glass-subtle rounded-xl p-6 text-center shadow-warm">
              <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-foreground/80 mb-4">
                Our support team is here to help you 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="warm" asChild>
                  <a href="mailto:support@magicrewards.com">
                    Email Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:1-800-MAGIC-REWARDS">
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-warm-orange hover:text-warm-brown font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
