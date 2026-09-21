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
  return <section  className="hero-section overflow-hidden px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
   <ParticlesBackground/>
    <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
    <CapabilityCard title="Core divisions" items={leftCapabilities} side="left" />
    <CapabilityCard title="Full capability" items={rightCapabilities} side="right" />
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
      <div className="hero-pill"><i /> ICT partner since 1995</div>
      <h1 className="hero-title mt-10 text-paper">
        <span>ICT for Pakistan&apos;s</span>
        <span className="hero-outline mt-4">banks, regulators</span>
        <span>enterprises</span>
      </h1>
      <p className="mt-10 max-w-2xl text-base leading-7 text-paper/90 sm:text-lg">
        Software, cybersecurity, data centers, hardware, surveillance, and digital marketing—delivered to government and listed enterprises for thirty years.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,102,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[#1978ff]">Book a discovery call <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-md border border-paper/80 px-6 py-3.5 text-sm font-bold text-paper transition hover:border-signal hover:bg-signal/10">Explore our divisions <ChevronRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-14 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-steel"><span className="h-px w-10 bg-line" />Trusted technology delivery<span className="h-px w-10 bg-line" /></div>
    </div>
  </section>;
}
