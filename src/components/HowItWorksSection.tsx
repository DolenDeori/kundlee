import React from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheckIcon, SparklesIcon, ClockIcon } from "@heroicons/react/24/outline";

/**
 * Custom SVG Icons for Kundlee Brand Identity
 * These icons are designed to align with the brand's visual language
 */
const SelectPathIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Two overlapping scrolls representing choice */}
    <path
      d="M14 12C14 10.8954 14.8954 10 16 10H28C29.1046 10 30 10.8954 30 12V14H32C33.1046 14 34 14.8954 34 16V36C34 37.1046 33.1046 38 32 38H20C18.8954 38 18 37.1046 18 36V34H16C14.8954 34 14 33.1046 14 32V12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 18H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 22H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 26H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    <circle cx="18" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

const ShareStoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Celestial map with connected stars */}
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" />
    <circle cx="24" cy="16" r="2" fill="currentColor" className="animate-pulse-soft" />
    <circle cx="18" cy="24" r="2" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: '0.2s' }} />
    <circle cx="30" cy="24" r="2" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: '0.4s' }} />
    <circle cx="24" cy="32" r="2" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: '0.6s' }} />
    <path d="M24 16 L18 24 L30 24 L24 32 L24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    <path
      d="M24 10C24 10 26 12 28 12C30 12 32 10 32 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const UnlockClarityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Unfurled scroll with glowing Kundlee sun */}
    <path
      d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34C36 35.1046 35.1046 36 34 36H14C12.8954 36 12 35.1046 12 34V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" className="animate-pulse-soft" />
    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.8" />
    {/* Sun rays */}
    <line x1="24" y1="14" x2="24" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="31" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="17" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30.5" y1="17.5" x2="28.5" y2="19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19.5" y1="28.5" x2="17.5" y2="30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30.5" y1="30.5" x2="28.5" y2="28.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19.5" y1="19.5" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Step data structure aligned with Kundlee's brand voice
 * "Polite, Practical, and Real" - positioning as a wise, trusted guide
 */
const steps = [
  {
    id: 1,
    title: "Select Your Path",
    description:
      "Begin your journey by choosing a report tailored to your core questions—Jeevan Sathi for relationship clarity or Jeevan Marg for career and life guidance.",
    icon: SelectPathIcon,
    details: [
      "Two specialized services",
      "Ancient Vedic wisdom",
      "Modern interpretations",
    ],
    detailIcon: SparklesIcon,
  },
  {
    id: 2,
    title: "Share Your Story",
    description:
      "Your birth details chart your unique cosmic blueprint. We treat your story with the utmost confidence, protected by secure, encrypted transmission.",
    icon: ShareStoryIcon,
    details: [
      "Secure data handling",
      "100% confidential",
      "Encrypted transmission",
    ],
    detailIcon: ShieldCheckIcon,
  },
  {
    id: 3,
    title: "Unlock Your Clarity",
    description:
      "Receive your meticulously crafted, personalized report in your inbox within 48-72 hours. Your blueprint to navigate life with confidence awaits.",
    icon: UnlockClarityIcon,
    details: [
      "Delivered in 48-72 hours",
      "Comprehensive analysis",
      "Lifetime access",
    ],
    detailIcon: ClockIcon,
  },
];

/**
 * Curved Path SVG Component
 * Represents the user's journey connecting all three steps
 */
const JourneyPath: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg
    className="absolute top-24 left-0 w-full h-32 pointer-events-none hidden lg:block"
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M 0 60 Q 300 20, 600 60 T 1200 60"
      stroke="hsl(var(--saffron))"
      strokeWidth="2"
      strokeDasharray="8 8"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isVisible ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </svg>
);

/**
 * HowItWorksSection Component
 * 
 * Premium redesign aligned with Kundlee's brand identity:
 * - Modern yet Traditional visual language
 * - Custom iconography reflecting brand essence
 * - Smooth, elegant animations that guide the user
 * - Personalized messaging: "Polite, Practical, and Real"
 * 
 * @returns {JSX.Element} The redesigned How It Works section
 */
const HowItWorksSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] sunray-pattern" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Decorative top element */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-xs sm:text-sm text-teal tracking-widest">
              How It Works
            </p>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>

          {/* Main heading - Larken font for traditional authority */}
          <h2 className="font-larken text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4 sm:mb-6 uppercase tracking-wide">
            Your Journey to Cosmic Clarity
          </h2>

          {/* Subheading - Inter font for modern clarity */}
          <p className="font-inter text-base sm:text-lg text-teal leading-relaxed">
            Three simple steps to unlock the ancient wisdom tailored for your modern life
          </p>
        </motion.div>

        {/* Journey Path - Animated curved line */}
        <div className="relative mb-12">
          <JourneyPath isVisible={isInView} />
        </div>

        {/* Steps Container */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const DetailIconComponent = step.detailIcon;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + (index * 0.2),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative group"
                >
                  {/* Icon Container - Always on top */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative">
                      {/* Main icon background with gradient */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-teal-glow transition-shadow duration-700">
                        <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-saffron rounded-full flex items-center justify-center shadow-soft">
                        <span className="font-inter text-sm sm:text-base font-bold text-white">
                          {step.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card - Premium styling */}
                  <div className="bg-warm-white border border-border/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elegant hover:border-saffron/30 transition-all duration-700 h-full relative overflow-hidden">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Content wrapper */}
                    <div className="relative z-10">
                      {/* Title - Larken for authority */}
                      <h3 className="font-larken text-xl sm:text-2xl text-foreground uppercase tracking-wide mb-4 text-center">
                        {step.title}
                      </h3>
                      
                      {/* Description - Inter for clarity */}
                      <p className="font-inter text-sm sm:text-base text-teal leading-relaxed mb-6 text-center">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="space-y-3 pt-4 border-t border-border/30">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <DetailIconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-saffron flex-shrink-0" />
                            <span className="font-inter text-sm sm:text-base text-foreground/80">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
