export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/search/",
        "/author/",
        "/wp-content/uploads/2026/07/Brochure_AgileCub-Container-Data-Center-v2.1.pdf",
        "/wp-content/uploads/2026/07/Industry-Application-Guide-Micro-Data-Center-Meets-Edge-Computing-Attom-Technology-3.pdf",
      ],
    },
    sitemap: "https://mmc.biz.pk/sitemap_index.xml",
  };
}