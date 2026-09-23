import Link from "next/link";
import { notFound } from "next/navigation";
import AttomContent from "./AttomContent"; // ✅ naya import
import PassiveContent from "./PassiveContent";
import TIAContent from "./TIAContent";
import CctvContent from "./CctvContent";
import CyberSecurityBrandsContent from "./CyberSecurityBrandsContent";
import Cybersecurity from "./CyberSecurityContent";
import AnydeskContent from "./AnydeskContent";
import ZoomContent from "./ZoomContent";

const services = {
  "cyber-security-brands": { title: "Cyber Security Brands", description: "Trusted cybersecurity solutions." },
  "cyber-security": { title: "Cyber Security Services", description: "End-to-end security solutions." },
  "compliance-audit": { title: "Cyber Security Consultancy", description: "Expert security consulting." },
  "passive-network-services": { title: "Passive Works & Cabling", description: "Structured cabling solutions." },
  tia: { title: "TIA Certification", description: "Certified cabling infrastructure." },
  "cctv-surveillance": { title: "Design and Implementation", description: "CCTV design and installation." },
  anydesk: { title: "AnyDesk", description: "Secure remote access." },
  zoom: { title: "Zoom", description: "Video conferencing solutions." },
  fortra: { title: "Fortra", description: "Cybersecurity and data protection." },
  sangfor: { title: "Sangfor", description: "Network and cloud security." },
  "microsoft-365": { title: "Microsoft", description: "Cloud and business solutions." },
  attom: { title: "ATTOM Products", description: "Data center hardware solutions." },
};

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = services[slug];

  if (!data) notFound();

  // ✅ ATTOM ke liye poora custom component
  if (slug === "attom") {
    return <AttomContent />;
  }

  if (slug === "passive-network-services"){
    return <PassiveContent/>
  }
   if (slug === "tia"){
    return <TIAContent />
  }
  if (slug === "cctv-surveillance"){
    return <CctvContent />
  }
  if (slug === "cyber-security-brands"){
    return <CyberSecurityBrandsContent />
  }
  if (slug === "cyber-security"){
    return <Cybersecurity />
  }
  if (slug === "anydesk"){
    return <AnydeskContent />
  }
   if (slug === "zoom"){
    return <ZoomContent />
  }
   
   
 


  // baaki normal services
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white">{data.title}</h1>
      <p className="mt-4 text-paper/70">{data.description}</p>
    </div>
  );
}