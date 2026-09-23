import { notFound } from "next/navigation";
import { generatePageMetadata, generateServiceSchema } from "@/lib/seo";
import { getSchemaExtras } from "@/lib/schemaData";

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
  prefabricated: {
    title: "Prefabricated Modular Data Centers",
    description: "Factory-built, rapid-deploy modular data centers from ATTOM, engineered for fast deployment, high reliability, and flexible power and cooling configurations for modern IT environments.",
  },
  precision: {
    title: "Precision Air Conditioning for Data Centers",
    description: "Precision air conditioning systems designed for critical infrastructure, delivering stable temperature and humidity control to protect high-density IT equipment.",
  },
  "mission-critical-power-system": {
    title: "Mission Critical Power Systems",
    description: "Redundant, mission-critical power systems engineered for uninterrupted uptime, protecting critical infrastructure from outages and ensuring continuous business operations.",
  },
  "data-center-infrastructure-management": {
    title: "Data Center Infrastructure Management (DCIM)",
    description: "Real-time data center infrastructure monitoring and management tools that give complete visibility into power, cooling, and capacity across your facility.",
  },
  "liquid-cooling-system": {
    title: "Liquid Cooling Systems for High-Density Racks",
    description: "Advanced liquid cooling solutions built for high-density data center racks, delivering efficient heat management and supporting next-generation computing workloads.",
  },
  "rack-systems": {
    title: "ATTOM Data Center Rack Systems",
    description: "Enterprise-grade data center rack systems from ATTOM, designed for scalability, optimized airflow, and seamless integration with modern IT infrastructure.",
  },
};

// =========================
// CYBER SECURITY SUB PAGES
// =========================
const cyberSubPages = {
  fortra: {
    title: "Fortra Cybersecurity & Data Protection",
    description: "Fortra delivers data protection, offensive security testing, and infrastructure defense solutions to help organizations strengthen their cybersecurity posture.",
  },
  sangfor: {
    title: "Sangfor Network, Cloud & Cybersecurity Solutions",
    description: "Sangfor provides network security, cloud computing, and secure access solutions, helping organizations build resilient and scalable IT infrastructure.",
  },
  fortinet: {
    title: "Fortinet Advanced Network Security",
    description: "Fortinet delivers firewalls, SD-WAN, and an integrated security fabric platform to protect networks against evolving and sophisticated cyber threats.",
  },
  kaspersky: {
    title: "Kaspersky Endpoint Protection & Threat Intelligence",
    description: "Kaspersky offers advanced endpoint protection, global threat intelligence, and antivirus technology to defend organizations against modern cyber threats.",
  },
  solarwind: {
    title: "SolarWinds Network Monitoring & IT Management",
    description: "SolarWinds provides network monitoring and infrastructure observability tools that help IT teams maintain full visibility and control across their environments.",
  },
  splunk: {
    title: "Splunk SIEM & Security Analytics Platform",
    description: "Splunk's data platform powers SIEM and operational analytics, enabling organizations to detect threats faster and respond with greater confidence.",
  },
  openvpn: {
    title: "OpenVPN Secure Networking & Zero Trust Access",
    description: "OpenVPN delivers secure networking through VPN technology and zero trust network access, protecting remote and hybrid workforces at scale.",
  },
  crowdstrike: {
    title: "CrowdStrike Cloud-Native Endpoint Security",
    description: "CrowdStrike's cloud-native platform delivers endpoint detection, response, and threat intelligence to stop breaches before they can cause damage.",
  },
  microsoft: {
    title: "Microsoft Enterprise Security Solutions",
    description: "Microsoft delivers enterprise-grade security through its Defender and Sentinel platforms, helping organizations protect data, identities, and cloud environments.",
  },
  "recorded-future": {
    title: "Recorded Future Threat Intelligence Solutions",
    description: "Recorded Future delivers real-time threat intelligence, giving security teams the insights they need to stay ahead of evolving global cyber threats.",
  },
  darktrace: {
    title: "Darktrace AI-Driven Cybersecurity Solutions",
    description: "Darktrace uses AI-driven technology for autonomous threat detection across networks, cloud, and email, stopping attacks before they can spread.",
  },
  "cyber-security-services": {
    title: "Cybersecurity Services for Enterprise Protection",
    description: "Comprehensive cybersecurity services designed to protect critical infrastructure and business systems from evolving and sophisticated digital threats.",
  },
  "compliance-audit": {
    title: "Cybersecurity Compliance & Audit Services",
    description: "Comprehensive security assessment, compliance, and audit services designed to help enterprise environments meet regulatory and industry standards.",
  },
};

// =========================
// SECURITY SERVICES SUB PAGES
// =========================
const securitySubPages = {
  "soc24-7": {
    title: "24/7 Security Operations Center (SOC) Services",
    description: "Round-the-clock security operations center services providing continuous threat monitoring, detection, and rapid incident response for your organization.",
  },
  mssp: {
    title: "Managed Security Service Provider (MSSP)",
    description: "Comprehensive managed security services delivering proactive threat monitoring, detection, and response to strengthen your organization's security posture.",
  },
  "managed-it-service": {
    title: "Managed IT Services for Growing Businesses",
    description: "Reliable managed IT services covering infrastructure support, monitoring, and maintenance, helping organizations run secure and efficient operations.",
  },
  vapt: {
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Comprehensive vulnerability assessment and penetration testing services that identify security gaps before attackers can exploit them.",
  },
  "red-teaming": {
    title: "Red Teaming & Adversary Simulation Services",
    description: "Advanced red teaming services that simulate real-world attacks, testing your organization's detection and response capabilities under realistic conditions.",
  },
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