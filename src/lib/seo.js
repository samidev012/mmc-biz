const SITE_URL = "https://mmc.biz.pk";
const SITE_NAME = "MMC";
const DEFAULT_OG_IMAGE = "/images/og-default.webp";

// ✅ Har page ke liye metadata generate karta hai — title, description, OG, Twitter, canonical
export function generatePageMetadata({ title, description, path = "", image = DEFAULT_OG_IMAGE }) {
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: title.includes("| MMC") ? title : `${title} | MMC` },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_PK",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mmcbiz",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

export function generateProductSchema({ name, description, path, image = null, category = "Prefabricated Data Center" }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    brand: { "@type": "Brand", name: "ATTOM" },
    manufacturer: { "@type": "Organization", name: "MMC", url: SITE_URL },
    category,
  };
}

// ✅ Har page ke liye WebPage schema (JSON-LD)
export function generateWebPageSchema({ title, description, path = "" }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

// ✅ Service pages ke liye Service schema — agar products diye gaye hain to OfferCatalog bhi add ho jata hai
export function generateServiceSchema({ title, description, path = "", products = null }) {
  const url = `${SITE_URL}${path}`;

  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  // ✅ Agar products diye gaye hain to OfferCatalog automatically add ho jayega
  if (products && products.length > 0) {
    base.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: title,
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          brand: { "@type": "Brand", name: SITE_NAME },
        },
      })),
    };
  }

  return base;
}

// ✅ Breadcrumb schema — kisi bhi page pe use ho sakta hai
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE };
