import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { PremiumButton } from "./ui/PremiumButton";

const AboutSection: React.FC = () => {
  const handleDiscoverReports = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: SparklesIcon,
      title: "Ancient Wisdom",
      description: "Authentic Vedic astrology rooted in centuries of tradition",
    },
    {
      icon: ShieldCheckIcon,
      title: "Modern Clarity",
      description: "Clear, actionable insights free from complex jargon",
    },
    {
      icon: HeartIcon,
      title: "Personal Empowerment",
      description: "Guidance that helps you make informed life decisions",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-warm-white relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="sunray-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-sm text-saffron tracking-wide">
              About Us
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal uppercase tracking-wide mb-4">
            <span className="block">Bridging Ancient Wisdom</span>
            <span className="text-teal bg-clip-text">With Modern Life</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            We transform traditional Vedic astrology into practical guidance,
            making ancient wisdom accessible and actionable for today's seekers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron/10 to-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-saffron-600" />
                </div>
                <h3 className="font-larken text-xl text-charcoal uppercase font-light">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-charcoal/80 leading-relaxed"
            >
              At Kundlee, we believe that true wisdom empowers you to chart your
              own course. Our meticulously crafted reports offer insights that
              are both authentic to Vedic traditions and incredibly relevant to
              today's challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-base text-charcoal/70 leading-relaxed"
            >
              We stand for precision, professionalism, and providing a guiding
              light that helps you navigate relationships, career, and life's
              purpose with newfound confidence.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <PremiumButton
                onClick={handleDiscoverReports}
                icon={<ArrowRightIcon className="w-5 h-5" />}
                label="Discover Our Reports"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
