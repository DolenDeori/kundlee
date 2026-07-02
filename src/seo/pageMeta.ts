/**
 * Centralized SEO configuration
 * ---------------------------------
 * Every indexable route maps to a unique title (< 60 chars), description
 * (< 160 chars), canonical URL, Open Graph / Twitter fields, and
 * documented primary keyword clusters.
 *
 * Keyword-to-page mapping (documentation only — not rendered):
 *   /                → "vedic astrology reports", "modern vedic astrology",
 *                      "personalized kundli reports"
 *   /jeevan-marg     → "jeevan marg report", "life path vedic astrology report",
 *                      "career kundali report"
 *   /jeevan-sathee   → "jeevan sathee report",
 *                      "vedic relationship compatibility report",
 *                      "kundli matching report"
 *   /privacy-policy  → transactional / trust page (noindex not required)
 *   /terms-of-service→ transactional / trust page
 *   /refund-policy   → transactional / trust page
 *   /disclaimer      → transactional / trust page
 *
 * Future content routes should live under /learn/:slug so educational
 * articles can be added without restructuring the sitemap or nav.
 */

export const SITE_URL = "https://www.kundlee.in";
export const SITE_NAME = "Kundlee";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image-kundlee.jpg`;

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  twitterCard?: "summary" | "summary_large_image";
  /** Documented primary keywords for the page (not rendered). */
  keywords?: string[];
  noindex?: boolean;
}

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Kundlee — Modern Vedic Astrology Reports for Life & Love",
    description:
      "Personalized Vedic astrology reports written with clarity and warmth. Guidance for life path, career, and relationships — delivered on WhatsApp.",
    canonical: abs("/"),
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    keywords: [
      "vedic astrology reports",
      "modern vedic astrology",
      "personalized kundli reports",
    ],
  },
  "/jeevan-marg": {
    title: "Jeevan Marg Report — Vedic Life Path & Career Kundali",
    description:
      "Discover your dharma, career direction, and 12-month cosmic forecast. Includes Janam Kundlee and Career Kundali — 3 PDF reports on WhatsApp.",
    canonical: abs("/jeevan-marg"),
    ogImage: `${SITE_URL}/og-jeevan-marg.jpg`,
    ogType: "product",
    keywords: [
      "jeevan marg report",
      "life path vedic astrology report",
      "career kundali report",
    ],
  },
  "/jeevan-sathee": {
    title: "Jeevan Sathee Report — Vedic Compatibility & Kundli Matching",
    description:
      "In-depth Vedic compatibility analysis for couples: karmic bond, harmony guidance, and timing insights. Delivered as a PDF on WhatsApp.",
    canonical: abs("/jeevan-sathee"),
    ogImage: `${SITE_URL}/og-jeevan-sathee.jpg`,
    ogType: "product",
    keywords: [
      "jeevan sathee report",
      "vedic relationship compatibility report",
      "kundli matching report",
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy — Kundlee",
    description:
      "How Kundlee collects, uses, and safeguards your personal information across our Vedic astrology services.",
    canonical: abs("/privacy-policy"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/terms-of-service": {
    title: "Terms of Service — Kundlee",
    description:
      "The terms that govern your use of Kundlee's Vedic astrology reports, website, and related services.",
    canonical: abs("/terms-of-service"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/refund-policy": {
    title: "Refund Policy — Kundlee",
    description:
      "Kundlee's refund policy for Vedic astrology reports and consultations, including eligibility and process.",
    canonical: abs("/refund-policy"),
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/disclaimer": {
    title: "Disclaimer — Kundlee",
    description:
      "Important disclaimers about the guidance offered in Kundlee's Vedic astrology reports and consultations.",
    canonical: abs("/disclaimer"),
    ogImage: DEFAULT_OG_IMAGE,
  },
};

export const getPageMeta = (pathname: string): PageMeta =>
  pageMeta[pathname] ?? {
    title: "Kundlee — Modern Vedic Astrology Reports",
    description:
      "Personalized Vedic astrology reports for life path, career, and relationships.",
    canonical: abs(pathname),
    ogImage: DEFAULT_OG_IMAGE,
    noindex: true,
  };

/* ---------------------------------------------------------------------------
 * Sitewide JSON-LD (Organization + WebSite)
 * ------------------------------------------------------------------------ */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-32x32.png`,
  description:
    "Kundlee crafts modern, clearly written Vedic astrology reports — ancient wisdom, contemporary clarity.",
  sameAs: [
    "https://www.instagram.com/kundlee",
    "https://www.facebook.com/kundlee",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

/* ---------------------------------------------------------------------------
 * Helpers for per-route structured data
 * ------------------------------------------------------------------------ */

export interface FaqItem {
  question: string;
  answer: string;
}

export const buildFaqJsonLd = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const buildBreadcrumbJsonLd = (
  crumbs: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export interface ServiceJsonLdInput {
  name: string;
  description: string;
  path: string;
  price: string; // numeric string, e.g. "499"
  priceCurrency?: string;
  image?: string;
}

export const buildServiceJsonLd = ({
  name,
  description,
  path,
  price,
  priceCurrency = "INR",
  image,
}: ServiceJsonLdInput) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image: image ?? DEFAULT_OG_IMAGE,
  brand: { "@type": "Brand", name: SITE_NAME },
  offers: {
    "@type": "Offer",
    url: abs(path),
    price,
    priceCurrency,
    availability: "https://schema.org/InStock",
  },
});
