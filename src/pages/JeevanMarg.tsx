import React, { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/seo/pageMeta";
import {
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
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

import jeevanMargReport from "@/assets/Jeevan-Marg-Report.png";
import manglikDoshReport from "@/assets/Manglik-Dosh-Report.png";
import kaalsarpaDoshReport from "@/assets/Kaalsarpa-Dosh-Report.png";

/**
 * JeevanMarg - Dedicated service page for life path analysis.
 * Compact layout: combo title + included points + 3 report cards + delivery info.
 */
const JeevanMarg: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const serviceDetails = {
    title: "Jeevan Marg Report + Janam Kundlee + Career Kundali",
    price: "₹499",
    originalPrice: "₹800",
    deliveryTime: "72 hours",
    included: [
      "Life Purpose & Dharma Analysis",
      "Career & Finance Predictions",
      "Health & Wellness Guidance",
      "Education & Higher Studies Prospects",
      "Spiritual Growth Roadmap",
      "12-Month Cosmic Forecast",
    ],
    reports: [
      {
        label: "MAIN PDF",
        title: "Jeevan Marg",
        img: jeevanMargReport,
        tone: "main" as const,
      },
      {
        label: "FREE BONUS",
        title: "Mangalik Dosh Report",
        img: manglikDoshReport,
        tone: "free" as const,
      },
      {
        label: "FREE BONUS",
        title: "Kaalsarpa Dosh Report",
        img: kaalsarpaDoshReport,
        tone: "free" as const,
      },
    ],
  };

  const discountPercentage = Math.round(
    ((parseInt(serviceDetails.originalPrice.slice(1)) -
      parseInt(serviceDetails.price.slice(1))) /
      parseInt(serviceDetails.originalPrice.slice(1))) *
      100,
  );

  return (
    <>
      <SEOHead
        path="/jeevan-marg"
        jsonLd={[
          buildServiceJsonLd({
            name: serviceDetails.title,
            description:
              "Vedic life-path analysis covering dharma, career, health, education, and a 12-month cosmic forecast. Includes Janam Kundlee and Career Kundali as PDF reports.",
            path: "/jeevan-marg",
            price: serviceDetails.price.replace(/[^0-9]/g, ""),
          }),
          buildFaqJsonLd([
            {
              question: "What is a Jeevan Marg report?",
              answer:
                "Jeevan Marg is a personalized Vedic life-path report analysing your dharma, career direction, education, health, and spiritual growth based on your birth chart.",
            },
            {
              question: "How is this different from a free online kundli?",
              answer:
                "Free kundlis generate raw planetary data. Jeevan Marg interprets that data in plain language, tying planetary positions to concrete life decisions you're navigating right now.",
            },
            {
              question: "What do I receive in the combo?",
              answer:
                "You receive three PDF reports on WhatsApp: the main Jeevan Marg life-path report, plus a Janam Kundlee and a Career Kundali as complimentary bonuses.",
            },
            {
              question: "How long does delivery take?",
              answer:
                "Reports are delivered on WhatsApp within 72 hours of receiving your accurate birth details (date, time, and place of birth).",
            },
            {
              question: "What birth details do I need to provide?",
              answer:
                "Your exact date of birth, time of birth (as precise as possible), and place of birth. Accurate birth time is essential for a meaningful Vedic reading.",
            },
          ]),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Jeevan Marg", path: "/jeevan-marg" },
          ]),
        ]}
      />

      <div className="min-h-screen bg-background relative">
        {/* Aurora gradient — top, behind navigation */}
        {/* <div
          className="aurora-gradient top-0 left-0 right-0 h-full sm:h-full w-full"
          aria-hidden="true"
        /> */}

        <Navigation />

        {/* Main Content */}
        <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative">
          <div className="absolute inset-0 bg-gradient-cosmic opacity-40" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Combined About + Included + Reports */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-primary/20 shadow-sm"
                >
                  {/* Best Value Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-saffron rounded-full px-3 py-1.5 mb-3 sm:mb-4 shadow-xs">
                    <StarIconSolid className="w-3.5 h-3.5 text-white" />
                    <span className="font-inter text-[11px] sm:text-xs font-medium text-white uppercase tracking-wide">
                      Best Value Combo
                    </span>
                  </div>

                  {/* Combo Heading */}
                  <h1 className="font-larken text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-wide leading-tight mb-4 sm:mb-6">
                    {serviceDetails.title}
                  </h1>

                  {/* What's Included — minimal bullets */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="font-inter font-semibold text-xs sm:text-sm uppercase tracking-wider text-saffron mb-3">
                      What's Will you Get
                    </h2>
                    <ul className="space-y-2">
                      {serviceDetails.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal" />
                          <span className="font-inter text-xs sm:text-sm text-foreground/85 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price block — mobile only, matches reference */}
                  <div className="lg:hidden -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 mt-2 px-4 sm:px-6 py-4 sm:py-5 rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-br from-saffron/10 via-saffron/5 to-teal/10 border-t border-primary/10">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-baseline gap-2">
                        <span className="font-larken text-4xl sm:text-5xl font-bold text-foreground leading-none">
                          {serviceDetails.price}
                        </span>
                        <span className="font-inter text-base sm:text-lg text-muted-foreground line-through">
                          {serviceDetails.originalPrice}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="bg-saffron text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                          Save {discountPercentage}%
                        </span>
                        <span className="bg-teal/10 text-teal border border-teal/30 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                          1 Paid + 2 Free
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* What's Included in this Combo — separate section (mobile-first) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-5 sm:mt-6"
                >
                  <h2 className="font-larken text-base sm:text-xs md:text-xl text-foreground text-center uppercase tracking-wide mb-3 sm:mb-4">
                    What's Included in this Combo
                  </h2>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {serviceDetails.reports.map((r, i) => (
                      <div
                        key={i}
                        className={`flex flex-col items-center bg-card rounded-xl sm:rounded-2xl p-2 sm:p-3 border ${r.tone === "main" ? "border-saffron/20" : "border-teal/20"} shadow-sm`}
                      >
                        <div
                          className={`mb-1.5 sm:mb-2 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide ${
                            r.tone === "main"
                              ? "bg-saffron text-white"
                              : "bg-teal text-white"
                          }`}
                        >
                          {r.label === "MAIN PDF" ? "PAID" : "FREE"}
                        </div>
                        <div className="aspect-[3/4] w-full rounded-md sm:rounded-lg bg-gradient-to-br from-muted to-muted/60 border border-border/40 flex items-center justify-center shadow-sm mb-2">
                          <img className="rounded" src={r.img} />
                        </div>
                        <span className="font-inter text-[10px] sm:text-xs font-semibold text-center text-foreground leading-snug">
                          {r.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Deliverables Box — separate */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-4 sm:mt-5 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-primary/20 shadow-sm"
                >
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <DocumentTextIcon className="w-5 h-5 text-saffron" />
                      <span className="font-inter font-semibold text-[11px] sm:text-xs text-foreground leading-tight">
                        3 PDF Reports
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <GiftIcon className="w-5 h-5 text-teal" />
                      <span className="font-inter font-semibold text-[11px] sm:text-xs text-foreground leading-tight">
                        2 Free Reports
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-saffron" />
                      <span className="font-inter font-semibold text-[11px] sm:text-xs text-foreground leading-tight">
                        WhatsApp Delivery
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sticky Booking Card (desktop) */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hidden lg:block lg:sticky lg:top-24 bg-card rounded-3xl p-6 lg:p-8 border border-primary/20"
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

        <div className="w-full overflow-x-hidden relative">
          <div
            className="aurora-gradient top-0 left-0 right-0 h-[420px] sm:h-[520px]"
            aria-hidden="true"
          />
        </div>
        {/* Aurora gradient — bottom, behind footer area */}
        <div className="relative">
          <Footer />
          {/* Mobile spacer so sticky CTA never covers footer content */}
          <div aria-hidden className="lg:hidden h-28 bg-charcoal" />
        </div>

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
            <div className="font-inter text-[11px] text-muted-foreground mb-2.5">
              1 Paid + 2 Free • WhatsApp Delivery
            </div>
            <PremiumButton
              onClick={() => setIsFormOpen(true)}
              label={`Unlock at ${serviceDetails.price}`}
              icon={<LockClosedIcon className="w-4 h-4" />}
              variant="saffron"
              className="w-full"
            />
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
              Jeevan Marg - Registration Form
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
