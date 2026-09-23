export default function sitemap() {
  const baseUrl = "https://mmc-biz.vercel.app";

  const staticPages = [
    "",
    "/about-us",
    "/careers",
    "/clients",
    "/contact-us",
    "/industries",
  ];

  const services = [
    "attom",
    "zoom",
    "anydesk",
    "cyber-security-brands",
    "cyber-security",
    "compliance-audit",
    "cctv-surveillance",
    "passive-network-services",
    "tia",
    "fortra",
    "sangfor",
    "microsoft-365",
  ];

  const attomSubPages = [
    "prefabricated",
    "precision",
    "power-systems",
    "dcim",
    "liquid-cooling",
    "rack-systems",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const attomSubEntries = attomSubPages.map((sub) => ({
    url: `${baseUrl}/services/attom/${sub}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...attomSubEntries];
}