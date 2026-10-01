"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Endpoint = [
  {
    title: "Essential Endpoint Defense",
    desc: "Simulate advanced adversaries to uncover security gaps and proactively strengthen your blue team.",
    btn: "Go To Product",
  },
  {
    title: "Endpoint Protection with Built-In Response",
    desc: "Conduct advanced, multi-phased penetration tests to exploit network, client-side, and web application vectors.",
    btn: "Go To Product",
  },
  {
    title: "Full-Spectrum Detection and Investigation",
    desc: "Use evasive tools across the attacker kill chain to emulate real-world attacks, bypass defenses, and assess resilience.",
    btn: "Go To Product",
  },
];

const Specialized = [
  {
    title: "Targeted Attack Detection",
    desc: "A unified platform built to catch advanced, targeted attacks that are specifically designed to evade conventional defenses — the kind of threat that a standard endpoint tool is least likely to catch on its own.",
    btn: "Go To Product",
  },
  {
    title: "Industrial Systems Protection",
    desc: "Secures industrial environments through purpose-built operational technology protection while maintaining safety, reliability, and continuous production availability across critical infrastructure.",
    btn: "Go To Product",
  },
    {
    title: "Threat Intelligence & Investigation Tooling",
    desc: "Provides actionable threat intelligence, investigation tools, and secure analysis capabilities supporting restricted environments, government agencies, and critical infrastructure organizations.",
    btn: "Go To Product",
  },
    {
    title: "Fraud and Availability Protection",
    desc: "Prevents online fraud, protects customer services, and defends infrastructure against distributed denial-of-service attacks, ensuring continuous business availability.",
    btn: "Go To Product",
  },
];
export default function KasperskyContent() {
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
              One Platform, Every Stage of the Threat Lifecycle
            </h1>

            <p className="attom-hero-description">
             Kaspersky’s portfolio scales from essential endpoint protection to full extended detection and response, alongside a set of specialized tools for industrial, fraud, and infrastructure-level threats.
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
            <h2 className="section-title uppercase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">The Company Behind the Portfolio</h2>
            <p className="section-description">
            Kaspersky is a global cybersecurity company founded in 1997, with threat research and protection now deployed across more than a billion devices worldwide. Its portfolio spans personal device protection through to enterprise-grade security and services, backed by an internal threat intelligence and research capability that continuously feeds new detection logic back into the products themselves.
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
                src="/images/Kaspersky.webp"
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
        className="px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Endpoint <span className="highlight">Protection & Extended </span> Detection
          </h2>
          <p>
            {" "}
           The core of the portfolio is a tiered line called Kaspersky Next <br/>that lets an organization pick a level of protection matched to its team size and security maturity, rather than being forced into a one-size-fits-all package.


          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Endpoint.map((E) => (
              <div
                key={E.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {E.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {E.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    
      <section
        className="px-6 py-10"
        style={{
          background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="animate-fade-in-up mt-3 mb-5 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            Specialized <span className="highlight"> Threat </span> & Infrastructure Defense
          </h2>
          <p>
            {" "}
            Beyond endpoint coverage, a set of purpose-built tools address risks that fall outside standard EDR/XDR targeted attacks, industrial environments, fraud, and availability threats.


          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Specialized.map((S) => (
              <div
                key={S.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {S.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {S.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
