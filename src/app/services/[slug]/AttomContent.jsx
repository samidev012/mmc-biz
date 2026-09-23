"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AttomContent() {
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

  // =========================
  // ATTOM PAGE SCHEMA
  // =========================
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mmc.biz.pk/services/attom/#service",
        url: "https://mmc.biz.pk/services/attom",
        name: "ATTOM Data Center Solutions",
        description:
          "ATTOM provides modular and prefabricated data center solutions, including precision cooling, mission-critical power, liquid cooling, DCIM, and IT rack and cabinet systems.",
        provider: {
          "@id": "https://mmc.biz.pk/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: "Modular Data Center Solutions",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mmc.biz.pk/services/attom/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mmc.biz.pk/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://mmc.biz.pk/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ATTOM",
            item: "https://mmc.biz.pk/services/attom",
          },
        ],
      },
    ],
  };

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
    <>
      {/* ================= JSON-LD SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="attom-page">
        {/* ================= ATTOM HERO SECTION ================= */}
        <section className="attom-hero">
          <div className="attom-hero-container">
            <motion.div
              className="attom-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity, scale }}
            >
              <h1 className="attom-hero-title">ATTOM TECHNOLOGIES</h1>

              <p className="attom-hero-description">
                We Build Modular Prefab Data Centers That Form The Foundation
                Of The Digital World Because We Believe The Future Belongs To
                Those Who Are Fully, Intelligently Connected.
              </p>
            </motion.div>

            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="form-title">
                Get A Free Security Posture Review
              </h2>

              <p className="form-subtitle">
                30-minute conversation with our vCISO team. No obligation, no
                sales pressure.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
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

        {/* ================= WHO WE ARE SECTION ================= */}
        <section className="who-we-are-section">
          <div className="container-split">
            <motion.div
              className="content-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">WHO WE ARE</span>

              <h2 className="section-title">
                DATA CENTERS FOR EFFICIENCY AND SUSTAINABILITY
              </h2>

              <p className="section-description">
                Healthcare, Finance, And Telecom Industries Have Unique
                Requirements To Build The Foundation For An Intelligent Digital
                Future. With Our In-House Design And Integration Capabilities,
                We Plan, Design, Manufacture, Deliver, Commission, And Operate
                Data Centers More Efficiently And Sustainably For Every Project
                We Take On.
              </p>

              <button className="btn-learn-more">LEARN MORE</button>
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

        {/* ================= AWARD SECTION ================= */}
        <section className="award-section">
          <div className="container-split reverse">
            <motion.div
              className="award-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/attom.webp"
                alt="AgileRax V2.0"
                width={500}
                height={500}
                className="award-product-image"
              />
            </motion.div>

            <motion.div
              className="award-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="award-label">AGILERAX V2.0</span>

              <h2 className="award-title">
                AGILERAX V2.0 WINS FRENCH DESIGN AWARD 2025
              </h2>

              <p className="award-description">
                ATTOM Has Won The Prestigious 2025 French Design Award For Its
                AgileRax V2.0 Modular Data Center Solution. Built On A
                LEGO-Style, Plug-And-Play Concept, It Integrates Power,
                Cooling, And Monitoring Into A Single System Achieving IP65
                Protection And A PUE Below 1.3 For Efficient, Sustainable Edge
                And AI Deployments.
              </p>

              <div className="award-actions">
                <button className="btn-primary">AWARD DETAILS</button>
                <button className="btn-secondary">PRODUCTS DETAILS</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <section className="products-section">
          <div className="products-grid">
            {productsData.map((product, index) => (
              <motion.div
                key={product.title}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
              >
                <h3 className="product-title">{product.title}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <button className="btn-read-more">READ MORE</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= INNOVATION SECTION ================= */}
        <section className="innovation-section">
          <motion.div
            className="innovation-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label green">
              CONTINUOUS INNOVATION
            </span>

            <h2 className="innovation-title">
              DESIGN AND DELIVER{" "}
              <span className="highlight">GREEN SUSTAINABLE DATA</span> CENTER
              INFRASTRUCTURES
            </h2>

            <p className="innovation-subtitle">
              Engineering Innovation Where It Matters Most Efficiency,
              Reliability, And Sustainability.
            </p>
          </motion.div>

          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>

                <h3 className="feature-title">{feature.title}</h3>

                <p className="feature-description">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section className="process-section">
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label green">OUR PROCESS</span>

            <h2 className="process-title">
              HOW CAN OUR <span className="highlight">TEAM HELP</span> YOU TO
              REACH YOUR GOALS
            </h2>
          </motion.div>

          <div className="process-grid">
            {processData.map((step, index) => (
              <motion.div
                key={step.title}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <h3 className="process-step-title">{step.title}</h3>

                <p className="process-step-description">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="cta-section">
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Design and Deliver Green Sustainable Data Center Infrastructures
            </h2>

            <p className="cta-description">
              Data Center Infrastructures
              <br />
              let our industry experts analyze your power, cooling and IT
              infrastructure needs and deliver a tailored, green,
              high-performance solution for your data center.
            </p>

            <button className="btn-cta">TALK TO OUR EXPERT</button>
          </motion.div>
        </section>
      </div>
    </>
  );
}

// ================= DATA =================

const productsData = [
  {
    title: "Prefabricated Data Centers",
    description:
      "Built on a deep understanding of business workload and site environment to deliver tailored solutions.",
  },
  {
    title: "Precision Air Conditioner",
    description:
      "High-precision 3D design, drawing on the best resources across our global supply chain.",
  },
  {
    title: "Mission Critical Power System",
    description:
      "Prefabricated manufacturing significantly shortens on-site construction and commissioning timelines.",
  },
  {
    title: "Liquid Cooling System",
    description:
      "Advanced cooling technology for high-density workloads.",
  },
  {
    title: "DCIM",
    description:
      "Data Center Infrastructure Management solutions.",
  },
  {
    title: "IT Rack & Cabinet System",
    description:
      "Optimized rack solutions for modern data centers.",
  },
];

const featuresData = [
  {
    icon: "🔧",
    title: "Fast Deployment",
    description:
      "ATTOM's Highly Prefabricated Modular Data Centers Feature A Distinctive LEGO-Style Design, With All Critical Systems Power, Cooling, Monitoring, And Security Deeply Integrated As Standardized Modules. Testing Starts At The Factory, Covering Power Distribution, Fire Protection, Connections, Enabling Rapid Installation And System Setup In As Little As Four Hours.",
  },
  {
    icon: "📋",
    title: "End-to-End",
    description:
      "From Initial Consultation And Solution Design Through Factory Prefabrication, On-Site Installation, Commissioning, And Long-Term Operation And Maintenance, ATTOM Delivers Comprehensive End-To-End Services That Cover The Entire Data Center Lifecycle.",
  },
  {
    icon: "🎯",
    title: "Next generation",
    description:
      "ATTOM's Next-Generation Modular Data Centers Integrate Advanced Liquid Cooling, Free Cooling, And Heat Recovery Technologies Through Deep Factory Prefabrication.",
  },
];

const processData = [
  {
    title: "Needs Assessment",
    description:
      "Built on a deep understanding of business workload and site environment to deliver tailored solutions.",
  },
  {
    title: "Custom Engineering",
    description:
      "High-precision 3D design, drawing on the best resources across our global supply chain.",
  },
  {
    title: "Rapid Deployment",
    description:
      "Prefabricated manufacturing significantly shortens on-site construction and commissioning timelines.",
  },
  {
    title: "Continuous Support",
    description:
      "24/7 digital monitoring keeps the system running at optimal energy efficiency at all times.",
  },
];