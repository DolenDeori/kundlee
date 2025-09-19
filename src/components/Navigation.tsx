import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsChevronRight } from "react-icons/bs";
import kundleePrimaryLogo from "@/assets/kundlee-primary-logo.png";
import { PremiumButton } from "./ui/PremiumButton";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Service", href: "#services" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonial", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const hero = document.querySelector("#hero");
    const heroHeight = hero ? hero.getBoundingClientRect().height : 400;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const passedHero = currentScrollY > heroHeight;

      setScrolled(currentScrollY > 50);

      // Only hide/show nav if mobile menu is NOT open
      if (passedHero && !isMobileMenuOpen) {
        setShowNav(!scrollingDown);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]); // Added isMobileMenuOpen to dependencies

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-xl shadow-soft border-b border-border/50"
          : "bg-warm-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center group cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={kundleePrimaryLogo}
                alt="Kundlee"
                className="h-10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="hidden md:flex items-center space-x-10"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="relative font-inter text-sm font-medium text-charcoal/80 hover:text-saffron transition-all duration-300 py-2 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-saffron"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-teal/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="hidden md:block"
          >
            <PremiumButton
              label="Get your report"
              icon={
                <BsChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
              }
              onClick={() => handleNavClick("#services")}
            />
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-charcoal/5 hover:from-saffron/20 hover:to-teal/20 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6 text-charcoal" />
                ) : (
                  <Bars3Icon className="w-6 h-6 text-charcoal" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden border-t border-border/30 overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left font-inter text-base font-medium text-charcoal/80 hover:text-saffron transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-saffron/5 hover:to-teal/5"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + navLinks.length * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="pt-4"
                >
                  <PremiumButton
                    onClick={() => handleNavClick("#services")}
                    label="Get My Report"
                    icon={<BsChevronRight className="w-4 h-4" />}
                    className="w-full justify-center"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Subtle gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: scrolled ? 1 : 0, scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navigation;
