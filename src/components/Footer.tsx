import React from 'react';
import { motion } from 'framer-motion';
import kundleeSecondaryLogo from '@/assets/kundlee-secondary-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    brand: {
      title: 'KUNDLEE',
      mission: 'Making the profound wisdom of Vedic astrology accessible, understandable, and empowering for the modern seeker.',
      logo: kundleeSecondaryLogo
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Jeevan Sathee', href: '#jeevan-sathee' },
        { name: 'Jeevan Marg', href: '#jeevan-marg' },
        { name: 'Custom Reports', href: '#custom' },
        { name: 'Consultation', href: '#consultation' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Refund Policy', href: '#refund' },
        { name: 'Disclaimer', href: '#disclaimer' }
      ]
    },
    social: {
      title: 'Connect',
      links: [
        { name: 'Instagram', href: '#instagram', icon: '📷' },
        { name: 'Facebook', href: '#facebook', icon: '📘' },
        { name: 'Twitter', href: '#twitter', icon: '🐦' },
        { name: 'YouTube', href: '#youtube', icon: '📺' }
      ]
    }
  };

  return (
    <footer className="bg-charcoal text-warm-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <img 
                src={footerSections.brand.logo} 
                alt="Kundlee" 
                className="w-10 h-10 mr-3"
              />
              <h3 className="font-larken text-xl font-bold uppercase tracking-wider">
                {footerSections.brand.title}
              </h3>
            </div>
            <p className="font-inter text-warm-white/80 text-sm leading-relaxed">
              {footerSections.brand.mission}
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-larken text-lg font-bold uppercase tracking-wide mb-4 text-saffron">
              {footerSections.services.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-saffron transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-larken text-lg font-bold uppercase tracking-wide mb-4 text-saffron">
              {footerSections.legal.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.legal.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-teal transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-larken text-lg font-bold uppercase tracking-wide mb-4 text-saffron">
              {footerSections.social.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.social.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-teal transition-colors duration-200 flex items-center space-x-2 hover:underline"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-inter text-sm text-warm-white/60 mb-4 md:mb-0"
            >
              © {currentYear} Kundlee. All rights reserved. Made with cosmic wisdom.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="font-inter text-xs text-warm-white/40">
                Crafted for clarity and empowerment
              </span>
              <div className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 sunray-pattern opacity-5 pointer-events-none" />
    </footer>
  );
};

export default Footer;