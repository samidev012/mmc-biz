const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://mmc.biz.pk/clients/#webpage",
      url: "https://mmc.biz.pk/clients",
      name: "Our Clients | MMC",
      description:
        "Explore the organizations and technology partners that work with MMC for cybersecurity, ICT, networking, data center and technology solutions.",
      isPartOf: {
        "@id": "https://mmc.biz.pk/#website",
      },
      about: {
        "@type": "Thing",
        name: "MMC Clients and Technology Partners",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mmc.biz.pk/clients/#breadcrumb",
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
          name: "Clients",
          item: "https://mmc.biz.pk/clients",
        },
      ],
    },
  ],
};
import VantaDotsBackground from "@/components/ParticlesBackground";
const partners = [
  { name: "Fortinet", src: "/images/21_Fortinet_white_300x300.png" },
  { name: "ATTOM", src: "/images/01_ATTOM_white_300x300.png" },
  { name: "Lenovo", src: "/images/02_Lenovo_white_300x300.png" },
  { name: "Fortra", src: "/images/03_Fortra_white_300x300.png" },
  { name: "HP", src: "/images/04_HP_white_300x300.png" },
  { name: "Dell", src: "/images/05_Dell_white_300x300.png" },
  { name: "H3C", src: "/images/06_H3C_white_300x300.png" },
  { name: "Acer", src: "/images/07_Acer_white_300x300.png" },
  { name: "Hikvision", src: "/images/08_Hikvision_white_300x300.png" },
  { name: "Microsoft", src: "/images/09_Microsoft_white_300x300.png" },
  { name: "Adobe", src: "/images/10_Adobe_white_300x300.png" },
  { name: "AnyDesk", src: "/images/11_AnyDesk_white_300x300.png" },
  { name: "Kaspersky", src: "/images/12_Kaspersky_white_300x300.png" },
  { name: "Sophos", src: "/images/13_Sophos_white_300x300.png" },
  { name: "Zoho", src: "/images/14_Zoho_white_300x300.png" },
  { name: "Zoom", src: "/images/15_Zoom_white_300x300.png" },
  { name: "Vivanco", src: "/images/16_Vivanco_white_300x300.png" },
  { name: "Premium Line", src: "/images/17_Premium_Line_white_300x300.png" },
  { name: "D-Link", src: "/images/18_D-Link_white_300x300.png" },
  { name: "Commin", src: "/images/19_Commin_white_300x300.png" },
  { name: "Cisco", src: "/images/20_Cisco_white_300x300.png" },
  { name: "Sanforte", src: "/images/22_Sanforte_white_300x300.png" },
  { name: "Juniper Networks", src: "/images/23_Juniper_Networks_white_300x300.png" },
  { name: "Honeywell", src: "/images/24_Honeywell_white_300x300.png" },
  { name: "Haier", src: "/images/25_Haier_white_300x300.png" },
  { name: "TCL", src: "/images/26_TCL_white_300x300.png" },
  { name: "Samsung", src: "/images/27_Samsung_white_300x300.png" },
  { name: "Palwan", src: "/images/28_Palwan_white_300x300.png" },
  { name: "PEL", src: "/images/29_PEL_white_300x300.png" },
  { name: "Orient", src: "/images/30_Orient_white_300x300.png" },
];

function PartnerGroup() {
  return (
    <div className="flex shrink-0 gap-4 pr-4">
      {partners.map((partner, index) => (
        <div
          key={`${partner.name}-${index}`}
          className="flex h-30 w-70 shrink-0 items-center justify-center rounded-lg border border-line bg-black/40 p-4 transition-colors hover:border-signal/40"
        >
          <img
            src={partner.src}
            alt={partner.name}
            className="max-h-25 max-w-80 object-cover opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <>
      {/* ================= SEO SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
<section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />
        <div className="relative z-10 animate-fade-in-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-signal/50 hover:bg-signal/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
            Let&apos;s Talk
          </div>
          <h1 className="animate-fade-in-up text-5xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wider md:text-6xl" style={{ animationDelay: '100ms' }}>
            Clients
          </h1>
        </div>
      </section>
      {/* ================= CLIENTS ================= */}

      <section
        className="border-t border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, #0a1128 0%, #1e1b4b 100%)",
        }}
      >
        <div className="mx-auto">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
              Our Clients
            </p>

            <h2 className="animate-fade-in-up mt-3 text-3xl font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
              Trusted by{" "}
              <span className="text-signal">Leading</span>{" "}
              Organizations
            </h2>
          </div>

          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="marquee-track flex w-max">
              <PartnerGroup />
              <PartnerGroup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}