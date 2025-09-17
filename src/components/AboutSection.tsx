import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const AboutSection: React.FC = () => {
  const handleDiscoverReports = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-warm-white to-saffron/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="sunray-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-saffron-600 to-teal-600"></div>
                <span className="text-sm font-medium text-saffron-600 tracking-wider uppercase">About Kundlee</span>
              </div>
              <h2 className="font-larken text-4xl lg:text-5xl text-charcoal font-bold uppercase tracking-wide leading-tight">
                Our Story: <br />
                <span className="text-transparent bg-gradient-to-r from-saffron-600 to-teal-600 bg-clip-text">
                  Guiding Your Journey
                </span>
              </h2>
            </motion.div>

            {/* Opening Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-charcoal/80 leading-relaxed font-inter"
            >
              Kundlee was born from a deep-seated belief in the transformative power of Vedic astrology, 
              yet a frustration with how complex and inaccessible it often felt. Our founder envisioned a bridge: 
              a way to bring this ancient wisdom into modern lives, not as a mystical prediction, but as a 
              practical guide for clarity and empowerment.
            </motion.p>

            {/* How We're Different */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-sm border border-saffron/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="font-larken text-xl text-charcoal font-semibold mb-3 uppercase tracking-wide">
                Our Unique Approach
              </h3>
              <p className="text-charcoal/80 leading-relaxed font-inter">
                We've meticulously crafted Kundlee to offer insights that are both authentic to Vedic traditions 
                and incredibly relevant to today's challenges. Our reports are designed to be clear, actionable, 
                and free from jargon, helping you navigate your relationships, career, and life's purpose with 
                newfound confidence and understanding.
              </p>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal/5 to-saffron/5 border border-teal/10 rounded-2xl p-6"
            >
              <h3 className="font-larken text-xl text-charcoal font-semibold mb-3 uppercase tracking-wide">
                Our Commitment
              </h3>
              <p className="text-charcoal/80 leading-relaxed font-inter">
                At the heart of Kundlee is a commitment to your journey. We stand for precision, professionalism, 
                and providing a guiding light that helps you make informed decisions. We believe that true wisdom 
                empowers you to chart your own course.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                onClick={handleDiscoverReports}
                className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover Your Reports
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-gradient-to-br from-saffron/10 to-teal/10 rounded-3xl p-12 backdrop-blur-sm border border-white/20 shadow-2xl">
                {/* Sunray Pattern */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Central Sun */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-saffron-400 to-saffron-600 rounded-full shadow-lg relative">
                      <div className="absolute inset-2 bg-gradient-to-r from-saffron-300 to-saffron-500 rounded-full">
                        <div className="absolute inset-2 bg-gradient-to-r from-saffron-200 to-saffron-400 rounded-full flex items-center justify-center">
                          <span className="font-larken text-white font-bold text-sm">क</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Rays */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute w-1 bg-gradient-to-t from-saffron-400/60 to-transparent rounded-full"
                      style={{
                        height: '120px',
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'bottom center',
                        transform: `translateX(-50%) translateY(-100%) rotate(${i * 30}deg)`,
                      }}
                    />
                  ))}

                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-teal-400/60 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translateX(-50%) translateY(-50%) translateY(-${100 + i * 15}px) rotate(${i * 45}deg)`,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Decorative Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-saffron/20 shadow-lg"
                >
                  <span className="font-larken text-sm text-charcoal font-semibold uppercase tracking-wider">
                    Ancient Wisdom • Modern Life
                  </span>
                </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-saffron/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-teal/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;