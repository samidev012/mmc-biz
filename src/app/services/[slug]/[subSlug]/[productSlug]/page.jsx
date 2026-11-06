import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Leaf, ShieldCheck, VolumeX, Activity, Boxes, Gauge, Network, Server, Snowflake, Zap, Flame } from "lucide-react";
import AgileCubContent from "./AgileCubContent";
import AgileModContent from "./AgileModContent";
import { AgileCoreContent, AgileHubContent } from "./AgileHubCoreContent";
import PrecisionProductContent from "./PrecisionProductContent";
import { precisionProducts } from "./precisionProducts";
import { generateBreadcrumbSchema, generatePageMetadata, generateProductSchema } from "@/lib/seo";

const prefabProducts = {
  "agile-rax-2-0-ip55": {
    title: "AgileRAX 2.0 IP55 Micro Data Center",
    description: "Explore ATTOM AgileRAX 2.0, an IP55-rated micro data center with integrated cooling, power, monitoring and flexible configurations for edge IT environments.",
  },
  "agile-cub-2-0": {
    title: "AgileCub 2.0 Container Micro Data Center",
    description: "Explore ATTOM AgileCub 2.0, a container micro data center designed for rapid deployment, scalable capacity, integrated cooling, power and monitoring.",
  },
  "agile-mod": {
    title: "AgileMod Prefabricated Modular Data Center",
    description: "Explore ATTOM AgileMod, a prefabricated modular data center with integrated cooling, power, monitoring, security and scalable multi-module configurations.",
  },
  "agilehub-2-0-shelter-modular-data-center-solution": {
    title: "AgileHub 2.0 Shelter Modular Data Center",
    description: "Explore ATTOM AgileHub 2.0 shelter data center solutions for telecom and remote sites, with flexible mixed DC and AC power, cooling and monitoring.",
  },
  "agilecore-ai-prefabricated-modular-data-centers": {
    title: "AgileCore AI Prefabricated Modular Data Centers",
    description: "Explore ATTOM AgileCore AI-ready modular data centers with scalable infrastructure and advanced liquid cooling options for high-density computing workloads.",
  },
};

export async function generateMetadata({ params }) {
  const { slug, subSlug, productSlug } = await params;
  const prefabProduct = subSlug === "prefabricated" ? prefabProducts[productSlug] : null;
  const precisionProduct = subSlug === "precision" ? precisionProducts[productSlug] : null;
  const product = prefabProduct || precisionProduct;
  if (slug !== "attom" || !product) return { title: "Product Not Found", robots: { index: false, follow: false } };
  const title = prefabProduct?.title || precisionProduct?.name;
  return generatePageMetadata({ title, description: product.description, path: `/services/attom/${subSlug}/${productSlug}` });
}

const advantages = [
  {
    title: "Secured Protection",
    icon: ShieldCheck,
    points: [
      "IP55 rated IT environment with excellent dust resistance and noise reduction. Anti-condensation design supports quiet, secure and stable operation.",
      "Smart 3-in-1 PIN, fingerprint and RFID door access helps prevent unauthorized entry.",
      "Real-time equipment status monitoring and alarms help avoid delayed response.",
    ],
  },
  {
    title: "Energy Efficiency",
    icon: Leaf,
    points: [
      "Efficient inverter precision air-conditioning options provide energy-saving configurations.",
      "IP55-rated built-in cold and hot aisle containment supports more efficient thermal management.",
      "Intelligent monitoring continuously optimizes energy management and can help reduce PUE.",
    ],
  },
  {
    title: "Smart Monitoring",
    icon: Activity,
    points: [
      "Full sensor communication provides an all-in-one, real-time management center to help minimize downtime.",
      "Multiple protocols and remote access support centralized management and continuous monitoring.",
      "An upgraded software interface gives operators clearer system insight.",
    ],
  },
  {
    title: "High Flexibility",
    icon: Boxes,
    points: [
      "LEGO-style modular design allows customization and future expansion.",
      "Factory-prefabricated, plug-and-play design supports easier deployment and relocation.",
      "Can integrate with compatible local management and existing BMS platforms.",
    ],
  },
];

const configurations = [
  {
    title: "MDC with Top Package Cooling",
    capacity: "3k–6k",
    description:
      "Fully integrated closed rack with package cooling, UPS, battery, power distribution, security, monitoring and fire systems.",
    note: "No complex remote condenser piping installation.",
  },
  {
    title: "MDC with Row Package Cooling",
    capacity: "5k–10k",
    description:
      "Fully integrated closed rack with package cooling, UPS, battery, power distribution, security, monitoring and fire systems.",
    note: "No complex remote condenser piping installation.",
  },
  {
    title: "MDC with Rack Split/Package Cooling",
    capacity: "3k–10k",
    description:
      "Closed rack with rack-mount cooling, UPS, battery, power distribution, security, monitoring and fire systems.",
    note: "Flexible modular rack cooling supports rack-oriented plans, expansion and deployment.",
  },
  {
    title: "MDC with Row Split Cooling",
    capacity: "6k–20k",
    description:
      "Fully integrated closed rack with split cooling, UPS, battery, power distribution, security, monitoring and fire systems.",
    note: "Row cooling integrates with rack rows and supports capacity expansion.",
  },
];

