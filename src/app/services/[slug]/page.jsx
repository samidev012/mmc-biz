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
  "cyber-security-brands": {
    title: "Cyber Security Brands – Trusted Global Vendors",
    description: "Explore MMC's portfolio of trusted cybersecurity brands, including Fortra, Kaspersky, CrowdStrike, and Fortinet, delivering best-in-class protection.",
  },
  "cyber-security": {
    title: "Cyber Security Services for Enterprise Protection",
    description: "End-to-end cybersecurity services designed to protect your organization's infrastructure, data, and operations from evolving digital threats.",
  },
  "compliance-audit": {
    title: "Cyber Security Consultancy & Compliance Audit",
    description: "Expert cybersecurity consulting, compliance, and audit services to help organizations strengthen their security posture and meet industry standards.",
  },
  "passive-network-services": {
    title: "Passive Network Services & Structured Cabling",
    description: "Professional passive network services and structured cabling solutions engineered for reliable, scalable, and future-ready network infrastructure.",
  },
  tia: {
    title: "TIA Certified Network Cabling Infrastructure",
    description: "TIA certified cabling infrastructure solutions that meet international standards for reliable, scalable, and future-ready network performance.",
  },
  "cctv-surveillance": {
    title: "CCTV & Surveillance Design and Implementation",
    description: "Professional CCTV and surveillance system design and installation services, delivering intelligent security solutions for modern facilities and enterprises.",
  },
  anydesk: {
    title: "AnyDesk Secure Remote Access Solutions",
    description: "AnyDesk delivers fast, secure remote access and desktop software, enabling teams to collaborate and support users from anywhere in the world.",
  },
  zoom: {
    title: "Zoom Video Conferencing & Collaboration Platform",
    description: "Zoom's unified communications platform brings meetings, phone, chat, and events together, helping teams collaborate seamlessly from anywhere.",
  },
  fortra: {
    title: "Fortra Cybersecurity & Data Protection",
    description: "Fortra delivers data protection, offensive security testing, and infrastructure defense solutions to help organizations strengthen their cybersecurity posture.",
  },
  sangfor: {
    title: "Sangfor Network, Cloud & Cybersecurity Solutions",
    description: "Sangfor provides network security, cloud computing, and secure access solutions, helping organizations build resilient and scalable IT infrastructure.",
  },
  "microsoft-365": {
    title: "Microsoft 365 Cloud & Business Solutions",
    description: "Microsoft 365 delivers cloud productivity, collaboration, and business solutions that help organizations work securely and efficiently from anywhere.",
  },
  attom: {
    title: "ATTOM Data Center Hardware Solutions",
    description: "ATTOM delivers modular, prefabricated data center hardware solutions engineered for fast deployment, high reliability, and scalable performance.",
  },
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