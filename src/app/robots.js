export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/search/", "/author/"],
    },
    sitemap: "https://mmc.biz.pk/sitemap.xml",
  };
}
