import Image from "next/image";

const benefits = [
  {
    title: "Architectural",
    desc: "Covers outdoor building space allocation transformer yard, generator area, fuel storage, maintenance manholes along with general site plans such as meet-me rooms, staging areas, UPS rooms, computer room floor plans, and seismic zone information.",
  },
  {
    title: "Electrical System",
    desc: "Includes capacity calculations for the designed IT load, single-line diagrams, grounding system diagrams, power cabling/bus-bar layouts, UPS and ATS panel details, and UPS battery autonomy and generator fuel capacity.",
  },
  {
    title: "Mechanical",
    desc: "Same scope as Electrical capacity calculations for IT load, single-line and grounding diagrams, power cabling/bus-bar, UPS/ATS panels, and battery autonomy and generator fuel capacity assessments.",
  },
  {
    title: "Telecommunication",
    desc: "Logical network diagrams and telecom cabling routing, including entrance rooms, MDAs, HDAs, and related components.",
  },
  {
    title: "Security",
    desc: "Covers security devices and zones guard rooms, boom barriers, perimeter fencing/walls, and surveillance systems.",
  },
  {
    title: "Safety",
    desc: "Fire suppression systems, early warning smoke detection systems, and related safety measures.",
  },
];

export default function TIAContent() {
  // =========================
  // TIA-942 SCHEMA
  // =========================
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mmc.biz.pk/services/tia/#service",
        url: "https://mmc.biz.pk/services/tia",
        name: "ANSI/TIA-942 Data Center Certification",
        description:
          "MMC provides ANSI/TIA-942 data center conformity audit and certification services covering architectural, electrical, mechanical, telecommunications, security, and safety requirements.",
        provider: {
          "@id": "https://mmc.biz.pk/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: "ANSI/TIA-942 Data Center Certification and Conformity Audit",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "TIA-942 Certification Assessment Areas",
          itemListElement: benefits.map((item, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.desc,
              provider: {
                "@id": "https://mmc.biz.pk/#organization",
              },
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
            },
          })),
        },
      },

      {
        "@type": "ItemList",
        "@id": "https://mmc.biz.pk/services/tia/#assessment-areas",
        name: "TIA-942 Certification Assessment Areas",
        numberOfItems: benefits.length,
        itemListElement: benefits.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://mmc.biz.pk/services/tia/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mmc.biz.pk/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://mmc.biz.pk/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ANSI/TIA-942 Data Center Certification",
            item: "https://mmc.biz.pk/services/tia",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ================= JSON-LD SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="animate-fade-in-up mt-3 w-full text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
              ANSI/TIA-942{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.2px #0066ff" }}
              >
                Data Center
              </span>
              <br />
              Certification
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
              The ANSI/TIA-942 conformity audit is a thorough, detailed
              assessment against the standard’s requirements covering over
              2,600 criteria across architectural, electrical, mechanical,
              telecommunications, security, and safety categories. The audit
              verifies whether your mission-critical infrastructure truly
              meets your business requirements.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-steel">
              The result is a comprehensive report highlighting any
              non-conformities. Once these are addressed, a “Conformity
              Certificate” is issued, and your data center is listed on the
              official ANSI/TIA-942 website (www.tia-942.org).
            </p>

            <a
              href="/contact-us"
              className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-signal/90"
            >
              Get A Free Quote
            </a>
          </div>

          {/* Right Image */}
          <div className="min-h-[320px] bg-cover bg-center lg:min-h-full">
            <Image
              src="/images/TIA-Standard-Blog-hero.webp"
              alt="TIA-942 Data Center Certification"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section
        className="border-b border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="process-title uppercase">
            Key Advantages{" "}
            <span className="highlight uppercase">System</span> Highlights
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {b.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIA-942 Certification Section */}
      <section className="who-we-are-section">
        <div className="container-split">
          <div
            className="content-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Built to the Global Standard TIA-942 Certified
            </h2>

            <p className="section-description">
              Our data center infrastructure is certified to the TIA-942
              standard, the internationally recognized benchmark for
              telecommunications infrastructure in data centers. This
              certification is a testament to our commitment to reliability,
              security, and world-class performance across every layer of our
              network.
            </p>
          </div>

          <div
            className="content-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              <Image
                src="/images/Concept-A1.webp"
                alt="TIA-942 Data Center Infrastructure"
                width={600}
                height={400}
                className="section-image"
              />

              <div className="image-overlay">
                <p className="overlay-text">
                  Built to global TIA-942 standards for reliable and
                  high-performance data center infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}