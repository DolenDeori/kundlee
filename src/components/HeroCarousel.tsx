import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Import hero images
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
  ctaAction?: "scroll" | "navigate";
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onCtaClick,
  ctaAction = "scroll",
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleCtaClick = () => {
    if (ctaAction === "scroll") {
      onCtaClick();
    } else {
      window.location.href = "/#services";
    }
  };

  const handlePrevSlide = () => {
    swiperInstance?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperInstance?.slideNext();
  };

  return (
    <section
      id="hero"
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-charcoal"
    >
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.background})` }}
              />

              {/* Gradient Overlay - using design system colors */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center z-10 ml-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
                  <motion.div
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.2 }}
                    className="max-w-xl lg:max-w-2xl"
                  >
                    {/* Headline */}
                    <h1 className="font-larken font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-warm-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                      {slide.headline}
                    </h1>

                    {/* Subheading */}
                    <p className="font-inter text-warm-white/90 text-base sm:text md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg">
                      {slide.subheading}
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={handleCtaClick}
                      className="border border-warm-white inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-saffron rounded-full text-warm-white font-inter text-sm sm:text-base uppercase transition-all duration-300 group"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls & Indicators */}
      <div className="absolute inset-0 z-20 pointer-events-none max-sm:hidden">
        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Previous Button */}
          <button
            onClick={handlePrevSlide}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-warm-white/10 backdrop-blur-md border border-warm-white/20 flex items-center justify-center text-warm-white hover:bg-warm-white/20 hover:border-warm-white/40 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextSlide}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-warm-white/10 backdrop-blur-md border border-warm-white/20 flex items-center justify-center text-warm-white hover:bg-warm-white/20 hover:border-warm-white/40 transition-all duration-300 hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 sm:gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className="pointer-events-auto group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeSlide
                      ? "bg-saffron"
                      : "bg-warm-white/30 group-hover:bg-warm-white/50"
                  }`}
                  initial={false}
                  animate={{
                    width: index === activeSlide ? 32 : 16,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
