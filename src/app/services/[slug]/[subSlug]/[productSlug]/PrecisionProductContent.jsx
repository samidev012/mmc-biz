import Link from "next/link";
import { ArrowUpRight, Check, Activity, Gauge, Snowflake, Zap, Wind, Server, SlidersHorizontal } from "lucide-react";

const icons = [Snowflake, Gauge, Activity, Wind, Server, SlidersHorizontal];

function ImageSpace({ label, className = "" }) {
  return <div role="img" aria-label={`${label} image placeholder`} className={`agile-image-space ${className}`}><div className="agile-image-label"><span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Image Space</span><span className="mt-2 block text-sm text-paper/55">Add {label} image here</span></div></div>;
}

function BulletList({ items }) {
  return <ul className="mt-4 space-y-3">{items.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-6 text-paper/70"><Check className="mt-1 h-4 w-4 shrink-0 text-signal" />{item}</li>)}</ul>;
}

export default function PrecisionProductContent({ product }) {
  const { title, accent, description, paragraphs, benefits, features, coolingTypes, components, application } = product;
  const headingBefore = product.headingBefore || "SmoothAir —";
  const headingAfter = product.headingAfter ?? "Precision Cooling";
  return (
    <main className="agile-product-page min-h-screen overflow-hidden bg-ink text-paper">
      <section className="agile-product-hero relative isolate overflow-hidden px-6 py-14 sm:py-20 lg:py-28">
        <div className="agile-product-orb agile-product-orb-one" /><div className="agile-product-orb agile-product-orb-two" /><div className="agile-product-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-paper/50"><Link href="/services/attom" className="hover:text-signal">ATTOM</Link><span>/</span><Link href="/services/attom/precision" className="hover:text-signal">Precision Cooling</Link><span>/</span><span className="text-paper/75">{title}</span></div>
          <div className="agile-hero-card grid items-center overflow-hidden rounded-2xl border border-white/10 bg-[#07152d]/85 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12"><p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">ATTOM Precision Cooling</p><h1 className="agile-product-title mt-5 text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">{headingBefore} <span className="agile-title-accent">{accent}</span>{headingAfter ? ` ${headingAfter}` : ""}</h1><p className="mt-6 text-sm leading-7 text-paper/70 sm:text-base">{description}</p>{paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-paper/70 sm:text-base">{paragraph}</p>)}<p className="mt-5 text-sm font-medium text-paper/80">Applications: {application}</p><Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">Get a Free Quote <ArrowUpRight className="h-4 w-4" /></Link></div>
            <ImageSpace label={`${title} precision cooling unit`} className="min-h-[320px] self-stretch md:min-h-full" />
          </div>
        </div>
      </section>

      <section className="agile-config-section border-y border-white/[0.06] bg-gradient-to-br from-[#06152e] via-[#080d17] to-[#071b17] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Designed around your cooling load</p><h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Product <span className="highlight">Features &amp; Specifications</span></h2></div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{features.map((feature, index) => { const Icon = icons[index % icons.length]; return <article key={feature.title} className="agile-component-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1422]"><ImageSpace label={feature.imageLabel || feature.title} className="aspect-[16/10] min-h-0" /><div className="p-5 sm:p-6"><div className="flex items-center gap-3"><Icon className="h-5 w-5 text-signal" /><h3 className="text-lg font-bold text-signal">{feature.title}</h3></div><p className="mt-3 text-sm leading-6 text-paper/70">{feature.description}</p></div></article>; })}</div>
        </div>
      </section>

      <section className="agile-cub-soft-section relative px-6 py-16 sm:py-24"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(0,102,255,.10),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(0,180,120,.08),transparent_35%)]" /><div className="relative mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Efficient, reliable operation</p><h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Cooling <span className="highlight">Advantages</span></h2></div>
          <div className="space-y-6">{benefits.map(({ title: heading, points }, index) => <article key={heading} className="agile-cub-panel grid overflow-hidden rounded-2xl border border-white/10 bg-[#101b2c] md:grid-cols-2"><div className={`p-7 sm:p-10 ${index % 2 ? "md:order-2" : ""}`}><h3 className="text-2xl font-bold text-paper sm:text-3xl">{heading}</h3><BulletList items={points} /></div><ImageSpace label={`${heading} illustration`} className={`min-h-[250px] self-stretch md:min-h-full ${index % 2 ? "md:order-1" : ""}`} /></article>)}</div>
        </div></section>

      <section className="agile-config-section border-y border-white/[0.06] bg-gradient-to-br from-[#06152e] via-[#080d17] to-[#071b17] px-6 py-16 sm:py-24"><div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Select the right configuration</p><h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Cooling <span className="highlight">System Options</span></h2></div><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{coolingTypes.map(({ title: heading, description: copy }, index) => { const Icon = icons[index % icons.length]; return <article key={heading} className="agile-info-card rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0c1c38] to-[#0a111f] p-6 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal/15 text-signal"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-lg font-bold text-signal">{heading}</h3><p className="mt-2 text-sm leading-6 text-paper/70">{copy}</p></article>; })}</div></div></section>

      <section className="agile-cub-soft-section px-6 py-16 sm:py-24"><div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Engineered components</p><h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Key <span className="highlight">Components</span></h2></div><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{components.map(({ title: heading, description: copy }, index) => { const Icon = icons[index % icons.length]; return <article key={heading} className="agile-component-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1422]"><ImageSpace label={heading} className="aspect-[4/3] min-h-0" /><div className="p-5"><div className="flex items-center gap-2"><Icon className="h-5 w-5 text-signal" /><h3 className="font-bold text-signal">{heading}</h3></div><p className="mt-3 text-sm leading-6 text-paper/70">{copy}</p></div></article>; })}</div>
          <div className="mt-10 grid gap-5 md:grid-cols-2"><ImageSpace label="SmoothAir product brochure" className="min-h-[200px] rounded-2xl" /><ImageSpace label="SmoothAir user manual" className="min-h-[200px] rounded-2xl" /></div>
          <div className="agile-cub-cta-card mt-12 rounded-2xl border border-signal/25 bg-gradient-to-r from-signal/10 via-[#0a1220] to-emerald-500/5 px-6 py-8 text-center sm:px-10 sm:py-12"><p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Configure your precision cooling</p><h2 className="agile-section-heading mt-3 text-2xl font-bold uppercase sm:text-4xl">Find the Right SmoothAir Solution</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paper/60">Share your room dimensions, heat load and site conditions with MMC's data center team.</p><Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5">Talk to Our Experts <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div></section>
    </main>
  );
}
