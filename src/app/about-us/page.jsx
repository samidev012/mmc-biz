
"use client";

import { HeartHandshake, Leaf, Lightbulb, Trophy, Repeat2, Scale, BarChart3, PenLine } from "lucide-react";
import VantaDotsBackground from "@/components/ParticlesBackground";
import { useState } from "react";

const applications = [
  { n: "01", title: "Integrity", desc: "We operate with honesty, transparency, and strong ethical principles building lasting trust with every client and partner we work with.", icon: HeartHandshake },
  { n: "02", title: "Sustainability", desc: "We're committed to sustainable practices across our operations and solutions, helping build a better future for our communities and environment.", icon: Leaf },
  { n: "03", title: "Innovation", desc: "We embrace creativity and continuously push forward, staying at the cutting edge of technology.", icon: Lightbulb },
  { n: "04", title: "Excellence", desc: "We hold ourselves to the highest standards, consistently delivering quality solutions and services that meet or exceed industry benchmarks.", icon: Trophy },
];

const certifications = ["P@SHA", "PSEB", "ISO 27001", "Govt. Registered"];

const principles = [
  { title: "Sidq — Truthfulness", desc: "Honest timelines, costs, and capabilities — every proposal and update is an act of truthfulness.", icon: Repeat2 },
  { title: "Adl — Justice", desc: "Every person in the chain — clients, team, partners — is treated with complete fairness.", icon: Scale },
  { title: "Khidmah — Service", desc: "Technology built at MMC is not just code, it is service to creation. We build things that help people live and work better.", icon: BarChart3 },
  { title: "Amanah — Trust", desc: "Every project is a sacred trust. We guard it with full commitment: meeting deadlines, protecting data, delivering what was promised.", icon: PenLine },
];

