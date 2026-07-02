import React from "react";
import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, getPageMeta } from "@/seo/pageMeta";

interface SEOHeadProps {
  /** Path to look up in pageMeta. If omitted, fields must be provided explicitly. */
  path?: string;
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  noindex?: boolean;
  /** One or more JSON-LD objects to inject on this page. */
  jsonLd?: object | object[];
}

/**
 * SEOHead — per-route <head> tags via react-helmet-async.
 *
 * When `path` is provided it hydrates defaults from `src/seo/pageMeta.ts`,
 * so callers only need to pass overrides. Absolute URLs are used for
 * canonical / og:url / og:image so that social scrapers (which don't
 * execute JS) resolve them correctly.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  path,
  title,
  description,
  canonical,
  ogType,
  ogImage,
  twitterCard = "summary_large_image",
  noindex,
  jsonLd,
}) => {
  const meta = path ? getPageMeta(path) : undefined;

  const finalTitle = title ?? meta?.title ?? SITE_NAME;
  const finalDescription = description ?? meta?.description ?? "";
  const finalCanonical = canonical ?? meta?.canonical;
  const finalOgType = ogType ?? meta?.ogType ?? "website";
  const finalOgImage = ogImage ?? meta?.ogImage ?? DEFAULT_OG_IMAGE;
  const finalNoindex = noindex ?? meta?.noindex ?? false;

  const jsonLdArr = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalNoindex && <meta name="robots" content="noindex, follow" />}

      {finalCanonical && <link rel="canonical" href={finalCanonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      {finalCanonical && <meta property="og:url" content={finalCanonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {jsonLdArr.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
