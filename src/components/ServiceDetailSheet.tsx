import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  XMarkIcon,
  CheckIcon,
  StarIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import jeevansatheeHero from "@/assets/jeevan-sathee-hero.jpg";
import jeevamargHero from "@/assets/jeevan-marg-hero.jpg";
import { PremiumButton } from "./ui/PremiumButton";

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  price: {
    original: number;
    discounted: number;
    currency: string;
  };
  deliveryTime: string;
  rating: number;
  reviews: number;
  features: string[];
  detailedOfferings: Array<{
    title: string;
    description: string;
    included: boolean;
  }>;
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

const serviceDetails: Record<string, ServiceDetail> = {
  "jeevan-sathee": {
    id: "jeevan-sathee",
    title: "Jeevan Sathee",
    tagline: "Clarity for your Cosmic Connection",
    description:
      "A comprehensive relationship compatibility analysis that examines the celestial dynamics between partners.",
    longDescription:
      "Discover the sacred bond that connects you and your partner through ancient Vedic wisdom. Our Jeevan Sathee report provides deep insights into your relationship's cosmic blueprint, helping you understand the karmic patterns that brought you together and guiding you toward lasting harmony.",
    heroImage: jeevansatheeHero,
    price: {
      original: 2999,
      discounted: 1999,
      currency: "₹",
    },
    deliveryTime: "48 hours",
    rating: 4.8,
    reviews: 127,
    features: [
      "Compatibility Analysis",
      "Relationship Dynamics",
      "Timing for Important Decisions",
      "Conflict Resolution Guidance",
    ],
    detailedOfferings: [
      {
        title: "Comprehensive Compatibility Score",
        description:
          "Detailed analysis of your astrological compatibility across 12 key areas of life",
        included: true,
      },
      {
        title: "Relationship Timeline Predictions",
        description:
          "Favorable periods for major relationship milestones and decisions",
        included: true,
      },
      {
        title: "Conflict Resolution Strategies",
        description:
          "Personalized guidance on navigating challenges based on your cosmic dynamics",
        included: true,
      },
      {
        title: "Marriage Timing Analysis",
        description:
          "Astrological guidance on the most auspicious time for marriage",
        included: true,
      },
      {
        title: "Personal Consultation Call",
        description: "30-minute consultation with our expert astrologer",
        included: false,
      },
    ],
    testimonial: {
      text: "The insights from my Jeevan Sathee report helped us understand each other better and strengthen our bond. Highly recommended!",
      author: "Priya & Arjun",
      location: "Mumbai",
    },
  },
  "jeevan-marg": {
    id: "jeevan-marg",
    title: "Jeevan Marg",
    tagline: "Navigate your Life with Confidence",
    description:
      "Your complete life path report providing deep insights into career, purpose, and life direction.",
    longDescription:
      "Embark on a journey of self-discovery with our comprehensive Jeevan Marg report. Rooted in ancient Vedic traditions, this analysis reveals your dharmic path, innate talents, and the cosmic influences shaping your destiny. Make informed decisions about your career, relationships, and spiritual growth.",
    heroImage: jeevamargHero,
    price: {
      original: 899,
      discounted: 599,
      currency: "₹",
    },
    deliveryTime: "72 hours",
    rating: 4.9,
    reviews: 203,
    features: [
      "Career & Purpose Analysis",
      "Life Timeline Predictions",
      "Strengths & Challenges",
      "Spiritual Growth Path",
    ],
    detailedOfferings: [
      {
        title: "Life Purpose & Dharma Analysis",
        description:
          "Discover your soul's purpose and the path you're meant to walk in this lifetime",
        included: true,
      },
      {
        title: "Career & Finance Predictions",
        description:
          "Detailed insights into your professional journey and financial prospects",
        included: true,
      },
      {
        title: "Health & Wellness Guidance",
        description:
          "Astrological health insights and preventive care recommendations",
        included: true,
      },
      {
        title: "Spiritual Growth Roadmap",
        description:
          "Personalized guidance for your spiritual evolution and inner development",
        included: true,
      },
      {
        title: "Yearly Forecast",
        description: "Comprehensive predictions for the next 12 months",
        included: true,
      },
      {
        title: "Gemstone & Remedy Suggestions",
        description:
          "Personalized recommendations for gemstones and Vedic remedies",
        included: false,
      },
    ],
    testimonial: {
      text: "My Jeevan Marg report gave me the clarity I needed to make important life decisions. The predictions have been remarkably accurate.",
      author: "Rahul Sharma",
      location: "Delhi",
    },
  },
};