const components = [
  {
    title: "Cooling System",
    icon: Snowflake,
    description:
      "IP55-rated cooling solutions can be placed in-row, on top or built into the IT rack. They maintain suitable temperature and humidity for critical IT equipment while supporting energy-efficient airflow management. Emergency ventilation can open if cooling fails.",
  },
  {
    title: "Power System",
    icon: Zap,
    description:
      "Rack-mounted and modular UPS systems provide power conditioning to protect IT equipment. Configurable battery backup supports business continuity during outages.",
  },
  {
    title: "Monitoring System",
    icon: Gauge,
    description:
      "A smart monitoring system communicates with UPS, cooling, power and sensors, providing real-time status. Remote web access, email alerts, SMS alerts and Modbus TCP integration are supported.",
  },
  {
    title: "Rack System",
    icon: Server,
    description:
      "An IP55-rated, fully enclosed rack provides a protected, noise-reducing and thermally insulated space for IT equipment, with a double-layer transparent front door for status visibility.",
  },
  {
    title: "Fire System",
    icon: Flame,
    description:
      "Integrated fire protection helps protect the enclosed IT environment and supports a coordinated response with the data center monitoring system.",
  },
  {
    title: "Electronic Expansion Valve",
    icon: Network,
    description:
      "Electronic expansion valve control helps regulate cooling performance as system conditions change, supporting stable operation across the selected configuration.",
  },
];

function ImageSpace({ label, className = "" }) {
  return (
    <div role="img" aria-label={`${label} image placeholder`} className={`agile-image-space ${className}`}>
      <div className="agile-image-label">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Image Space</span>
        <span className="mt-2 block text-sm text-paper/55">Add {label} image here</span>
      </div>
    </div>
  );
}

