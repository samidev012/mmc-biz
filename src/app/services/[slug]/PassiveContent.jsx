import Image from "next/image";

const benefits = [
  {
    title: "Site Visit",
    desc: "Our passive network specialists begin with a site visit to gather all information needed for design, planning, and quotation measurements, pathways, project feasibility, and a clear understanding of the client’s needs.",
  },
  {
    title: "Network Infrastructure Design",
    desc: "At this stage, we map out the full network infrastructure feasibility studies, future planning, and physical site conditions are all carefully considered to produce a well-structured, up-to-date network layout. This step is critical, since making changes after the passive network is installed is nearly impossible.",
    btn: "Go To Product",
  },
  {
    title: "Network Cabling",
    desc: "Once the design is approved, structured cabling and trunking installation begins either overhead or embedded within walls, using ducting where needed. Only premium-quality cabling is used at this stage.",
    btn: "Go To Product",
  },
  {
    title: "Rack Installation and Arrangement",
    desc: "After cabling is complete, racks are installed and organized  patch panels, patch cords, switches, routers, servers, and other network equipment are fitted inside. Finally, all nodes, outlets, and keystones are installed.",
    btn: "Go To Product",
  },
  {
    title: "Network Testing",
    desc: "The final stage involves comprehensive signal testing across all nodes to confirm proper connections with no disconnections. This is carried out by network specialists using professional testing tools such as Fluke testers.",
    btn: "Go To Product",
  },
];

const benefit = [
  {
    title: "25 Years Cabling System Warranty",
  },
  {
    title: "Dedicated R&D team",
  },
  {
    title: "Professional sales team for worldwide",
  },
  {
    title: "Cabling training and Certificate course",
  },
];

export default function PassiveContent() {
  // =========================
  // PASSIVE NETWORK SERVICES SCHEMA
  // =========================
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mmc.biz.pk/services/passive-network-services/#service",
        url: "https://mmc.biz.pk/services/passive-network-services",
        name: "Passive Network Services | MMC",
        description:
          "MMC provides passive network services including site surveys, network infrastructure design, structured cabling, rack installation, network testing, and data center infrastructure solutions across Pakistan.",
        provider: {
          "@id": "https://mmc.biz.pk/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: "Passive Network and Structured Cabling Services",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Passive Network Services",
          itemListElement: benefits.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.desc,
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
        "@id":
          "https://mmc.biz.pk/services/passive-network-services/#services",
        name: "Passive Network Services",
        numberOfItems: benefits.length,
        itemListElement: benefits.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://mmc.biz.pk/services/passive-network-services/#breadcrumb",
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
            name: "Passive Network Services",
            item: "https://mmc.biz.pk/services/passive-network-services",
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

      {/* ================= HERO ================= */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="animate-fade-in-up mt-3 w-full text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
              Passive{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.2px #0066ff" }}
              >
                Network
              </span>
              <br />
              Network Services
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
              Passive network services are one of the most essential components
              of network installation and setup. “Passive” refers to equipment
              that doesn’t actively process the signals or data passing through
              it. These services focus on the physical installation and
              implementation of network infrastructure setting up network and
              server equipment, structured cabling and trunking, and PBX,
              electrical, and UPS installations without involving configuration
              work.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-steel">
              With an experienced team and up-to-date expertise in network
              infrastructure and passive services, MMC delivers these solutions
              nationwide. We’re committed to meeting the growing communication
              and bandwidth needs of businesses, building reliable backup
              communication paths to keep systems stable under any condition.
              MMC offers complete solutions for deploying passive networks,
              upgrading existing infrastructure, and scaling expansion
              projects all at optimized costs with engineered precision.
            </p>

            <a
              href="/contact-us"
              className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-signal/90"
            >
              Get A Free Quote
            </a>
          </div>

          {/* Right Image */}
          <div
            className="min-h-[320px] bg-cover bg-center lg:min-h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80')",
            }}
          />
        </div>
      </section>

      {/* ================= NETWORK SERVICES ================= */}
      <section
        className="border-b border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
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

      {/* ================= WHY PASSIVE NETWORK MATTERS ================= */}
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
              DATA CENTERS FOR EFFICIENCY AND SUSTAINABILITY
            </h2>

            <p className="section-description">
              One of the biggest challenges in passive network deployment is a
              general lack of awareness about how important this layer really
              is. A common misconception among business managers is that a
              strong network is mainly about high-quality equipment servers,
              switches, and so on while infrastructure and passive components
              get far less attention. This mindset often leads to bigger,
              costlier problems down the line.
            </p>

            <p className="section-description">
              This oversight causes recurring issues in passive network
              projects, and these underlying problems can hold back the
              performance of even the most advanced network equipment. In many
              of the projects MMC assesses, the first issues we uncover trace
              back to poor infrastructure and weak network design and
              unfortunately, by that stage, corrections aren’t always feasible.
            </p>

            <p className="section-description">
              Decision-makers need to recognize that the biggest weakness in
              most networks lies in unstructured, non-standard infrastructure.
              Investing in getting this foundation right should be the priority
              before addressing anything else.
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
                src="/images/Entangled-Cables (1).webp"
                alt="Passive network cabling infrastructure"
                width={600}
                height={400}
                className="section-image"
              />

              <div className="image-overlay">
                <p className="overlay-text">
                  struggles to meet future demands. Anuuru, driven by
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE SECTION ================= */}
      <section className="infrastructure-section">
        <div className="infrastructure-container">
          <div
            className="infrastructure-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="infrastructure-title">
              Building Reliable Passive Network & Data Center Infrastructure
            </h2>

            <p className="infrastructure-description">
              A Reliable Passive Network Is The Foundation Of Every
              High-Performance IT Environment. At MMC, We Design And Implement
              Structured Cabling, Fiber Optic Networks, Data Center
              Infrastructure, And Connectivity Solutions That Deliver Reliable
              Performance, Scalability, And Long-Term Stability. From Proper
              Cable Management To Organized Data Center Deployment, Every Detail
              Is Planned To Support Your Business Today And As It Grows.
            </p>
          </div>

          <div
            className="infrastructure-image-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="infrastructure-image-wrapper">
              <Image
                src="/images/PL-Logo-01-1024x614 (1).webp"
                alt="Passive network infrastructure"
                width={600}
                height={400}
                className="infrastructure-image"
              />

              <div className="infrastructure-image-overlay">
                <p className="infrastructure-overlay-text">
                  struggles to meet future demands. Anuuru, driven by
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        className="border-b border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefit.map((bb) => (
              <div
                key={bb.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <h3 className="mt-5 text-lg font-semibold text-signal">
                  {bb.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}