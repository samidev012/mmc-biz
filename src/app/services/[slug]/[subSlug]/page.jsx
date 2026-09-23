import { notFound } from "next/navigation";

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
  solarwind: {
    title: "Solarwind",
    description: "Endpoint protection and cybersecurity solutions.",
  },
  splunk: {
    title: "Splunk",
    description: "Endpoint protection and cybersecurity solutions.",
  },
  openvpn: {
    title: "Open",
    description: "Endpoint protection and cybersecurity solutions.",
  },
  crowdstirke: {
    title: "Crowdstrike",
    description: "Endpoint protection and cybersecurity solutions.",
  },
  fortinet: {
    title: "Fortinet",
    description: "Endpoint protection and cybersecurity solutions.",
  },
   microsoft: {
    title: "Microsoft",
    description: "Endpoint protection and cybersecurity solutions.",
  },
 
   "recorded-future": {
    title: "Recorded Future",
    description: "Endpoint protection and cybersecurity solutions.",
  },
     darktrace: {
    title: "Darktrace",
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


const securitySubPages = {
  
 
  "soc24-7": {
    title: "soc24-7",
    description: "Endpoint protection and cybersecurity solutions.",
  },

  "mssp": {
    title: "mssp",
    description: "Endpoint protection and cybersecurity solutions.",
  },
   "managed-it-service": {
    title: "managed-it-service",
    description: "Endpoint protection and cybersecurity solutions.",
  },

   "vapt": {
    title: "vapt",
    description: "Endpoint protection and cybersecurity solutions.",
  },
     "red-teaming": {
    title: "red-teaming",
    description: "Endpoint protection and cybersecurity solutions.",
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
    if (subSlug === "solarwind") {
      return <SolarContent />;
    } 
       if (subSlug === "splunk") {
      return <SplunkContent />;
    } 
    if (subSlug === "openvpn") {
      return <OpenContent />;
    } 
    if (subSlug === "sangfor") {
      return <SangforContent />;
    } 
     if (subSlug === "crowdstirke") {
      return <CrowdContent />;
    } 
     if (subSlug === "fortinet") {
      return <FortinetContent />;
    } 
     if (subSlug === "microsoft") {
      return <MicrosoftContent />;
    } 
     if (subSlug === "recorded-future") {
      return <RecordedContent />;
    } 
     if (subSlug === "darktrace") {
      return <DarktraceContent />;
    } 
    if (subSlug === "soc24/7") {
      return <SocContent />;
    } 

      if (subSlug === "compliance-audit") {
      return <ComplianceContent />;
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
  if (slug === "cyber-security-sub") {
    const data = securitySubPages[subSlug];
 
    if (!data) {
      notFound();
    }
    if (subSlug === "soc24-7") {
      return <SocContent />;
    } 
    if (subSlug === "mssp") {
      return <MSSPContent />;
    } 
 if (subSlug === "managed-it-service") {
      return <ManagedContent />;
    } 

    if (subSlug === "vapt") {
      return <VAPTContent />;
    } 

    if (subSlug === "red-teaming") {
      return <RedContent />;
    } 

  // Agar koi aur service slug aaye
  notFound();
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


