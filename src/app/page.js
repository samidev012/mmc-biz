
  import Hero from "@/components/Hero";
  import Partners from "@/components/Partners";
  import ServicesGrid from "@/components/ServicesGrid";
  import Testimonials from "@/components/Testimonials";
  import Clients from "./clients/page";
  import FAQ from "@/components/FAQ";
  





  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mmc-biz.vercel.app/#website",
        url: "https://mmc-biz.vercel.app",
        name: "MMC",
        publisher: { "@id": "https://mmc-biz.vercel.app/#organization" },
      },
      
      {
        "@type": "WebPage",
        "@id": "https://mmc-biz.vercel.app/#webpage",
        url: "https://mmc-biz.vercel.app",
        name: "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
        isPartOf: { "@id": "https://mmc-biz.vercel.app/#website" },
        primaryImageOfPage: { "@id": "https://mmc-biz.vercel.app/#primaryimage" },
      },
      {
        "@type": "ImageObject",
        "@id": "https://mmc-biz.vercel.app/#primaryimage",
        url: "https://mmc-biz.vercel.app/images/og-default.webp",
        width: 1200,
        height: 630,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mmc-biz.vercel.app",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which companies and industries does MMC serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MMC provides technology and ICT solutions for banks, financial institutions, regulators, enterprises, corporate organizations, and other businesses that require reliable and secure technology infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "Does MMC provide complete data center solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — from infrastructure planning and deployment to security, cabling, and ongoing operational support for mission-critical environments.",
            },
          },
          {
            "@type": "Question",
            name: "Can MMC help improve our organization's cybersecurity?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — MMC delivers threat protection, security monitoring, VAPT, and managed security services to strengthen your organization's security posture.",
            },
          },
          {
            "@type": "Question",
            name: "Can MMC provide customized technology solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — our custom software and AI team builds tailored applications and integrations around your specific business requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Does MMC provide hardware and infrastructure solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — enterprise hardware, networking, and ICT infrastructure sourced and deployed for reliable, scalable environments.",
            },
          },
          {
            "@type": "Question",
            name: "How can I contact MMC for a technology solution?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reach out through the Contact Us page or call our team directly — we'll schedule a discovery call to understand your requirements.",
            },
          },
        ],
      },
    ],
  };



  export default function Home() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        />
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
        <Clients />
        <FAQ />
      
      </>
    );
  }