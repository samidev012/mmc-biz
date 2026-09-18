
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
       <section
        className="border-t border-line px-6 py-20"
        style={{ background: "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)" }}
      >
        <div className="mx-auto  text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-circuit">Who We Are</p>
          <h2 className="mt-3 text-4xl  font-bold text-paper uppercase ">
            Technology <span className="hero-outline">That Moves</span> Your Business Forward
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-steel">
            MMC is a technology solutions and ICT services provider helping organizations
            build secure, connected, and future-ready digital environments. From
            enterprise infrastructure and cybersecurity to data centers, surveillance,
            software integration, and digital solutions, we combine technical expertise
            with trusted technologies to solve complex business challenges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Our Mission</h3>
              <p className="mt-3 text-sm text-steel">
                To empower organizations with secure, reliable, and innovative technology
                solutions that improve operational efficiency, strengthen digital
                resilience, and support sustainable business growth.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Our Vision</h3>
              <p className="mt-3 text-sm text-steel">
                To become a trusted technology partner for organizations across Pakistan
                by delivering world-class ICT solutions, exceptional service, and
                innovative digital capabilities.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Why Choose Us</h3>
              <p className="mt-3 text-sm text-steel">
                We combine industry experience, technical expertise, trusted technology
                partnerships, and customer-focused support to deliver solutions built
                around your organization&apos;s real business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <ServicesGrid />
      <Testimonials />
      <FAQ />
    
    </>
  );
}