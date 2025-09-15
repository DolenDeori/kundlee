import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How accurate are your Vedic astrology reports?",
      answer:
        "Our reports are based on authentic Vedic astrology principles and calculations, refined through years of research. We use traditional methodologies combined with modern precision to provide the most accurate insights possible.",
    },
    {
      question: "What information do I need to provide for a report?",
      answer:
        "For the most accurate reading, we need your exact birth date, birth time (preferably to the minute), and birth location (city and country). The more precise your birth time, the more accurate your report will be.",
    },
    {
      question: "How long does it take to receive my report?",
      answer:
        "Our detailed reports are typically delivered within 3-5 business days. For urgent requests, we offer expedited processing that delivers your report within 24 hours for an additional fee.",
    },
    {
      question: "What's the difference between Jeevan Sathee and Jeevan Marg?",
      answer:
        "Jeevan Sathee focuses on relationship compatibility and partnership dynamics, perfect for couples seeking deeper understanding. Jeevan Marg is your comprehensive life path guide, covering career, purpose, and major life decisions.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We stand behind our work with a 30-day satisfaction guarantee. If you're not completely satisfied with your report, we offer a full refund or will work with you to address any concerns.",
    },
    {
      question: "Do you offer personal consultations?",
      answer:
        "Yes, we offer one-on-one consultations with our experienced astrologers. These sessions allow for personalized guidance and the opportunity to ask specific questions about your report or life situation.",
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Absolutely. We treat all personal information with the utmost confidentiality. Your birth details and report content are never shared with third parties and are securely stored in accordance with privacy best practices.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full sunray-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-larken text-4xl lg:text-5xl font-bold text-charcoal mb-6 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services and the wisdom
            of Vedic astrology
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl px-6 hover:bg-white transition-all duration-300"
              >
                <AccordionTrigger className="font-inter text-left font-semibold text-charcoal transition-colors duration-200 py-6 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-charcoal/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-inter text-charcoal/70 mb-6">
            Still have questions? We're here to help.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group bg-teal text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-teal-dark focus:ring-4 focus:ring-teal/20 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
