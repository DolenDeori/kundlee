import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

// Import hero images
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import { PremiumButton } from "./ui/PremiumButton";
import {
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const heroSlides = [
  {
    id: 1,
    background: heroBg1,
    headline: "CLARITY FOR YOUR COSMIC PATH",
    subheading:
      "Deeply researched, practical Vedic astrology reports to help you navigate your life with confidence and purpose.",
    cta: "Get My Report",
    accent: "Ancient wisdom meets modern clarity",
  },
  {
    id: 2,
    background: heroBg2,
    headline: "ANCIENT WISDOM, MODERN CLARITY",
    subheading:
      "Transform complex astrological insights into practical guidance for your most important life decisions.",
    cta: "Discover My Path",
    accent: "Navigate life's journey with cosmic insight",
  },
  {
    id: 3,
    background: heroBg3,
    headline: "NAVIGATE LIFE WITH CONFIDENCE",
    subheading:
      "Personalized reports that blend traditional Vedic integrity with contemporary understanding.",
    cta: "Start My Journey",
    accent: "Your destiny awaits cosmic clarity",
  },
];

interface HeroCarouselProps {
  onCtaClick: () => void;
  // Set to 'scroll' to scroll to services section, or 'navigate' to go to services page
  ctaAction?: 'scroll' | 'navigate';
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick, ctaAction = 'scroll' }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = () => {
    if (ctaAction === 'scroll') {
      // Scroll to services section
      onCtaClick();
    } else {
      // Navigate to services page (you can customize this)
      window.location.href = '/#services';
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[80vh] overflow-hidden bg-charcoal"
    >
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full cursor-pointer group"
              onClick={handleSlideClick}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.background})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <p className="font-inter text-saffron text-sm sm:text-base uppercase tracking-widest mb-4">
                    {slide.accent}
                  </p>
                  <h1 className="font-larken text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-warm-white uppercase tracking-wide mb-6">
                    {slide.headline}
                  </h1>
                  <p className="font-inter text-warm-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    {slide.subheading}
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-saffron rounded-full text-white font-inter font-medium text-sm sm:text-base uppercase tracking-wide hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                    <span>{slide.cta}</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 transition-all duration-500 ${
                  index === activeSlide
                    ? "w-6 bg-saffron"
                    : "w-4 bg-warm-white/30 hover:bg-warm-white/50"
                } transition-colors`}
                initial={false}
                animate={{
                  width: index === activeSlide ? 48 : 24,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cosmic Dust Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-saffron/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
