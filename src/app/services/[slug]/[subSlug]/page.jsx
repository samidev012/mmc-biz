import { notFound } from "next/navigation";

import PrefabricatedContent from "./PrefabricatedContent";
import PrecisionContent from "./PrecisionContent";
import MissionContent from "./MissionContent";
import LiquidContent from "./LiquidContent";
import DataContent from "./DataContent";
import FortraContent from "./FortraContent";
import KasperskyContent from "./KasperskyContent";

// =========================
// ATTOM SUB PAGES
// =========================

const attomSubPages = {
  prefabricated: {
    title: "Prefabricated Data Centers",
    description: "Modular, rapid-deploy data center units.",
  },

  precision: {
    title: "Precision Air Conditioner",
    description: "Climate control for critical infrastructure.",
  },

  "mission-critical-power-system": {
    title: "Mission Critical Power System",
    description: "Redundant power for uninterrupted uptime.",
  },

  "data-center-infrastructure-management": {
    title: "Data Center Infrastructure Monitoring",
    description: "Real-time monitoring and management.",
  },

  "liquid-cooling-system": {
    title: "Liquid Cooling System",
    description: "High-density cooling for modern racks.",
  },

  "rack-systems": {
    title: "Attom-Data Center Rack System",
    description: "Enterprise-grade rack solutions.",
  },
};

// =========================
// CYBER SECURITY SUB PAGES
// =========================

const cyberSubPages = {
  fortra: {
    title: "Fortra",
    description: "Cybersecurity and data protection solutions.",
  },

  sangfor: {
    title: "Sangfor",
    description: "Network, cloud and cybersecurity solutions.",
  },

  fortinet: {
    title: "Fortinet",
    description: "Advanced network security and cybersecurity solutions.",
  },

  kaspersky: {
    title: "Kaspersky",
    description: "Endpoint protection and cybersecurity solutions.",
  },

  "cyber-security-services": {
    title: "Cyber Security Services",
    description:
      "Comprehensive cybersecurity services for protecting critical infrastructure and business systems.",
  },

  "compliance-audit": {
    title: "Compliance & Audit",
    description:
      "Security assessment, compliance and audit services for enterprise environments.",
  },
};

// =========================
// PAGE
// =========================

export default async function SubPage({ params }) {
  const { slug, subSlug } = await params;

  // =========================
  // ATTOM
  // =========================

  if (slug === "attom") {
    const data = attomSubPages[subSlug];

    if (!data) {
      notFound();
    }

    // Prefabricated custom content
    if (subSlug === "prefabricated") {
      return <PrefabricatedContent />;
    }

    // Precision custom content
    if (subSlug === "precision") {
      return <PrecisionContent />;
    }

    // Mission Critical Power custom content
    if (subSlug === "mission-critical-power-system") {
      return <MissionContent />;
    }

    // Liquid Cooling custom content
    if (subSlug === "liquid-cooling-system") {
      return <LiquidContent />;
    }

    // Data Center Infrastructure Management custom content
    if (subSlug === "data-center-infrastructure-management") {
      return <DataContent />;
    }
   

    // Generic ATTOM sub-page
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-white">
          {data.title}
        </h1>

        <p className="mt-4 text-paper/70">
          {data.description}
        </p>
      </div>
    );
  }

  // =========================
  // CYBER SECURITY
  // =========================

  if (slug === "cyber-security") {
    const data = cyberSubPages[subSlug];
 
    if (!data) {
      notFound();
    }
   if (subSlug === "fortra") {
      return <FortraContent />;
    } 
    if (subSlug === "kaspersky") {
      return <KasperskyContent />;
    } 
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-white">
          {data.title}
        </h1>

        <p className="mt-4 text-paper/70">
          {data.description}
        </p>
      </div>
    );
  }

  // Agar koi aur service slug aaye
  notFound();
}