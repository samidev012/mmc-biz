// ✅ Har sub-page ka apna products/features data yahan
// Format: schemaData["parent-slug"]["sub-slug"] = { products: [...] }

export const schemaData = {
  attom: {
    precision: {
      products: [
        { name: "SmoothAir Rack Mount DX Precision Cooling", description: "Rack precision cooling for small and medium data centers, edge spaces and network closets, with multiple capacity configurations, inverter compressors, EC fans and remote monitoring." },
        { name: "SmoothAir Row Mount Precision Cooling", description: "In-row precision cooling that brings controlled airflow closer to the heat source, with flexible cooling types, intelligent controls and free-cooling options." },
        { name: "SmoothAir Wall Mount Precision Cooling", description: "Compact weatherproof precision cooling for telecom shelters, container data centers and battery storage sites, with direct and indirect free-cooling modes." },
        { name: "SmoothAir Wall Mount Cooling Split Type", description: "Compact split-type precision cooling for network cabinets, server rooms and micro data centers, with inverter operation and an optional indirect free-cooling mode." },
        { name: "WiseAir Room Cooling CRAC", description: "Room air conditioning for data centers, with inverter compressors, intelligent controls, flexible airflow configurations and DX or chilled-water options." },
        { name: "Precision Cooling for Hot Climates", description: "High-ambient precision air conditioning designed for reliable data center cooling at temperatures up to 55°C, with multiple rack, wall, row and room configurations." },
      ],
    },
    prefabricated: {
      products: [
        { name: "AgileRax – Rack Micro Data Center", description: "Modern organizations need IT infrastructure that can be deployed quickly, managed remotely, and scaled efficiently across distributed locations — built for edge computing and digital services." },
        { name: "AgileCub 2.0 – Container Micro Data Center Solution", description: "A prefabricated modular data center solution designed for organizations that need fast deployment." },
        { name: "AgileMod – Prefabricated Modular Data Center Solution", description: "A prefabricated modular data center solution built for organizations that need to expand." },
        { name: "AgileHub 2.0 – Shelter Modular Data Center Solution", description: "Purpose-built to meet the demand for mixed DC and AC power device deployments driven by the 5G era." },
        { name: "AgileCore – AI Prefabricated Modular Data Centers", description: "Built for modern AI infrastructure — supporting higher rack densities, efficient thermal management, and rapid deployment." },
      ],
    },
    // "mission-critical-power-system": { products: [...] }
    // "liquid-cooling-system": { products: [...] }
    // "data-center-infrastructure-management": { products: [...] }
  },

  "cyber-security": {
    // fortra: { products: [...] }
    // kaspersky: { products: [...] }
    // solarwind: { products: [...] }
    // splunk: { products: [...] }
    // openvpn: { products: [...] }
    // sangfor: { products: [...] }
    // crowdstrike: { products: [...] }
    // fortinet: { products: [...] }
    // microsoft: { products: [...] }
    // "recorded-future": { products: [...] }
    // darktrace: { products: [...] }
    // "compliance-audit": { products: [...] }
  },

  "cyber-security-sub": {
    // "soc24-7": { products: [...] }
    // mssp: { products: [...] }
    // "managed-it-service": { products: [...] }
    // vapt: { products: [...] }
    // "red-teaming": { products: [...] }
  },
};

export function getSchemaExtras(slug, subSlug) {
  return schemaData?.[slug]?.[subSlug] || null;
}
