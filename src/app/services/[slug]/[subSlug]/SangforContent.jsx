"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Infrastructure = [
  {
    title: "Remote Access VPN",
    desc: "OpenVPN Access Server delivers secure connectivity through encrypted tunnels, supporting multiple authentication methods and flexible deployment options.",
    btn: "Go To Product",
  },
  {
    title: "Zero Trust Network Access",
    desc: "OpenVPN CloudConnexa verifies users and devices before granting access, minimizing exposure while improving security for hybrid work.",
    btn: "Go To Product",
  },
  {
    title: "Access Control & Identity Integration",
    desc: "OpenVPN integrates with identity providers to simplify user management, including multi-factor authentication and single sign-on.",
    btn: "Go To Product",
  },
  {
    title: "Secure Client Connectivity",
    desc: "OpenVPN offers secure client apps for Windows, macOS, Linux, and mobile, enabling encrypted connections from virtually any device.",
    btn: "Go To Product",
  },
];

const Specialized = [
  {
    title: "Site-to-Site Connectivity",
    desc: "OpenVPN enables encrypted connections between branch offices and data centers, keeping communication reliable while protecting data in transit.",
    btn: "Go To Product",
  },
  {
    title: "Centralized VPN Management",
    desc: "Administrators configure and monitor VPN deployments from one interface, improving efficiency and ensuring consistent policies.",
    btn: "Go To Product",
  },
    {
    title: "Monitoring & Connectivity Insights",
    desc: "OpenVPN provides visibility into connection status and network performance, supporting troubleshooting and ongoing optimization.",
    btn: "Go To Product",
  },
  {
    title: "High Availability & Scalability",
    desc: "OpenVPN supports scalable deployments with load balancing, helping maintain uptime across distributed environments.",
    btn: "Go To Product",
  },
    
];
export default function SangforContent() {
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
             Secure Remote Access & Zero Trust Connectivity
            </h1>

            <p className="attom-hero-description">
Organizations require secure connectivity that enables employees,
contractors, and partners to access business resources from anywhere
without compromising security. OpenVPN provides trusted VPN and Zero
Trust connectivity solutions that help organizations protect sensitive
data, secure remote access, and simplify network connectivity across
on-premises, cloud, and hybrid environments.
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
            <h2 className="section-title uppercase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">About OpenVPN</h2>
            <p className="section-description">
          OpenVPN is a cybersecurity company specializing in secure networking and
remote access solutions. Built on the widely adopted OpenVPN protocol,
its products help organizations establish encrypted connections between
users, devices, applications, and business networks. From small
businesses to large enterprises, OpenVPN supports secure access,
simplified deployment, and centralized management for modern distributed
workforces.</p>
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
                src="/images/Splunk.webp"
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
           Secure Remote Access<span className="highlight"> Remote   </span> Access
          </h2> 
          <p>
            {" "}
           Modern organizations need secure and reliable remote connectivity that protects users while maintaining productivity. OpenVPN provides <br/>  encrypted remote access solutions that allow employees to securely connect to business resources from virtually any location without exposing critical infrastructure.
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
           Network  <span className="highlight"> Connectivity   </span> & Management
          </h2>
          <p>
            {" "}
Managing secure connections across multiple offices, cloud platforms, and remote users requires centralized visibility and efficient administration. <br/>OpenVPN provides tools that simplify VPN deployment, monitoring, and ongoing management while maintaining secure communications.


          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
