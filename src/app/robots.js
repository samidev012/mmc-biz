export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mmc-biz.vercel.app/sitemap.xml",
  };
}