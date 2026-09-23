import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata, generateServiceSchema } from "@/lib/seo";
import AttomContent from "./AttomContent";
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

// ✅ Automatically har service ke liye metadata — naya service add karo, bas isi object mein
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = services[slug];

  if (!data) return { title: "Service Not Found" };

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = services[slug];

  if (!data) notFound();

  // ✅ Automatically schema — koi manual kaam nahi
  const schema = generateServiceSchema({
    title: data.title,
    description: data.description,
    path: `/services/${slug}`,
  });

  const schemaScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );

  if (slug === "attom") {
    return (
      <>
        {schemaScript}
        <AttomContent />
      </>
    );
  }

  if (slug === "passive-network-services") {
    return (
      <>
        {schemaScript}
        <PassiveContent />
      </>
    );
  }

  if (slug === "tia") {
    return (
      <>
        {schemaScript}
        <TIAContent />
      </>
    );
  }

  if (slug === "cctv-surveillance") {
    return (
      <>
        {schemaScript}
        <CctvContent />
      </>
    );
  }

  if (slug === "cyber-security-brands") {
    return (
      <>
        {schemaScript}
        <CyberSecurityBrandsContent />
      </>
    );
  }

  if (slug === "cyber-security") {
    return (
      <>
        {schemaScript}
        <Cybersecurity />
      </>
    );
  }

  if (slug === "anydesk") {
    return (
      <>
        {schemaScript}
        <AnydeskContent />
      </>
    );
  }

  if (slug === "zoom") {
    return (
      <>
        {schemaScript}
        <ZoomContent />
      </>
    );
  }

  // baaki normal services — generic fallback, schema bhi aayega automatically
  return (
    <>
      {schemaScript}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-white">{data.title}</h1>
        <p className="mt-4 text-paper/70">{data.description}</p>
      </div>
    </>
  );
}