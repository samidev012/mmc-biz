
"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Enterprise Client",
    quote:
      "MMC provided a professional and reliable technology solution that aligned perfectly with our operational requirements. Their team was responsive, knowledgeable, and focused on delivering results.",
    rating: 5,
  },
  {
    name: "Hassan Ali",
    role: "Corporate Client",
    quote:
      "Working with MMC gave us greater confidence in our technology infrastructure. Their technical expertise and commitment to quality made the entire process smooth and efficient.",
    rating: 5,
    featured: true,
  },
  {
    name: "Farhan Ahmed",
    role: "Business Client",
    quote:
      "From consultation to implementation, MMC demonstrated strong technical knowledge and excellent customer support. They understood our requirements and delivered a practical solution.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="relative overflow-hidden border-t border-line px-6 py-24"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #0a1a2e 0%, #060d1a 50%, #000000 100%)"
      }}
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 animate-float-slow rounded-full bg-signal/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 animate-float-slower rounded-full bg-circuit/5 blur-3xl" />

      <div className="relative mx-auto text-center">
        <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
          Testimonial
        </p>
        
        <h2 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl" style={{ animationDelay: '100ms' }}>
          <span className="text-paper">What Our </span>
          <span className="relative inline-block text-signal">
            Clients Are
            <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-signal transition-all duration-700 group-hover:w-full" />
          </span> 
          Saying
        </h2>

        <p className="animate-fade-in-up mx-auto mt-5 max-w-xl text-steel" style={{ animationDelay: '200ms' }}>
          Discover real stories from clients who&apos;ve unlocked growth, efficiency,
          and success with our solutions.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 text-left transition-all duration-500 ${
                t.featured
                  ? "border-signal bg-gradient-to-b from-signal/10 to-black shadow-[0_0_50px_-15px_rgba(0,102,255,0.5)] md:-translate-y-4 hover:shadow-[0_0_70px_-10px_rgba(0,102,255,0.7)]"
                  : "border-line bg-black/40 hover:-translate-y-2 hover:border-signal/40 hover:shadow-[0_10px_40px_rgba(0,102,255,0.2)]"
              }`}
              style={{ 
                animation: `fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${idx * 150 + 300}ms`,
                opacity: 0
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ${hoveredCard === idx ? 'opacity-100' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-signal/10 via-transparent to-circuit/5" />
              </div>

              {/* Top glow effect */}
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-signal/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Quote icon with animation */}
              <Quote className={`h-8 w-8 text-signal/30 transition-all duration-500 ${hoveredCard === idx ? 'scale-110 text-signal/50' : ''}`} />

              {/* Quote text */}
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-steel transition-colors duration-300 group-hover:text-paper/90">
                <span className="absolute -left-2 top-0 text-4xl font-serif text-signal/10">"</span>
                {t.quote}
                <span className="text-4xl font-serif text-signal/10">"</span>
              </p>

              {/* Animated stars */}
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 fill-amber-400 text-amber-400 transition-all duration-300 ${hoveredCard === idx ? 'scale-110' : ''}`}
                    style={{ 
                      transitionDelay: `${i * 50}ms`,
                      animation: hoveredCard === idx ? `star-pulse 0.6s ease-in-out ${i * 0.1}s` : 'none'
                    }}
                  />
                ))}
              </div>

              {/* Author section */}
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-5 transition-all duration-300 group-hover:border-signal/30">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 font-mono text-sm font-semibold text-signal transition-all duration-500 ${hoveredCard === idx ? 'scale-110 bg-signal/25 shadow-[0_0_20px_rgba(0,102,255,0.5)]' : ''}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-signal transition-all duration-300 group-hover:text-paper">
                    {t.name}
                  </p>
                  <p className="text-xs font-medium text-circuit transition-all duration-300 group-hover:text-circuit/80">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-signal via-circuit to-signal transition-all duration-700 group-hover:w-full" />

              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-0 w-0 border-r-0 border-t-0 border-signal/50 transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:border-r-2 group-hover:border-t-2" />

              {/* Shine effect on hover */}
              <div className={`absolute -right-12 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ${hoveredCard === idx ? 'right-full' : ''}`} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up mt-16" style={{ animationDelay: '800ms' }}>
          {/* <button className="group relative overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">
            <span className="relative z-10">View All Testimonials</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-signal to-circuit opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button> */}
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

        @keyframes star-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
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
