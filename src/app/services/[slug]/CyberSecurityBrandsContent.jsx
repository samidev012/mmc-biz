import Image from "next/image";

const brands = [
  {
    name: "FORTRA",
    logo: "/images/03_Fortra_white_300x300.png",
    desc: "A Cybersecurity Software Company Offering Data Protection, Offensive Security Testing, And Infrastructure Defense Solutions.",
  },
  {
    name: "Kaspersky",
    logo: "/images/12_Kaspersky_white_300x300.png",
    desc: "A Global Cybersecurity Company Known For Endpoint Protection, Threat Intelligence, And Antivirus Technology.",
  },
  {
    name: "SolarWinds",
    logo: "/images/New-Project-1.webp",
    desc: "An IT Management Software Company Known For Network Monitoring And Infrastructure Observability Tools.",
  },
  {
    name: "Splunk",
    logo: "/images/New-Project-5.webp",
    desc: "A Data Platform Company Built Around SIEM And Operational Analytics For Threat Detection.",
  },
  {
    name: "OpenVPN",
    logo: "/images/New-Project-9.webp",
    desc: "A Secure Networking Company Known For VPN Technology And Zero Trust Network Access.",
  },
  {
    name: "Sangfor",
    logo: "/images/New-Project-10.webp",
    desc: "A Network Security And Cloud Computing Company Known For Firewalls And Secure Access Solutions.",
  },
  {
    name: "CrowdStrike",
    logo: "/images/New-Project-8.webp",
    desc: "A Cloud Native Cybersecurity Company Known For Endpoint Detection, Response, And Threat Intelligence.",
  },
  {
    name: "Fortinet",
    logo: "/images/21_Fortinet_white_300x300.png",
    desc: "A Network Security Company Known For Firewalls, SD-WAN, And Its Integrated Security Fabric Platform.",
  },
  {
    name: "Microsoft",
    logo: "/images/09_Microsoft_white_300x300.png",
    desc: "A Global Technology Company Delivering Enterprise Security Through Its Defender And Sentinel Platforms.",
  },
  {
    name: "Recorded Future",
    logo: "/images/New-Project.webp",
    desc: "A Threat Intelligence Company Known For Real Time Analysis Of Global Cyber Threat Data.",
  },
  {
    name: "Darktrace",
    logo: "/images/New-Project-6.webp",
    desc: "An AI Driven Cybersecurity Company Known For Autonomous Threat Detection Across Networks, Cloud, And Email.",
  },
];

export default function CyberSecurityBrandsContent() {
  // =========================
  // CYBER SECURITY BRANDS SCHEMA
  // =========================
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://mmc.biz.pk/services/cyber-security-brands/#webpage",
        url: "https://mmc.biz.pk/services/cyber-security-brands",
        name: "Cyber Security Brands | MMC",
        description:
          "Explore leading cybersecurity technology brands and vendors partnered with MMC for enterprise security, threat protection, network defense and cybersecurity solutions.",
        isPartOf: {
          "@id": "https://mmc.biz.pk/#website",
        },
        about: {
          "@type": "Thing",
          name: "Cybersecurity Technology Brands",
        },
        mainEntity: {
          "@id":
            "https://mmc.biz.pk/services/cyber-security-brands/#brand-list",
        },
      },
      {
        "@type": "ItemList",
        "@id":
          "https://mmc.biz.pk/services/cyber-security-brands/#brand-list",
        name: "Cyber Security Brands",
        numberOfItems: brands.length,
        itemListElement: brands.map((brand, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: brand.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://mmc.biz.pk/services/cyber-security-brands/#breadcrumb",
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
            name: "Cyber Security Brands",
            item: "https://mmc.biz.pk/services/cyber-security-brands",
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
        <div className="pointer-events-none absolute -left-10 top-10 opacity-10">
          <Image
            src="/images/MMC.webp"
            alt=""
            width={220}
            height={80}
          />
        </div>

        <h1 className="relative animate-fade-in-up text-4xl font-bold uppercase leading-tight text-paper transition-all duration-500 hover:tracking-wide md:text-7xl">
          Cyber Security
          <br />
          Brands
        </h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-b border-line bg-black px-6 py-16 text-center">
        <h2 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
          The Names <span className="text-signal">Behind Your</span> Security
          Stack
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-steel">
          We Partner With The Industry&rsquo;s Leading Cybersecurity Vendors To
          Deliver Best In Class Protection, So You&rsquo;re Never Relying On A
          Single Point Of Failure.
        </p>
      </section>

      {/* ================= BRANDS GRID ================= */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center rounded-xl border border-line bg-white/[0.03] px-8 py-12 text-center transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:bg-signal/5"
            >
              <div className="flex h-14 items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={300}
                  height={150}
                  className="h-30 w-50 object-cover brightness-0 invert"
                />
              </div>

              <p className="mt-6 text-sm leading-relaxed text-steel">
                {brand.desc}
              </p>

              <button className="mt-6 text-xs font-semibold uppercase tracking-wide text-signal transition-colors hover:text-signal/70">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}s