export default function AboutUs() {
  const [hoveredApp, setHoveredApp] = useState(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

  return (
    <>
      {/* Page title */}
      <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />
        <div className="relative z-10 animate-fade-in-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-signal/50 hover:bg-signal/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            Let&apos;s Talk
          </div>
          <h1 className="animate-fade-in-up text-5xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wider md:text-6xl" style={{ animationDelay: '100ms' }}>
            About Us
          </h1>
        </div>
      </section>

      {/* Applications */}
      <section className="px-6 py-20" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <div className="mx-auto">
          <h2 className="animate-fade-in text-center text-6xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-widest">
            Applications
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((a, idx) => (
              <div
                key={a.n}
                className="group relative overflow-hidden rounded-xl border border-line bg-black/40 p-6 transition-all duration-500 hover:border-signal/50 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)]"
                style={{ 
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredApp(idx)}
                onMouseLeave={() => setHoveredApp(null)}
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" 
                     style={{ background: 'radial-gradient(circle at center, rgba(0,102,255,0.3), transparent 70%)' }} 
                />
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-signal/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-steel transition-all duration-300 group-hover:text-signal">
                    {a.n}
                  </span>
                  <a.icon className={`h-5 w-5 text-signal transition-all duration-500 ${hoveredApp === idx ? 'rotate-12 scale-125' : ''}`} />
                </div>
                
                <h3 className="mt-4 text-xl font-semibold text-paper transition-all duration-300 group-hover:text-signal">
                  {a.title}
                </h3>
                
                <p className="mt-2 text-sm text-steel transition-all duration-300 group-hover:text-paper/80">
                  {a.desc}
                </p>

                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-signal transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line/50 pt-12 sm:grid-cols-4">
            {certifications.map((c, idx) => (
              <div 
                key={c} 
                className="group flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  animation: `fade-in 0.8s ease-out forwards`,
                  animationDelay: `${idx * 100 + 500}ms`,
                  opacity: 0
                }}
              >
                <span className="relative text-center font-mono text-sm font-semibold uppercase tracking-wide text-paper/70 transition-all duration-300 group-hover:text-signal">
                  {c}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-line px-6 py-20" style={{ background: "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)" }}>
        <div className="mx-auto text-center">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
            Who We Are
          </p>
          
          <h2 className="animate-fade-in-up mt-3 text-3xl font-bold text-paper uppercase transition-all duration-500 hover:tracking-wide md:text-6xl" style={{ animationDelay: '100ms' }}>
            Technology <span className="text-signal">That Moves</span> Your Business Forward
          </h2>
          
          <p className="animate-fade-in-up mx-auto w-3/4 max-w-4xl mt-5 text-sm leading-relaxed text-steel" style={{ animationDelay: '200ms' }}>
            MMC is a technology solutions and ICT services provider helping organizations
            build secure, connected, and future-ready digital environments. From
            enterprise infrastructure and cybersecurity to data centers, surveillance,
            software integration, and digital solutions, we combine technical expertise
            with trusted technologies to solve complex business challenges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Our Mission", "Our Vision", "Why Choose Us"].map((title, idx) => {
              const descriptions = [
                "To empower organizations with secure, reliable, and innovative technology solutions that improve operational efficiency, strengthen digital resilience, and support sustainable business growth.",
                "To become a trusted technology partner for organizations across Pakistan by delivering world-class ICT solutions, exceptional service, and innovative digital capabilities.",
                "We combine industry experience, technical expertise, trusted technology partnerships, and customer-focused support to deliver solutions built around your organization's real business requirements."
              ];
              
              return (
                <div 
                  key={title}
                  className="group relative overflow-hidden rounded-xl border border-line bg-black/40 p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-circuit/50 hover:bg-black/60 hover:shadow-[0_10px_40px_rgba(40,167,69,0.2)]"
                  style={{ 
                    animation: `fade-in-up 0.6s ease-out forwards`,
                    animationDelay: `${idx * 150 + 300}ms`,
                    opacity: 0
                  }}
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-circuit/5 blur-2xl transition-all duration-500 group-hover:bg-circuit/10" />
                  
                  <h3 className="relative text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-circuit">
                    {title}
                  </h3>
                  
                  <p className="relative mt-3 text-sm text-steel transition-colors duration-300 group-hover:text-paper/80">
                    {descriptions[idx]}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-circuit to-signal transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner ribbon */}
      <section className="border-t border-line px-6 py-16 text-center" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <h2 className="animate-fade-in mx-auto text-2xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
          Your trusted <span className="text-signal">partner</span> in digital transformation,
          helping <span className="text-signal">you stay ahead</span> of the competition
        </h2>
        
        <p className="animate-fade-in-up mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-steel" style={{ animationDelay: '200ms' }}>
          For over three decades, MMC has helped Pakistan&apos;s banks, regulators, and
          enterprises navigate an ever-changing technology landscape. From infrastructure
          and cybersecurity to surveillance and digital marketing, we combine deep
          technical expertise with dependable, long-term partnerships — so our clients
          can focus on growth while we handle the technology behind it.
        </p>
      </section>

      {/* Guiding Principles */}
      <section className="border-t border-line px-6 py-20" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <div className="mx-auto grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-fade-in">
            <h2 className="text-6xl font-bold uppercase leading-tight text-paper transition-all duration-500 hover:tracking-widest">
              Guiding
              <br />
              <span className="text-signal">Principles</span>
            </h2>
            
            <p className="mt-5 text-sm leading-relaxed text-steel">
              Our work is an act of Ibadah — worship through excellence, honesty, and
              service. We believe that building beneficial things with integrity is a
              path that pleases Allah (SWT).
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-xl border border-line bg-black/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-signal/50 hover:bg-black/60 hover:shadow-[0_10px_40px_rgba(0,102,255,0.2)]"
                style={{ 
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredPrinciple(idx)}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                {/* Glow effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-signal/5 blur-3xl transition-all duration-500 group-hover:bg-signal/15" />

                <span className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal transition-all duration-500 group-hover:scale-110 group-hover:bg-signal/25 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.5)] ${hoveredPrinciple === idx ? 'rotate-12' : ''}`}>
                  <p.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                </span>
                
                <h3 className="relative mt-4 font-semibold text-paper transition-colors duration-300 group-hover:text-signal">
                  {p.title}
                </h3>
                
                <p className="relative mt-2 text-sm text-steel transition-colors duration-300 group-hover:text-paper/80">
                  {p.desc}
                </p>

                {/* Animated corner accent */}
                <div className="absolute right-0 top-0 h-0 w-0 border-r-0 border-t-0 border-signal transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-r-2 group-hover:border-t-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
