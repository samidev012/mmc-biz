import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Snowflake,
  Zap,
  Server,
  Gauge,
  Fingerprint,
  Flame,
  Boxes,
  Timer,
} from "lucide-react";

const advantages = [
  {
    title: "Maximized IT Space",
    icon: Boxes,
    metric: "35% more IT rack space",
    points: [
      "Up to 8 racks in a 20-foot container and 18 racks in a 40-foot container.",
      "Wall-mounted cooling keeps cooling equipment out of rack space.",
      "Sliding racks make IT service access easier.",
      "Hybrid power can bring UPS, power panel and battery into the same rack.",
    ],
  },
  {
    title: "Optimized Energy Efficiency",
    icon: Zap,
    metric: "25% less energy consumption",
    points: [
      "Inverter precision air conditioning options support efficient operation.",
      "Indirect or direct air free-cooling options can reduce cooling energy use.",
      "Cold-aisle containment helps prevent hot and cold air mixing.",
      "Efficient inverter compressors, EC fans and green refrigerant support the cooling system.",
    ],
  },
  {
    title: "Rapid Deployment",
    icon: Timer,
    metric: "20% quicker deployment speed",
    points: [
      "Rugged configurations suit outdoor and remote environments, including rooftops, warehouses and oil rigs.",
      "Factory prefabrication and commissioning support fast deployment.",
      "A container-based solution can be provisioned at a selected location with less on-site construction.",
    ],
  },
];

const protectionPoints = [
  "Built from scratch to ISO container standards.",
  "Salt-spray protection tested to 750 hours.",
  "Rock-wool thermal protection.",
  "Designed to withstand wind speeds up to 30 m/s during operation.",
  "Fire-protection options up to 120 minutes.",
  "Bullet-proof options for high-security sites.",
  "C5M high-corrosion protection options for coastal sites, with IP55 water and dust protection.",
  "Operating temperature range: -40°C to 55°C.",
];

const coolingPoints = [
  "Precision cooling with high-efficiency EC fan, inverter compressor, electronic expansion valve and smart controller.",
  "CFD-optimized cold- and hot-aisle airflow containment.",
  "Optional direct or indirect free cooling can help lower data center PUE.",
  "Factory-prefabricated and pre-tested system helps reduce on-site installation and commissioning work.",
  "Green refrigerant options and no water consumption for cooling.",
];

const systems = [
  {
    title: "Precision Cooling System",
    icon: Snowflake,
    description: [
      "Wall-mounted cooling as standard, with in-row and room-cooling options.",
      "Built-in sensors and web, SNMP and RS485 monitoring access.",
      "Designed to operate in ambient temperatures up to 55°C.",
      "Multiple free-cooling options available.",
    ],
  },
  {
    title: "IT Rack System",
    icon: Server,
    description: [
      "IT racks with up to 1,800 kg static loading capacity.",
      "Two width and depth options.",
      "Optional cold- and hot-aisle containment.",
      "Front- or rear-sliding access for easier service, with optional access control.",
    ],
  },
  {
    title: "UPS Power System",
    icon: Zap,
    description: [
      "Rack UPS as standard, with modular rack-mount or floor-mount options.",
      "Optional 48V DC rectifier with standard 19-inch rack-mount design.",
      "VRLA or lithium battery configurations.",
      "Basic or smart PDUs and configurable T1–T4 power distribution panels.",
    ],
  },
  {
    title: "DCIM System",
    icon: Gauge,
    description: [
      "Communication with UPS, cooling, power panel and sensors.",
      "Integration with access control and video surveillance systems.",
      "Local display and settings through a touchscreen.",
      "Remote access through web, SMS, email or Modbus TCP, with optional SNMP.",
    ],
  },
  {
    title: "Access Control System",
    icon: Fingerprint,
    description: [
      "IP55 3-in-1 access control using PIN, password or fingerprint.",
      "Managed through standalone software.",
      "Can integrate with the DCIM system.",
    ],
  },
  {
    title: "Security System",
    icon: Flame,
    description: [
      "Early fire-detection system.",
      "Smart fire panel supports easier detection and management.",
      "Fire-agent options include Novec 1230 or FM-200.",
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
    <ul className="mt-5 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex gap-2.5 text-sm leading-6 text-paper/70">
          <Check className="mt-1 h-4 w-4 shrink-0 text-signal" />{point}
        </li>
      ))}
    </ul>
  );
}

