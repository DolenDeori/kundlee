import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  MapIcon,
  CheckIcon,
  StarIcon as StarOutline,
  ClockIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PremiumButton } from "@/components/ui/PremiumButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import jeevamargHero from "@/assets/jeevan-marg-hero.jpg";

/**
 * JeevanMarg - Dedicated service page for life path analysis
 * Features comprehensive service details and integrated booking form
 */
const JeevanMarg: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showStickyTab, setShowStickyTab] = useState(true);

  const serviceDetails = {
    title: "Jeevan Marg",
    tagline: "Navigate your Dharmic Path",
    description:
      "Your complete life path report providing deep insights into career, purpose, and spiritual direction.",
    longDescription:
      "Embark on a journey of self-discovery with our comprehensive Jeevan Marg report. Rooted in ancient Vedic traditions, this analysis reveals your dharmic path, innate talents, and the cosmic influences shaping your destiny. Make informed decisions about your career, relationships, and spiritual growth.",
    price: "₹499",
    originalPrice: "₹800",
    deliveryTime: "72 hours",
    rating: 4.9,
    reviews: 203,
    highlights: [
      "Life Purpose & Dharma Analysis",
      "Career Destiny Insights",
      "Spiritual Evolution Roadmap",
      "12-Month Cosmic Forecast",
    ],
    detailedOfferings: [
      {
        title: "Life Purpose & Dharma Analysis",
        description:
          "Discover your soul's purpose and the path you're meant to walk in this lifetime",
      },
      {
        title: "Career & Finance Predictions",
        description:
          "Detailed insights into your professional journey and financial prospects",
      },
      {
        title: "Health & Wellness Guidance",
        description:
          "Astrological health insights and preventive care recommendations",
      },
      {
        title: "Spiritual Growth Roadmap",
        description:
          "Personalized guidance for your spiritual evolution and inner development",
      },
      {
        title: "Yearly Forecast",
        description: "Comprehensive predictions for the next 12 months",
      },
    ],
    testimonial: {
      text: "My Jeevan Marg report gave me the clarity I needed to make important life decisions. The predictions have been remarkably accurate.",
      author: "Rahul Sharma",
      location: "Delhi",
    },
  };

  const discountPercentage = Math.round(
    ((parseInt(serviceDetails.originalPrice.slice(1)) -
      parseInt(serviceDetails.price.slice(1))) /
      parseInt(serviceDetails.originalPrice.slice(1))) *
      100
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      return (
        <StarIconSolid
          key={i}
          className={`w-4 h-4 ${filled ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    });
  };

  // Intersection Observer to make tab non-sticky when footer is visible
  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyTab(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Jeevan Marg - Life Path Analysis | Kundlee</title>
        <meta
          name="description"
          content="Discover your life's purpose through Vedic astrology. Comprehensive analysis of career, dharma, and spiritual path with 12-month cosmic forecast."
        />
        <meta
          name="keywords"
          content="life path analysis, vedic astrology, career guidance, dharma analysis, spiritual path, life purpose"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-teal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <MapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h1 className="font-larken text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
                {serviceDetails.title}
              </h1>
              <p className="font-inter text-base sm:text-lg md:text-xl text-saffron-light font-medium mb-2 sm:mb-3 uppercase tracking-wide">
                {serviceDetails.tagline}
              </p>
              <p className="font-inter text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                {serviceDetails.description}
              </p>

              {/* Rating */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(serviceDetails.rating)}
                </div>
                <span className="font-inter text-xs sm:text-sm text-white/80">
                  {serviceDetails.rating} • {serviceDetails.reviews} reviews
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                  <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{serviceDetails.deliveryTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-cosmic opacity-40" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-12">
                {/* About Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-3xl p-8 border border-border/20 shadow-elegant"
                >
                  <h2 className="font-larken text-3xl mb-6 uppercase tracking-wide">
                    About This Service
                  </h2>
                  <p className="font-inter text-foreground/80 text-lg leading-relaxed">
                    {serviceDetails.longDescription}
                  </p>
                </motion.div>

                {/* What's Included */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-3xl p-8 border border-border/20 shadow-elegant"
                >
                  <h2 className="font-larken text-3xl mb-8 uppercase tracking-wide">
                    What's Included
                  </h2>
                  <div className="space-y-4">
                    {serviceDetails.detailedOfferings.map((offering, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-6 rounded-2xl border bg-muted/30 border-border/50 hover:border-teal/30 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-teal">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-inter font-semibold text-foreground mb-2">
                            {offering.title}
                          </h4>
                          <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-saffron/5 to-teal/5 border border-border/50 rounded-3xl p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center shadow-lg">
                        <StarIconSolid className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-inter text-foreground/90 italic mb-3 text-lg leading-relaxed">
                        "{serviceDetails.testimonial.text}"
                      </p>
                      <div className="font-inter text-sm">
                        <span className="font-semibold text-foreground">
                          {serviceDetails.testimonial.author}
                        </span>
                        <span className="text-muted-foreground ml-2">
                          • {serviceDetails.testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sticky Booking Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:sticky lg:top-24 bg-card rounded-3xl p-8 border border-border/20 shadow-elegant"
                >
                  <div className="mb-6">
                    <div className="bg-gradient-saffron rounded-full px-4 py-2 flex items-center gap-2 shadow-xs w-fit mb-6">
                      <ShieldCheckIcon className="w-4 h-4 text-white" />
                      <span className="font-inter text-sm font-medium text-white">
                        Premium Service
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-larken text-4xl font-bold text-foreground">
                        {serviceDetails.price}
                      </span>
                      <span className="font-inter text-xl text-muted-foreground line-through">
                        {serviceDetails.originalPrice}
                      </span>
                    </div>
                    <span className="bg-saffron text-white text-xs font-medium px-3 py-1 rounded-full uppercase inline-block">
                      Save {discountPercentage}%
                    </span>
                  </div>

                  <PremiumButton
                    onClick={() => setIsFormOpen(true)}
                    label="Get Your Report Now"
                    icon={<ArrowRightIcon className="w-4 h-4" />}
                    variant="teal"
                    className="w-full mb-6"
                  />

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                      <span>Delivered in {serviceDetails.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                      <span>Vedic Certified Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-teal flex-shrink-0" />
                      <span>100% Confidential</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* Sticky Mobile Price Tab */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`lg:hidden ${
            showStickyTab ? "fixed" : "relative"
          } bottom-0 left-0 right-0 z-40 bg-card border-t border-border/20 shadow-elegant`}
        >
          <div className="px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <span className="font-larken text-2xl font-bold text-foreground">
                    {serviceDetails.price}
                  </span>
                  <span className="font-inter text-sm text-muted-foreground line-through">
                    {serviceDetails.originalPrice}
                  </span>
                  <span className="bg-saffron text-white text-[10px] font-medium px-2 py-0.5 rounded-full uppercase">
                    {discountPercentage}% OFF
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ClockIcon className="w-3 h-3 flex-shrink-0" />
                  <span>{serviceDetails.deliveryTime}</span>
                </div>
              </div>
              <PremiumButton
                onClick={() => setIsFormOpen(true)}
                label="Get Report"
                icon={<ArrowRightIcon className="w-4 h-4" />}
                variant="saffron"
                className="w-full sm:w-auto sm:flex-shrink-0"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] h-auto p-0 bg-background border-border/20">
          <DialogHeader className="px-6 py-4 border-b border-border/10">
            <DialogTitle className="font-larken font-normal text-xl uppercase tracking-wide text-foreground flex items-center gap-3">
              <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center">
                <StarIconSolid className="w-4 h-4 text-white" />
              </div>
              {serviceDetails.title} - Registration Form
            </DialogTitle>
          </DialogHeader>
          <div className="relative overflow-hidden">
            <div className="w-full" style={{ height: "calc(90vh - 120px)" }}>
              <iframe
                src="https://forms.zohopublic.in/abhijeetchetry33gm1/form/JeevanMarg/formperma/oipdSo7wBZcK6hR1EypEdtzJgPfnMMZUlTTGIaiv954"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0 0 12px 12px",
                }}
                aria-label="Jeevan Marg Registration Form"
                title="Jeevan Marg Form"
                loading="lazy"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JeevanMarg;
