import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const RefundPolicy: React.FC = () => {
  return (
    <>
      <SEOHead path="/refund-policy" />
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
              Refund Policy
            </h1>

            <div className="space-y-8 text-charcoal/80 font-inter">
              <section>
                <p className="text-sm text-charcoal/60 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <p className="mb-6">
                  At Kundlee, we are committed to your satisfaction. This Refund
                  Policy outlines the conditions under which refunds may be
                  issued for our Vedic astrology services.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Digital Products
                </h2>
                <p>
                  Due to the digital nature of our astrology reports, all sales
                  are generally final once the report has been generated and
                  delivered. However, we understand that exceptional
                  circumstances may arise.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Eligible for Refund
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Technical errors preventing report delivery</li>
                  <li>Duplicate charges for the same service</li>
                  <li>
                    Significant errors in report generation due to system
                    malfunction
                  </li>
                  <li>Report not delivered within promised timeframe</li>
                </ul>
                <p className="mt-4">
                  Refund requests must be made within 7 days of purchase with
                  valid proof of the issue.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Not Eligible for Refund
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Change of mind after receiving the report</li>
                  <li>Disagreement with astrological interpretations</li>
                  <li>Incorrect birth details provided by the user</li>
                  <li>Reports already accessed or downloaded</li>
                  <li>Consultation services already rendered</li>
                </ul>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Refund Process
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      How to Request
                    </h3>
                    <p>
                      Contact us at{" "}
                      <a
                        href="mailto:hello@kundlee.com"
                        className="text-saffron hover:underline"
                      >
                        hello@kundlee.com
                      </a>{" "}
                      with your order number and detailed reason for the refund
                      request.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Processing Time
                    </h3>
                    <p>
                      Approved refunds will be processed within 7-10 business
                      days to the original payment method.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Cancellation Policy
                </h2>
                <p>
                  You may cancel your order before the report has been
                  generated. Once generation begins, cancellations are not
                  accepted. For consultation bookings, cancellations must be
                  made at least 24 hours in advance for a full refund.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Partial Refunds
                </h2>
                <p>
                  In certain cases, we may offer partial refunds or service
                  credits at our discretion, especially if the issue can be
                  resolved through corrections or additional consultations.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Dispute Resolution
                </h2>
                <p>
                  If you are dissatisfied with our refund decision, you may
                  escalate the matter by contacting our customer support team.
                  We aim to resolve all disputes fairly and promptly.
                </p>
              </section>

              <section>
                <h2 className="font-larken text-2xl font-bold text-charcoal mb-4">
                  Contact Us
                </h2>
                <p>
                  For refund inquiries or concerns, please contact us at{" "}
                  <a
                    href="mailto:hello@kundlee.com"
                    className="text-saffron hover:underline"
                  >
                    hello@kundlee.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+919876543210"
                    className="text-saffron hover:underline"
                  >
                    +91 9876543210
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

export default RefundPolicy;
