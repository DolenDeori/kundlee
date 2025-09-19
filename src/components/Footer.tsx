import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import kundleeSecondaryLogo from "@/assets/Secondary_logo_white.png";

import { BsInstagram, BsTwitterX, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    brand: {
      title: "KUNDLEE",
      mission:
        "Making the profound wisdom of Vedic astrology accessible, understandable, and empowering for the modern seeker.",
      logo: kundleeSecondaryLogo,
    },
    services: {
      title: "Services",
      links: [
        { name: "Jeevan Sathee", href: "#services" },
        { name: "Jeevan Marg", href: "#services" },
        { name: "Custom Reports", href: "#services" },
        { name: "Consultation", href: "#contact" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Process", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Refund Policy", href: "#refund" },
        { name: "Disclaimer", href: "#disclaimer" },
      ],
    },
    contact: {
      title: "Get in Touch",
      info: [
        { text: "hello@kundlee.com", icon: EnvelopeIcon },
        { text: "+91 9876543210", icon: PhoneIcon },
        { text: "Mumbai, India", icon: MapPinIcon },
      ],
      social: [
        {
          name: "Instagram",
          href: "https://instagram.com/kundlee",
          icon: BsInstagram,
        },
        {
          name: "Facebook",
          href: "https://facebook.com/kundlee",
          icon: BsFacebook,
        },
        {
          name: "Twitter",
          href: "https://twitter.com/kundlee",
          icon: BsTwitterX,
        },
        {
          name: "YouTube",
          href: "https://youtube.com/kundlee",
          icon: BsYoutube,
        },
      ],
    },
  };

  return (
    <footer className="bg-charcoal text-warm-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Logo at Top Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <img
            src={footerSections.brand.logo}
            alt="Kundlee - Vedic Astrology Reports"
            className="h-14 sm:h-16 md:h-20 mx-auto mb-3 sm:mb-4"
          />
          <p className="font-inter text-sm sm:text-base text-warm-white/80 max-w-2xl mx-auto leading-relaxed">
            {footerSections.brand.mission}
          </p>
        </motion.div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-inter text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6 text-warm-white">
              {footerSections.services.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {footerSections.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-saffron transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-inter text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6 text-warm-white">
              {footerSections.company.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {footerSections.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-saffron transition-colors duration-200 block"
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
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-inter text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6 text-warm-white">
              {footerSections.legal.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {footerSections.legal.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-warm-white/70 hover:text-teal transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-inter text-base sm:text-lg font-bold mb-3 sm:mb-4 md:mb-6 text-warm-white">
              {footerSections.contact.title}
            </h4>

            {/* Contact Info */}
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
              {footerSections.contact.info.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-warm-white/70">
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-saffron flex-shrink-0" />
                    <span className="truncate">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {footerSections.contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-saffron/10 hover:bg-saffron/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-saffron group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-inter text-sm text-warm-white/60 mb-4 md:mb-0"
            >
              © {currentYear} Kundlee. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <span className="font-inter text-xs text-warm-white/40">
                Made with
              </span>
              <HeartIcon className="w-4 h-4 text-saffron" />
              <span className="font-inter text-xs text-warm-white/40">
                in India
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 sunray-pattern opacity-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;
