"use client";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus, Sparkles } from "lucide-react";
import VantaDotsBackground from "@/components/ParticlesBackground";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Headset,
  MonitorSmartphone,
  ShieldCheck,
  Home,
  Smartphone,
  Wand2,
  Check,
} from "lucide-react";


const needs = [
  {
    num: "01",
    icon: Users,
    title: "Collaboration",
    desc: "Bring teams into one shared view. Chat before and during sessions, highlight details on the screen, or record for later reference. Stay aligned and keep work moving in one place.",
  },
  {
    num: "02",
    icon: Headset,
    title: "Assistance",
    desc: "Resolve issues with no interruption. Connect, diagnose, and guide users with responsive controls. Keep operations moving.",
  },
  {
    num: "03",
    icon: MonitorSmartphone,
    title: "Access",
    desc: "Keep your workspace within reach. Open files, launch apps, and continue tasks across platforms with smooth, lightweight access.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Security",
    desc: "Encrypt connections, control permissions, add SSO and 2FA, or choose between Cloud and On-Premises deployments. Protect access and stay in control.",
  },
];

const environment = [
  {
    icon: Home,
    title: "Runs in Cloud or On-Premises",
    desc: "Choose our cloud solution to benefit from our infrastructure and service or install on your own servers and work completely independently.",
  },
  {
    icon: Smartphone,
    title: "Full Mobile Support",
    desc: "Access and control desktops, servers, machines, and devices via smartphone or tablet. Cross-compatible and platform independent.",
  },
  {
    icon: Wand2,
    title: "Flexibility & customization",
    desc: "Create your own version of AnyDesk and fit it to your individual needs. Allow a consistent brand experience for your users.",
  },
];

const plans = {
  Solo: {
    subtitle: "Individual use, perfect starting plan",
    badge: "1 licensed user",
    features: [
      "3 registered devices to connect from",
      "Up to 100 managed devices (Unattended Access)",
      "Unlimited devices to connect to (Interactive Access)",
      "Feature set for individuals",
      "Mobile device support",
    ],
  },
  Standard: {
    subtitle: "Comprehensive feature set for small teams",
    badge: "20 licensed users in a team",
    features: [
      "Up to 500 managed devices (Unattended Access)",
      "Unlimited devices to connect to (Interactive Access)",
      "Standard user management",
      "Custom client generator",
      "Mobile device management included",
    ],
  },
  Advanced: {
    subtitle: "Advanced control for growing organizations",
    badge: "50 licensed users in a team",
    features: [
      "Up to 1000 managed devices (Unattended Access)",
      "Unlimited devices to connect to (Interactive Access)",
      "Advanced user management",
      "Custom client generator",
      "Command line interface",
      "Mass deployment (MSI)",
    ],
  },
  Ultimate: {
    subtitle: "Trusted remote solution for maximum security and premium customization",
    badge: "Unlimited licensed users",
    features: [
      "Single Sign-On (SSO)",
      "Advanced user management",
      "On-Premises option",
      "Scalable number of users",
      "Fully customizable",
      "Full access control features",
      "Mass deployment (MSI)",
    ],
  },
};

const planTabs = ["Solo", "Standard", "Advanced", "Ultimate"];

export default function AnydeskContent() {
  const [activePlan, setActivePlan] = useState("Standard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ selected plan yahan formData ke saath automatically chala jata hai
    const payload = { ...formData, selectedPlan: activePlan };
    console.log("Form submitted:", payload);
    setSubmitted(true);
  };

  const current = plans[activePlan];

  return (
    <>
    <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />
        <div className="relative z-10 animate-fade-in-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-signal/50 hover:bg-signal/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            Let&apos;s Talk
          </div>
          <h1 className="animate-fade-in-up text-5xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wider md:text-6xl" style={{ animationDelay: '100ms' }}>
            Anydesk
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-signal to-transparent" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-paper/60 sm:text-base">
           Fast, secure remote access  built for teams that can&rsquo;t afford downtime.
          </p>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,102,255,0.45)]"
          >
            Talk To Our Experts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
      </section>
      {/* ================= HERO ================= */}
     
     

      {/* ================= FITS YOUR ENVIRONMENT ================= */}
      <section
        className="border-b border-line px-6 py-16"
        style={{ background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)" }}
      >
        <h2 className="animate-fade-in-up mt-3 text-center text-3xl font-bold text-paper transition-all uppercase duration-500 hover:tracking-wide md:text-6xl">
          AnyDesk <span className="text-signal">Fits Your</span> Needs. And Your{" "}
          <span className="text-signal">Environment</span>
        </h2>

        <div className="mx-auto mt-12 grid gap-6 lg:grid-cols-3">
          {environment.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-line bg-white/[0.03] p-8 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.desc}</p>
              <button className="mt-5 text-xs font-semibold uppercase tracking-wide text-signal hover:text-signal/70">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRICING + FORM ================= */}
      <section className="bg-black px-6 py-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Pricing
          </span>
          <h2 className="animate-fade-in-up mt-3 text-3xl font-bold text-paper transition-all uppercase duration-500 hover:tracking-wide md:text-6xl">
            Choose <span className="text-signal">Your</span> Plan
          </h2>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-10 flex max-w-300 flex-wrap justify-center gap-2 rounded-full border border-line bg-white/[0.03] p-1.5">
          {planTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePlan(tab)}
              className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                activePlan === tab
                  ? "bg-signal text-white shadow-[0_0_20px_-4px_rgba(0,102,255,0.7)]"
                  : "text-steel hover:text-paper"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plan + Form */}
        <div className="mx-auto mt-10 overflow-hidden rounded-2xl border border-signal/20 bg-white/[0.02]">
          <div className="grid lg:grid-cols-2">
            {/* Plan details — animates on tab switch */}
            <div className="border-b border-line p-8 md:p-12 lg:border-b-0 lg:border-r">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-paper">{activePlan}</h3>
                  <p className="mt-2 text-sm text-steel">{current.subtitle}</p>

                  <span className="mt-4 inline-block rounded-full border border-signal/40 bg-signal/10 px-4 py-1.5 text-xs font-semibold text-signal">
                    {current.badge}
                  </span>

                  <ul className="mt-6 space-y-3">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-steel">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-paper">
                Get A Free Security Posture Review
              </h3>
              <p className="mt-2 text-sm text-steel">
                30-minute conversation with our vCISO team. No obligation, no sales
                pressure.
              </p>

              {/* ✅ Selected plan clearly dikhta hai — form ke saath jayega */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-1.5 text-xs font-medium text-signal">
                Selected Plan: <span className="font-bold">{activePlan}</span>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-signal/30 bg-signal/10 p-6 text-center">
                  <p className="text-sm text-paper">
                    Thanks! Your request for the <strong>{activePlan}</strong> plan has
                    been received. Our team will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter Your Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                    />
                    <input
                      type="text"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-steel/60 focus:border-signal focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 rounded-md bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-white/90"
                    >
                      Submit Query
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded-md bg-signal px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-signal/90"
                    >
                      WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}