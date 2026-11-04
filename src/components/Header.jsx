"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Sun, Moon } from "lucide-react";

const sections = [
  {
    "title": "Website Development",
    "items": [
      {
        "title": "Next.js",
        "description": "Modern, fast websites and web apps built with Next.js.",
        "href": "/services/next-js/"
      },
      {
        "title": "React.js",
        "description": "Interactive user interfaces built with React.",
        "href": "/services/react-js/"
      },
      {
        "title": "WordPress Development",
        "description": "Custom WordPress websites, themes, and integrations.",
        "href": "/services/wordpress-development/"
      },
      {
        "title": "Shopify Development",
        "description": "Shopify stores tailored to your products and customers.",
        "href": "/services/shopify-development/"
      },
      {
        "title": "Wix Development",
        "description": "Professional websites built and customized on Wix.",
        "href": "/services/wix-development/"
      }
    ]
  },
  {
    "title": "Software Development",
    "items": [
      {
        "title": "Custom Software Development",
        "description": "Purpose-built software for your business workflows.",
        "href": "/services/custom-software-development/"
      },
      {
        "title": "ERP Development",
        "description": "ERP systems that connect your core business operations.",
        "href": "/services/erp-development/"
      },
      {
        "title": "Web Application Development",
        "description": "Secure web applications designed around your needs.",
        "href": "/services/web-application-development/"
      },
      {
        "title": "Mobile App Development",
        "description": "Mobile apps for iOS and Android devices.",
        "href": "/services/mobile-app-development/"
      }
    ]
  },
  {
    "title": "Digital Marketing",
    "items": [
      {
        "title": "Social Media Marketing",
        "description": "Social campaigns that grow reach and engagement.",
        "href": "/services/social-media-marketing/"
      },
      {
        "title": "Search Engine Optimization",
        "description": "SEO to improve visibility in organic search.",
        "href": "/services/search-engine-optimization/"
      },
      {
        "title": "PPC Advertising",
        "description": "Targeted paid campaigns built around your goals.",
        "href": "/services/ppc-advertising/"
      },
      {
        "title": "Email Marketing",
        "description": "Email campaigns that reach and retain customers.",
        "href": "/services/email-marketing/"
      }
    ]
  },
  {
    "title": "Cybersecurity",
    "items": [
      {
        "title": "SOC 24/7",
        "description": "Round-the-clock security monitoring and response.",
        "href": "/services/soc-24-7/"
      },
      {
        "title": "MSSP",
        "description": "Managed security services for your organization.",
        "href": "/services/mssp/"
      },
      {
        "title": "Managed IT Services",
        "description": "Ongoing IT support and infrastructure management.",
        "href": "/services/managed-it-services/"
      },
      {
        "title": "VAPT",
        "description": "Vulnerability assessment and penetration testing.",
        "href": "/services/vapt/"
      },
      {
        "title": "Red Teaming",
        "description": "Adversary simulations to test security readiness.",
        "href": "/services/red-teaming/"
      }
    ]
  }
];

