
const benefits = [
  {  title: "SmoothAir – Rear Door Heat Exchanger", desc: "Built for high-density environments like AI, HPC, and edge computing, the SmoothAir rear door heat exchanger delivers up to 30kW of cooling capacity.", btn:"Go To Product" },
  {  title: "ByteCool – D2C (Direct to Chip) Liquid Cooling", desc: "As demand grows for high-performance computing and AI applications, the latest generation of CPUs and GPUs runs hotter than ever ByteCool addresses this head-on with direct-to-chip liquid cooling.",  btn:"Go To Product"  },
  { title: "OceanCool – Immersion Liquid Cooling", desc: "As AI, HPC, and other high-density workloads continue pushing rack power densities higher, conventional air cooling is reaching its limits OceanCool's immersion cooling picks up where air cooling falls short.",  btn:"Go To Product"  },

];

export default function LiquidContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl w-full">
              Liquid {" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.2px #0066ff" }}>
               Cooling 
              </span>
              <br />
               System

            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">Bringing cooling closer to the heat source through advanced liquid cooling design, with intelligent controls that dynamically regulate output for improved cooling efficiency.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Available in multiple configurations air-cooled, water-cooled, and chilled water types built with world-leading brand components for high reliability, supporting continuous operation from -40°C to 55°C. A full range of models is available to meet the needs of today’s IT environments.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Suited for: Finance & Banking, Education, Medical, Government, Enterprise, Telecom, Etc.</p>

           

           
             <a href="/contact-us"
              className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-signal/90"
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
        className="border-b border-line px-6 py-20"
        style={{ background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)" }}
      >
        <div className="mx-auto text-center">
          

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
               
                <h3 className="mt-5 text-lg font-semibold text-signal">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{b.desc}</p>
                <button className="group relative mt-9 overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">{b.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}