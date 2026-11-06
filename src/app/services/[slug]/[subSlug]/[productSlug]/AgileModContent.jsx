import Link from "next/link";
import { ArrowUpRight, Check, Activity, ShieldCheck, Snowflake, Zap, Server, Gauge, PanelsTopLeft, LockKeyhole, Flame } from "lucide-react";

const advantages = [
  {
    title: "Optimized PUE and Green Efficiency",
    icon: Zap,
    points: [
      "Indirect free cooling with refrigerant options.",
      "Aisle containment helps prevent energy loss from hot and cold air mixing.",
      "Efficient inverter compressors, EC fans and green refrigerant.",
      "Real-time PUE measurement and UPS ECO energy-saving mode.",
    ],
  },
  {
    title: "Smart Management and Monitoring",
    icon: Activity,
    points: [
      "LEGO-style standard modules support repeatable deployments and management.",
      "Local and remote monitoring protocols simplify control and visualization.",
      "Real-time alerts and notifications help operators respond promptly.",
      "Predefined designs support efficient purchasing, installation and service.",
    ],
  },
  {
    title: "Integrated Protection and Security",
    icon: ShieldCheck,
    points: [
      "Designed for Tier 1–4 compatibility.",
      "Secure access control for each door.",
      "Fire-system compatibility with coordinated top-panel and air-conditioner operation.",
      "Video surveillance with live viewing and recording playback.",
    ],
  },
];

const systems = [
  {
    title: "Precision Cooling System",
    icon: Snowflake,
    points: [
      "Compatible precision cooling for row, room and liquid-cooling configurations.",
      "Removes heat and maintains suitable temperature and humidity for critical IT equipment.",
      "Indirect free cooling can help lower PUE below 1.1 in suitable conditions.",
    ],
  },
  {
    title: "Power System",
    icon: Zap,
    points: [
      "Modular UPS and rectifier systems provide conditioned power for IT equipment.",
      "Lithium or VRLA battery configurations support planned backup requirements.",
      "Power components are integrated into a unified architecture.",
    ],
  },
  {
    title: "DCIM Monitoring System",
    icon: Gauge,
    points: [
      "Collects and displays infrastructure status, including temperature, humidity, smoke, doors, power and cooling.",
      "Remote web access, email and SMS alerts, and SNMP/Modbus TCP integration.",
      "Local and remote monitoring helps operators manage distributed modules.",
    ],
  },
  {
    title: "Containment System",
    icon: PanelsTopLeft,
    points: [
      "Containment and rack systems provide a defined space for IT equipment and cable management.",
      "Airflow management can include skylight modules, containment doors, rack-side sealing and blanking panels.",
      "Can coordinate with fire-system operation and containment doors.",
    ],
  },
  {
    title: "Security System",
    icon: LockKeyhole,
    points: [
      "Fingerprint, PIN and RFID access control supports user management and access records.",
      "Video surveillance provides remote viewing of facility status.",
      "Centralized security management supports access-level administration.",
    ],
  },
  {
    title: "Fire System",
    icon: Flame,
    points: [
      "Room-mounted fire system detects system fire status and triggers the configured response.",
      "Supports Novec 1230 or FM-200 fire-agent options.",
      "Early-stage aspirating fire detection can send an alarm before fire causes damage.",
    ],
  },
];

function ImageSpace({ label, className = "" }) {
  return (
    <div role="img" aria-label={`${label} image placeholder`} className={`agile-image-space ${className}`}>
      <div className="agile-image-label">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Image Space</span>
        <span className="mt-2 block text-sm text-slate-600">Add {label} image here</span>
      </div>
    </div>
  );
}

function BulletList({ points }) {
  return (
    <ul className="mt-4 space-y-3">
      {points.map((point) => <li key={point} className="flex gap-2.5 text-sm leading-6 text-paper/70"><Check className="mt-1 h-4 w-4 shrink-0 text-signal" />{point}</li>)}
    </ul>
  );
}

