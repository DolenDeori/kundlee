import React from "react";
import { motion } from "framer-motion";
import { 
  HeartIcon, 
  MapIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  SparklesIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { PremiumButton } from "@/components/ui/PremiumButton";

const services = [
  {
    id: "jeevan-sathee",
    title: "Jeevan Sathee",
    tagline: "Clarity for your Cosmic Connection",
    shortDescription: "Discover the sacred bond between you and your partner through ancient Vedic wisdom.",
    description:
      "A comprehensive relationship compatibility analysis that examines the celestial dynamics between partners. Understanding the cosmic threads that weave your hearts together, this sacred analysis reveals the deeper purpose of your union and guides you toward lasting harmony.",
    icon: HeartIcon,
    gradient: "from-pink-500/20 to-red-500/20",
    iconBg: "bg-gradient-to-br from-pink-500 to-red-600",
    price: "₹1,999",
    originalPrice: "₹2,999",
    deliveryTime: "48 hours",
    rating: 4.8,
    reviews: 127,
    features: [
      { icon: SparklesIcon, text: "Comprehensive Compatibility Score" },
      { icon: ClockIcon, text: "Relationship Timeline Predictions" },
      { icon: HeartIcon, text: "Conflict Resolution Strategies" },
      { icon: AcademicCapIcon, text: "Marriage Timing Analysis" },
    ],
    highlights: [
      "12 Areas of Life Analysis",
      "Karmic Bond Insights", 
      "Auspicious Timing Guidance",
      "Personalized Remedies"
    ],
    cta: "Discover Your Bond",
  },
  {
    id: "jeevan-marg",
    title: "Jeevan Marg", 
    tagline: "Navigate your Life with Confidence",
    shortDescription: "Unlock your dharmic path and discover your soul's true purpose in this lifetime.",
    description:
      "Your complete life path report providing deep insights into career, purpose, and spiritual direction. Rooted in ancient Vedic traditions, this comprehensive analysis reveals the cosmic blueprint of your destiny, helping you align with your highest potential.",
    icon: MapIcon,
    gradient: "from-blue-500/20 to-teal-500/20", 
    iconBg: "bg-gradient-to-br from-blue-500 to-teal-600",
    price: "₹2,499",
    originalPrice: "₹3,499",
    deliveryTime: "72 hours", 
    rating: 4.9,
    reviews: 203,
    features: [
      { icon: SparklesIcon, text: "Life Purpose & Dharma Analysis" },
      { icon: ClockIcon, text: "Career & Finance Predictions" },
      { icon: HeartIcon, text: "Health & Wellness Guidance" },
      { icon: AcademicCapIcon, text: "Spiritual Growth Roadmap" },
    ],
    highlights: [
      "Dharmic Path Revelation",
      "Career Destiny Analysis", 
      "Spiritual Evolution Guide",
      "12-Month Forecast"
    ],
    cta: "Find Your Purpose",
  },
];

interface ServicesSectionProps {
  onServiceClick: (serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  onServiceClick,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      return (
        <StarIconSolid 
          key={i} 
          className={`w-3 h-3 ${filled ? 'text-yellow-500' : 'text-gray-300'}`} 
        />
      );
    });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <SparklesIcon className="w-5 h-5 text-saffron" />
            <p className="font-inter font-semibold tracking-wider uppercase text-sm text-saffron">
              Sacred Services
            </p>
            <SparklesIcon className="w-5 h-5 text-saffron" />
          </div>
          <h2 className="font-larken text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ancient Wisdom for
            <span className="bg-gradient-to-r from-saffron via-orange-500 to-red-500 bg-clip-text text-transparent block">
              Modern Lives
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the profound insights that await you through our carefully crafted astrological reports, 
            designed to illuminate your path and guide your most important life decisions.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onServiceClick(service.id)}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}>
                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-larken text-2xl font-bold text-foreground uppercase tracking-wide">
                          {service.title}
                        </h3>
                        <p className="font-inter text-sm text-saffron font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                      <div className="flex items-center gap-0.5">
                        {renderStars(service.rating)}
                      </div>
                      <span className="font-inter text-xs font-medium text-foreground ml-1">
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="font-inter text-foreground/90 text-base mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-saffron rounded-full flex-shrink-0" />
                        <span className="font-inter text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="bg-background/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-larken text-2xl font-bold text-foreground">
                          {service.price}
                        </span>
                        <span className="font-inter text-sm text-muted-foreground line-through">
                          {service.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ClockIcon className="w-3 h-3" />
                        <span>{service.deliveryTime}</span>
                      </div>
                    </div>

                    <PremiumButton
                      label={service.cta}
                      icon={<ArrowRightIcon className="w-4 h-4" />}
                      variant="teal"
                      onClick={(e) => {
                        e.stopPropagation();
                        onServiceClick(service.id);
                      }}
                      className="w-full group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>{service.reviews}+ happy clients</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <SparklesIcon className="w-3 h-3" />
                      <span>Vedic Certified</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-bl from-saffron/30 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-saffron to-transparent rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 w-64 h-64 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-teal to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default ServicesSection;
