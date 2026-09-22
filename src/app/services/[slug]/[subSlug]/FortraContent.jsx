"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Offensive = [
  {
    title: "Cobalt Strike",
    desc: "Simulate advanced adversaries to uncover security gaps and proactively strengthen your blue team.",
    btn: "Go To Product",
  },
  {
    title: "Core Impact",
    desc: "Conduct advanced, multi-phased penetration tests to exploit network, client-side, and web application vectors.",
    btn: "Go To Product",
  },
  {
    title: "Outflank Security Tooling",
    desc: "Use evasive tools across the attacker kill chain to emulate real-world attacks, bypass defenses, and assess resilience.",
    btn: "Go To Product",
  },
];
const Data = [
  {
    title: "Digital Guardian DLP",
    desc: "Comprehensive Data Loss Prevention for endpoints, network, and cloud.",
    btn: "Go To Product",
  },
  {
    title: "Data Classification Suite (Titus/Boldon James)",
    desc: "Tools to apply metadata and sensitivity labels to data to enhance protection policies.",
    btn: "Go To Product",
  },
  {
    title: "CASB",
    desc: "Security broker to control access, stop risky behavior, and monitor usage of cloud applications.",
    btn: "Go To Product",
  },
  {
    title: "DSPM",
    desc: "System to find, understand, and secure sensitive data posture across cloud environments (AWS, Azure, etc.).",
    btn: "Go To Product",
  },
  {
    title: "Secure Web Gateway (SWG)",
    desc: "Inspects and controls web traffic to block malicious content and prevent data leaks.",
    btn: "Go To Product",
  },
  {
    title: "Email Security (Agari/Clearswift)",
    desc: "Protects against advanced email threats like phishing, BEC, and ensures data compliance via email.",
    btn: "Go To Product",
  },
  {
    title: "Terranova Security (Human Risk Management)",
    desc: "Security awareness training to educate employees to detect and report cyber threats.",
    btn: "Go To Product",
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    desc: "Securely grants access to private applications based on verified identity and risk assessment.",
    btn: "Go To Product",
  },
];
const Infrastructure = [
  {
    title: "Fortra VM (Frontline VM)",
    desc: "Identify, prioritize, and remediate security weaknesses across the environment.",
    btn: "Go To Product",
  },
  {
    title: "Intermapper",
    desc: "Maps and monitors the entire IT environment for real-time network visibility and performance.",
    btn: "Go To Product",
  },
  {
    title: "Tripwire Enterprise",
    desc: "Tripwire Enterprise is a leading security configuration management (SCM) and file integrity monitoring (FIM) solution. It detects real-time infrastructure changes and compares them against hardened baselines to identify unauthorized modifications, ensuring continuous compliance with PCI DSS, HIPAA, and SOX.",
    btn: "Go To Product",
  },
  {
    title: "Tripwire IP360",
    desc: "Tripwire IP360 is a world-class vulnerability management system that provides a comprehensive view of network security risks. It automatically discovers all assets on the network and prioritizes vulnerabilities using a unique scoring system, allowing security teams to focus on the highest-risk assets first.",
    btn: "Go To Product",
  },
  {
    title: "Tripwire LogCenter",
    desc: "Tripwire LogCenter is a robust log management and security information and event management (SIEM) solution. It collects, analyzes, and correlates log data from across the enterprise to detect security threats and provide the necessary evidence for compliance auditing and forensic investigations.",
    btn: "Go To Product",
  },
  {
    title: "Active Threat Sweep (ATS)",
    desc: "Conduct advanced, multi-phased penetration tests to exploit network, client-side, and web application vectors.",
    btn: "Go To Product",
  },
];
const Application = [
  {
    title: "Web Application Scanning (WAS)",
    desc: "Fortra WAS (formerly part of the Outpost24 or Digital Defense families) is an automated vulnerability management solution specifically built to identify security flaws in web applications and APIs. It provides comprehensive scanning of the entire web surface area—including modern JavaScript frameworks and SPAs—to detect risks like SQL injection, Cross-Site Scripting (XSS), and misconfigured headers.",
    btn: "Go To Product",
  },
  {
    title: "BeSTORM DAST",
    desc: "BeSTORM is a powerful Dynamic Application Security Testing (DAST) and black-box tool. Unlike standard scanners that look for known vulnerabilities, BeSTORM performs exhaustive protocol-based testing to discover vulnerabilities. It works by sending millions of unexpected or malformed data inputs to an application or hardware device to see where it breaks, making it essential for high-security software development and IoT testing.",
    btn: "Go To Product",
  },
];
const Threat = [
  {
    title: "PhishLabs",
    desc: "Digital risk protection that monitors the surface, deep, and dark web to detect and take down phishing sites, brand impersonation, and compromised credentials.",
    btn: "Go To Product",
  },
  {
    title: "Fortra Threat Brain",
    desc: "An AI driven threat intelligence hub that correlates IOCs and telemetry across Fortra's product portfolio, delivering real time, actionable intelligence to strengthen detection and response.",
    btn: "Go To Product",
  },
];
export default function FortraContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="attom-page">
      {/* ================= FORTRA HERO SECTION ================= */}
      <section className="attom-hero">
        <div className="attom-hero-container">
          <motion.div
            className="attom-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <h1 className="attom-hero-title animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-\7xl">
              Security Built Around What Actually Matters
            </h1>

            <p className="attom-hero-description">
              One set of solutions covers both sides of security: stopping data
              leaks and catching attackers before damage.
            </p>
          </motion.div>

          {/* ================= CONTACT FORM ================= */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="form-title">Get A Free Security Posture Review</h2>

            <p className="form-subtitle">
              30-minute conversation with our vCISO team. No obligation, no
              sales pressure.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* ================= ROW 1 ================= */}
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              {/* ================= ROW 2 ================= */}
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              {/* ================= ROW 3 ================= */}
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  placeholder="Enter Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  rows="1"
                />
              </div>

              {/* ================= FORM ACTIONS ================= */}
              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  SUBMIT QUERY
                </button>

                <button type="button" className="btn-whatsapp">
                  <span className="whatsapp-icon">📱</span>
                  WHATSAPP
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="attom-hero-bg-animation"></div>
      </section>

      <section className="who-we-are-section">
        <div className="container-split">
          <motion.div
            className="content-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title upparcase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">Introduction</h2>
            <p className="section-description">
              Fortra has partnered with MMC to expand their product in to
              Pakistan. MMC is a Global company based out of Pakistan with more
              than 3 decades of experience of working with enterprise and public
              sector; Government of Abu Dhabi, ENOC, State Bank of Pakistan,
              Civil Aviation Authority, Nadra, FBR, Engro Foods, IBA University
              to name a few. Fortra (previously known as helpsystems) is a
              trusted name in cybersecurity with 20+ Products focused on
              security, 1000+ Global Employees, and 400+ internal threat
              researchers. Tripwire, Phishlabs, Cobalt Strike, Alert Logic,
              Digital Guardian, and Agari Email Security are some of the
              Products that are offered by Fortra.
            </p>
          </motion.div>

          <motion.div
            className="content-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              <Image
                src="/images/attom.webp"
                alt="ATTOM Building"
                width={600}
                height={400}
                className="section-image"
              />
              <div className="image-overlay">
                <p className="overlay-text">
                  struggles to meet future demands. Anuuru, driven by
                  innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FORTRA SOLUTIONS SECTION ================= */}
      <section
        className="border-b border-line px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Offensive <span className="highlight">Security</span> Solutions
          </h2>
          <p>
            {" "}
            Offensive security solutions expose security gaps before a breach
            ever occurs, proactively educating your blue team and saving your
            organization from costly, damaging breaches.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Offensive.map((O) => (
              <div
                key={O.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {O.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {O.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="border-b border-line px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Data <span className="highlight">Security</span>
          </h2>
          <p>
            {" "}
            Offensive security solutions expose security gaps before a breach
            ever occurs, proactively educating your blue team and saving your
            organization from costly, damaging breaches.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Data.map((D) => (
              <div
                key={D.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {D.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {D.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="border-b border-line px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Infrastructure<span className="highlight"> Protection</span>
          </h2>
          <p>
            {" "}
            Defensive security solutions support comprehensive security and
            continuous compliance with protection against advanced threats and
            human risk.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Infrastructure.map((I) => (
              <div
                key={I.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {I.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {I.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="border-b border-line px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Application <span className="highlight"> Security</span>
          </h2>
          <p>
            {" "}
            Defensive security solutions support comprehensive security and
            continuous compliance with protection against advanced threats and
            human risk.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Application.map((A) => (
              <div
                key={A.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {A.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {A.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="border-b border-line px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Threat <span className="highlight"> intelligence</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Threat.map((T) => (
              <div
                key={T.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {T.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {T.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
