"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Users,
  Headset,
  Megaphone,
  TrendingUp,
  HeartHandshake,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import VantaDotsBackground from "@/components/ParticlesBackground";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = {
  Collaboration: {
    icon: Users,
    tagline: "Keep teams connected, anywhere",
    points: [
      "Support hybrid and remote work: Keep global teams engaged with reliable video, chat, documents, and more.",
      "Seamless communication: Save time and cut costs with Meetings, Phone, Chat, and more, in one UCaaS platform.",
      "Keep workflows moving: From brainstorms to documents, Zoom helps teams cut friction and avoid stalls.",
      "Do more with AI: Built-in AI summarizes meetings and automates next steps, while ZoomMate goes further and generates quality assets like decks and docs.",
    ],
  },

  "Customer Support": {
    icon: Headset,
    tagline: "Resolve faster, delight every time",
    points: [
      "One platform, full context: Phone, chat, email, SMS, social, and video unified in a single view.",
      "Smarter automation: Virtual Agent handles multi-intent questions, so human agents can focus on high-value cases.",
      "Better self-service: Instant answers and proactive resolutions cut friction and drive loyalty.",
      "AI-powered support: Real-time suggestions, key action highlights, and task automation keep agents sharp.",
      "Get more from your data: CRM integration, real-time analytics, and conversation insights surface trends and improve CX.",
    ],
  },

  Marketing: {
    icon: Megaphone,
    tagline: "Engage audiences, build pipeline",
    points: [
      "Keep audiences engaged: Capture leads with branded webinars and events that build pipeline.",
      "Deliver stand-out experiences: Host polished, interactive events that reflect your brand.",
      "Broader reach and richer insights: Extend every event with virtual and hybrid options.",
      "Put busywork on auto-pilot with AI: Automate content, personalize outreach, and analyze performance faster.",
    ],
  },

  Sales: {
    icon: TrendingUp,
    tagline: "Sell smarter, close faster",
    points: [
      "Make selling easier: Eliminate admin work so reps can focus on building relationships.",
      "Boost productivity and win rates: Auto-summarized meetings, suggested follow-ups, and deal insights keep cycles short.",
      "Give RevOps deeper visibility: See pipeline insights and competitor trends for confident forecasting.",
      "Close with confidence: Agentic AI flags risks, coaches reps, and automates next steps.",
    ],
  },

  "Employee Engagement": {
    icon: HeartHandshake,
    tagline: "Build culture across every team",
    points: [
      "Foster community in hybrid teams: Get company-wide updates, recognition, and social feeds that connect remote employees.",
      "Create immersive experiences: Host interactive all-hands, learning sessions, and celebrations teams love.",
      "Communicate on your schedule: Share video updates asynchronously — no extra meetings.",
      "Reinforce culture and recognition: Celebrate wins, milestones, and initiatives with rich media and live events.",
      "Measure engagement to improve: Track participation with analytics from Events, Clips, and Workvivo.",
    ],
  },
};

const tabs = Object.keys(categories);

/* =========================================================
   MOTION BACKGROUND
========================================================= */

function MotionBackground() {
  const particles = Array.from({ length: 28 });

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
      }}
    >
      {/* Main glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top left glow */}
      <motion.div
        className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[100px]"
        animate={{
          x: [0, 80, 20, 0],
          y: [0, 60, 120, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom right glow */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[100px]"
        animate={{
          x: [0, -100, -40, 0],
          y: [0, -70, -130, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {particles.map((_, index) => {
        const left = `${(index * 37) % 100}%`;
        const top = `${(index * 61) % 100}%`;

        return (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-signal/60"
            style={{
              left,
              top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, index % 2 === 0 ? 15 : -15, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Horizontal light line */}
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-signal/30 to-transparent"
        animate={{
          opacity: [0.1, 0.5, 0.1],
          scaleX: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ZoomContent() {
  const [activeTab, setActiveTab] = useState("Collaboration");

  const current = categories[activeTab];
  const Icon = current.icon;

  /* =========================================================
     ZOOM SCHEMA
  ========================================================= */

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mmc.biz.pk/services/zoom/#service",
        url: "https://mmc.biz.pk/services/zoom",
        name: "Zoom Collaboration Solutions | MMC",
        description:
          "MMC provides Zoom collaboration solutions for meetings, phone, chat, events, customer support, marketing, sales, and employee engagement.",
        provider: {
          "@id": "https://mmc.biz.pk/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: "Zoom Collaboration and Communication Solutions",
      },

      {
        "@type": "ItemList",
        "@id": "https://mmc.biz.pk/services/zoom/#categories",
        name: "Zoom Business Solutions",
        numberOfItems: tabs.length,
        itemListElement: tabs.map((tab, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tab,
          description: categories[tab].tagline,
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://mmc.biz.pk/services/zoom/#breadcrumb",
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
            name: "Zoom",
            item: "https://mmc.biz.pk/services/zoom",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* =====================================================
          JSON-LD SCHEMA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />

        <div className="relative z-10 animate-fade-in-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-signal/50 hover:bg-signal/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            Let&apos;s Talk
          </div>

          <h1
            className="animate-fade-in-up text-5xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wider md:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Zoom
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-signal to-transparent" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-paper/60 sm:text-base">
            One platform for meetings, phone, chat, and events built for how
            modern teams actually work.
          </p>

          <Link
            href="/contact-us"
            className="group relative overflow-hidden rounded-full border border-signal bg-signal/10 px-10 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
          >
            Talk To Our Experts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section
        className="relative overflow-hidden px-6 py-20"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[120px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Built For Every Team
            </span>

            <h2 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
              Made For <span className="text-signal">Your</span> Workflow
            </h2>
          </motion.div>

          {/* Tabs */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2 rounded-full border border-line bg-white/[0.03] p-1.5 backdrop-blur-sm"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-signal text-white shadow-[0_0_20px_-4px_rgba(0,102,255,0.7)]"
                    : "text-steel hover:text-paper"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Content */}

          <div className="mx-auto mt-10 overflow-hidden rounded-2xl border border-signal/20 bg-white/[0.02] p-8 text-left backdrop-blur-sm md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 30,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {/* Category heading */}

                <div className="flex items-center gap-4">
                  <motion.span
                    initial={{
                      scale: 0.7,
                      rotate: -20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.span>

                  <div>
                    <h3 className="text-2xl font-bold text-paper">
                      {activeTab}
                    </h3>

                    <p className="text-sm text-steel">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                {/* Points */}

                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {current.points.map((point, i) => {
                    const [label, ...rest] = point.split(":");

                    const desc = rest.join(":").trim();

                    return (
                      <motion.li
                        key={point}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.08,
                        }}
                        whileHover={{
                          y: -4,
                        }}
                        className="group flex items-start gap-3 rounded-lg border border-line bg-white/[0.02] p-4 transition-colors duration-300 hover:border-signal/40 hover:bg-signal/[0.03]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal transition-transform duration-300 group-hover:scale-125" />

                        <p className="text-sm leading-relaxed text-steel">
                          <span className="font-semibold text-paper">
                            {label}:
                          </span>{" "}
                          {desc || point}
                        </p>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <Testimonials />
    </>
  );
}