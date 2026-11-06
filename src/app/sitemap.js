export default function sitemap() {
  const baseUrl = "https://mmc.biz.pk";

  // Static Pages
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/about-us", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/careers", priority: 0.7 },
    { path: "/clients", priority: 0.8 },
    { path: "/contact-us", priority: 0.9 },
    { path: "/products/collaboration-workplace/audio-visual-collaboration", priority: 0.75 },
    { path: "/services/attom/prefabricated/agile-rax-2-0-ip55", priority: 0.7 },
    { path: "/services/attom/prefabricated/agile-cub-2-0", priority: 0.7 },
    { path: "/services/attom/prefabricated/agile-mod", priority: 0.7 },
    { path: "/services/attom/prefabricated/agilehub-2-0-shelter-modular-data-center-solution", priority: 0.7 },
    { path: "/services/attom/prefabricated/agilecore-ai-prefabricated-modular-data-centers", priority: 0.7 },
    { path: "/services/attom/precision/smoothair-rack-mount-dx", priority: 0.7 },
    { path: "/services/attom/precision/smoothair-row-mount", priority: 0.7 },
    { path: "/services/attom/precision/smoothair-wall-mount", priority: 0.7 },
    { path: "/services/attom/precision/smoothair-wall-mount-split-type", priority: 0.7 },
    { path: "/services/attom/precision/wiseair-room-cooling-crac", priority: 0.7 },
    { path: "/services/attom/precision/precision-cooling-hot-climates", priority: 0.7 },
  ];

  // Main Service Pages
  const mainServices = [
    "cyber-security-brands",
    "cyber-security",
    "compliance-audit",
    "passive-network-services",
    "microsoft-365",
    "cctv-surveillance",
    "zoom",
    "anydesk",
    "tia",
    "fortra",
    "sangfor",
    "attom",
  ];

  // ATTOM Sub-services
  const attomServices = [
    "mission-critical-power-system",
    "data-center-infrastructure-management",
    "precision",
    "liquid-cooling-system",
    "prefabricated",
    "rack-systems",
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
