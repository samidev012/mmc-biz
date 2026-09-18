
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import NextImage from "next/image";

const sections = [
  {
    title: "Cyber Security",
    items: [
      [
        "Cyber Security Brands",
        "Trusted cybersecurity solutions.",
        "/services/cyber-security-brands",
        true,
      ],
      [
        "Cyber Security Services",
        "End-to-end security solutions.",
        "/services/cyber-security",
        true,
      ],
      [
        "Cyber Security Consultancy",
        "Expert security consulting.",
        "/services/compliance-audit",
        true,
      ],
    ],
  },

  {
    title: "Data Center",
    items: [
      [
        "ATTOM Products",
        "Data center hardware solutions.",
        "/services/attom",
        true,
      ],
      [
        "Passive Works & Cabling",
        "Structured cabling solutions.",
        "/services/passive-network-services",
      ],
      [
        "TIA Certification",
        "Certified cabling infrastructure.",
        "/services/tia",
      ],
    ],
  },

  {
    title: "CCTV & Surveillance",
    items: [
      [
        "Design and Implementation",
        "CCTV design and installation.",
        "/services/cctv-surveillance",
      ],
    ],
  },

  {
    title: "Value Added Partners",
    items: [
      [
        "AnyDesk",
        "Secure remote access.",
        "/services/anydesk",
        true,
      ],
      [
        "Zoom",
        "Video conferencing solutions.",
        "/services/zoom",
      ],
      [
        "Fortra",
        "Cybersecurity and data protection.",
        "/services/fortra",
      ],
      [
        "Sangfor",
        "Network and cloud security.",
        "/services/sangfor",
      ],
      [
        "Microsoft",
        "Cloud and business solutions.",
        "/services/microsoft-365",
      ],
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

  const closeTimer = useRef(null);
  const companyTimer = useRef(null);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
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

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur"
      style={{
        background:
          "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)",
      }}
    >
      {/* ================= HEADER ================= */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          aria-label="MMC Home"
          className="flex items-center"
        >
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

                        {/* SECTION TITLE */}

                        <p className="mega-menu-title">
                          {section.title}
                        </p>

                        <div className="mega-menu-line" />

                        {/* SECTION ITEMS */}

                        <div className="mega-menu-items">

                          {section.items.map(
                            (
                              [
                                title,
                                description,
                                href,
                                hasSub,
                              ],
                              itemIndex
                            ) => (
                              <Link
                                key={href}
                                href={href}
                                className="mega-menu-item"
                                style={{
                                  animationDelay: `${itemIndex * 70}ms`,
                                }}
                              >
                                <span className="mega-menu-content">

                                  <span className="mega-menu-item-title">
                                    <span>
                                      {title}
                                    </span>

                                    {hasSub && (
                                      <span className="mega-menu-arrow">
                                        →
                                      </span>
                                    )}
                                  </span>

                                  <span className="mega-menu-description">
                                    {description}
                                  </span>

                                </span>
                              </Link>
                            )
                          )}

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
              className="text-sm font-medium uppercase text-paper/90 transition-colors hover:text-signal"
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
          className="hidden rounded-md bg-signal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-signal/90 lg:inline-block"
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

          <Link
            href="/services"
            onClick={closeMobile}
            className="py-2 text-sm"
          >
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

          <Link
            href="/about-us"
            onClick={closeMobile}
            className="py-2 text-sm"
          >
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