interface ServiceDetailSheetProps {
  serviceId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

const ServiceDetailSheet: React.FC<ServiceDetailSheetProps> = ({
  serviceId,
  isOpen,
  onClose,
  onBookService,
}) => {
  if (!serviceId || !serviceDetails[serviceId]) {
    return null;
  }

  const service = serviceDetails[serviceId];
  const discountPercentage = Math.round(
    ((service.price.original - service.price.discounted) /
      service.price.original) *
      100
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const halfFilled = i === Math.floor(rating) && rating % 1 !== 0;

      return (
        <div key={i} className="relative">
          {filled ? (
            <StarIconSolid className="w-4 h-4 text-yellow-500" />
          ) : halfFilled ? (
            <>
              <StarIcon className="w-4 h-4 text-gray-300" />
              <StarIconSolid
                className="w-4 h-4 text-yellow-500 absolute top-0 left-0"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </>
          ) : (
            <StarIcon className="w-4 h-4 text-gray-300" />
          )}
        </div>
      );
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-2xl p-0 bg-background flex flex-col max-h-screen">
        <SheetHeader className="relative p-6 flex-shrink-0">
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 h-8 w-8 z-10 backdrop-blur-sm hover:bg-teal/70 bg-warm-white text-charcoal"
            >
              <XMarkIcon className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetHeader>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 flex-1">
          <div className="space-y-6 pb-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="font-larken text-3xl uppercase tracking-wide">
                  {service.title}
                </h2>
                <p className="font-inter text-saffron-light font-medium text-sm">
                  {service.tagline}
                </p>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {renderStars(service.rating)}
                </div>
                <span className="font-inter text-sm text-muted-foreground">
                  {service.rating} • {service.reviews} reviews
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>{service.deliveryTime}</span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6">
              <h3 className="font-larken text-xl text-foreground mb-3 uppercase tracking-wide">
                About This Service
              </h3>
              <p className="font-inter text-foreground/80 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="font-larken text-xl text-foreground mb-6 uppercase tracking-wide">
                What's Included
              </h3>
              <div className="space-y-4">
                {service.detailedOfferings.map((offering, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      offering.included
                        ? "bg-card border-border/50 hover:border-teal/30"
                        : "bg-muted/30 border-border/30 opacity-70"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          offering.included ? "bg-teal" : "bg-muted-foreground"
                        }`}
                      >
                        <CheckIcon className={`w-3 h-3 text-white`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-foreground mb-1">
                        {offering.title}
                        {!offering.included && (
                          <span className="text-xs text-saffron ml-2 font-medium uppercase">
                            Premium Add-on
                          </span>
                        )}
                      </h4>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {service.testimonial && (
              <div className="bg-gradient-to-r from-saffron/5 to-teal/5 border border-border/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center shadow-lg">
                      <StarIconSolid className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-foreground/90 italic mb-3 text-lg leading-relaxed">
                      "{service.testimonial.text}"
                    </p>
                    <div className="font-inter text-sm">
                      <span className="font-semibold text-foreground">
                        {service.testimonial.author}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        • {service.testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="sticky bottom-0 left-0 right-0 bg-gray-100 p-6 shadow-elegant">
          <div className="max-w-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="lg:flex-1 w-full">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-larken text-2xl font-bold text-foreground">
                  {service.price.currency}
                  {service.price.discounted}
                </span>
                <span className="font-inter text-lg text-muted-foreground line-through">
                  {service.price.currency}
                  {service.price.original}
                </span>
                <span className="bg-saffron text-white text-xs font-medium px-2 py-1 rounded-full uppercase inline">
                  {discountPercentage}% OFF
                </span>
              </div>
              <p className="font-inter text-xs text-muted-foreground">
                Limited time offer • Save {service.price.currency}
                {service.price.original - service.price.discounted}
              </p>
            </div>
            <div className="lg:flex-1 w-full">
              <PremiumButton
                icon={<ArrowRightIcon className="w-4 h-4" />}
                label="Get Your Report"
                onClick={() => onBookService(service.id)}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ServiceDetailSheet;