export default function AgileModContent() {
  return (
    <main className="agile-product-page agile-mod-page min-h-screen overflow-hidden bg-ink text-paper">
      <section className="agile-product-hero relative isolate overflow-hidden px-6 py-14 sm:py-20 lg:py-28">
        <div className="agile-product-orb agile-product-orb-one" />
        <div className="agile-product-orb agile-product-orb-two" />
        <div className="agile-product-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-paper/50">
            <Link href="/services/attom" className="transition hover:text-signal">ATTOM</Link><span>/</span>
            <Link href="/services/attom/prefabricated" className="transition hover:text-signal">Prefabricated Data Centers</Link><span>/</span>
            <span className="text-paper/75">AgileMod</span>
          </div>
          <div className="agile-hero-card grid items-center overflow-hidden rounded-2xl border border-white/10 bg-[#07152d]/85 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">ATTOM Modular Data Center</p>
              <h1 className="agile-product-title mt-5 text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">
                AgileMod — <span className="agile-title-accent">Prefabricated</span> Modular Data Center Solution
              </h1>
              <p className="mt-6 text-sm leading-7 text-paper/70 sm:text-base">
                AgileMod is a prefabricated modular data center solution that brings smart monitoring, low-PUE cooling and high-reliability power into a unified architecture. Designed for Tier 1–4 readiness, it supports flexible scaling from a single module to multi-module clusters.
              </p>
              <p className="mt-4 text-sm leading-7 text-paper/70 sm:text-base">
                Indirect free cooling and inverter-compressor technology can help achieve PUE below 1.1 in suitable conditions. Factory pre-assembly and pre-testing minimize on-site work, speed deployment and help reduce capital and operational expenses.
              </p>
              <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ImageSpace label="AgileMod prefabricated modular data center" className="min-h-[320px] self-stretch md:min-h-full" />
          </div>
        </div>
      </section>

      <section className="agile-cub-soft-section relative px-6 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(0,102,255,.10),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(0,180,120,.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Modular data center advantages</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Key Advantages &amp; <span className="highlight">System Highlights</span></h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {advantages.map(({ title, icon: Icon, points }) => (
              <article key={title} className="agile-info-card group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0c1c38] to-[#0a111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_18px_44px_rgba(0,0,0,.28)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal transition group-hover:bg-signal group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold text-signal">{title}</h3>
                <BulletList points={points} />
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <ImageSpace label="AgileMod modular data center overview video" className="aspect-video min-h-0 rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="agile-config-section border-y border-white/[0.06] bg-gradient-to-br from-[#06152e] via-[#080d17] to-[#071b17] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">One coordinated architecture</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">The Seamlessly <span className="highlight">Integrated Systems</span></h2>
            <p className="mt-4 text-sm leading-7 text-paper/60">Cooling, power, monitoring, containment and security work together as a pre-assembled modular data center.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {systems.map(({ title, icon: Icon, points }) => (
              <article key={title} className="agile-component-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1422] transition duration-300 hover:border-signal/40 hover:shadow-[0_14px_40px_rgba(0,0,0,.25)]">
                <ImageSpace label={title} className="min-h-0 aspect-[16/9]" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal"><Icon className="h-5 w-5" /></span><h3 className="text-lg font-bold text-signal">{title}</h3></div>
                  <BulletList points={points} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ImageSpace label="AgileMod brochure cover" className="min-h-[220px] rounded-2xl" />
            <ImageSpace label="AgileMod white paper cover" className="min-h-[220px] rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="agile-cub-soft-section px-6 py-14 sm:py-20">
        <div className="agile-cub-cta-card mx-auto max-w-5xl rounded-2xl border border-signal/25 bg-gradient-to-r from-signal/10 via-[#0a1220] to-emerald-500/5 px-6 py-8 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Scale from one module to many</p>
          <h2 className="agile-section-heading mt-3 text-2xl font-bold uppercase sm:text-4xl">Plan Your AgileMod Data Center</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paper/60">Talk to MMC about capacity, cooling, power and monitoring requirements for your site.</p>
          <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">Talk to Our Experts <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