const productSections = [
  { title: "Computing & Peripherals", href: "/products/computing-peripherals/", items: [
    { title: "Computers & Computing Devices", description: "Computers and devices for work, business, and everyday use.", href: "/products/computing-peripherals/computers-computing-devices/" },
    { title: "Computer Components & Storage", description: "Components and storage to build, upgrade, and protect systems.", href: "/products/computing-peripherals/computer-components-storage/" },
    { title: "Computer Accessories & Peripherals", description: "Peripherals and accessories for productive workspaces.", href: "/products/computing-peripherals/computer-accessories-peripherals/" },
  ]},
  { title: "Networking & Connectivity", href: "/products/networking-connectivity/", items: [
    { title: "Networking Equipment", description: "Reliable equipment for wired business networks.", href: "/products/networking-connectivity/networking-equipment/" },
    { title: "Routers & Switches", description: "Routers and switches to connect and manage your network.", href: "/products/networking-connectivity/routers-switches/" },
    { title: "Wireless Connectivity", description: "Wireless solutions for secure, dependable connectivity.", href: "/products/networking-connectivity/wireless-connectivity/" },
    { title: "Cables & Connectivity Accessories", description: "Cabling and accessories for connected infrastructure.", href: "/products/networking-connectivity/cables-connectivity-accessories/" },
    { title: "CCTV & Surveillance", description: "Surveillance products to help monitor and secure sites.", href: "/products/networking-connectivity/cctv-surveillance/" },
  ]},
  { title: "Data Center Infrastructure", href: "/products/data-center-infrastructure/", items: [
    { title: "Prefabricated Data Centers", description: "Modular data center solutions designed for rapid deployment.", href: "/products/data-center-infrastructure/prefabricated-data-centers/" },
    { title: "Precision Air Conditioners", description: "Precision cooling to maintain data center conditions.", href: "/products/data-center-infrastructure/precision-air-conditioners/" },
    { title: "Mission Critical Power Systems", description: "Resilient power systems for critical IT environments.", href: "/products/data-center-infrastructure/mission-critical-power-systems/" },
    { title: "Liquid Cooling Systems", description: "Liquid cooling for high-density computing infrastructure.", href: "/products/data-center-infrastructure/liquid-cooling-systems/" },
    { title: "DCIM", description: "Tools to monitor and manage data center infrastructure.", href: "/products/data-center-infrastructure/dcim/" },
    { title: "IT Racks & Cabinets", description: "Racks and cabinets to organize and secure IT equipment.", href: "/products/data-center-infrastructure/it-racks-cabinets/" },
  ]},
  { title: "Cybersecurity", href: "/products/cybersecurity/", items: [
    { title: "Endpoint Protection", description: "Security solutions that protect user devices and endpoints.", href: "/products/cybersecurity/endpoint-protection/" },
    { title: "Cyber Threat Intelligence", description: "Threat insights to help teams anticipate cyber risks.", href: "/products/cybersecurity/cyber-threat-intelligence/" },
    { title: "Attack Surface Management", description: "Discover and manage exposed digital assets.", href: "/products/cybersecurity/attack-surface-management/" },
    { title: "Data Protection", description: "Solutions that help safeguard sensitive business data.", href: "/products/cybersecurity/data-protection/" },
    { title: "Breach & Attack Simulation", description: "Simulate attacks to evaluate your security controls.", href: "/products/cybersecurity/breach-attack-simulation/" },
    { title: "Integrity & Compliance Monitoring", description: "Monitor systems for integrity and compliance requirements.", href: "/products/cybersecurity/integrity-compliance-monitoring/" },
    { title: "Network Security", description: "Protect network traffic, access, and infrastructure.", href: "/products/cybersecurity/network-security/" },
    { title: "Secure Software Development", description: "Security tools and practices for the software lifecycle.", href: "/products/cybersecurity/secure-software-development/" },
  ]},
  { title: "Collaboration & Workplace", href: "/products/collaboration-workplace/", items: [
    { title: "Audio Visual Collaboration", description: "Audio and visual systems for connected meeting spaces.", href: "/products/collaboration-workplace/audio-visual-collaboration/" },
    { title: "Communication & Smart Office", description: "Smart office and communication solutions for teams.", href: "/products/collaboration-workplace/communication-smart-office/" },
    { title: "Zoom Video Conferencing", description: "Video conferencing solutions powered by Zoom.", href: "/products/collaboration-workplace/zoom-video-conferencing/" },
    { title: "AnyDesk Remote Access", description: "Remote access solutions for support and collaboration.", href: "/products/collaboration-workplace/anydesk-remote-access/" },
  ]},
  { title: "Printing & Security Systems", href: "/products/printing-security-systems/", items: [
    { title: "Printers, Scanners & Consumables", description: "Printing, scanning, and supplies for the workplace.", href: "/products/printing-security-systems/printers-scanners-consumables/" },
    { title: "POS, Barcode & Identification", description: "POS and identification systems for business operations.", href: "/products/printing-security-systems/pos-barcode-identification/" },
  ]},
];

