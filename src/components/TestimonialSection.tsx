import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BsStarFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/** Autoplay delay in milliseconds */
const AUTOPLAY_DELAY = 5000;

/**
 * TestimonialSection Component
 * 
 * Displays customer testimonials in a responsive carousel with:
 * - Auto-playing slides with custom progress indicators
 * - Responsive breakpoints for different screen sizes
 * - Animated progress bars synchronized with autoplay
 * 
 * @returns {JSX.Element} The testimonials section
 */
const TestimonialSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  /**
   * Animate progress bar for the active pagination bullet
   * Syncs with the autoplay delay to show visual progress
   */
  useEffect(() => {
    let frame: number;
    let start: number | null = null;

    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / AUTOPLAY_DELAY, 1);

      // Find active bullet and set its progress bar width
      const bullets = document.querySelectorAll(
        ".testimonial-pagination-bullet"
      );
      bullets.forEach((bullet, idx) => {
        const progressBar = (bullet as HTMLElement).querySelector(
          ".testimonial-pagination-progress"
        );
        if (progressBar) {
          (progressBar as HTMLElement).style.width =
            idx === activeIndex ? `${progress * 100}%` : "0%";
        }
      });

      if (elapsed < AUTOPLAY_DELAY) {
        frame = requestAnimationFrame(animate);
      }
    }

    // Reset all progress bars
    const bullets = document.querySelectorAll(".testimonial-pagination-bullet");
    bullets.forEach((bullet, idx) => {
      const progressBar = (bullet as HTMLElement).querySelector(
        ".testimonial-pagination-progress"
      );
      if (progressBar) {
        (progressBar as HTMLElement).style.width = "0%";
      }
    });

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  /**
   * Testimonial data array
   * Contains customer reviews with ratings and service information
   */
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      service: "Jeevan Sathee",
      rating: 5,
      text: "The Jeevan Sathee report gave us incredible insights into our relationship dynamics. It helped us understand each other on a deeper level and navigate challenges with greater compassion and understanding.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      service: "Jeevan Marg",
      rating: 5,
      text: "The life path guidance I received was remarkably accurate and insightful. It helped me make a crucial career decision that has transformed my life for the better. Truly grateful for this cosmic wisdom.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore, India",
      service: "Jeevan Sathee",
      rating: 5,
      text: "We were amazed by the depth and accuracy of our compatibility report. It not only highlighted our strengths as a couple but also provided practical advice for building a harmonious future together.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, India",
      service: "Jeevan Marg",
      rating: 5,
      text: "The report provided clarity during a confusing phase of my life. The guidance on timing and life transitions was spot-on. I now feel more confident about my path and purpose.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 5,
      name: "Meera Joshi",
      location: "Pune, India",
      service: "Custom Consultation",
      rating: 5,
      text: "The personal consultation was transformative. The astrologer's insights were profound and practical. I left with a clear understanding of my strengths and how to leverage them for success.",
      avatar: "/api/placeholder/80/80",
    },
  ];

  /**
   * Renders star rating icons
   * @param rating - Number of stars (1-5)
   * @returns Array of star icon elements
   */
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <BsStarFill
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-saffron" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-warm-white relative overflow-hidden scroll-mt-24"
    >
      {/* Section Header (Centered with Container) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
            <p className="font-inter font-medium uppercase text-sm text-saffron tracking-wide">
              Testimonials
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
          </div>
          <h2 className="font-larken text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 uppercase">
            What People Say
          </h2>
        </motion.div>
      </div>

      {/* Full-Width Swiper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full" // Full width container for Swiper
      >
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={5} // Reduced for full-width to prevent overflow
          slidesPerView={3}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              // Custom bullet markup with progress bar
              return `
              <span class="testimonial-pagination-bullet ${className}" data-index="${index}">
                <span class="testimonial-pagination-progress"></span>
              </span>
            `;
            },
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3.5, spaceBetween: 25 },
            1536: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="py-16 px-4 sm:px-6 lg:px-8" // Added padding back to Swiper for content spacing
          style={{ display: "flex", alignItems: "stretch" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-white/90 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-full flex flex-col shadow-elegant hover:shadow-xl transition-all duration-300 mx-2">
                {/* Star Rating */}
                <div className="flex items-center justify-center sm:justify-start mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Quote */}
                <p className="font-inter text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed mb-6 flex-grow text-center sm:text-left">
                  "{testimonial.text}"
                </p>
                
                {/* Client Information */}
                <div className="flex items-center justify-center sm:justify-start pt-4 border-t border-border/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-saffron rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <span className="font-larken text-white font-bold text-base sm:text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-inter font-semibold text-sm sm:text-base lg:text-lg text-charcoal truncate">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-charcoal/60 truncate">
                      {testimonial.location}
                    </p>
                    <p className="font-inter text-xs sm:text-sm text-saffron font-medium truncate">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Custom Pagination Styles */}
      <style>
        {`
        /* Custom pagination bullet styling with progress animation */
        .testimonial-pagination-bullet {
          display: inline-block;
          width: 20px;
          height: 4px;
          border-radius: 6px;
          background: rgba(34, 34, 34, 0.4);
          margin: 0 6px;
          position: relative;
          overflow: hidden;
          vertical-align: middle;
          transition: width 0.2s linear, background 0.2s linear;
          transform-origin: left;
          cursor: pointer;
        }
        
        /* Active bullet expands and changes background */
        .testimonial-pagination-bullet.swiper-pagination-bullet-active {
          background: rgba(34, 34, 34, 0.2);
          width: 40px;
        }
        
        /* Progress bar inside bullet */
        .testimonial-pagination-progress {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          height: 100%;
          width: 0%;
          background: #FF9933; /* Saffron color */
          border-radius: 6px;
          transition: width 0.2s linear;
          z-index: 1;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .testimonial-pagination-bullet {
            width: 16px;
            height: 3px;
            margin: 0 4px;
          }
          .testimonial-pagination-bullet.swiper-pagination-bullet-active {
            width: 32px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
