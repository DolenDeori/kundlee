import React from "react";
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  UserIcon,
  InboxIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

/**
 * Step data structure for the How It Works section
 * Each step represents a stage in the user journey
 */
const steps = [
  {
    id: 1,
    title: "Choose Your Report",
    description:
      "Select from Jeevan Sathee (relationship compatibility) or Jeevan Marg (life path guidance) to begin your cosmic journey.",
    icon: DocumentTextIcon,
    details: [
      "Two specialized services",
      "Ancient Vedic wisdom",
      "Modern interpretations",
    ],
  },
  {
    id: 2,
    title: "Provide Your Birth Details",
    description:
      "Share your birth information with complete confidence. Your personal data is encrypted and kept absolutely confidential.",
    icon: UserIcon,
    details: [
      "Secure data handling",
      "100% confidential",
      "Encrypted transmission",
    ],
  },
  {
    id: 3,
    title: "Receive Your Report",
    description:
      "Get your comprehensive, personalized report delivered directly to your inbox within 48-72 hours.",
    icon: InboxIcon,
    details: [
      "Delivered in 48-72 hours",
      "Comprehensive analysis",
      "Lifetime access",
    ],
  },
];

/**
 * HowItWorksSection Component
 * 
 * Displays a 3-step process explaining how users can get their personalized reports.
 * Features responsive design with icons positioned above content boxes for all screen sizes.
 * 
 * @returns {JSX.Element} The How It Works section
 */
const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-xs sm:text-sm text-saffron tracking-wide">
              How It Works
            </p>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4 sm:mb-6">
            Your Journey to Cosmic Clarity
          </h2>
          <p className="font-inter text-base sm:text-lg text-muted-foreground leading-relaxed">
            Three simple steps to unlock the ancient wisdom tailored for your
            modern life
          </p>
        </motion.div>

        {/* Steps Container - Unified Responsive Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Icon Container - Always on Top */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-teal rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-teal-glow">
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-saffron rounded-full flex items-center justify-center shadow-md">
                      <span className="font-inter text-sm sm:text-base font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card - Below Icon */}
                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md transition-colors duration-300 h-full">
                  {/* Title */}
                  <h3 className="font-larken text-xl sm:text-2xl text-foreground uppercase tracking-wide mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 text-center">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3 pt-4 border-t border-border/30">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {step.id === 1 && (
                          <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-saffron flex-shrink-0" />
                        )}
                        {step.id === 2 && (
                          <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0" />
                        )}
                        {step.id === 3 && (
                          <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-saffron flex-shrink-0" />
                        )}
                        <span className="font-inter text-sm sm:text-base text-foreground/80">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-bl from-saffron/40 to-transparent rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Connection Line - Hidden on Mobile, shown on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-10 h-px bg-gradient-to-r from-border to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border/30 relative z-20"
        >
          <div className="inline-block bg-gradient-to-r from-saffron/10 via-teal/10 to-saffron/10 rounded-2xl p-6 sm:p-8 max-w-2xl border border-border/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldCheckIcon className="w-5 h-5 text-teal" />
              <span className="font-inter font-semibold text-teal uppercase tracking-wide text-sm">
                Trusted by 500+ Souls
              </span>
            </div>
            <p className="font-inter text-sm sm:text-base text-foreground/80 leading-relaxed">
              Ready to discover what the cosmos has in store for you? Your
              personalized journey awaits.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
