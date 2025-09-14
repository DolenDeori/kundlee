import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const KundleeHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleCtaClick = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (serviceId: string) => {
    // Handle service selection - this could navigate to a detailed page
    console.log(`Service selected: ${serviceId}`);
    // For now, show an alert - in production, this would navigate to the service page
    alert(`Redirecting to ${serviceId} report page...`);
  };

  // Prevent scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-warm-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingAnimation onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <>
            {/* Navigation */}
            <Navigation />
            
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative pt-16"
            >
              {/* Hero Section */}
              <HeroCarousel onCtaClick={handleCtaClick} />

              {/* Services Section */}
              <div id="services">
                <ServicesSection onServiceClick={handleServiceClick} />
              </div>

              {/* FAQ Section */}
              <FAQSection />

              {/* Testimonials Section */}
              <TestimonialSection />

              {/* Contact Section */}
              <ContactSection />

              {/* Footer */}
              <Footer />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KundleeHome;