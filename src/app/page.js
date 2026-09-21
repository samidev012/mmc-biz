
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";


import FAQ from "@/components/FAQ";
export default function Home() {
  return (
    <>
      
      <Hero />
      <Partners />
       <section className="border-t border-line px-6 py-20" style={{ background: "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)" }}>
        <div className="mx-auto text-center">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
            Who We Are
          </p>
          
          <h2 className="animate-fade-in-up mt-3 text-3xl uppercase font-bold text-paper transition-all duration-500 hover:tracking-wide md:text-6xl" style={{ animationDelay: '100ms' }}>
            Technology <span className="text-signal">That Moves</span> Your Business Forward
          </h2>
          
          <p className="animate-fade-in-up mx-auto w-3/4 max-w-4xl mt-5 text-sm leading-relaxed text-steel" style={{ animationDelay: '200ms' }}>
            MMC is a technology solutions and ICT services provider helping organizations
            build secure, connected, and future-ready digital environments. From
            enterprise infrastructure and cybersecurity to data centers, surveillance,
            software integration, and digital solutions, we combine technical expertise
            with trusted technologies to solve complex business challenges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Our Mission", "Our Vision", "Why Choose Us"].map((title, idx) => {
              const descriptions = [
                "To empower organizations with secure, reliable, and innovative technology solutions that improve operational efficiency, strengthen digital resilience, and support sustainable business growth.",
                "To become a trusted technology partner for organizations across Pakistan by delivering world-class ICT solutions, exceptional service, and innovative digital capabilities.",
                "We combine industry experience, technical expertise, trusted technology partnerships, and customer-focused support to deliver solutions built around your organization's real business requirements."
              ];
              
              return (
                <div 
                  key={title}
                  className="group relative overflow-hidden rounded-xl border border-line bg-black/40 p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-circuit/50 hover:bg-black/60 hover:shadow-[0_10px_40px_rgba(40,167,69,0.2)]"
                  style={{ 
                    animation: `fade-in-up 0.6s ease-out forwards`,
                    animationDelay: `${idx * 150 + 300}ms`,
                    opacity: 0
                  }}
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-circuit/5 blur-2xl transition-all duration-500 group-hover:bg-circuit/10" />
                  
                  <h3 className="relative text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-circuit">
                    {title}
                  </h3>
                  
                  <p className="relative mt-3 text-sm text-steel transition-colors duration-300 group-hover:text-paper/80">
                    {descriptions[idx]}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-circuit to-signal transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ServicesGrid />
      <Testimonials />
      <FAQ />
    
    </>
  );
}