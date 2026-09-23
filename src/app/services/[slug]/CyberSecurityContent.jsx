import Image from "next/image";

const benefits = [
  {
    title: "SOC 24/7",
    desc: "Round-the-clock threat monitoring, detection, and response from a dedicated Security Operations Center.",
    btn: "Read More",
  },
  {
    title: "MSSP",
    desc: "Comprehensive managed security services covering firewalls, endpoint management, threat intelligence, and compliance support.",
    btn: "Read More",
  },
  {
    title: "Managed IT Services",
    desc: "End-to-end management of your IT environment, including monitoring, patching, helpdesk support, and maintenance.",
    btn: "Read More",
  },
  {
    title: "VAPT",
    desc: "Assessment identifies known vulnerabilities across the entire environment, while testing confirms which of those findings can actually be exploited.",
    btn: "Read More",
  },
  {
    title: "Red Teaming",
    desc: "Simulates a determined, real-world attacker operating inside your environment over an extended period to measure detection, not just find vulnerabilities.",
    btn: "Read More",
  },
];

export default function Cybersecurity() {
  // =========================
  // CYBER SECURITY PAGE SCHEMA
  // =========================
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://mmc.biz.pk/services/cyber-security/#service",
        url: "https://mmc.biz.pk/services/cyber-security",
        name: "Cyber Security Services | MMC",
        description:
          "Enterprise-level cybersecurity services from MMC, including 24/7 SOC monitoring, managed security services, managed IT services, VAPT, and red teaming.",
        provider: {
          "@id": "https://mmc.biz.pk/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        serviceType: "Cyber Security Services",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cyber Security Services",
          itemListElement: benefits.map((benefit, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: benefit.title,
              description: benefit.desc,
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
        "@id": "https://mmc.biz.pk/services/cyber-security/#services",
        name: "MMC Cyber Security Services",
        numberOfItems: benefits.length,
        itemListElement: benefits.map((benefit, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: benefit.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://mmc.biz.pk/services/cyber-security/#breadcrumb",
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
            name: "Cyber Security",
            item: "https://mmc.biz.pk/services/cyber-security",
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
      <section
        className="relative overflow-hidden px-6 py-24 text-center"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 60%, #0a1128)",
        }}
      >
        <h1 className="relative animate-fade-in-up text-4xl font-bold uppercase leading-tight text-paper transition-all duration-500 hover:tracking-wide md:text-7xl">
          Enterprise-Level Cyber Security
          <br />
          for Growing Businesses
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-steel md:text-base">
          Threats don’t wait for business hours, and neither do we. Our cyber
          security services combine continuous monitoring, expert managed
          infrastructure, and hands-on testing to keep your business
          protected, from always-on threat detection to the IT foundation
          running behind it.
        </p>
      </section>

      {/* ================= MANAGED SERVICES ================= */}
      <section
        className="border-b border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="process-title uppercase">
            Managed{" "}
            <span className="highlight uppercase">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-steel">
            Complete IT infrastructure management—or strategic partnership
            with your existing team. Both include strategic vCIO and proactive
            vITM leadership.
          </p>

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

                <button className="group relative mt-9 overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">
                  {b.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}