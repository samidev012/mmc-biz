"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Minus, Sparkles } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import VantaDotsBackground from "@/components/ParticlesBackground";

const industries = [
  {
    title: "Banking",
    image: "/images/banking.png",
    description:
      "Secure, scalable technology solutions designed for banks and financial institutions.",
    points: [
      "Cybersecurity & compliance",
      "Data center infrastructure",
      "Digital transformation",
    ],
  },
  {
    title: "Finance",
    image: "/images/finance.png",
    description:
      "Technology infrastructure that helps financial organizations operate securely and efficiently.",
    points: [
      "Secure infrastructure",
      "Business continuity",
      "Network & cloud solutions",
    ],
  },
  {
    title: "Healthcare",
    image: "/images/healthcare.png",
    description:
      "Reliable technology solutions supporting modern healthcare environments and critical operations.",
    points: [
      "Secure healthcare networks",
      "Surveillance systems",
      "Infrastructure solutions",
    ],
  },
  {
    title: "Government",
    image: "/images/government.png",
    description:
      "Secure and resilient technology infrastructure for government organizations and public institutions.",
    points: [
      "Cybersecurity",
      "Data center solutions",
      "Network infrastructure",
    ],
  },
  {
    title: "Energy",
    image: "/images/energy.png",
    description:
      "Technology solutions designed for the demanding infrastructure requirements of the energy sector.",
    points: [
      "Industrial networking",
      "Security solutions",
      "Infrastructure monitoring",
    ],
  },
  {
    title: "Manufacturing",
    image: "/images/manufacturing.png",
    description:
      "Connected and secure infrastructure helping manufacturing organizations improve operations.",
    points: [
      "Industrial connectivity",
      "Network security",
      "Digital infrastructure",
    ],
  },
  {
    title: "Education",
    image: "/images/education.png",
    description:
      "Reliable digital infrastructure for educational institutions, campuses and learning environments.",
    points: [
      "Campus networking",
      "Security systems",
      "Digital infrastructure",
    ],
  },
  {
    title: "Fashion",
    image: "/images/fashion.png",
    description:
      "Technology solutions supporting modern fashion businesses, retail operations and digital workflows.",
    points: [
      "Retail technology",
      "Network infrastructure",
      "Security solutions",
    ],
  },
  {
    title: "Logistics",
    image: "/images/logistics.png",
    description:
      "Connected infrastructure helping logistics organizations manage operations, security and connectivity.",
    points: [
      "Warehouse connectivity",
      "Surveillance",
      "Network infrastructure",
    ],
  },
  {
    title: "Real Estate",
    image: "/images/real-estate.png",
    description:
      "Technology infrastructure for connected buildings, commercial spaces and modern property operations.",
    points: [
      "Smart infrastructure",
      "CCTV & surveillance",
      "Network solutions",
    ],
  },
  {
    title: "Travel",
    image: "/images/travel.png",
    description:
      "Technology solutions helping travel organizations deliver secure and connected experiences.",
    points: [
      "Network infrastructure",
      "Security systems",
      "Digital connectivity",
    ],
  },
  {
    title: "Retail",
    image: "/images/retail.png",
    description:
      "Secure and scalable technology infrastructure supporting modern retail environments.",
    points: [
      "Retail networking",
      "Surveillance",
      "Digital infrastructure",
    ],
  },
  {
    title: "Agriculture",
    image: "/images/agriculture.png",
    description:
      "Connected technology infrastructure supporting smarter agricultural operations and facilities.",
    points: [
      "Connectivity",
      "Monitoring systems",
      "Infrastructure security",
    ],
  },
  {
    title: "Automotive",
    image: "/images/automotive.png",
    description:
      "Technology infrastructure supporting automotive businesses, facilities and connected operations.",
    points: [
      "Secure networking",
      "Surveillance",
      "Infrastructure solutions",
    ],
  },
  {
    title: "FMCG",
    image: "/images/supermarket.png",
    description:
      "Reliable technology solutions helping FMCG organizations connect their operations securely.",
    points: [
      "Network infrastructure",
      "Security",
      "Business connectivity",
    ],
  },
  {
    title: "Insurance",
    image: "/images/insurance.png",
    description:
      "Secure infrastructure and technology solutions for insurance organizations and their digital operations.",
    points: [
      "Cybersecurity",
      "Data protection",
      "Business continuity",
    ],
  },
  {
    title: "Telecom",
    image: "/images/telecom.png",
    description:
      "High-performance infrastructure supporting modern telecommunications and connected environments.",
    points: [
      "Network infrastructure",
      "Data centers",
      "Cybersecurity",
    ],
  },
  {
    title: "Oil & Gas",
    image: "/images/oil&gas.png",
    description:
      "Resilient technology infrastructure for critical oil and gas operations and facilities.",
    points: [
      "Industrial networking",
      "Security systems",
      "Infrastructure monitoring",
    ],
  },
  {
    title: "Technology",
    image: "/images/technology.png",
    description:
      "Modern infrastructure solutions for technology companies and digitally driven organizations.",
    points: [
      "Cloud & data centers",
      "Cybersecurity",
      "Network infrastructure",
    ],
  },
];

