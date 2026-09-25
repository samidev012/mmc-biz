"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Bell } from "lucide-react";

const sections = [
  {
    title: "Cyber Security",
    items: [
      {
        title: "Cyber Security Brands",
        description: "Trusted cybersecurity solutions.",
        href: "/services/cyber-security-brands",
        hasArrow: true,
        subItems: [
          { title: "Fortra", href: "/services/cyber-security/fortra" },
          { title: "Kaspersky", href: "/services/cyber-security/kaspersky" },
          { title: "Solarwinds", href: "/services/cyber-security/solarwind" },
          { title: "SPlunk", href: "/services/cyber-security/splunk" },
          { title: "Openvpn", href: "/services/cyber-security/openvpn" },
          { title: "sangfor", href: "/services/cyber-security/sangfor" },
          { title: "Crowdstrike", href: "/services/cyber-security/crowdstrike" },
          { title: "Fortinet", href: "/services/cyber-security/fortinet" },
          { title: "Microsoft", href: "/services/cyber-security/microsoft" },
          { title: "Recorded Future", href: "/services/cyber-security/recorded-future" },
          { title: "Darktrace", href: "/services/cyber-security/darktrace" },
        ],
      },

      {
        title: "Cyber Security Services",
        description: "End-to-end security solutions.",
        href: "/services/cyber-security",
        hasArrow: true,
        subItems: [
          { title: "SOC 24/7", href: "/services/cyber-security-sub/soc24-7" },
          { title: "MSSP", href: "/services/cyber-security-sub/mssp" },
          { title: "Managed IT Services", href: "/services/cyber-security-sub/managed-it-service" },
          { title: "VAPT", href: "/services/cyber-security-sub/vapt" },
          { title: "Red Teaming", href: "/services/cyber-security-sub/red-teaming" },
        ],
      },
      {
        title: "Cyber Security Consultancy",
        description: "Expert security consulting.",
        href: "/services/cyber-security/compliance-audit",
        hasArrow: true,
      },
    ],
  },

  {
    title: "Data Center",
    items: [
      {
        title: "ATTOM Products",
        description: "Data center hardware solutions.",
        href: "/services/attom",
        hasArrow: true,
        subItems: [
          { title: "Prefabricated Data Centers", href: "/services/attom/prefabricated" },
          { title: "Precision Air Conditioner", href: "/services/attom/precision" },
          { title: "Mission Critical Power System", href: "/services/attom/mission-critical-power-system" },
          { title: "Data Center Infrastructure Monitoring", href: "/services/attom/data-center-infrastructure-management" },
          { title: "Liquid Cooling System", href: "/services/attom/liquid-cooling-system" },
          { title: "Attom-Data Center Rack System", href: "/services/attom/networking" },
        ],
      },
      {
        title: "Passive Works & Cabling",
        description: "Structured cabling solutions.",
        href: "/services/passive-network-services",
      },
      {
        title: "TIA Certification",
        description: "Certified cabling infrastructure.",
        href: "/services/tia",
      },
    ],
  },

  {
    title: "CCTV & Surveillance",
    items: [
      {
        title: "Design and Implementation",
        description: "CCTV design and installation.",
        href: "/services/cctv-surveillance",
      },
    ],
  },

  {
    title: "Value Added Partners",
    items: [
      {
        title: "AnyDesk",
        description: "Secure remote access.",
        href: "/services/anydesk",
        hasArrow: true,
      },
      {
        title: "Zoom",
        description: "Video conferencing solutions.",
        href: "/services/zoom",
      },
      {
        title: "Fortra",
        description: "Cybersecurity and data protection.",
        href: "/services/cyber-security/fortraa",
      },
      {
        title: "Sangfor",
        description: "Network and cloud security.",
        href: "/services/cyber-security/sangfor",
      },
      {
        title: "Microsoft",
        description: "Cloud and business solutions.",
        href: "/services/cyber-security/microsoft",
      },
    ],
  },
];

