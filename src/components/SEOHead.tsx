import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  jsonLd?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Kundlee - Premium Vedic Astrology Reports | Relationship & Career Guidance",
  description = "Get deeply researched, personalized Vedic astrology reports for relationship compatibility and career guidance. Navigate life's most important decisions with confidence through traditional wisdom and modern clarity.",
  keywords = "vedic astrology reports, relationship compatibility astrology, career astrology guidance, jeevan sathee, jeevan marg, kundli analysis, astrological consultation, vedic horoscope, birth chart analysis, astrological guidance India",
  canonical = "https://kundlee.com",
  ogType = "website",
  ogImage = "/og-image-kundlee.jpg",
  twitterCard = "summary_large_image",
  jsonLd = null,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Kundlee" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;