import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  ClockIcon,
  SparklesIcon,
  CheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { PremiumButton } from "./ui/PremiumButton";

import { services } from "@/constants/services";

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      return (
        <StarIconSolid
          key={i}
          className={`w-3 h-3 ${filled ? "text-yellow-500" : "text-gray-300"}`}
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
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-sm text-saffron tracking-wide">
              Our Services
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-4xl md:text-6xl leading-tight">
            Ancient Wisdom for Modern Lives
          </h2>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/${service.id}`)}
            >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-card border border-border/20 hover:border-saffron/20 transition-all duration-700 hover:shadow-elegant group-hover:-translate-y-2">
                {/* Card Content */}
                <div className="relative z-10 p-4 sm:p-6">
                  {/* Service Icon, Title & Premium Badge */}
                  <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-teal rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:shadow-teal">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pr-2 sm:pr-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-larken text-lg sm:text-xl md:text-2xl text-foreground uppercase tracking-wide flex-1">
                          {service.title}
                        </h3>
                        {/* Premium Badge - Mobile Optimized */}
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-saffron rounded-full px-2 py-0.5 sm:px-3 sm:py-1 flex items-center gap-1 shadow-xs">
                            <ShieldCheckIcon className="w-3 h-3 text-white" />
                            <span className="font-inter text-[10px] sm:text-xs font-medium text-white">
                              Premium
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="font-inter text-saffron font-medium text-xs sm:text-sm uppercase tracking-wide">
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
                  <p className="font-inter text-foreground/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <h4 className="font-inter font-semibold text-foreground text-xs sm:text-sm uppercase">
                      What's Included
                    </h4>
                    <div className="grid gap-1.5 sm:gap-2">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal flex-shrink-0" />
                          <span className="font-inter text-xs sm:text-sm text-foreground/80">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                          <span className="font-larken text-2xl sm:text-3xl font-bold text-foreground">
                            {service.price}
                          </span>
                          <span className="font-inter text-base sm:text-lg text-muted-foreground line-through">
                            {service.originalPrice}
                          </span>
                          <span className="bg-saffron text-white text-xs font-medium px-2 py-1 rounded-full uppercase whitespace-nowrap">
                            Save{" "}
                            {Math.round(
                              ((parseInt(service.originalPrice.slice(1)) -
                                parseInt(service.price.slice(1))) /
                                parseInt(service.originalPrice.slice(1))) *
                                100
                            )}
                            %
                          </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-3 h-3 flex-shrink-0" />
                        <span>Delivered in {service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SparklesIcon className="w-3 h-3 flex-shrink-0" />
                        <span>Vedic Certified</span>
                      </div>
                    </div>

                    <PremiumButton
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${service.id}`);
                      }}
                      label={service.cta}
                      icon={
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      }
                      variant="teal"
                      className="w-full py-3 sm:py-4 touch-manipulation"
                    >
                      <span>{service.cta}</span>
                    </PremiumButton>
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
