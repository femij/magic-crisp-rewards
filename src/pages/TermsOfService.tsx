import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-brown via-warm-brown to-warm-brown-light">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-warm-brown/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Magic Rewards</span>
          </Link>
          <Link to="/">
            <Button variant="outline-warm" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Magic Rewards ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                Magic Rewards is a rewards platform that allows users to earn points on purchases and redeem them for cash or other rewards. The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automatic tracking of eligible purchases</li>
                <li>Points accumulation based on spending</li>
                <li>Redemption options for accumulated points</li>
                <li>Account management features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. User Accounts</h2>
              <p className="leading-relaxed mb-4">
                To use our Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Earning and Redeeming Points</h2>
              <p className="leading-relaxed mb-4">
                Points are earned according to our current rewards program terms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Points are earned on eligible purchases only</li>
                <li>Points have no cash value until redeemed</li>
                <li>We reserve the right to modify the points earning rate with notice</li>
                <li>Points may expire after a period of account inactivity</li>
                <li>Redemption options and values may change</li>
                <li>Fraudulent activity may result in forfeiture of points</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Bank Account Connection</h2>
              <p className="leading-relaxed">
                By connecting your bank account through our secure Open Banking technology, you authorize us to access transaction data necessary to track eligible purchases and calculate rewards. We use bank-grade encryption and never store your banking credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Prohibited Activities</h2>
              <p className="leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Create multiple accounts to manipulate the rewards system</li>
                <li>Engage in any fraudulent activity</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Intellectual Property</h2>
              <p className="leading-relaxed">
                The Service and its original content, features, and functionality are owned by Magic Rewards and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease, and any unredeemed points may be forfeited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Magic Rewards shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service. Our total liability shall not exceed the value of points in your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">12. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">13. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <strong>Email:</strong> legal@magicrewards.com<br />
                <strong>Address:</strong> Magic Rewards, Lagos, Nigeria
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link to="/">
              <Button variant="outline-warm" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
