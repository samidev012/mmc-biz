
import Link from "next/link";

const benefits = [
  { title: "AgileRAX 2.0 – IP55 Micro Data Center Solution", desc: "A modular micro data center designed for edge computing and distributed IT environments, combining protected IT space, cooling, power, monitoring and security in a flexible package.", href: "/services/attom/prefabricated/agile-rax-2-0-ip55/", btn: "Go To Product" },
  { title: "AgileCub 2.0 – Container Micro Data Center Solution", desc: "ATTOM's AgileCub 2.0 is a prefabricated modular data center solution designed for organizations that need fast deployment.", href: "/services/attom/prefabricated/agile-cub-2-0/", btn: "Go To Product" },
  { title: "AgileMod - Prefabricated Modular Data Center Solution", desc: "ATTOM AgileMod™ is a prefabricated modular data center solution built for organizations that need to expand.", href: "/services/attom/prefabricated/agile-mod/", btn: "Go To Product" },
  { title: "AgileHub 2.0 – Shelter Modular Data Center Solution", desc: "As the 5G era drives demand for mixed DC and AC power device deployments, the telecom industry faces new challenges AgileHub 2.0 is purpose-built to meet them, backed by ATTOM's expertise in modular data centers.", href: "/services/attom/prefabricated/agilehub-2-0-shelter-modular-data-center-solution/", btn: "Go To Product" },
  { title: "AgileCore – AI Prefabricated Modular Data Centers", desc: "Modern AI infrastructure needs more than raw computing power it demands data centers capable of supporting higher rack densities, efficient thermal management, and rapid deployment.", href: "/services/attom/prefabricated/agilecore-ai-prefabricated-modular-data-centers/", btn: "Go To Product" },
  
];

export default function PrefabricatedContent() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl w-900">
              Prefabricated {" "}
              <span className="text-signal transition-colors duration-300 hover:text-[#3b8cff]">
                Data
              </span>
              <br />
               Centers
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
             Modular, factory-built data centers engineered for fast deployment and reliable performance  with intelligent systems that bring power, cooling, and monitoring together in a single, integrated solution.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Available in multiple configurations built with world-leading brand components for high reliability, supporting continuous operation from -40°C to 55°C. A full range of models is available to meet the needs of today’s IT environments.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Suited for: Finance & Banking, Education, Medical, Government, Enterprise, Telecom, Etc.
            </p>

           

            
             <a href="/contact-us"
              className="group relative mt-10 hidden overflow-hidden rounded-full border border-signal bg-signal/10 px-6 py-2.5 text-sm font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] lg:inline-flex"
            >
              Get A Free Quote
            </a>
          </div>

          <div
            className="min-h-[320px] bg-cover bg-center lg:min-h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80')",
            }}
          />
        </div>
      </section>

      {/* Growth section */}
      <section
        className="px-6 py-20"
        style={{ background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)" }}
      >
        <div className="mx-auto text-center">
          

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
               
                <h2 className="mt-5 text-lg font-semibold text-signal">{b.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{b.desc}</p>
                <Link href={b.href} className="group relative mt-9 inline-flex overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">{b.btn}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
