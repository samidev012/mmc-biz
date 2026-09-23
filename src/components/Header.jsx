"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import NextImage from "next/image";

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
          {
            title: "Fortra",
            href: "/services/cyber-security/fortra",
          },
          {
            title: "Kaspersky",
            href: "/services/cyber-security/kaspersky",
          },
          {
            title: "Solarwinds",
            href: "/services/cyber-security/solarwind",
          },

          {
            title: "SPlunk",
            href: "/services/cyber-security/splunk",
          },

          {
            title: "Openvpn",
            href: "/services/cyber-security/openvpn",
          },
          {
            title: "sangfor",
            href: "/services/cyber-security/sangfor",
          },
          {
            title: "Crowdstrike",
            href: "/services/cyber-security/crowdstirke",
          },
          {
            title: "Fortinet",
            href: "/services/cyber-security/fortinet",
          },
          {
            title: "Microsoft",
            href: "/services/cyber-security/microsoft",
          },
          {
            title: "Recorded Future",
            href: "/services/cyber-security/recorded-future",
          },
          {
            title: "Darktrace",
            href: "/services/cyber-security/darktrace",
          },
        ],
      },

      {
        title: "Cyber Security Services",
        description: "End-to-end security solutions.",
        href: "/services/cyber-security",
        hasArrow: true,
        subItems: [
          {
            title: "SOC 24/7",
            href: "/services/attom/prefabricated",
          },
          {
            title: "MSSP",
            href: "/services/attom/precision",
          },
          {
            title: "Managed IT Services",
            href: "/services/attom/mission-critical-power-system",
          },

          {
            title: "VAPT",
            href: "/services/attom/data-center-infrastructure-management",
          },

          {
            title: "Red Teaming",
            href: "/services/attom/liquid-cooling-system",
          },
        ],
      },
      {
        title: "Cyber Security Consultancy",
        description: "Expert security consulting.",
        href: "/services/compliance-audit",
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
        // ✅ ATTOM KE ANDAR SUB-MENU
        subItems: [
          {
            title: "Prefabricated Data Centers",
            href: "/services/attom/prefabricated",
          },
          {
            title: "Precision Air Conditioner",
            href: "/services/attom/precision",
          },
          {
            title: "Mission Critical Power System",
            href: "/services/attom/mission-critical-power-system",
          },

          {
            title: "Data Center Infrastructure Monitoring",
            href: "/services/attom/data-center-infrastructure-management",
          },

          {
            title: "Liquid Cooling System",
            href: "/services/attom/liquid-cooling-system",
          },
          {
            title: "Attom-Data Center Rack System",
            href: "/services/attom/networking",
          },
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
        href: "/services/fortra",
      },
      {
        title: "Sangfor",
        description: "Network and cloud security.",
        href: "/services/sangfor",
      },
      {
        title: "Microsoft",
        description: "Cloud and business solutions.",
        href: "/services/microsoft-365",
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
  const [activeSubMenu, setActiveSubMenu] = useState(null); // ✅ SUB-MENU STATE

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
      setActiveSubMenu(null); // ✅ SUB-MENU BHI CLOSE HOGA
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
    <header
      className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur"
      style={{
        background: "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        {/* ================= LOGO ================= */}
        <Link href="/" aria-label="MMC Home" className="flex items-center">
          <NextImage
            src="/images/MMC.webp"
            alt="MMC"
            width={160}
            height={55}
            priority
            className="h-auto w-[160px] object-cover"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="hidden items-center gap-8 uppercase lg:flex"
          aria-label="Main navigation"
        >
          {/* ================= SERVICES ================= */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium uppercase text-paper/90 transition-colors hover:text-signal"
            >
              Services
              <span
                className={`text-xs transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* ================= MEGA MENU ================= */}
            {servicesOpen && (
              <div
                className="mega-menu-wrapper"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div className="mega-menu">
                  <div className="mega-menu-grid">
                    {sections.map((section, sectionIndex) => (
                      <div
                        key={section.title}
                        className={`mega-menu-column mega-column-${sectionIndex}`}
                      >
                        <p className="mega-menu-title">{section.title}</p>
                        <div className="mega-menu-line" />

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
                                  className="mega-menu-item"
                                  style={{
                                    animationDelay: `${itemIndex * 70}ms`,
                                  }}
                                >
                                  <span className="mega-menu-content">
                                    <span className="mega-menu-item-title">
                                      <span>{item.title}</span>
                                      {item.hasArrow && (
                                        <span className="mega-menu-arrow">
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
                                {hasSubItems && activeSubMenu === itemKey && (
                                  <div
                                    className="absolute left-full top-0 ml-2 w-80 z-50 rounded-md border border-line bg-ink shadow-xl"
                                    onMouseEnter={() => openSubMenu(itemKey)}
                                    onMouseLeave={closeSubMenu}
                                  >
                                    <div className="p-2">
                                      {item.subItems.map(
                                        (subItem, subIndex) => (
                                          <Link
                                            key={subIndex}
                                            href={subItem.href}
                                            className="block rounded px-5 py-1 text-sm transition-colors hover:bg-signal/10 hover:text-signal"
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
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= OTHER NAV LINKS ================= */}
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-18 font-medium uppercase text-paper/90 transition-colors hover:text-signal"
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
              className="flex items-center gap-1 text-sm font-medium uppercase text-paper/90 transition-colors hover:text-signal"
            >
              Company
              <span
                className={`text-xs transition-transform duration-300 ${
                  companyOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {companyOpen && (
              <div className="absolute right-0 top-full z-50 pt-1">
                <div className="w-44 rounded-md border border-line bg-ink py-2 shadow-xl">
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
              </div>
            )}
          </div>
        </nav>

        {/* ================= BUSINESS PARTNER ================= */}
        <Link
          href="/contact-us"
          className="group relative  overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
        >
          Business Partner
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

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <nav className="flex flex-col border-t border-line bg-ink px-6 py-4 lg:hidden">
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
        </nav>
      )}
    </header>
  );
}
