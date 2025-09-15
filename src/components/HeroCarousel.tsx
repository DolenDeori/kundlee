import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import hero images
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const heroSlides = [
  {
    id: 1,
    background: heroBg1,
    headline: "CLARITY FOR YOUR COSMIC PATH",
    subheading:
      "Deeply researched, practical Vedic astrology reports to help you navigate your life with confidence and purpose.",
    cta: "Get My Report",
  },
  {
    id: 2,
    background: heroBg2,
    headline: "ANCIENT WISDOM, MODERN CLARITY",
    subheading:
      "Transform complex astrological insights into practical guidance for your most important life decisions.",
    cta: "Discover My Path",
  },
  {
    id: 3,
    background: heroBg3,
    headline: "NAVIGATE LIFE WITH CONFIDENCE",
    subheading:
      "Personalized reports that blend traditional Vedic integrity with contemporary understanding.",
    cta: "Start My Journey",
  },
];

interface HeroCarouselProps {
  onCtaClick: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
