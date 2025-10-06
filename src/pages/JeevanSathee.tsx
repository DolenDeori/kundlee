import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  HeartIcon,
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

  return (
    <>
      <Helmet>
        <title>Jeevan Sathee - Relationship Compatibility Analysis | Kundlee</title>
        <meta
          name="description"
          content="Discover your sacred bond through Vedic astrology. Comprehensive relationship compatibility analysis with insights into karmic patterns and auspicious timing."
        />
        <meta
          name="keywords"
          content="relationship compatibility, vedic astrology, marriage compatibility, relationship analysis, karmic bond"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={jeevansatheeHero}
              alt="Jeevan Sathee"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-background" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-teal rounded-2xl flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="font-larken text-4xl md:text-6xl lg:text-7xl mb-6">
                {serviceDetails.title}
              </h1>
              <p className="font-inter text-xl md:text-2xl text-saffron-light font-medium mb-4 uppercase tracking-wide">
                {serviceDetails.tagline}
              </p>
              <p className="font-inter text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {serviceDetails.description}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-1">
                  {renderStars(serviceDetails.rating)}
                </div>
                <span className="font-inter text-sm text-white/80">
                  {serviceDetails.rating} • {serviceDetails.reviews} reviews
                </span>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <ClockIcon className="w-4 h-4" />
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
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] h-auto p-0 bg-background border-border/20 shadow-2xl">
          <DialogHeader className="px-6 py-4 border-b border-border/10">
            <DialogTitle className="font-larken text-xl uppercase tracking-wide text-foreground flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-saffron rounded-full flex items-center justify-center">
                <StarIconSolid className="w-4 h-4 text-white" />
              </div>
              {serviceDetails.title} - Registration Form
            </DialogTitle>
          </DialogHeader>
          <div className="relative overflow-hidden">
            <div className="w-full" style={{ height: "calc(90vh - 120px)" }}>
              <iframe
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
              />
            </div>
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-background/80 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JeevanSathee;
