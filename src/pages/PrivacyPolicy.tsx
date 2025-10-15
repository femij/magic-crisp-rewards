import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-orange/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="glass-subtle sticky top-0 z-50 border-b border-warm-orange/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-warm rounded-xl flex items-center justify-center shadow-subtle group-hover:shadow-soft transition-all duration-300">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">Magic Rewards</span>
          </Link>
          <Link to="/">
            <Button variant="warm" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto glass-subtle rounded-3xl p-8 md:p-12 shadow-glass">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {currentDate}</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">1. Introduction</h2>
              <p className="leading-relaxed mb-4">
                Welcome to Magic Rewards. We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Payment and billing information</li>
                <li>Bank account details for cashback processing</li>
                <li>WhatsApp contact information for notifications</li>
                <li>Transaction history and purchase data</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Process your transactions and provide cashback rewards</li>
                <li>Send you notifications via WhatsApp about your rewards</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about your account</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to improve our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">4. Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li><strong>With partner merchants:</strong> To track purchases and process cashback</li>
                <li><strong>With payment processors:</strong> To facilitate transactions and rewards distribution</li>
                <li><strong>With service providers:</strong> Who assist in operating our platform</li>
                <li><strong>For legal purposes:</strong> When required by law or to protect our rights</li>
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
              </ul>
              <p className="leading-relaxed">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">5. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="leading-relaxed">
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">6. Your Privacy Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Objection:</strong> Object to certain data processing activities</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, please contact us at privacy@magicrewards.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">7. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our service and store certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">8. Third-Party Links</h2>
              <p className="leading-relaxed mb-4">
                Our service may contain links to third-party websites. We are not responsible for the privacy practices of these websites. 
                We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">9. Children's Privacy</h2>
              <p className="leading-relaxed mb-4">
                Our service is not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">10. International Data Transfers</h2>
              <p className="leading-relaxed mb-4">
                Your information may be transferred to and maintained on servers located outside of your country. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-warm-brown">12. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="glass p-6 rounded-2xl shadow-subtle">
                <p className="leading-relaxed text-warm-brown">
                  <strong className="font-bold">Email:</strong> privacy@magicrewards.com<br />
                  <strong className="font-bold">Phone:</strong> 1-800-MAGIC-REWARDS<br />
                  <strong className="font-bold">Address:</strong> 123 Rewards Street, Suite 100, San Francisco, CA 94102
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/">
              <Button variant="warm" size="lg" className="shadow-floating hover:shadow-warm">
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
};

export default PrivacyPolicy;
