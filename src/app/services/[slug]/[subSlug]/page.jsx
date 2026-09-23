import { notFound } from "next/navigation";
import { generatePageMetadata, generateServiceSchema } from "@/lib/seo";
import { getSchemaExtras } from "@/lib/schemaData"; // ✅ naya import

import PrefabricatedContent from "./PrefabricatedContent";
import PrecisionContent from "./PrecisionContent";
import MissionContent from "./MissionContent";
import LiquidContent from "./LiquidContent";
import DataContent from "./DataContent";
import FortraContent from "./FortraContent";
import KasperskyContent from "./KasperskyContent";
import SolarContent from "./SolarContent";
import SplunkContent from "./SplunkContent";
import OpenContent from "./OpenContent";
import SangforContent from "./SangforContent";
import CrowdContent from "./CrowdContent";
import FortinetContent from "./FortinetContent";
import MicrosoftContent from "./MicrosoftContent";
import RecordedContent from "./RecordedContent";
import DarktraceContent from "./DarktraceContent";
import SocContent from "./SocContent";
import MSSPContent from "./MSSPContent";
import ManagedContent from "./ManagedContent";
import VAPTContent from "./VAPTContent";
import RedContent from "./RedContent";
import ComplianceContent from "./ComplianceContent";

// =========================
// ATTOM SUB PAGES
// =========================
const attomSubPages = {
  prefabricated: { title: "Prefabricated Data Centers", description: "Modular, rapid-deploy data center units." },
  precision: { title: "Precision Air Conditioner", description: "Climate control for critical infrastructure." },
  "mission-critical-power-system": { title: "Mission Critical Power System", description: "Redundant power for uninterrupted uptime." },
  "data-center-infrastructure-management": { title: "Data Center Infrastructure Monitoring", description: "Real-time monitoring and management." },
  "liquid-cooling-system": { title: "Liquid Cooling System", description: "High-density cooling for modern racks." },
  "rack-systems": { title: "Attom-Data Center Rack System", description: "Enterprise-grade rack solutions." },
};

// =========================
// CYBER SECURITY SUB PAGES
// =========================
const cyberSubPages = {
  fortra: { title: "Fortra", description: "Cybersecurity and data protection solutions." },
  sangfor: { title: "Sangfor", description: "Network, cloud and cybersecurity solutions." },
  fortinet: { title: "Fortinet", description: "Advanced network security and cybersecurity solutions." },
  kaspersky: { title: "Kaspersky", description: "Endpoint protection and cybersecurity solutions." },
  solarwind: { title: "Solarwind", description: "Endpoint protection and cybersecurity solutions." },
  splunk: { title: "Splunk", description: "Endpoint protection and cybersecurity solutions." },
  openvpn: { title: "Open", description: "Endpoint protection and cybersecurity solutions." },
  crowdstrike: { title: "Crowdstrike", description: "Endpoint protection and cybersecurity solutions." },
  microsoft: { title: "Microsoft", description: "Endpoint protection and cybersecurity solutions." },
  "recorded-future": { title: "Recorded Future", description: "Endpoint protection and cybersecurity solutions." },
  darktrace: { title: "Darktrace", description: "Endpoint protection and cybersecurity solutions." },
  "cyber-security-services": { title: "Cyber Security Services", description: "Comprehensive cybersecurity services for protecting critical infrastructure and business systems." },
  "compliance-audit": { title: "Compliance & Audit", description: "Security assessment, compliance and audit services for enterprise environments." },
};

// =========================
// SECURITY SERVICES SUB PAGES
// =========================
const securitySubPages = {
  "soc24-7": { title: "SOC 24/7", description: "Endpoint protection and cybersecurity solutions." },
  mssp: { title: "MSSP", description: "Endpoint protection and cybersecurity solutions." },
  "managed-it-service": { title: "Managed IT Service", description: "Endpoint protection and cybersecurity solutions." },
  vapt: { title: "VAPT", description: "Endpoint protection and cybersecurity solutions." },
  "red-teaming": { title: "Red Teaming", description: "Endpoint protection and cybersecurity solutions." },
};

