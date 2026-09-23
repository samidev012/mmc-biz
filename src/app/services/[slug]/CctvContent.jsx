import Image from "next/image";
import { Check, Shuffle, FileText, Repeat } from "lucide-react";
import Partners from "@/components/Partners";

const partners = [
  { name: "ATTOM", logo: "/images/partners/attom.svg" },
  { name: "Fortra", logo: "/images/partners/fortra.svg" },
  { name: "Lenovo", logo: "/images/partners/lenovo.svg" },
  { name: "Honeywell", logo: "/images/partners/honeywell.svg" },
  { name: "Juniper Networks", logo: "/images/partners/juniper.svg" },
  { name: "Fortinet", logo: "/images/partners/fortinet.svg" },
  { name: "D-Link", logo: "/images/partners/dlink.svg" },
];

const steps = [
  {
    icon: Shuffle,
    title: "Talk About Your Needs",
    desc: "We Focus On Meeting Our Customers' Needs With The Best Security Cctv Camera Installation In Karachi. We Start By Understanding Your Requirements And Providing Expert CCTV Installers, Access Control Systems, And Fire Alarms. We Also Offer Network Infrastructure Services And Ensure Everything Works Seamlessly. From Consultation To Installation And Support, We Provide High Quality Services In Karachi At Competitive Prices.",
  },
  {
    icon: FileText,
    title: "Arrange for the Site Survey",
    desc: "We Focus On Meeting Our Customers' Needs With The Best Security Cctv Camera Installation In Karachi. We Start By Understanding Your Requirements And Providing Expert CCTV Installers, Access Control Systems, And Fire Alarms. We Also Offer Network Infrastructure Services And Ensure Everything Works Seamlessly. From Consultation To Installation And Support, We Provide High Quality Services In Karachi At Competitive Prices.",
  },
  {
    icon: Repeat,
    title: "Project Installation in your place",
    desc: "We Focus On Meeting Our Customers' Needs With The Best Security Cctv Camera Installation In Karachi. We Start By Understanding Your Requirements And Providing Expert CCTV Installers, Access Control Systems, And Fire Alarms. We Also Offer Network Infrastructure Services And Ensure Everything Works Seamlessly. From Consultation To Installation And Support, We Provide High Quality Services In Karachi At Competitive Prices.",
  },
];

const brands = [
  {
    name: "ZKT",
    image: "/images/attom-01.jpg",
    imageSide: "right",
    features: [
      "Less than 380mm additional rack depth, Adaptable to all height types of Racks.",
      "DX based design, no need complex water loops and manifolds.",
      "Upto 30kW cooling capacity and optimized cooling air distribution, to ensure even cooling effects within the high density rack.",
      "Seamless integration with IT rack system, no need to separate hot/cold aisles.",
    ],
  },
  {
    name: "HIKVISION",
    image: "/images/attom-02.webp",
    imageSide: "left",
    features: [
      "Industry leading smart control system, with insightful sensor data and intelligent control logics.",
      "All digital control to major components, maintaining optimum working status, and flexible adjustment per onsite working conditions.",
      "1000+ alarm records, and 7days history pressure curve records, 7days history temperature curve records.",
      "Smart monitoring protocols: Web/SNMP/Modbus/Bac-net/Email/Dry contact/IPV6.",
      "Built in web server support visit with web-browser from computers and mobile devices, can view ,control unit through web.",
    ],
  },
  {
    name: "DAHUA",
    image: "/images/attom-03.webp",
    imageSide: "right",
    features: [
      "Less than 380mm additional rack depth, Adaptable to all height types of Racks.",
      "DX based design, no need complex water loops and manifolds.",
      "Upto 30kW cooling capacity and optimized cooling air distribution, to ensure even cooling effects within the high density rack.",
      "Seamless integration with IT rack system, no need to separate hot/cold aisles.",
    ],
  },
  {
    name: "UNIVIEW",
    image: "/images/attom-04.webp",
    imageSide: "left",
    features: [
      "Industry leading smart control system, with insightful sensor data and intelligent control logics.",
      "All digital control to major components, maintaining optimum working status, and flexible adjustment per onsite working conditions.",
      "1000+ alarm records, and 7days history pressure curve records, 7days history temperature curve records.",
      "Smart monitoring protocols: Web/SNMP/Modbus/Bac-net/Email/Dry contact/IPV6.",
      "Built in web server support visit with web-browser from computers and mobile devices, can view ,control unit through web.",
    ],
  },
  {
    name: "VIGI",
    image: "/images/VIGI.webp",
    imageSide: "right",
    features: [
      "Less than 380mm additional rack depth, Adaptable to all height types of Racks.",
      "DX based design, no need complex water loops and manifolds.",
      "Upto 30kW cooling capacity and optimized cooling air distribution, to ensure even cooling effects within the high density rack.",
      "Seamless integration with IT rack system, no need to separate hot/cold aisles.",
    ],
  },
];

export default function CctvContent() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="text-3xl font-bold uppercase leading-tight text-paper md:text-5xl">
              Trusted <span className="text-signal">CCTV Surveillance</span>
              <br />
              From Leading Brands
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-steel">
              Explore Our Extensive Collection Of IT Hardware Featuring World-Renowned
              Brands Such As <strong className="text-paper">HP, Dell, Lenovo, Acer, And Epson</strong>.
              From Powerful Laptops And Desktop Computers To Professional Monitors,
              Printers, And Scanners, We Provide Dependable Products That Help
              Improve Productivity And Efficiency.
            </p>
          </div>

          <div className="relative w-full min-h-[280px] bg-white/5 lg:min-h-full">
            <Image
              src="/images/attom-00.jpg"
              alt="CCTV & Data Center Hardware"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* ================= TRUSTED PARTNERS STRIP ================= */}
      <section>
   

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
         
            <Partners/>
          
        </div>
      </section>
      

      {/* ================= HOW WE WORK ================= */}
      <section className="border-b border-line bg-black px-6 py-16">
        <h2 className="animate-fade-in-up mt-3 text-3xl text-center font-bold uppercase text-paper transition-all duration-500 hover:tracking-wide md:text-6xl">
          How <span className="text-signal">We</span> Work
        </h2>

        <div className="mx-auto mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-line bg-white/5 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal/15 text-signal">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-signal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BRAND SHOWCASE (alternating) ================= */}
      {brands.map((brand) => (
        <section key={brand.name} className="border-b border-line bg-[#050914] px-6 py-16">
          <div
            className={`mx-auto grid gap-8 overflow-hidden rounded-2xl border border-line lg:grid-cols-2 ${
              brand.imageSide === "left" ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            <div className="relative min-h-[280px] bg-white/90 lg:min-h-full">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
              <h3 className="text-3xl font-bold text-paper">{brand.name}</h3>

              <ul className="mt-6 space-y-3">
                {brand.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-steel">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="group relative mt-10 overflow-hidden rounded-full border border-signal bg-signal/10 px-8 py-3 font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]">
                Read More
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}