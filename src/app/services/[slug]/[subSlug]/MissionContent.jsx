
const benefits = [
  {  title: "AgilePower – UPS Uninterrupted Power Supply", desc: "The full AgilePower UPS range is built on an on-line double conversion system with DSP control technology, ensuring stable, reliable output voltage.", btn:"Go To Product" },
  {  title: "AgilePower – Telecom Power System", desc: "As the telecom industry's need for DC power systems grows, hybrid AC/DC power systems are becoming increasingly common AgilePower is built to meet that demand.",  btn:"Go To Product"  },
  { title: "AgilePower – BESS Battery Energy Storage System", desc: "This energy storage cabinet features AI-powered early warning and perfluorohexanone cell-level fire protection, forming a six-layer safety system.",  btn:"Go To Product"  },

];

export default function MissionContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl w-full">
              Mission   {" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.2px #0066ff" }}>
              Critical Power

              </span>
              <br />
              System
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
           Engineered for reliability, ATTOM’s mission-critical power systems keep your infrastructure running with intelligent controls that ensure stable, uninterrupted output.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Available in multiple configurations built with world-leading brand components for high reliability, supporting continuous operation from -40°C to 55°C. A full range of models is available to meet the needs of today’s IT environments.</p>
<p className="mt-6 text-sm leading-relaxed text-steel">Suited for: Finance & Banking, Education, Medical, Government, Enterprise, Telecom, Etc.


            </p>

           

            
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