const faqs = [
  {
    question: "Have a Technology Challenge?",
    answer:
      "Our team can help you identify the right infrastructure, cybersecurity, networking and technology solutions for your organization.",
  },
  {
    question: "What technology solutions does MMC provide?",
    answer:
      "MMC provides cybersecurity, data center, networking, surveillance, infrastructure and technology solutions across multiple industries.",
  },
  {
    question: "Can MMC design solutions for our industry?",
    answer:
      "Yes. Solutions can be structured around the operational, security and infrastructure requirements of different industries.",
  },
  {
    question: "Do you provide end-to-end implementation?",
    answer:
      "MMC can support organizations across solution planning, infrastructure deployment and technology implementation.",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`industry-reveal ${visible ? "industry-reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Industries() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">

      {/* ================= HERO ================= */}
<section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />
        <div className="relative z-10 animate-fade-in-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-signal/50 hover:bg-signal/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            Let&apos;s Talk
          </div>
          <h1 className="animate-fade-in-up text-5xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wider md:text-6xl" style={{ animationDelay: '100ms' }}>
            Industries
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-signal to-transparent" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-paper/60 sm:text-base">
            Delivering secure, scalable and intelligent technology solutions
            designed around the unique requirements of modern industries.
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

      {/* ================= INDUSTRIES ================= */}

      <section className="relative bg-ink px-6 py-20 lg:px-8 lg:py-28">

        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,.16),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(0,180,120,.10),transparent_28%)]" />
        </div>

        <div className="relative mx-auto">

          <Reveal className="mb-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal">
              Where We Work
            </p>

            <h2 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
              Technology <span className="highlight">Built Around</span> Your Industry
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-paper/50">
              Explore how our infrastructure, cybersecurity and technology
              solutions support organizations across different sectors.
            </p>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">

            {industries.map((industry, index) => {
              const reverse = index % 2 !== 0;

              return (
                <Reveal key={industry.title} delay={index * 40}>
                  <article
                    className={`group relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >

                    {/* image */}

                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#07152d] p-[1px]">

                      <div className="absolute -inset-1 bg-gradient-to-r from-signal/0 via-signal/30 to-emerald-400/0 opacity-0 blur-xl transition duration-700 group-hover:opacity-100" />

                      <div className="relative aspect-[16/9] overflow-hidden rounded-[11px]">

                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-transparent to-signal/10 opacity-70" />

                        <div className="absolute inset-0 bg-signal/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                        <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                          Industry {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* content */}

                    <div className="relative">

                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-signal transition-all duration-500 group-hover:w-16" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-signal">
                          Solutions
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-signal sm:text-3xl">
                        {industry.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-paper/55">
                        {industry.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {industry.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-3 text-xs text-paper/70"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,.8)]" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact-us"
                        className="mt-7 inline-flex items-center gap-2 rounded-md border border-signal/50 bg-signal/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_25px_rgba(0,102,255,.3)]"
                      >
                        Explore Solutions
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                  </article>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <FAQ/>

      {/* ================= CTA ================= */}

      

      {/* ================= ANIMATION CSS ================= */}

      <style jsx global>{`
        .industry-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            linear-gradient(rgba(0, 102, 255, 0.08) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(0, 102, 255, 0.08) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          animation: gridMove 18s linear infinite;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .industry-orb {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .industry-orb-one {
          left: -150px;
          top: 20%;
          background: rgba(0, 102, 255, 0.13);
          animation: orbFloat 8s ease-in-out infinite;
        }

        .industry-orb-two {
          right: -150px;
          bottom: 0;
          background: rgba(0, 180, 120, 0.08);
          animation: orbFloat 10s ease-in-out infinite reverse;
        }

        .industry-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay);
        }

        .industry-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes gridMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(55px);
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(30px, -30px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-grid-bg,
          .industry-orb {
            animation: none;
          }

          .industry-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
      <Footer />
    </main>
    
    
  );
}