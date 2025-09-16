import React from "react";
import { motion } from "framer-motion";
import { 
  HeartIcon, 
  MapIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  SparklesIcon,
  CheckIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const services = [
  {
    id: "jeevan-sathee",
    title: "Jeevan Sathee",
    tagline: "Illuminate your Sacred Union",
    shortDescription: "A comprehensive relationship compatibility analysis rooted in ancient Vedic wisdom.",
    description: "Understand the cosmic dynamics between you and your partner through detailed astrological insights that reveal the deeper purpose of your union.",
    icon: HeartIcon,
    price: "₹1,999",
    originalPrice: "₹2,999",
    deliveryTime: "48 hours",
    rating: 4.8,
    reviews: 127,
    highlights: [
      "Comprehensive Compatibility Analysis",
      "Karmic Bond Insights", 
      "Auspicious Timing Guidance",
      "Relationship Harmony Solutions"
    ],
    cta: "Discover Your Bond",
  },
  {
    id: "jeevan-marg",
    title: "Jeevan Marg", 
    tagline: "Navigate your Dharmic Path",
    shortDescription: "Your complete life path report providing deep insights into career, purpose, and spiritual direction.",
    description: "Rooted in ancient Vedic traditions, this comprehensive analysis reveals the cosmic blueprint of your destiny and guides you toward your highest potential.",
    icon: MapIcon,
    price: "₹2,499",
    originalPrice: "₹3,499",
    deliveryTime: "72 hours", 
    rating: 4.9,
    reviews: 203,
    highlights: [
      "Life Purpose & Dharma Analysis",
      "Career Destiny Insights", 
      "Spiritual Evolution Roadmap",
      "12-Month Cosmic Forecast"
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-teal/5 to-transparent rounded-full blur-3xl" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium tracking-[0.2em] uppercase text-sm text-saffron">
              Sacred Services
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Ancient Wisdom for
            <span className="bg-gradient-to-r from-saffron to-teal bg-clip-text text-transparent block mt-2">
              Modern Lives
            </span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover profound insights through our meticulously crafted astrological reports, 
            designed to illuminate your path and guide your most important life decisions.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onServiceClick(service.id)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border/20 hover:border-saffron/20 transition-all duration-700 hover:shadow-elegant group-hover:-translate-y-2">
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-gradient-saffron rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <ShieldCheckIcon className="w-3 h-3 text-white" />
                    <span className="font-inter text-xs font-medium text-white">Premium</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Service Icon & Title */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-teal-glow">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-teal rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-larken text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                        {service.title}
                      </h3>
                      <p className="font-inter text-saffron font-medium text-sm uppercase tracking-wider">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-0.5">
                          {renderStars(service.rating)}
                        </div>
                        <span className="font-inter text-xs text-muted-foreground">
                          {service.rating} • {service.reviews} reviews
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-foreground/80 text-base leading-relaxed mb-8">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-inter font-semibold text-foreground text-sm uppercase tracking-wider">
                      What's Included
                    </h4>
                    <div className="grid gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                          <span className="font-inter text-sm text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-3">
                        <span className="font-larken text-3xl font-bold text-foreground">
                          {service.price}
                        </span>
                        <span className="font-inter text-lg text-muted-foreground line-through">
                          {service.originalPrice}
                        </span>
                        <span className="bg-saffron text-white text-xs font-medium px-2 py-1 rounded-full uppercase">
                          Save {Math.round(((parseInt(service.originalPrice.slice(1)) - parseInt(service.price.slice(1))) / parseInt(service.originalPrice.slice(1))) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-3 h-3" />
                        <span>Delivered in {service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SparklesIcon className="w-3 h-3" />
                        <span>Vedic Certified</span>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onServiceClick(service.id);
                      }}
                      className="w-full bg-gradient-teal text-white font-medium py-4 px-6 rounded-full transition-all duration-300 hover:shadow-teal-glow group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <span>{service.cta}</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-bl from-saffron/40 to-transparent rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal/40 to-transparent rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
