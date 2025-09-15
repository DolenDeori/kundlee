import React from "react";
import { motion } from "framer-motion";
import { BsHeartFill, BsMap, BsArrowRight } from "react-icons/bs";

const services = [
  {
    id: "jeevan-sathee",
    title: "Jeevan Sathee",
    tagline: "Clarity for your Cosmic Connection",
    description:
      "A comprehensive relationship compatibility analysis that examines the celestial dynamics between partners. Discover your cosmic connection, understand relationship patterns, and navigate love with confidence through detailed Vedic insights.",
    icon: BsHeartFill,
    features: [
      "Compatibility Analysis",
      "Relationship Dynamics",
      "Timing for Important Decisions",
      "Conflict Resolution Guidance",
    ],
    cta: "Explore Relationship Report",
  },
  {
    id: "jeevan-marg",
    title: "Jeevan Marg",
    tagline: "Navigate your Life with Confidence",
    description:
      "Your complete life path report providing deep insights into career, purpose, and life direction. Understand your dharmic path, discover your innate talents, and make informed decisions about your professional and spiritual journey.",
    icon: BsMap,
    features: [
      "Career & Purpose Analysis",
      "Life Timeline Predictions",
      "Strengths & Challenges",
      "Spiritual Growth Path",
    ],
    cta: "View Life Path Report",
  },
];

interface ServicesSectionProps {
  onServiceClick: (serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  onServiceClick,
}) => {
  return (
    <section className="py-20 bg-gradient-cosmic relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-larken text-4xl md:text-5xl font-bold text-charcoal mb-6 uppercase tracking-wide">
            YOUR COSMIC GUIDANCE AWAITS
          </h2>
          <p className="font-inter text-lg text-charcoal/70 leading-relaxed">
            Choose from our carefully crafted astrological reports, each
            designed to provide deep insights and practical guidance for your
            life's most important decisions.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="service-card group cursor-pointer"
              onClick={() => onServiceClick(service.id)}
            >
              {/* Service Icon */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mr-4 group-hover:shadow-saffron-glow transition-shadow duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-larken text-2xl font-bold text-charcoal uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-saffron font-medium">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <p className="font-inter text-charcoal/80 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center font-inter text-sm text-charcoal/70"
                  >
                    <div className="w-2 h-2 bg-saffron rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="group/btn w-full bg-teal text-white font-inter font-medium px-6 py-3 rounded-full transform transition-all duration-300  hover:shadow-lg focus:ring-4 focus:ring-teal/20 flex items-center justify-center space-x-2">
                <span>{service.cta}</span>
                <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 sunray-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 sunray-pattern opacity-10 pointer-events-none rotate-180" />
    </section>
  );
};

export default ServicesSection;
