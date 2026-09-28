import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { buildMetadata, SITE_URL } from "@/lib/seo";

const HOME_TITLE =
  "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises";
const HOME_DESC =
  "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.";

export const metadata = buildMetadata({
  title: { absolute: HOME_TITLE },
  description: HOME_DESC,
  path: "/",
});

const faqs = [
  {
    q: "Which companies and industries does MMC serve?",
    a: "MMC provides technology and ICT solutions for banks, financial institutions, regulators, enterprises, corporate organizations, and other businesses that require reliable and secure technology infrastructure.",
  },
  {
    q: "Does MMC provide complete data center solutions?",
    a: "Yes — from infrastructure planning and deployment to security, cabling, and ongoing operational support for mission-critical environments.",
  },
  {
    q: "Can MMC help improve our organization's cybersecurity?",
    a: "Yes — MMC delivers threat protection, security monitoring, VAPT, and managed security services to strengthen your organization's security posture.",
  },
  {
    q: "Can MMC provide customized technology solutions?",
    a: "Yes — our custom software and AI team builds tailored applications and integrations around your specific business requirements.",
  },
  {
    q: "Does MMC provide hardware and infrastructure solutions?",
    a: "Yes — enterprise hardware, networking, and ICT infrastructure sourced and deployed for reliable, scalable environments.",
  },
  {
    q: "How can I contact MMC for a technology solution?",
    a: "Reach out through the Contact Us page or call our team directly — we'll schedule a discovery call to understand your requirements.",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "MMC",
      inLanguage: "en-PK",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: HOME_TITLE,
      description: HOME_DESC,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/images/og-default.webp`,
      width: 1200,
      height: 630,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const pillars = [
  {
    title: "Our Mission",
    text: "To empower organizations with secure, reliable, and innovative technology solutions that improve operational efficiency, strengthen digital resilience, and support sustainable business growth.",
  },
  {
    title: "Our Vision",
    text: "To become a trusted technology partner for organizations across Pakistan by delivering world-class ICT solutions, exceptional service, and innovative digital capabilities.",
  },
  {
    title: "Why Choose Us",
    text: "We combine industry experience, technical expertise, trusted technology partnerships, and customer-focused support to deliver solutions built around your organization's real business requirements.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <Partners />

      <section
        className="border-t border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)",
        }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
            Who We Are
          </p>

          <h2
            className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Technology <span className="text-signal">That Moves</span> Your
            Business Forward
          </h2>

          <p
            className="animate-fade-in-up mx-auto mt-5 w-3/4 max-w-4xl text-sm leading-relaxed text-steel"
            style={{ animationDelay: "200ms" }}
          >
            MMC is a technology solutions and ICT services provider helping
            organizations build secure, connected, and future-ready digital
            environments. From enterprise infrastructure and cybersecurity to
            data centers, surveillance, software integration, and digital
            solutions, we combine technical expertise with trusted technologies
            to solve complex business challenges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map(({ title, text }, idx) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-line bg-black/40 p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-circuit/50 hover:bg-black/60 hover:shadow-[0_10px_40px_rgba(40,167,69,0.2)]"
                style={{
                  animation: "fade-in-up 0.6s ease-out forwards",
                  animationDelay: `${idx * 150 + 300}ms`,
                  opacity: 0,
                }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-circuit/5 blur-2xl transition-all duration-500 group-hover:bg-circuit/10" />

                <h3 className="relative text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-circuit">
                  {title}
                </h3>

                <p className="relative mt-3 text-sm text-steel transition-colors duration-300 group-hover:text-paper/80">
                  {text}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-circuit to-signal transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Testimonials />
      <FAQ />
    </>
  );
}