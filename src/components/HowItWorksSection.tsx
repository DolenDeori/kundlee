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

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-sm text-saffron tracking-wide">
              How It Works
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            Your Journey to Cosmic Clarity
          </h2>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Three simple steps to unlock the ancient wisdom tailored for your
            modern life
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-1/2 w-full max-w-3xl -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="grid lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Step Card */}
                    <div className="bg-card border border-border/20 rounded-3xl p-8 hover:border-saffron/20 transition-all duration-700 hover:shadow-elegant group-hover:-translate-y-2">
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-teal rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:shadow-teal-glow">
                            <step.icon className="w-10 h-10 text-white" />
                          </div>
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-saffron rounded-full flex items-center justify-center shadow-md">
                            <span className="font-inter text-sm font-bold text-white">
                              {step.id}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="font-larken text-2xl text-foreground uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="font-inter text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-2 pt-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              {step.id === 1 && (
                                <SparklesIcon className="w-4 h-4 text-saffron flex-shrink-0" />
                              )}
                              {step.id === 2 && (
                                <ShieldCheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                              )}
                              {step.id === 3 && (
                                <ClockIcon className="w-4 h-4 text-saffron flex-shrink-0" />
                              )}
                              <span className="font-inter text-sm text-foreground/80">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Decorative Gradient */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-bl from-saffron/40 to-transparent rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-700" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-32 w-px h-16 bg-gradient-to-b from-border to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-md">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-saffron rounded-full flex items-center justify-center shadow-md">
                      <span className="font-inter text-sm font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border/20 rounded-3xl p-6 hover:border-saffron/20 transition-colors duration-300">
                    <h3 className="font-larken text-xl text-foreground uppercase tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {step.id === 1 && (
                            <SparklesIcon className="w-4 h-4 text-saffron flex-shrink-0" />
                          )}
                          {step.id === 2 && (
                            <ShieldCheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                          )}
                          {step.id === 3 && (
                            <ClockIcon className="w-4 h-4 text-saffron flex-shrink-0" />
                          )}
                          <span className="font-inter text-sm text-foreground/80">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
          className="text-center mt-16 pt-12 border-t border-border/30"
        >
          <div className="inline-block bg-gradient-to-r from-saffron/10 via-teal/10 to-saffron/10 rounded-2xl p-8 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldCheckIcon className="w-5 h-5 text-teal" />
              <span className="font-inter font-semibold text-teal uppercase tracking-wide text-sm">
                Trusted by 500+ Souls
              </span>
            </div>
            <p className="font-inter text-foreground/80 leading-relaxed">
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
