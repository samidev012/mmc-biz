"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Infrastructure = [
  {
    title: "Network Performance Monitoring",
    desc: "Servers and infrastructure require continuous monitoring to ensure reliable service delivery. SolarWinds tracks system health, resource utilization, storage, and service availability, allowing administrators to detect potential issues early and optimize infrastructure performance.",
    btn: "Go To Product",
  },
  {
    title: "Server & Infrastructure Monitoring",
    desc: "As organizations expand into cloud and hybrid environments, maintaining visibility becomes more complex. SolarWinds provides unified monitoring across on-premises and cloud resources, giving administrators a consistent view of infrastructure performance from a single dashboard.",
    btn: "Go To Product",
  },
  {
    title: "Cloud & Hybrid Monitoring",
    desc: "As organizations expand into cloud and hybrid environments, maintaining visibility becomes more complex. SolarWinds provides unified monitoring across on-premises and cloud resources, giving administrators a consistent view of infrastructure performance from a single dashboard.",
    btn: "Go To Product",
  },
];

const Specialized = [
  {
    title: "Intelligent Alerting",
    desc: "Configurable alerts notify administrators when important performance or availability thresholds are reached. Intelligent notifications reduce unnecessary alerts while ensuring critical issues receive immediate attention.",
    btn: "Go To Product",
  },
  {
    title: "Performance Analytics",
    desc: "Interactive dashboards and historical analytics help IT teams identify trends, measure infrastructure performance, and uncover recurring issues. These insights support faster troubleshooting and continuous operational improvement.",
    btn: "Go To Product",
  },
    {
    title: "Reporting & Capacity Planning",
    desc: "Comprehensive reports summarize infrastructure health, utilization, and long-term performance trends. Historical data helps organizations forecast future capacity requirements and make informed planning decisions as their environments continue to grow.",
    btn: "Go To Product",
  },
    
];
export default function SolarContent() {
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
              Complete IT Infrastructure Monitoring & Observability
            </h1>

            <p className="attom-hero-description">
             Modern organizations rely on interconnected networks, servers,
applications, databases, and cloud platforms to keep business operations
running smoothly. SolarWinds provides a centralized observability
platform that gives IT teams real-time visibility into the health,
availability, and performance of their infrastructure. By combining
monitoring, analytics, and intelligent alerting, organizations can
identify issues earlier, reduce downtime, and maintain reliable IT
services across on-premises, cloud, and hybrid environments.
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
            <h2 className="section-title uppercase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">About SolarWinds</h2>
            <p className="section-description">
            SolarWinds is a provider of IT operations and observability solutions
designed to simplify infrastructure management. Its portfolio helps
organizations monitor networks, servers, applications, databases, and
cloud resources through a unified platform. Trusted by businesses,
public-sector organizations, and managed service providers, SolarWinds
enables IT teams to improve operational visibility, streamline
troubleshooting, and support long-term infrastructure reliability.</p>
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
                src="/images/SolarWind.webp"
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
            Infrastructure <span className="highlight"> Monitoring </span> 
          </h2>
          <p>
            {" "}
           SolarWinds monitors routers, switches, firewalls, wireless devices, and other network components in real time. Performance metrics, availability monitoring, <br/> and historical reporting help IT teams identify bottlenecks quickly, reduce troubleshooting time, and maintain stable network operations.</p>




     
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
            Operational  <span className="highlight"> Intelligence </span> 
          </h2>
          <p>
            {" "}
            SolarWinds monitors routers, switches, firewalls, wireless devices, and other network components in real time. Performance metrics, availability monitoring,<br/> and historical reporting help IT teams identify bottlenecks quickly, reduce troubleshooting time, and maintain stable network operations.




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
