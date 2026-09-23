"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Infrastructure = [
  {
    title: "Next-Generation Antivirus (NGAV)",
    desc: "CrowdStrike Falcon Prevent uses AI-driven detection to block malware, ransomware, and fileless attacks before compromising organizational endpoints effectively.",
    btn: "Go To Product",
  },
  {
    title: "Endpoint Detection & Response (EDR)",
    desc: "Falcon Insight continuously monitors endpoints, analyzes behaviors, investigates suspicious activities, and enables rapid, efficient incident response by security teams.",
    btn: "Go To Product",
  },
  {
    title: "Extended Detection & Response (XDR)",
    desc: "CrowdStrike XDR correlates endpoint, identity, cloud, and third-party security data to improve threat detection and incident response capabilities.",
    btn: "Go To Product",
  },
  {
    title: "Threat Intelligence & Incident Response",
    desc: "Global threat intelligence and expert investigations help organizations understand emerging threats, accelerate response, and strengthen long-term cybersecurity resilience effectively.",
    btn: "Go To Product",
  },
];

const Specialized = [
  {
    title: "Cloud Workload Protection",
    desc: "Falcon Cloud Security monitors cloud workloads, identifies risks, strengthens security posture, and protects cloud resources against evolving cyber threats.",
    btn: "Go To Product",
  },
  {
    title: "Identity Threat Protection",
    desc: "Identity Protection detects compromised accounts, privilege misuse, and identity-based attacks while strengthening authentication and reducing organizational security risks effectively.",
    btn: "Go To Product",
  },
    {
    title: "Managed Detection & Response (MDR)",
    desc: "CrowdStrike Falcon Complete provides expert-managed threat hunting, continuous monitoring, and rapid incident response for uninterrupted organizational security operations.",
    btn: "Go To Product",
  },
  {
    title: "Security Operations & Analytics",
    desc: "Centralized dashboards and analytics deliver actionable insights into threats, endpoint health, and overall organizational cybersecurity posture for informed decision-making.",
    btn: "Go To Product",
  },
    
];
export default function CrowdContent() {
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
             AI-Powered Endpoint Protection & Cybersecurity Platform
            </h1>

            <p className="attom-hero-description">
Organizations face increasingly sophisticated cyber threats that target
endpoints, identities, cloud workloads, and critical business assets.
CrowdStrike delivers a cloud-native cybersecurity platform that combines
artificial intelligence, real-time threat intelligence, and advanced
threat detection to help organizations prevent, detect, and respond to
cyberattacks while simplifying security operations.
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
            <h2 className="section-title uppercase animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">About CrowdStrike   </h2>
            <p className="section-description">
          CrowdStrike is a global cybersecurity company best known for its
cloud-native Falcon platform. Its solutions include endpoint security,
identity protection, cloud security, threat intelligence, and managed
detection and response. Organizations across multiple industries rely on
CrowdStrike to strengthen cyber resilience through continuous
monitoring, AI-driven analytics, and proactive threat defense.</p>
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
                src="/images/securing-ai-platform-hp-optim.avif"
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
           Endpoint <span className="highlight">  Protection   </span> & Threat Detection
          </h2> 
          <p>
            {" "}
Modern endpoint security requires continuous visibility and intelligent protection against evolving cyber threats.<br/> CrowdStrike delivers integrated endpoint security capabilities that help organizations prevent attacks, detect malicious activity, and respond rapidly to incidents.

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
           Cloud  <span className="highlight">   Security    </span> & Identity Protection
          </h2>
          <p>
            {" "}
Modern organizations must secure cloud environments and user identities alongside endpoints.<br/> CrowdStrike provides cloud-native security capabilities that improve visibility, strengthen identity protection, and support secure digital operations.




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
