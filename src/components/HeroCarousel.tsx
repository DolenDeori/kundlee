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
    <section className="relative h-[80vh] overflow-hidden bg-charcoal">
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

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl w-full">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Accent Line */}
              <motion.div className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-full">
                  <span className="font-inter text-saffron-light text-sm font-medium uppercase tracking-wider">
                    {heroSlides[activeSlide]?.accent}
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-larken text-3xl sm:text-3xl md:text-5xl lg:text-6xl text-warm-white leading-tight tracking-wide"
              >
                <span className="block">
                  {heroSlides[activeSlide]?.headline
                    .split(" ")
                    .map((word, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                        className="inline-block mr-4"
                      >
                        {word}
                      </motion.span>
                    ))}
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="font-inter text-lg sm:text-xl md:text-lg text-warm-white/90 leading-relaxed max-w-2xl"
              >
                {heroSlides[activeSlide]?.subheading}
              </motion.p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 w-fit"
              >
                <PremiumButton
                  onClick={onCtaClick}
                  label={heroSlides[activeSlide]?.cta || "Get Started"}
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                >
                  {heroSlides[activeSlide]?.cta}
                </PremiumButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 transition-all duration-500 ${
                  index === activeSlide
                    ? "w-12 bg-saffron"
                    : "w-6 bg-warm-white/30 hover:bg-warm-white/50"
                }`}
                initial={false}
                animate={{
                  width: index === activeSlide ? 48 : 24,
                  backgroundColor:
                    index === activeSlide
                      ? "hsl(var(--saffron))"
                      : "hsl(var(--warm-white) / 0.3)",
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
