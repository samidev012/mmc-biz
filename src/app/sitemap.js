export default function sitemap() {
  const baseUrl = "https://mmc-biz.vercel.app";

  // Static Pages
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/about-us", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/careers", priority: 0.7 },
    { path: "/clients", priority: 0.8 },
    { path: "/contact-us", priority: 0.9 },
  ];

  // Main Service Pages
  const mainServices = [
    "cyber-security",
    "cctv-surveillance",
    "zoom",
    "anydesk",
    "tia",
  ];

  // ATTOM Sub-services
  const attomServices = [
    "mission-critical-power-system",
    "data-center-infrastructure-management",
    "precision",
    "liquid-cooling-system",
    "prefabricated",
  ];

  // Cyber Security Brands
  const cyberSecurityBrands = [
    "fortinet",
    "kaspersky",
    "solarwind",
    "splunk",
    "recorded-future",
    "microsoft",
    "darktrace",
    "crowdstrike",
    "sangfor",
    "fortra",
    "openvpn",
    "compliance-audit",
  ];

  // Cyber Security Sub-services
  const cyberSecuritySub = [
    "red-teaming",
    "managed-it-service",
    "soc24-7",
    "mssp",
    "vapt",
  ];

  // Generate Static Entries
  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: priority,
  }));

  // Generate Main Service Entries
  const mainServiceEntries = mainServices.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Generate ATTOM Service Entries
  const attomEntries = attomServices.map((slug) => ({
    url: `${baseUrl}/services/attom/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Generate Cyber Security Brand Entries
  const cyberBrandEntries = cyberSecurityBrands.map((slug) => ({
    url: `${baseUrl}/services/cyber-security/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Generate Cyber Security Sub-service Entries
  const cyberSubEntries = cyberSecuritySub.map((slug) => ({
    url: `${baseUrl}/services/cyber-security-sub/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...mainServiceEntries,
    ...attomEntries,
    ...cyberBrandEntries,
    ...cyberSubEntries,
  ];
}