const navLinks = [
  ["Industries", "/industries"],
  ["Careers", "/careers"],
  ["Clients", "/clients"],
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const closeTimer = useRef(null);
  const companyTimer = useRef(null);
  const subMenuTimer = useRef(null);

  /* ================= SCROLL DETECT ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= THEME INIT ================= */
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  /* ================= MENU HANDLERS ================= */
  const openServices = () => {
    clearTimeout(closeTimer.current);
    setProductsOpen(false);
    setServicesOpen(true);
  };

  const openProducts = () => { clearTimeout(closeTimer.current); setServicesOpen(false); setActiveSubMenu(null); setProductsOpen(true); };
  const closeProducts = () => { closeTimer.current = setTimeout(() => setProductsOpen(false), 200); };

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

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled ? "px-4 pt-3" : "px-0 pt-0"
      }`}
    >
      {/* ================= NAVBAR (full width -> pill on scroll) ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative mx-auto flex w-full items-center justify-between border backdrop-blur-2xl transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-7xl rounded-[40px] border-black/10 bg-white/75 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "max-w-[1920px] rounded-[0px] border-transparent border-b-black/10 bg-white/60 px-6 py-4 dark:border-b-white/10 dark:bg-white/[0.04] lg:px-10"
        }`}
      >
        {/* ================= LOGO ================= */}
        <Link href="/" aria-label="MMC Home" className="flex items-center gap-2 pl-1">
          <NextImage
            src="/images/MMC.webp"
            alt="MMC"
            width={150}
            height={50}
            priority
            className="logo-adaptive h-auto w-[120px] object-contain"
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
              onClick={() => { const nextOpen = !servicesOpen; setProductsOpen(false); setServicesOpen(nextOpen); }}
              className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-16 font-medium uppercase transition-colors duration-300 ${
                servicesOpen
                  ? "text-white"
                  : "text-paper/70 hover:text-signal"
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
                  <div className="mega-menu mt-3 overflow-hidden rounded-2xl border border-white/10 bg-ink/50 shadow-2xl backdrop-blur-2xl">
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
                                    <span className="mega-menu-content px-3 py-2">
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

                                  {/* ================= SUB-MENU ================= */}
                                  <AnimatePresence>
                                    {hasSubItems && activeSubMenu === itemKey && (
                                      <motion.div
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 z-50 ml-2 w-80 rounded-xl border border-black/10 bg-white shadow-2xl"
                                        onMouseEnter={() => openSubMenu(itemKey)}
                                        onMouseLeave={closeSubMenu}
                                      >
                                        <div className="p-2">
                                          {item.subItems.map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={subItem.href}
                                              className="block rounded-lg px-5 py-1.5 text-sm text-black transition-colors hover:bg-signal/10 hover:text-signal"
                                            >
                                              {subItem.title}
                                            </Link>
                                          ))}
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

          {/* PRODUCTS */}
          <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
            <button onClick={() => { const nextOpen = !productsOpen; setServicesOpen(false); setActiveSubMenu(null); setProductsOpen(nextOpen); }} className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-16 font-medium uppercase transition-colors duration-300 ${productsOpen ? "text-white" : "text-paper/70 hover:text-signal"}`} aria-expanded={productsOpen}>
              {productsOpen && <motion.span layoutId="nav-pill-products" className="absolute inset-0 rounded-full bg-signal" />}
              <span className="relative z-10">Products</span><span className="relative z-10 text-[10px]">▼</span>
            </button>
            <AnimatePresence>{productsOpen && <motion.div initial={{opacity:0,y:10,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.97}} transition={{duration:.2}} className="mega-menu-wrapper !left-1/2 !w-screen -translate-x-1/2" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
              <div className="mega-menu mt-3 w-full max-w-none max-h-[80vh] overflow-x-hidden overflow-y-auto rounded-2xl border border-black/10 bg-white p-6 text-black shadow-2xl"><div className="mega-menu-grid grid w-full max-w-none gap-6" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
                {productSections.map((section,index)=><div key={section.title} className={`mega-menu-column mega-column-${index}`}>
                  <Link href={section.href} className="mega-menu-title text-signal">{section.title}</Link><div className="mega-menu-line bg-signal/20"/>
                  <div className="mega-menu-items">{section.items.map((item,itemIndex)=><Link key={item.href} href={item.href} className="mega-menu-item rounded-lg transition-colors duration-200 hover:bg-signal/10" style={{animationDelay: `${itemIndex * 70}ms`}}><span className="mega-menu-content px-3 py-2"><span className="mega-menu-item-title"><span>{item.title}</span></span><span className="mega-menu-description">{item.description}</span></span></Link>)}</div>
                </div>)}
              </div></div>
            </motion.div>}</AnimatePresence>
          </div>

          {/* ================= OTHER NAV LINKS ================= */}
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium uppercase text-paper/70 transition-colors duration-300 hover:text-signal"
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
                companyOpen
                  ? "text-white"
                  : "text-paper/70 hover:text-signal"
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
                  <div className="w-44 overflow-hidden rounded-xl border border-black/10 bg-ink/95 py-2 text-paper shadow-2xl backdrop-blur-2xl dark:border-white/10">
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

        {/* ================= RIGHT SIDE: THEME TOGGLE + CTA ================= */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-paper/70 transition-colors hover:bg-signal/10 hover:text-signal"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && (
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.span>
              )}
            </AnimatePresence>
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
            className="mx-auto mt-2 flex max-w-7xl flex-col overflow-hidden rounded-2xl border border-black/10 bg-ink/95 px-6 py-4 text-paper backdrop-blur-2xl dark:border-white/10 lg:hidden"
          >
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} aria-expanded={mobileServicesOpen} className="flex w-full justify-between py-2 text-left text-sm">Services <span>{mobileServicesOpen ? "−" : "+"}</span></button>
            {mobileServicesOpen && <div className="max-h-72 overflow-y-auto border-l border-white/15 pl-3">{sections.map(section => <div key={section.title} className="py-2"><p className="pb-1 text-xs font-semibold uppercase tracking-wide text-signal">{section.title}</p>{section.items.map(item => <div key={item.href}><Link href={item.href} onClick={closeMobile} className="block py-1.5 text-sm">{item.title}</Link><p className="pb-2 text-xs text-paper/60">{item.description}</p></div>)}</div>)}</div>}
            <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} aria-expanded={mobileProductsOpen} className="flex w-full justify-between py-2 text-left text-sm">Products <span>{mobileProductsOpen ? "−" : "+"}</span></button>
            {mobileProductsOpen && <div className="max-h-72 overflow-y-auto border-l border-white/15 pl-3">{productSections.map(section => <div key={section.title} className="py-2"><Link href={section.href} onClick={closeMobile} className="block pb-1 text-xs font-semibold uppercase tracking-wide text-signal">{section.title}</Link>{section.items.map(item => <div key={item.href}><Link href={item.href} onClick={closeMobile} className="block py-1.5 text-sm">{item.title}</Link><p className="pb-2 text-xs text-paper/60">{item.description}</p></div>)}</div>)}</div>}

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
            <Link href="/contact-us" onClick={closeMobile} className="py-2 text-sm">
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}