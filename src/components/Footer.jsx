import Link from "next/link";
import Image from "next/image";
import { Zap, Building2, Users, Server, Award, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

const columns = [
  {
    title: "Solutions",
    icon: Zap,
    links: [
      { label: "Custom Solutions & AI", href: "/services/custom-software" },
      { label: "Cybersecurity", href: "/services/cyber-security" },
      { label: "Data Center", href: "/services/data-center" },
      { label: "Hardware", href: "/services/hardware" },
      { label: "CCTV & Surveillance", href: "/services/cctv-surveillance" },
    ],
  },
  {
    title: "Company",
    icon: Building2,
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Industries", href: "/industries" },
      { label: "Careers", href: "/careers" },
      { label: "Clients", href: "/clients" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Value Added Partners",
    icon: Users,
    links: [
      { label: "AnyDesk", href: "/services/anydesk" },
      { label: "Zoom", href: "/services/zoom" },
      { label: "Lenovo", href: "/services/lenovo" },
      { label: "Fortra", href: "/services/fortra" },
      { label: "Sangfor", href: "/services/sangfor" },
      { label: "Microsoft 365", href: "/services/microsoft-365" },
    ],
  },
  {
    title: "Data Center — ATTOM",
    icon: Server,
    links: [
      { label: "Prefabricated Data Centers", href: "/services/attom" },
      { label: "Precision Air Conditioner", href: "/services/attom" },
      { label: "Mission Critical Power", href: "/services/attom" },
      { label: "Liquid Cooling System", href: "/services/attom" },
      { label: "DCIM", href: "/services/attom" },
      { label: "TIA Certification", href: "/services/tia" },
    ],
  },
  {
    title: "Cyber Security Brands",
    icon: Award,
    twoCol: true,
    links: [
      { label: "Fortra", href: "/services/fortra" },
      { label: "Kaspersky", href: "/services/kaspersky" },
      { label: "Solarwinds", href: "/services/solarwinds" },
      { label: "Splunk", href: "/services/splunk" },
      { label: "OpenVPN", href: "/services/openvpn" },
      { label: "Sangfor", href: "/services/sangfor" },
      { label: "Crowdstrike", href: "/services/crowdstrike" },
      { label: "Fortinet", href: "/services/fortinet" },
      { label: "Microsoft", href: "/services/microsoft-365" },
      { label: "Recorded Future", href: "/services/recorded-future" },
      { label: "Darktrace", href: "/services/darktrace" },
    ],
  },
  {
    title: "Cyber Security Services",
    icon: ShieldCheck,
    links: [
      { label: "SOC 24/7", href: "/services/soc" },
      { label: "MSSP", href: "/services/mssp" },
      { label: "Managed IT Services", href: "/services/managed-it" },
      { label: "VAPT", href: "/services/vapt" },
      { label: "Red Teaming", href: "/services/red-teaming" },
      { label: "Compliance Audit", href: "/services/compliance-audit" },
    ],
  },
];
const SocialX = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.2-6.6L4.9 22H1.8l8.1-9.3L1 2h7.5l4.7 6.1L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
  </svg>
);

const SocialLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.5h3.9V21H3.5V8.5Zm6.7 0h3.7v1.7h.05c.52-.94 1.78-1.94 3.66-1.94 3.9 0 4.6 2.5 4.6 5.8V21h-3.9v-6.1c0-1.45-.03-3.3-2.05-3.3-2.05 0-2.36 1.55-2.36 3.2V21h-3.9V8.5Z" />
  </svg>
);

const SocialFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.6-1.5H17V3.7C16.7 3.6 15.7 3.5 14.6 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.9V13h2.7v8h2.9Z" />
  </svg>
);

const SocialInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const socials = [
  { icon: SocialX, href: "#" },
  { icon: SocialLinkedin, href: "#" },
  { icon: SocialFacebook, href: "#" },
  { icon: SocialInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-gradient-to-b from-[#050914] to-black px-6 py-16 text-paper">
      <div className="mx-auto ">
        <div className="grid gap-6 lg:grid-cols-[1fr_2.2fr]">
          <div className="rounded-2xl border border-signal/20 bg-[#0a1128]/60 p-8">
          
          <Link
  href="/"
  aria-label="MMC Home"
  className="flex items-center"
>
  <Image
    src="/images/mmc.webp"
    alt="MMC"
    width={160}
    height={55}
    priority
    className="h-auto w-[160px] object-contain"
  />
</Link>
            
            <p className="mt-4 text-sm leading-relaxed text-steel">
              Pakistan&apos;s multi-division ICT partner since 1995 — software,
              cybersecurity, infrastructure, surveillance and digital marketing.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+923111555053" className="flex items-center gap-3 text-paper/90 hover:text-signal">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                +92 311 1555053
              </a>
              <a href="mailto:info@mmc.biz.pk" className="flex items-center gap-3 text-paper/90 hover:text-signal">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                info@mmc.biz.pk
              </a>
              <p className="flex items-center gap-3 text-paper/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                C-10, Block-9, Gulshan-e-Iqbal, Karachi.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="flex h-9 w-9 items-center justify-center rounded-full border border-signal/30 text-paper/80 transition-colors hover:border-signal hover:bg-signal hover:text-white">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="rounded-2xl border border-line bg-[#0a1128]/40 p-6 transition-colors hover:border-signal/40">
                <p className="flex items-center gap-2 text-sm font-semibold text-signal">
                  <col.icon className="h-4 w-4" />
                  {col.title.toUpperCase()}
                </p>
                <ul className={`mt-4 gap-x-4 gap-y-2.5 text-sm ${col.twoCol ? "grid grid-cols-2" : "space-y-2.5"}`}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-paper/85 hover:text-signal">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-semibold text-paper">MMC</span>
            <span className="text-xs text-steel">
              © {new Date().getFullYear()} MMC. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-xs text-steel">
            <Link href="/privacy-policy" className="hover:text-signal">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-signal">
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}