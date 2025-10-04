import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsChevronRight } from "react-icons/bs";
import kundleePrimaryLogo from "@/assets/kundlee-primary-logo.png";
import { PremiumButton } from "./ui/PremiumButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { navLinks } from "@/constants/Index";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const animationTransitionTime = 0.5;

  const handleNavClick = (href: string) => {
    const doScroll = () => {
      if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // If mobile menu is open, close it first, then scroll after the animation
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      // Match the exit transition duration (~400ms)
      setTimeout(() => {
        // Use rAF to ensure layout has settled before scrolling
        requestAnimationFrame(() => doScroll());
      }, 420);
    } else {
      doScroll();
    }
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
          ? "bg-warm-white/95 backdrop-blur-xl shadow-soft"
          : "bg-warm-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationTransitionTime }}
            className="flex items-center group cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            <div className="relative rounded-lg">
              <img
                src={kundleePrimaryLogo}
                alt="Kundlee"
                className="h-8 md:h-10"
              />
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationTransitionTime,
            }}
            className="hidden md:flex items-center space-x-10"
          >
            {navLinks.map((link, index) => (
              <motion.button
                type="button"
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="relative font-inter text-sm font-medium text-charcoal/80 hover:text-saffron transition-all duration-300 py-2 group"
              >
                <span className="relative z-10">{link.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationTransitionTime,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="hidden md:block"
          >
            <PremiumButton
              label="Get your report"
              onClick={() => handleNavClick("#services")}
            />
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "open"}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden flex flex-col items-center"
            >
              <div className="pb-8 space-y-2 flex flex-col items-stretch w-full">
                {navLinks.map((link, index) => (
                  <motion.button
                    type="button"
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full font-inter text-lg text-charcoal/80 hover:text-saffron transition-all duration-300 py-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {link.name}
                  </motion.button>
                ))}

                {/** Enhanced Mobile CTA */}
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
