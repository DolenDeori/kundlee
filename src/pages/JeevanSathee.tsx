import React, { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/seo/pageMeta";
import {
  HeartIcon,
  CheckIcon,
  StarIcon as StarOutline,
  ClockIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  LockClosedIcon,
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
import jeevansatheeHero from "@/assets/jeevan-sathee-hero.jpg";

/**
 * JeevanSathee - Dedicated service page for relationship compatibility analysis
 * Features comprehensive service details and integrated booking form
 */
const JeevanSathee: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const serviceDetails = {
    title: "Jeevan Sathee",
    tagline: "Illuminate your Sacred Union",
    description:
      "A comprehensive relationship compatibility analysis rooted in ancient Vedic wisdom.",
    longDescription:
      "Discover the sacred bond that connects you and your partner through ancient Vedic wisdom. Our Jeevan Sathee report provides deep insights into your relationship's cosmic blueprint, helping you understand the karmic patterns that brought you together and guiding you toward lasting harmony.",
    price: "₹499",
    originalPrice: "₹800",
    deliveryTime: "48 hours",
    rating: 4.8,
    reviews: 127,
    highlights: [
      "Comprehensive Compatibility Analysis",
      "Karmic Bond Insights",
      "Auspicious Timing Guidance",
      "Relationship Harmony Solutions",
    ],
    detailedOfferings: [
      {
        title: "Comprehensive Compatibility Score",
        description:
          "Detailed analysis of your astrological compatibility across 12 key areas of life",
      },
      {
        title: "Relationship Timeline Predictions",
        description:
          "Favorable periods for major relationship milestones and decisions",
      },
      {
        title: "Conflict Resolution Strategies",
        description:
          "Personalized guidance on navigating challenges based on your cosmic dynamics",
      },
      {
        title: "Marriage Timing Analysis",
        description:
          "Astrological guidance on the most auspicious time for marriage",
      },
    ],
    testimonial: {
      text: "The insights from my Jeevan Sathee report helped us understand each other better and strengthen our bond. Highly recommended!",
      author: "Priya & Arjun",
      location: "Mumbai",
    },
  };

  const discountPercentage = Math.round(
    ((parseInt(serviceDetails.originalPrice.slice(1)) -
      parseInt(serviceDetails.price.slice(1))) /
      parseInt(serviceDetails.originalPrice.slice(1))) *
      100,
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

  return (
    <>
      <SEOHead
        path="/jeevan-sathee"
        jsonLd={[
          buildServiceJsonLd({
            name: "Jeevan Sathee — Vedic Compatibility Report",
            description:
              "In-depth Vedic compatibility analysis covering karmic bond, harmony guidance, and auspicious timing for couples.",
            path: "/jeevan-sathee",
            price: serviceDetails.price.replace(/[^0-9]/g, ""),
          }),
          buildFaqJsonLd([
            {
              question: "What is a Jeevan Sathee report?",
              answer:
                "Jeevan Sathee is a Vedic compatibility report that analyses two birth charts together to reveal karmic bonds, harmony patterns, and guidance for a lasting partnership.",
            },
            {
              question: "How is this different from free kundli matching?",
              answer:
                "Free tools give you a numeric guna-milan score. Jeevan Sathee interprets the underlying planetary dynamics in plain language, with practical guidance instead of just numbers.",
            },
            {
              question: "What details do we need to provide?",
              answer:
                "Both partners' exact date, time, and place of birth. Accurate birth times are essential for a meaningful compatibility reading.",
            },
            {
              question: "How is the report delivered?",
              answer:
                "Your Jeevan Sathee report is delivered as a PDF on WhatsApp within 48 hours of receiving both partners' birth details.",
            },
            {
              question: "Is this only for people considering marriage?",
              answer:
                "No. Jeevan Sathee is useful at any stage of a relationship — from early compatibility questions to long-term partners seeking deeper understanding.",
            },
          ]),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Jeevan Sathee", path: "/jeevan-sathee" },
          ]),
        ]}
      />

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
                  <HeartIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
        {/* Mobile spacer so sticky CTA never covers footer content */}
        <div aria-hidden className="lg:hidden h-28 bg-charcoal" />

        {/* Sticky Mobile CTA */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border/20 shadow-elegant"
        >
          <div className="px-4 py-3 text-center">
            <div className="font-larken text-base font-semibold text-foreground uppercase tracking-wide mb-0.5">
              Get Your Report Now
            </div>
            <div className="flex items-center justify-center gap-1.5 font-inter text-[11px] text-muted-foreground mb-2.5">
              <ClockIcon className="w-3 h-3" />
              <span>Delivered in {serviceDetails.deliveryTime}</span>
            </div>
            <PremiumButton
              onClick={() => setIsFormOpen(true)}
              label={`Unlock at ${serviceDetails.price}`}
              icon={<LockClosedIcon className="w-4 h-4" />}
              variant="teal"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] h-auto p-0 overflow-hidden">
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
              {/* <iframe
                src="https://forms.zohopublic.com/dulenchdeori564gm1/form/JeevanSathee/formperma/NIqxhNDB360d53x6gYYemCMVvuk-onbuLemdjFaG4tg?zf_rszfm=1"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0 0 12px 12px",
                }}
                aria-label="Jeevan Sathee Registration Form"
                title="Jeevan Sathee Form"
                loading="lazy"
              /> */}

              <iframe
                src="https://forms.zohopublic.in/abhijeetchetry33gm1/form/JeevanSathee/formperma/J1pEeUT-Mj8B7kGauzcxW3ZmEIDj86ulu476g5vCqdE"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0 0 12px 12px",
                }}
                aria-label="Jeevan Sathee Registration Form"
                title="Jeevan Sathee Form"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JeevanSathee;
