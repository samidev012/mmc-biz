"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Infrastructure = [
  {
    title: "Adversary & Threat Landscape Intelligence",
    desc: "Delivers real-time insight into emerging threats and indicators of compromise, drawing on sources from dark web marketplaces to telemetry.",
    btn: "Go To Product",
  },
  {
    title: "Security Operations Intelligence",
    desc: "Adds context to alerts already flowing through a SOC, helping analysts prioritize what actually warrants attention.",
    btn: "Go To Product",
  },
  {
    title: "Investigation Tooling",
    desc: "Bundles everything known about a specific indicator or vulnerability into one reference point for starting an investigation.",
    btn: "Go To Product",
  },
  {
    title: "Geopolitical & Physical Risk Intelligence",
    desc: "Extends coverage beyond the digital environment, tracking events that could affect physical assets or business continuity.",
    btn: "Go To Product",
  },
];

const Specialized = [
  {
    title: "Attack Surface & Vulnerability Prioritization",
    desc: "Helps identify which technologies and vulnerabilities are actively being exploited, prioritizing by real-world targeting.",
    btn: "Go To Product",
  },
  {
    title: "Brand & Digital Risk Protection",
    desc: "Monitors for impersonation, leaked credentials, and brand abuse across the open and dark web.",
    btn: "Go To Product",
  },
    {
    title: "Payment Fraud Intelligence",
    desc: "A specialized module addressing fraud tied to payment systems, rounding out coverage of risks outside conventional detection.",
    btn: "Go To Product",
  },
 
    
];
export default function RecordedContent() {
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
             Knowing the Threat Before It Reaches You
            </h1>

            <p className="attom-hero-description">
Most security tools tell you what already happened inside your own environment. Recorded Future is built around the opposite question  what’s happening out there, across the open web, the dark web, and adversary infrastructure, before it ever becomes an incident.


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
            <h2 className="section-title uppercase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">About Recorded Future   </h2>
            <p className="section-description">
          Recorded Future is a Boston-headquartered company positioned as the largest dedicated threat intelligence provider in the industry, with a global footprint of offices and analysts. Its Intelligence Cloud platform indexes a broad span of internet sources open web, dark web, and technical feeds to build a continuously updated picture of adversaries, their infrastructure, and likely targets, used by both enterprises and government organizations..</p>
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
                src="/images/Recorded-Future-UPD.webp"
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
          Threat  <span className="highlight">  Intelligence    </span> & Investigation
          </h2> 
          <p>
            {" "}
At the core of the platform is a set of modules focused on understanding who's likely to target an organization,<br/> and giving analysts the tools to investigate faster once something looks suspicious.


</p>


     
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
           Exposure &   <span className="highlight">   Brand  </span> Protection
          </h2>
          <p>
            {" "}
Beyond watching adversaries, a second set of capabilities looks outward at how an organization itself appears from the outside <br/>where it's exposed, and where it's being impersonated or targeted directly.





          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
 