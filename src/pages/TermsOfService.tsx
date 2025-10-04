import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsOfService: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - Kundlee"
        description="Read the terms and conditions for using Kundlee's Vedic astrology services and reports."
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
              Terms of Service
            </h1>
            
            <div className="space-y-8 text-charcoal/80 font-inter">
              <section>
                <p className="text-sm text-charcoal/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
                
                <p className="mb-6">
                  By accessing and using Kundlee's services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Service Description</h2>
                <p>
                  Kundlee provides Vedic astrology reports and consultations based on birth details provided by users. Our services include Jeevan Sathee (Life Partner Compatibility) and Jeevan Marg (Life Path Analysis).
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">User Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate birth details for generating reports</li>
                  <li>Maintain confidentiality of account credentials</li>
                  <li>Use services for personal, non-commercial purposes only</li>
                  <li>Not reproduce or distribute our reports without permission</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Payment Terms</h2>
                <p>
                  All payments must be made in full before accessing purchased reports. Prices are subject to change without notice. We accept major credit cards and digital payment methods.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Disclaimer</h2>
                <p>
                  Vedic astrology reports are provided for guidance and entertainment purposes. They should not replace professional advice in matters of health, finance, or legal issues. We are not liable for decisions made based on our reports.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Intellectual Property</h2>
                <p>
                  All content, including reports, designs, and software, is owned by Kundlee and protected by copyright laws. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Limitation of Liability</h2>
                <p>
                  Kundlee shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the service.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any violation of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, contact us at{" "}
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

export default TermsOfService;