export default function AgileCubContent() {
  return (
    <main className="agile-product-page agile-cub-page min-h-screen overflow-hidden bg-ink text-paper">
      <section className="agile-product-hero relative isolate overflow-hidden px-6 py-14 sm:py-20 lg:py-28">
        <div className="agile-product-orb agile-product-orb-one" />
        <div className="agile-product-orb agile-product-orb-two" />
        <div className="agile-product-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-paper/50">
            <Link href="/services/attom" className="transition hover:text-signal">ATTOM</Link><span>/</span>
            <Link href="/services/attom/prefabricated" className="transition hover:text-signal">Prefabricated Data Centers</Link><span>/</span>
            <span className="text-paper/75">AgileCub 2.0</span>
          </div>
          <div className="agile-hero-card grid items-center overflow-hidden rounded-2xl border border-white/10 bg-[#07152d]/85 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">ATTOM Container Micro Data Center</p>
              <h1 className="agile-product-title mt-5 text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">
                Agile Cub 2.0 <span className="agile-title-accent">Container</span> Micro Data Center Solution
              </h1>
              <p className="mt-6 text-sm leading-7 text-paper/70 sm:text-base">
                As one of the pioneers in modular data centers, ATTOM explores innovative solutions to provide more energy-efficient, economical and flexible configurations that can match your current and future needs.
              </p>
              <p className="mt-4 text-sm leading-7 text-paper/70 sm:text-base">
                From a single-container data center to a multiple-container modular architecture, AgileCub offers a sustainable solution that can grow as you invest.
              </p>
              <p className="mt-4 text-sm font-medium text-paper/80">Optimized across every aspect of container data center design.</p>
              <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ImageSpace label="AgileCub 2.0 container micro data center" className="min-h-[320px] self-stretch md:min-h-full" />
          </div>
        </div>
      </section>

      <section className="agile-cub-soft-section relative px-6 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(0,102,255,.10),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(0,180,120,.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Container data center advantages</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Key Advantages &amp; <span className="highlight">System Highlights</span></h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {advantages.map(({ title, icon: Icon, metric, points }) => (
              <article key={title} className="agile-info-card group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0c1c38] to-[#0a111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_18px_44px_rgba(0,0,0,.28)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal transition group-hover:bg-signal group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold text-signal">{title}</h3>
                <p className="mt-2 text-sm font-bold text-paper">{metric}.</p>
                <BulletList points={points} />
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <ImageSpace label="AgileCub container data center product overview video" className="aspect-video min-h-0 rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="agile-cub-protection-section border-y border-white/[0.06] bg-gradient-to-br from-[#06152e] via-[#080d17] to-[#071b17] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
          <article className="agile-cub-panel grid overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]/85 md:grid-cols-2">
            <div className="p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Rugged, container-ready build</p>
              <h2 className="agile-section-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">Comprehensive Protection from Container Construction</h2>
              <BulletList points={protectionPoints} />
            </div>
            <ImageSpace label="AgileCub container protection and construction" className="min-h-[300px] self-stretch md:min-h-full" />
          </article>

          <article className="agile-cub-panel grid overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]/85 md:grid-cols-2">
            <ImageSpace label="AgileCub integrated precision cooling airflow" className="min-h-[300px] self-stretch md:min-h-full md:order-1" />
            <div className="p-7 sm:p-10 md:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Integrated thermal management</p>
              <h2 className="agile-section-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">High ECO Efficiency, Integrated All-in-One Wall-Mount Precision Air Conditioner</h2>
              <BulletList points={coolingPoints} />
            </div>
          </article>
        </div>
      </section>

      <section className="agile-cub-soft-section px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Designed to work together</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">The Seamlessly <span className="highlight">Integrated Systems</span></h2>
            <p className="mt-4 text-sm leading-7 text-paper/60">Container infrastructure brings cooling, IT racks, power, monitoring and security into one coordinated deployment.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {systems.map(({ title, icon: Icon, description }) => (
              <article key={title} className="agile-component-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1422] transition duration-300 hover:border-signal/40 hover:shadow-[0_14px_40px_rgba(0,0,0,.25)]">
                <ImageSpace label={title} className="min-h-0 aspect-[16/9]" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal"><Icon className="h-5 w-5" /></span><h3 className="text-lg font-bold text-signal">{title}</h3></div>
                  <BulletList points={description} />
                </div>
              </article>
            ))}
          </div>
          <div className="agile-cub-cta-card mt-12 rounded-2xl border border-signal/25 bg-gradient-to-r from-signal/10 via-[#0a1220] to-emerald-500/5 px-6 py-8 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Designed around your site</p>
            <h2 className="agile-section-heading mt-3 text-2xl font-bold uppercase sm:text-4xl">Plan a Container Data Center for Your Company</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paper/60">Talk to MMC&apos;s team about container size, cooling, power and deployment requirements.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">Talk to Our Experts <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
