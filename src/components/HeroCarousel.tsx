import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";

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
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollY } = useScroll();
  // Adjusted for smoother parallax: larger scroll range, smaller transform output
  const y = useTransform(scrollY, [0, 1000], [0, -150]); // Negative for upward movement, smoother range

  return (
    <section
      id="hero"
      className="relative h-[80vh] overflow-hidden bg-charcoal"
    >
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
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
            <div className="relative h-full">
              {/* Background Image with Smooth Parallax */}
              <motion.div
                style={{
                  y,
                  willChange: "transform", // Optimizes performance
                }}
                className="absolute left-0 right-0 h-[120vh] -top-20" // Increased height and adjusted top to extend above/below
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat" // Ensures image covers the larger area
                  style={{ backgroundImage: `url(${slide.background})` }}
                  data-swiper-parallax="-300"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20">
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
