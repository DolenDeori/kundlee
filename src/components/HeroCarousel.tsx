import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import hero images
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

const heroSlides = [
  {
    id: 1,
    background: heroBg1,
    headline: "CLARITY FOR YOUR COSMIC PATH",
    subheading: "Deeply researched, practical Vedic astrology reports to help you navigate your life with confidence and purpose.",
    cta: "Get Your Report"
  },
  {
    id: 2,
    background: heroBg2,
    headline: "ANCIENT WISDOM, MODERN CLARITY",
    subheading: "Transform complex astrological insights into practical guidance for your most important life decisions.",
    cta: "Discover Your Path"
  },
  {
    id: 3,
    background: heroBg3,
    headline: "NAVIGATE LIFE WITH CONFIDENCE",
    subheading: "Personalized reports that blend traditional Vedic integrity with contemporary understanding.",
    cta: "Start Your Journey"
  }
];

interface HeroCarouselProps {
  onCtaClick: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="font-larken text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-wide"
                    >
                      {slide.headline}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="font-inter text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                    >
                      {slide.subheading}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                    >
                      <button
                        onClick={onCtaClick}
                        className="group bg-gradient-to-r from-teal to-teal-light text-white font-inter font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-teal-glow focus:ring-4 focus:ring-teal/30 flex items-center space-x-2"
                      >
                        <span>{slide.cta}</span>
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Sunray Pattern Overlay */}
              <div className="absolute inset-0 sunray-pattern opacity-20 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;