import { HeartIcon, MapIcon } from "@heroicons/react/24/outline";
import jeevansatheeHero from "@/assets/jeevan-sathee-hero.jpg";
import jeevamargHero from "@/assets/jeevan-marg-hero.jpg";

// Service Card Data for Services Section
export const services = [
  {
    id: "jeevan-sathee",
    title: "Jeevan Sathee",
    tagline: "Illuminate your Sacred Union",
    shortDescription:
      "A comprehensive relationship compatibility analysis rooted in ancient Vedic wisdom.",
    description:
      "Understand the cosmic dynamics between you and your partner through detailed astrological insights that reveal the deeper purpose of your union.",
    icon: HeartIcon,
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
    cta: "Discover Your Bond",
  },
  {
    id: "jeevan-marg",
    title: "Jeevan Marg",
    tagline: "Navigate your Dharmic Path",
    shortDescription:
      "Your complete life path report providing deep insights into career, purpose, and spiritual direction.",
    description:
      "Rooted in ancient Vedic traditions, this comprehensive analysis reveals the cosmic blueprint of your destiny and guides you toward your highest potential.",
    icon: MapIcon,
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
    cta: "Find Your Purpose",
  },
];

// Service Detail Data for Service Detail Sheet
export interface ServiceDetail {
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

export const serviceDetails: Record<string, ServiceDetail> = {
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