const navLinks = [
  ["Industries", "/industries"],
  ["Careers", "/careers"],
  ["Clients", "/clients"],
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const closeTimer = useRef(null);
  const companyTimer = useRef(null);
  const subMenuTimer = useRef(null);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveSubMenu(null);
    }, 200);
  };

  const openCompany = () => {
    clearTimeout(companyTimer.current);
    setCompanyOpen(true);
  };

  const closeCompany = () => {
    companyTimer.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 200);
  };

  const openSubMenu = (itemKey) => {
    clearTimeout(subMenuTimer.current);
    setActiveSubMenu(itemKey);
  };

  const closeSubMenu = () => {
    subMenuTimer.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 200);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl ">
      {/* ================= FLOATING PILL NAVBAR ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl before:absolute before:inset-0  before:from-white/[0.08]  before:pointer-events-none"
      >
        {/* ================= LOGO ================= */}
        <Link href="/" aria-label="MMC Home" className="flex items-center gap-2 pl-1">
          <NextImage
            src="/images/MMC.webp"
            alt="MMC"
            width={150}
            height={50}
            priority
            className="h-auto w-[120px] object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {/* ================= SERVICES ================= */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium uppercase transition-colors duration-300 ${
                servicesOpen ? "text-white" : "text-paper/70 hover:text-white"
              }`}
            >
              {servicesOpen && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-signal"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Services</span>
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-[10px]"
              >
                ▼
              </motion.span>
            </button>

            {/* ================= MEGA MENU ================= */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="mega-menu-wrapper"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <div  className="mega-menu mt-3 overflow-hidden rounded-2xl border border-white/10 bg-ink/50 shadow-2xl backdrop-blur-2xl">
                    <div className="mega-menu-grid">
                      {sections.map((section, sectionIndex) => (
                        <div
                          key={section.title}
                          className={`mega-menu-column mega-column-${sectionIndex}`}
                        >
                          <p className="mega-menu-title text-signal">{section.title}</p>
                          <div className="mega-menu-line bg-signal/20" />

                          <div className="mega-menu-items">
                            {section.items.map((item, itemIndex) => {
                              const itemKey = `${sectionIndex}-${itemIndex}`;
                              const hasSubItems =
                                item.subItems && item.subItems.length > 0;

                              return (
                                <div
                                  key={itemKey}
                                  className="relative"
                                  onMouseEnter={() =>
                                    hasSubItems && openSubMenu(itemKey)
                                  }
                                  onMouseLeave={() =>
                                    hasSubItems && closeSubMenu()
                                  }
                                >
                                  <Link
                                    href={item.href}
                                    className="mega-menu-item rounded-lg transition-colors duration-200 hover:bg-signal/10"
                                    style={{
                                      animationDelay: `${itemIndex * 70}ms`,
                                    }}
                                  >
                                    <span className="mega-menu-content">
                                      <span className="mega-menu-item-title">
                                        <span>{item.title}</span>
                                        {item.hasArrow && (
                                          <span className="mega-menu-arrow text-signal">
                                            →
                                          </span>
                                        )}
                                      </span>
                                      <span className="mega-menu-description">
                                        {item.description}
                                      </span>
                                    </span>
                                  </Link>

                                  {/* ✅ SUB-MENU DROPDOWN */}
                                  <AnimatePresence>
                                    {hasSubItems && activeSubMenu === itemKey && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 ml-2 w-80 z-50 rounded-xl border border-white/10 bg-ink/60 shadow-2xl backdrop-blur-2xl"
                                        onMouseEnter={() => openSubMenu(itemKey)}
                                        onMouseLeave={closeSubMenu}
                                      >
                                        <div className="p-2">
                                          {item.subItems.map(
                                            (subItem, subIndex) => (
                                              <Link
                                                key={subIndex}
                                                href={subItem.href}
                                                className="block rounded-lg px-5 py-1 text-sm transition-colors hover:bg-signal/10 hover:text-signal"
                                              >
                                                <div className="font-medium">
                                                  {subItem.title}
                                                </div>
                                                <div className="text-xs text-paper/60">
                                                  {subItem.description}
                                                </div>
                                              </Link>
                                            ),
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= OTHER NAV LINKS ================= */}
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium uppercase text-paper/70 transition-colors duration-300 hover:text-white"
            >
              {label}
            </Link>
          ))}

          {/* ================= COMPANY ================= */}
          <div
            className="relative"
            onMouseEnter={openCompany}
            onMouseLeave={closeCompany}
          >
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium uppercase transition-colors duration-300 ${
                companyOpen ? "text-white" : "text-paper/70 hover:text-white"
              }`}
            >
              {companyOpen && (
                <motion.span
                  layoutId="nav-pill-company"
                  className="absolute inset-0 rounded-full bg-signal"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Company</span>
              <motion.span
                animate={{ rotate: companyOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-[10px]"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-50 mt-3"
                >
                  <div className="w-44 overflow-hidden rounded-xl border border-white/10 bg-ink/60 py-2 shadow-2xl backdrop-blur-2xl">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2 text-sm transition-colors hover:bg-signal/10 hover:text-signal"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2 text-sm transition-colors hover:bg-signal/10 hover:text-signal"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* ================= RIGHT SIDE: BELL + CTA ================= */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="relative hidden h-9 w-9 items-center justify-center rounded-full text-paper/70 transition-colors hover:text-white lg:flex"
          >
            <Bell className="h-4 w-4" />
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-signal"
            />
          </button>

          {/* ================= BUSINESS PARTNER ================= */}
          <Link
            href="/contact-us"
            className="group relative hidden overflow-hidden rounded-full border border-signal bg-signal/10 px-6 py-2.5 text-sm font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] lg:inline-flex"
          >
            <span className="relative z-10">Business Partner</span>
          </Link>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="text-paper lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 flex max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/50 px-6 py-4 backdrop-blur-2xl lg:hidden"
          >
            <Link href="/services" onClick={closeMobile} className="py-2 text-sm">
              Services
            </Link>
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="py-2 text-sm"
              >
                {label}
              </Link>
            ))}
            <Link href="/about-us" onClick={closeMobile} className="py-2 text-sm">
              About Us
            </Link>
            <Link
              href="/contact-us"
              onClick={closeMobile}
              className="py-2 text-sm"
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}