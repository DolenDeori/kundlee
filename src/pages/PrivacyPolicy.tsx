import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Kundlee"
        description="Learn how Kundlee protects your personal information and privacy when using our Vedic astrology services."
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-larken text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-charcoal/80 font-inter">
              <section>
                <p className="text-sm text-charcoal/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
                
                <p className="mb-6">
                  At Kundlee, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Vedic astrology services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                    <p>We collect birth details (date, time, place), name, email address, and phone number necessary for generating accurate Vedic astrology reports.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
                    <p>We automatically collect information about how you interact with our website, including IP address, browser type, and pages visited.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate personalized Vedic astrology reports</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                  <li>Process payments and transactions</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Third-Party Disclosure</h2>
                <p>
                  We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to trusted service providers who assist us in operating our website.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Your Rights</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:hello@kundlee.com" className="text-saffron hover:underline">
                    hello@kundlee.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
