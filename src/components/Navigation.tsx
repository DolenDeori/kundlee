import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { BsChevronRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import kundleePrimaryLogo from "@/assets/kundlee-primary-logo.png";
import { PremiumButton } from "./ui/PremiumButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { navLinks } from "@/constants/navigation";

/**
 * Navigation Component - Responsive navigation bar with dropdown support
 * Features:
 * - Desktop hover-based dropdowns
 * - Mobile touch-friendly dropdowns
 * - Smooth scrolling for anchor links
 * - Dynamic visibility based on scroll
 */
const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const animationTransitionTime = 0.5;

  /**
   * Handle navigation clicks - supports both routes and anchor links
   */
  const handleNavClick = (href: string) => {
    const isHomePage = location.pathname === "/";

    // If it's a route (starts with /)
    if (href.startsWith("/") && !href.startsWith("/#")) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If not on home page, navigate to home page with hash
    if (!isHomePage) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      navigate(`/${href}`);
      return;
    }

    // If on home page, scroll to section
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
      setTimeout(() => {
        requestAnimationFrame(() => doScroll());
      }, 420);
    } else {
      doScroll();
    }
  };

  /**
   * Scroll event handler for navigation visibility
   */
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
  }, [lastScrollY, isMobileMenuOpen]);

  /**
   * Toggle mobile dropdown
   */
  const toggleMobileDropdown = (linkName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === linkName ? null : linkName);
  };

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
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationTransitionTime,
            }}
            className="hidden md:flex items-center space-x-10"
          >
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  // Link with dropdown
                  <>
                    <button
                      type="button"
                      className="relative font-inter text-sm font-medium text-charcoal/80 hover:text-saffron transition-all duration-300 py-2 flex items-center gap-1"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-warm-white/95 backdrop-blur-xl rounded-2xl shadow-elegant border border-border/20 overflow-hidden"
                        >
                          {link.dropdown.map((dropItem, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleNavClick(dropItem.href)}
                              className="w-full text-left px-6 py-3 font-inter text-sm font-medium text-charcoal/80 hover:text-saffron hover:bg-saffron/5 transition-all duration-300 first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              {dropItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  // Regular link
                  <motion.button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="relative font-inter text-sm font-medium text-charcoal/80 hover:text-saffron transition-all duration-300 py-2 group"
                  >
                    <span className="relative z-10">{link.name}</span>
                  </motion.button>
                )}
              </div>
            ))}
          </motion.div>

          {/* Desktop CTA */}
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

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {link.dropdown ? (
                      // Mobile dropdown
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.name)}
                          className="w-full flex items-center justify-between font-inter text-lg text-charcoal/80 hover:text-saffron transition-all duration-300 py-4 px-4"
                        >
                          <span>{link.name}</span>
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileDropdownOpen === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown Items */}
                        <AnimatePresence>
                          {mobileDropdownOpen === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-muted/20 rounded-xl ml-4 mr-4"
                            >
                              {link.dropdown.map((dropItem, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => handleNavClick(dropItem.href)}
                                  className="w-full text-left font-inter text-base text-charcoal/70 hover:text-saffron transition-all duration-300 py-3 px-4 flex items-center gap-2"
                                >
                                  <BsChevronRight className="w-3 h-3" />
                                  {dropItem.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular mobile link
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full font-inter text-lg text-charcoal/80 hover:text-saffron transition-all duration-300 py-4 px-4"
                      >
                        {link.name}
                      </button>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
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
