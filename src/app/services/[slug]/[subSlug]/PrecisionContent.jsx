import Link from "next/link";
const benefits = [
  {  title: "SmoothAir Rack Mount DX Precision Cooling", desc: "The SmoothAir rack precision cooling series is engineered for energy efficiency and reliability in small to medium-sized data centers, edge spaces, and network closets.", href: "/services/attom/precision/smoothair-rack-mount-dx/", btn:"Go To Product" },
  {  title: "SmoothAir Row Mount Precision Cooling", desc: "Row mounting and front or side airflow discharge bring cooling closer to the heat source, with intelligent controls that dynamically regulate output for improved cooling efficiency.", href: "/services/attom/precision/smoothair-row-mount/", btn:"Go To Product"  },
  { title: "SmoothAir Wall Mount Precision Cooling", desc: "Built for outdoor edge applications and harsh environments, the SmoothAir wall-mount precision cooling unit offers a compact, weatherproof, all-in-one design for easy deployment on telecom shelters.", href: "/services/attom/precision/smoothair-wall-mount/", btn:"Go To Product"  },
  { title: "SmoothAir Wall Mount Cooling Split Type", desc: "A compact split-type cooling system designed to occupy minimal space, delivering continuous thermal management for network cabinets, server rooms, and other small spaces.", href: "/services/attom/precision/smoothair-wall-mount-split-type/", btn:"Go To Product"  },
  { title: "WiseAir Room Cooling CRAC", desc: "ATTOM's leading room air conditioning solutions come equipped with inverter compressors and intelligent control systems, delivering high-precision, high-reliability IT environments.", href: "/services/attom/precision/wiseair-room-cooling-crac/", btn:"Go To Product"  },
  { title: "Precision Cooling for Hot Climates", desc: "The high-temperature conditions of hot climate regions present serious challenges for efficient, energy-saving, and stable data center operation. This line is engineered specifically to meet them.", href: "/services/attom/precision/precision-cooling-hot-climates/", btn:"Go To Product"  },
  
];

export default function PrecisionContent() {
  return (
    <>
      {/* Hero */}
      <section className=" px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="agile-product-title mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 md:text-6xl w-full">
              SmoothAir –  {" "}
              <span className="agile-title-accent">
               Rack Mount DX
              </span>
              <br />
               Precision Cooling
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
            Row mounting and airflow front/side discharge design bring cooling closer to the heat source, with intelligent controls that dynamically regulate output for improved cooling efficiency.

</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Available in multiple configurations  air-cooled, water-cooled, and chilled water types  built with world-leading brand components for high reliability, supporting continuous operation from -40°C to 55°C. A full range of models is available to meet the needs of today’s IT environments.</p>
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
                <Link href={b.href || "#"} className="group relative mt-10 inline-flex overflow-hidden rounded-full border border-signal bg-signal/10 px-6 py-2.5 text-sm font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">{b.btn}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
