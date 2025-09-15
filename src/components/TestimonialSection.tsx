import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BsStarFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AUTOPLAY_DELAY = 5000; // ms

const TestimonialSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Animate progress bar for active bullet
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
      className="py-20 bg-gradient-to-br from-warm-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 sunray-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-inter font-semibold tracking-tighter  mb-4 text-saffron">
            Testimonials
          </p>
          <h2 className="font-larken text-4xl lg:text-5xl text-charcoal mb-6 uppercase">
            What People Say
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 flex items-stretch"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/90 backdrop-blur-sm border border-border rounded-2xl p-8 h-full flex flex-col shadow-elegant hover:shadow-xl transition-all duration-300">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-inter text-charcoal/80 leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center mr-4">
                      <span className="font-larken text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="font-inter text-sm text-charcoal/60">
                        {testimonial.location}
                      </p>
                      <p className="font-inter text-xs text-saffron font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>
        {`
        .testimonial-pagination-bullet {
          display: inline-block;
          width: 40px;
          height: 4px;
          border-radius: 6px;
          background: rgba(34,34,34,0.4);
          margin: 0 6px;
          position: relative;
          overflow: hidden;
          vertical-align: middle;
          transition: 0.2s linear;
          transform-origin: left;
        }
        .testimonial-pagination-bullet.swiper-pagination-bullet-active {
          background: rgba(34,34,34,0.2);
          width: 60px;
        }
        .testimonial-pagination-progress {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          height: 100%;
          width: 0%;
          background: #FF9933; /* Indian Saffron */
          border-radius: 6px;
          transition: width 0.2s linear;
          z-index: 1;
        }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