export default async function AgileRaxProductPage({ params }) {
  const { slug, subSlug, productSlug } = await params;
  const prefabProduct = subSlug === "prefabricated" ? prefabProducts[productSlug] : null;
  const precisionProduct = subSlug === "precision" ? precisionProducts[productSlug] : null;
  const product = prefabProduct || precisionProduct;
  if (slug !== "attom" || !product) notFound();
  const productName = prefabProduct?.title || precisionProduct?.name;
  const categoryName = precisionProduct ? "Precision Cooling" : "Prefabricated Data Centers";
  const categoryPath = `/services/attom/${subSlug}`;
  const productPath = `/services/attom/${subSlug}/${productSlug}`;
  const productSchema = generateProductSchema({ name: productName, description: product.description, path: productPath, category: precisionProduct ? "Precision Cooling System" : "Prefabricated Data Center" });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "ATTOM", path: "/services/attom" },
    { name: categoryName, path: categoryPath },
    { name: productName, path: productPath },
  ]);
  const schemaScript = <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} /></>;
  if (precisionProduct) return <>{schemaScript}<PrecisionProductContent product={precisionProduct} /></>;
  if (productSlug === "agile-cub-2-0") return <>{schemaScript}<AgileCubContent /></>;
  if (productSlug === "agile-mod") return <>{schemaScript}<AgileModContent /></>;
  if (productSlug === "agilehub-2-0-shelter-modular-data-center-solution") return <>{schemaScript}<AgileHubContent /></>;
  if (productSlug === "agilecore-ai-prefabricated-modular-data-centers") return <>{schemaScript}<AgileCoreContent /></>;
  if (productSlug !== "agile-rax-2-0-ip55") notFound();

  return (
    <>
      {schemaScript}
    <main className="agile-product-page min-h-screen overflow-hidden bg-ink text-paper">
      <section className="agile-product-hero relative isolate overflow-hidden px-6 py-14 sm:py-20 lg:py-28">
        <div className="agile-product-orb agile-product-orb-one" />
        <div className="agile-product-orb agile-product-orb-two" />
        <div className="agile-product-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-paper/50">
            <Link href="/services/attom" className="transition hover:text-signal">ATTOM</Link><span>/</span>
            <Link href="/services/attom/prefabricated" className="transition hover:text-signal">Prefabricated Data Centers</Link><span>/</span>
            <span className="text-paper/75">AgileRAX 2.0</span>
          </div>
          <div className="agile-hero-card grid items-center gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#07152d]/80 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur md:grid-cols-2 lg:gap-12">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">ATTOM Micro Data Center</p>
              <h1 className="agile-product-title mt-5 text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl">
                Agile RAX 2.0 <span className="agile-title-accent">IP55</span> Micro Data Center Solution
              </h1>
              <p className="mt-6 text-sm leading-7 text-paper/70 sm:text-base">
                As industry leaders, we continuously innovate and optimize our micro data center to provide best-in-class energy efficiency and a wide range of flexible configurations.
              </p>
              <p className="mt-4 text-sm leading-7 text-paper/70 sm:text-base">
                Our cutting-edge solutions offer performance and reliability for demanding data management needs. ATTOM&apos;s AgileRAX V2.0 modular data center solution won the prestigious 2025 French Design Award.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[[ShieldCheck, "IP55 Rated"], [Leaf, "Energy Saving"], [VolumeX, "Less Noise"]].map(([Icon, label]) => (
                  <span key={label} className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-2 text-xs font-semibold text-paper/85"><Icon className="h-4 w-4 text-signal" />{label}</span>
                ))}
              </div>
              <p className="mt-6 text-sm font-medium text-paper/80">Always evolving. Always leading.</p>
              <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">
                Get a Free Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ImageSpace label="AgileRAX 2.0 micro data center" className="min-h-[320px] self-stretch md:min-h-full" />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(0,102,255,.10),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(0,180,120,.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Built for dependable edge infrastructure</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Key Advantages &amp; <span className="highlight">System Highlights</span></h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {advantages.map(({ title, icon: Icon, points }) => (
              <article key={title} className="agile-info-card group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0c1c38] to-[#0a111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_18px_44px_rgba(0,0,0,.28)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal transition group-hover:bg-signal group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold text-signal">{title}</h3>
                <ul className="mt-4 space-y-4">
                  {points.map((point) => <li key={point} className="flex gap-2.5 text-sm leading-6 text-paper/70"><Check className="mt-1 h-4 w-4 shrink-0 text-signal" />{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agile-config-section border-y border-white/[0.06] bg-gradient-to-br from-[#06152e] via-[#080d17] to-[#071b17] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Modular by design</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Your Configuration, <span className="highlight">Defined by You</span></h2>
            <p className="mt-4 text-sm leading-7 text-paper/60">Choose a cooling layout and capacity to fit your IT environment, then expand as your needs grow.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {configurations.map((item, index) => (
              <article key={item.title} className="agile-config-card group overflow-hidden rounded-2xl border border-white/10 bg-[#0a1220]/90 transition duration-300 hover:-translate-y-1 hover:border-signal/40">
                <ImageSpace label={`${item.title} configuration`} className="min-h-0 aspect-[4/3]" />
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-signal">Configuration {String(index + 1).padStart(2, "0")} · {item.capacity}</span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-paper">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-paper/65">{item.description}</p>
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-paper/50">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="agile-expansion-card mt-7 grid items-center gap-6 overflow-hidden rounded-2xl border border-signal/20 bg-black/25 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Scale when you are ready</p>
              <h3 className="mt-3 text-2xl font-bold uppercase sm:text-3xl">Expansion with Freedom</h3>
              <p className="mt-4 text-sm leading-7 text-paper/65">Start with the capacity you need today and add compatible modules as demand grows. The modular layout supports a practical path from a compact deployment to a larger micro data center environment.</p>
            </div>
            <ImageSpace label="AgileRAX modular expansion" className="min-h-[210px] aspect-[16/7]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Integrated systems</p>
            <h2 className="agile-section-heading mt-3 text-3xl font-bold uppercase sm:text-5xl">Key <span className="highlight">Components</span></h2>
            <p className="mt-4 text-sm leading-7 text-paper/60">Critical infrastructure components work together in one coordinated micro data center solution.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {components.map(({ title, icon: Icon, description }) => (
              <article key={title} className="agile-component-card overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1422] transition duration-300 hover:border-signal/40 hover:shadow-[0_14px_40px_rgba(0,0,0,.25)]">
                <ImageSpace label={title} className="min-h-0 aspect-[16/9]" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal"><Icon className="h-5 w-5" /></span><h3 className="text-lg font-bold text-signal">{title}</h3></div>
                  <p className="mt-4 text-sm leading-6 text-paper/65">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="agile-cta-card mt-12 rounded-2xl border border-signal/25 bg-gradient-to-r from-signal/10 via-[#0a1220] to-emerald-500/5 px-6 py-8 text-center sm:px-10 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">Plan your micro data center</p>
            <h2 className="mt-3 text-2xl font-bold uppercase sm:text-4xl">Find the Right AgileRAX Configuration</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-paper/60">Talk with MMC about capacity, cooling, power and monitoring options for your site.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,102,255,.4)]">Get a Free Quote <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
