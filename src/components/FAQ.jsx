
"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Which companies and industries does MMC serve?",
    a: "MMC provides technology and ICT solutions for banks, financial institutions, regulators, enterprises, corporate organizations, and other businesses that require reliable and secure technology infrastructure.",
  },
  {
    q: "Does MMC provide complete data center solutions?",
    a: "Yes — from infrastructure planning and deployment to security, cabling, and ongoing operational support for mission-critical environments.",
  },
  {
    q: "Can MMC help improve our organization's cybersecurity?",
    a: "Yes — MMC delivers threat protection, security monitoring, VAPT, and managed security services to strengthen your organization's security posture.",
  },
  {
    q: "Can MMC provide customized technology solutions?",
    a: "Yes — our custom software and AI team builds tailored applications and integrations around your specific business requirements.",
  },
  {
    q: "Does MMC provide hardware and infrastructure solutions?",
    a: "Yes — enterprise hardware, networking, and ICT infrastructure sourced and deployed for reliable, scalable environments.",
  },
  {
    q: "How can I contact MMC for a technology solution?",
    a: "Reach out through the Contact Us page or call our team directly — we'll schedule a discovery call to understand your requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="relative overflow-hidden border-t border-line px-6 py-24"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #0a1a2e 0%, #060d1a 50%, #000000 100%)",
      }}
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,102,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,102,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            animation: 'grid-move 25s linear infinite'
          }}
        />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-signal/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/3 h-96 w-96 animate-float-slower rounded-full bg-circuit/5 blur-3xl" />

      <div className="relative mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Left column */}
        <div className="animate-fade-in">
          <h2 className="animate-fade-in-up text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
            <span className="relative inline-block text-signal">
              Frequently
              <span className="absolute -bottom-1 left-0 h-1 w-0 bg-signal transition-all duration-700 group-hover:w-full" />
            </span>
            {" "}
            <span className="text-paper">Asked</span>
            <br />
            <span className="text-paper">Questions</span>
          </h2>

          <div 
            className="group relative mt-8 overflow-hidden rounded-2xl border border-signal/40 bg-gradient-to-b from-[#0a1128]/60 to-black p-8 transition-all duration-500 hover:border-signal/60 hover:shadow-[0_0_40px_rgba(0,102,255,0.25)]"
            style={{ 
              animation: 'fade-in-up 0.8s ease-out forwards',
              animationDelay: '200ms',
              opacity: 0
            }}
          >
            {/* Animated glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            
            {/* Corner accent */}
            <div className="absolute left-0 top-0 h-0 w-0 border-l-0 border-t-0 border-signal transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-l-2 group-hover:border-t-2" />

            <h3 className="relative text-2xl font-bold text-paper transition-colors duration-300 group-hover:text-signal">
              Have a Technology Challenge?
            </h3>

            <p className="relative mt-3 text-sm font-medium text-signal transition-all duration-300 group-hover:text-circuit">
              Let&apos;s build the right solution for your business.
            </p>

            <p className="relative mt-4 text-sm leading-relaxed text-steel transition-colors duration-300 group-hover:text-paper/80">
              Whether you need cybersecurity, enterprise infrastructure, data
              center solutions, surveillance, hardware, software, or digital
              services, MMC can help you plan and implement the right
              technology solution.
            </p>

            {/* Get in Touch button */}
            <a
              href="/contact-us"
              className="group/btn relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-md bg-signal px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:gap-3 hover:bg-signal/90 hover:shadow-[0_0_20px_rgba(0,102,255,0.5)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-signal via-circuit to-signal opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" 
                   style={{ backgroundSize: '200% 100%', animation: 'gradient-shift 3s ease infinite' }} 
              />
            </a>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-signal to-transparent transition-all duration-700 group-hover:w-full" />
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const isHovered = hoveredIndex === i;

            return (
              <div 
                key={f.q}
                className="group/faq"
                style={{ 
                  animation: `fade-in-left 0.6s ease-out forwards`,
                  animationDelay: `${i * 100 + 300}ms`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`relative flex w-full items-center gap-4 overflow-hidden rounded-xl px-6 py-4 text-left transition-all duration-500 ${
                    isOpen 
                      ? 'bg-signal shadow-[0_0_30px_rgba(0,102,255,0.3)]' 
                      : 'bg-signal/80 hover:bg-signal hover:shadow-[0_0_20px_rgba(0,102,255,0.2)]'
                  }`}
                >
                  {/* Shine effect */}
                  <div className={`absolute -left-12 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 ${isHovered ? 'left-full' : ''}`} />

                  {/* Icon container */}
                  <span className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-500 ${isOpen ? 'rotate-180 scale-110 bg-white/30' : 'group-hover/faq:scale-110'}`}>
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5 text-white transition-transform duration-300" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-white transition-transform duration-300" />
                    )}
                  </span>

                  {/* Question text */}
                  <span className="text-sm font-semibold text-white transition-all duration-300 group-hover/faq:tracking-wide">
                    {f.q}
                  </span>

                  {/* Animated right border */}
                  <div className="absolute right-0 top-0 h-0 w-1 bg-gradient-to-b from-white/50 to-transparent transition-all duration-500 group-hover/faq:h-full" />
                </button>

                {/* Answer section with animation */}
                <div
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? 'grid-rows-[1fr] pt-3' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="relative overflow-hidden rounded-xl border border-line bg-black/60 px-6 py-5 transition-all duration-300 hover:border-signal/30 hover:bg-black/80">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-signal/5 via-transparent to-circuit/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                      
                      {/* Answer text */}
                      <p className="relative text-sm leading-relaxed text-steel transition-colors duration-300 hover:text-paper/90">
                        {f.a}
                      </p>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-signal transition-all duration-500 hover:w-full" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(48px, 48px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
