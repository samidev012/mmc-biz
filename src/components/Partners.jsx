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
          className="flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-line bg-black/40 p-4 transition-colors hover:border-signal/40"
        >
          <img
            src={partner.src}
            alt={partner.name}
            className="max-h-12 max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="border-t border-line px-6 py-20 background: linear-gradient(135deg, #0a1128 0%, #1e1b4b 100%);">
      <div className="mx-auto">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-circuit">
            Our Partners
          </p>
          <h2 className="animate-fade-in-up mt-3 text-3xl font-bold text-paper transition-all uppercase duration-500 hover:tracking-wide md:text-6xl" >
            Trusted<span className="text-signal"> Technology</span> Partners
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
  );
}
