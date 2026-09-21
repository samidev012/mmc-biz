import { notFound } from "next/navigation";
import PrefabricatedContent from "./PrefabricatedContent";
import PrecisionContent from "./PrecisionContent";
import MissionContent from "./MissionContent";
import LiquidContent from "./LiquidContent";
import DataContent from "./DataContent";

const attomSubPages = {
  prefabricated: { title: "Prefabricated Data Centers", description: "Modular, rapid-deploy data center units." },
    precision: { title: "Precision Air Conditioner", description: "Climate control for critical infrastructure." },
    "mission-critical-power-system": { title: "Mission Critical Power System", description: "Redundant power for uninterrupted uptime." },
    "data-center-infrastructure-management": { title: "Data Center Infrastructure Monitoring", description: "Real-time monitoring and management." },
    "liquid-cooling-system": { title: "Liquid Cooling System", description: "High-density cooling for modern racks." },
    "rack-systems": { title: "Attom-Data Center Rack System", description: "Enterprise-grade rack solutions." },
  };

export default async function AttomSubPage({ params }) {
  const { subSlug } = await params;
  const data = attomSubPages[subSlug];

  if (!data) notFound();

  // ✅ Prefabricated ke liye custom content
  if (subSlug === "prefabricated") {
    return <PrefabricatedContent />;
  }

   if (subSlug === "precision") {
    
    return <PrecisionContent/>
  }
   if (subSlug === "mission-critical-power-system") {
    
    return <MissionContent/>
  }
  if (subSlug === "liquid-cooling-system") {
    
    return <LiquidContent />
  }
    if (subSlug === "data-center-infrastructure-management") {
    
    return <DataContent/>
  }
    if (subSlug === "mission-critical-power-syst") {
    
    return <MissionContent/>
  }




  // baaki sub-pages ke liye generic content (jab tak unka content na mile)
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white">{data.title}</h1>
      <p className="mt-4 text-paper/70">{data.description}</p>
    </div>
  );
}