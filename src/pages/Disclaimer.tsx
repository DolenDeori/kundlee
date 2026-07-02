import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Disclaimer: React.FC = () => {
  return (
    <>
      <SEOHead path="/disclaimer" />
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
              Disclaimer
            </h1>

            <div className="space-y-8 text-charcoal/80 font-inter">
              <section>
                <p className="text-sm text-charcoal/60 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <p className="mb-6">
                  The information provided by Kundlee is for guidance and
                  entertainment purposes only. Please read this disclaimer
                  carefully before using our services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  General Information
                </h2>
                <p>
                  Vedic astrology reports and consultations provided by Kundlee
                  are based on ancient astrological principles and are intended
                  to offer insights and guidance. They should not be considered
                  as absolute predictions or guarantees of future events.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Not Professional Advice
                </h2>
                <div className="space-y-4">
                  <p>Our services do not constitute and should not replace:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Medical Advice:</strong> Consult qualified
                      healthcare professionals for medical concerns
                    </li>
                    <li>
                      <strong>Financial Advice:</strong> Seek certified
                      financial advisors for investment and financial decisions
                    </li>
                    <li>
                      <strong>Legal Advice:</strong> Contact licensed attorneys
                      for legal matters
                    </li>
                    <li>
                      <strong>Mental Health Services:</strong> Consult licensed
                      therapists or counselors for psychological issues
                    </li>
                    <li>
                      <strong>Relationship Counseling:</strong> Seek
                      professional marriage or relationship counselors
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Accuracy of Information
                </h2>
                <p>
                  While we strive to provide accurate astrological
                  interpretations based on the birth details provided, we cannot
                  guarantee the accuracy or completeness of the information. The
                  accuracy of reports depends on the correctness of birth data
                  provided by users.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Personal Responsibility
                </h2>
                <p>
                  You acknowledge that you are solely responsible for all
                  decisions and actions taken based on our astrological reports
                  and consultations. Kundlee and its practitioners shall not be
                  held liable for any consequences arising from your use of our
                  services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Free Will and Choice
                </h2>
                <p>
                  We believe in free will and that individuals have the power to
                  make their own choices. Astrological insights are meant to
                  empower you with knowledge, not to dictate your decisions or
                  limit your potential.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Cultural and Religious Considerations
                </h2>
                <p>
                  Vedic astrology is rooted in ancient Hindu traditions. While
                  we respect all beliefs, our interpretations are based on Vedic
                  principles and may not align with all cultural or religious
                  perspectives.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Website Content
                </h2>
                <p>
                  The content on our website, including articles, blog posts,
                  and service descriptions, is for informational purposes only.
                  We reserve the right to modify, update, or remove content
                  without notice.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  External Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the content, accuracy, or practices of
                  external sites. Use of external links is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  No Guarantees
                </h2>
                <p>
                  We do not guarantee specific outcomes, results, or experiences
                  from using our services. Astrological insights are
                  interpretive and subjective in nature.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Age Restriction
                </h2>
                <p>
                  Our services are intended for individuals aged 18 years and
                  older. Users under 18 must have parental or guardian consent
                  to use our services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Changes to Disclaimer
                </h2>
                <p>
                  We reserve the right to modify this disclaimer at any time.
                  Continued use of our services after changes constitutes
                  acceptance of the updated disclaimer.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this disclaimer, please contact us
                  at{" "}
                  <a
                    href="mailto:hello@kundlee.com"
                    className="text-saffron hover:underline"
                  >
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

export default Disclaimer;
