import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { StarIcon } from '@heroicons/react/24/solid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      service: 'Jeevan Sathee',
      rating: 5,
      text: 'The Jeevan Sathee report gave us incredible insights into our relationship dynamics. It helped us understand each other on a deeper level and navigate challenges with greater compassion and understanding.',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      service: 'Jeevan Marg',
      rating: 5,
      text: 'The life path guidance I received was remarkably accurate and insightful. It helped me make a crucial career decision that has transformed my life for the better. Truly grateful for this cosmic wisdom.',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Bangalore, India',
      service: 'Jeevan Sathee',
      rating: 5,
      text: 'We were amazed by the depth and accuracy of our compatibility report. It not only highlighted our strengths as a couple but also provided practical advice for building a harmonious future together.',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur, India',
      service: 'Jeevan Marg',
      rating: 5,
      text: 'The report provided clarity during a confusing phase of my life. The guidance on timing and life transitions was spot-on. I now feel more confident about my path and purpose.',
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Meera Joshi',
      location: 'Pune, India',
      service: 'Custom Consultation',
      rating: 5,
      text: 'The personal consultation was transformative. The astrologer\'s insights were profound and practical. I left with a clear understanding of my strengths and how to leverage them for success.',
      avatar: '/api/placeholder/80/80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-saffron' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-warm-white to-saffron/5 relative overflow-hidden">
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
          <h2 className="font-larken text-4xl lg:text-5xl font-bold text-charcoal mb-6 uppercase tracking-wide">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Discover how Kundlee's wisdom has transformed lives and relationships across the globe
          </p>
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
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={{
              nextEl: '.testimonial-swiper-button-next',
              prevEl: '.testimonial-swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
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

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="testimonial-swiper-button-prev w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center hover:bg-teal-dark transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="testimonial-swiper-button-next w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center hover:bg-teal-dark transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style>
        {`
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: hsl(var(--charcoal) / 0.3) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--saffron)) !important;
        }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;