// ✅ Konsa data-object use karna hai, slug ke hisaab se decide karta hai
function getSubPageData(slug, subSlug) {
  if (slug === "attom") return attomSubPages[subSlug];
  if (slug === "cyber-security") return cyberSubPages[subSlug];
  if (slug === "cyber-security-sub") return securitySubPages[subSlug];
  return null;
}

// ✅ Automatically metadata — sab sub-pages ke liye, ek hi jagah se
export async function generateMetadata({ params }) {
  const { slug, subSlug } = await params;
  const data = getSubPageData(slug, subSlug);

  if (!data) return { title: "Page Not Found" };

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: `/services/${slug}/${subSlug}`,
  });
}

export default async function SubPage({ params }) {
  const { slug, subSlug } = await params;
  const data = getSubPageData(slug, subSlug);

  if (!data) notFound();

  // ✅ Automatically detect karega agar detailed products data maujood hai
  const extras = getSchemaExtras(slug, subSlug);

  // ✅ Automatically schema — sab sub-pages ke liye, products ke saath ya bina
  const schema = generateServiceSchema({
    title: data.title,
    description: data.description,
    path: `/services/${slug}/${subSlug}`,
    products: extras?.products || null,
  });

  const schemaScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );

  const generic = (
    <>
      {schemaScript}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-white">{data.title}</h1>
        <p className="mt-4 text-paper/70">{data.description}</p>
      </div>
    </>
  );

  // =========================
  // ATTOM
  // =========================
  if (slug === "attom") {
    if (subSlug === "prefabricated") return <>{schemaScript}<PrefabricatedContent /></>;
    if (subSlug === "precision") return <>{schemaScript}<PrecisionContent /></>;
    if (subSlug === "mission-critical-power-system") return <>{schemaScript}<MissionContent /></>;
    if (subSlug === "liquid-cooling-system") return <>{schemaScript}<LiquidContent /></>;
    if (subSlug === "data-center-infrastructure-management") return <>{schemaScript}<DataContent /></>;
    return generic;
  }

  // =========================
  // CYBER SECURITY
  // =========================
  if (slug === "cyber-security") {
    if (subSlug === "fortra") return <>{schemaScript}<FortraContent /></>;
    if (subSlug === "kaspersky") return <>{schemaScript}<KasperskyContent /></>;
    if (subSlug === "solarwind") return <>{schemaScript}<SolarContent /></>;
    if (subSlug === "splunk") return <>{schemaScript}<SplunkContent /></>;
    if (subSlug === "openvpn") return <>{schemaScript}<OpenContent /></>;
    if (subSlug === "sangfor") return <>{schemaScript}<SangforContent /></>;
    if (subSlug === "crowdstrike") return <>{schemaScript}<CrowdContent /></>;
    if (subSlug === "fortinet") return <>{schemaScript}<FortinetContent /></>;
    if (subSlug === "microsoft") return <>{schemaScript}<MicrosoftContent /></>;
    if (subSlug === "recorded-future") return <>{schemaScript}<RecordedContent /></>;
    if (subSlug === "darktrace") return <>{schemaScript}<DarktraceContent /></>;
    if (subSlug === "soc24-7") return <>{schemaScript}<SocContent /></>;
    if (subSlug === "compliance-audit") return <>{schemaScript}<ComplianceContent /></>;
    return generic;
  }

  // =========================
  // SECURITY SERVICES
  // =========================
  if (slug === "cyber-security-sub") {
    if (subSlug === "soc24-7") return <>{schemaScript}<SocContent /></>;
    if (subSlug === "mssp") return <>{schemaScript}<MSSPContent /></>;
    if (subSlug === "managed-it-service") return <>{schemaScript}<ManagedContent /></>;
    if (subSlug === "vapt") return <>{schemaScript}<VAPTContent /></>;
    if (subSlug === "red-teaming") return <>{schemaScript}<RedContent /></>;
    return generic;
  }

  notFound();
}