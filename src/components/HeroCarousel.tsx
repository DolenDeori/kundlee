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
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const heroSlides = [
  {
    id: 1,
    background: heroBg1,
    headline: "Vedic Astrology Reports",
    subheading: "Personalized insights to guide your life decisions",
    cta: "Get Started",
  },
  {
    id: 2,
    background: heroBg2,
    headline: "Ancient Wisdom, Modern Clarity",
    subheading: "Transform cosmic insights into practical guidance",
    cta: "Explore Services",
  },
  {
    id: 3,
    background: heroBg3,
    headline: "Navigate Your Path",
    subheading: "Professional astrology reports tailored for you",
    cta: "View Reports",
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
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20 z-10">
                <div className="container mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                  >
                    <h1 className="font-larken text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-white mb-4 leading-tight">
                      {slide.headline}
                    </h1>
                    <p className="font-inter text-warm-white/80 text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
                      {slide.subheading}
                    </p>
                    <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-saffron rounded-lg text-white font-inter font-medium text-base uppercase tracking-wide hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <span>{slide.cta}</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>
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

    </section>
  );
};

export default HeroCarousel;
