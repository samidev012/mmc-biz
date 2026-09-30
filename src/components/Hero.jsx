import Link from 'next/link';
import { ArrowRight, Blocks, Building2, Cable, ChevronRight, Code2, Database, Eye, ShieldCheck, Sparkles } from 'lucide-react';

import ParticlesBackground from './ParticlesBackground';

const leftCapabilities = [
  [ShieldCheck, 'Cybersecurity'],
  [Code2, 'Custom Solutions & Apps'],
  [Cable, 'Networking'],
  [Database, 'Data Centers'],
];

const rightCapabilities = [
  [Eye, 'CCTV & Surveillance'],
  [Blocks, 'Hardware'],
  [Building2, 'Agency Ops'],
  [Sparkles, 'Specialized & Partners'],
];

function CapabilityCard({ title, items, side }) {
  return <aside className={`hero-card hero-card-${side}`} aria-label={title}>
    <p>{title}</p>
    <div className="hero-card-line" />
    {items.map(([Icon, label]) => <div className="hero-card-row" key={label}><span><Icon /></span>{label}</div>)}
    <strong>{side === 'left' ? 'Threat shield: active' : 'Security score: 98.7%'}</strong>
  </aside>;
}

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 md:pb-24 md:pt-28 lg:px-8">
      <ParticlesBackground />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <CapabilityCard
        title="Core divisions"
        items={leftCapabilities}
        side="left"
      />

      <CapabilityCard
        title="Full capability"
        items={rightCapabilities}
        side="right"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="hero-pill">
          <i />
          ICT partner since 1995
        </div>

        <h1 className="hero-title mt-7 sm:mt-9 md:mt-10">
          <span>ICT for Pakistan&apos;s</span>
          <span className="hero-outline mt-3 sm:mt-4">
            banks, regulators
          </span>
          <span>enterprises</span>
        </h1>

        <p className="mt-7 max-w-2xl px-2 text-sm leading-6 sm:mt-9 sm:text-base sm:leading-7 md:mt-10 md:text-lg">
          Software, cybersecurity, data centers, hardware, surveillance, and
          digital marketing delivered to government and listed enterprises
          for thirty years.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/contact-us"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[#1978ff] sm:w-auto"
          >
            Book a discovery call
          </Link>

          <Link
            href="/services"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-signal bg-signal/10 px-6 py-3 text-sm font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] sm:w-auto"
          >
            Explore our divisions
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] sm:mt-14 sm:gap-3 sm:text-xs sm:tracking-[0.18em]">
          <span className="h-px w-6 bg-current opacity-25 sm:w-10" />
          Trusted technology delivery
          <span className="h-px w-6 bg-current opacity-25 sm:w-10" />
        </div>
      </div>
    </section>
  );
}