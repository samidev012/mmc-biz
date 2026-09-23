import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Partners from "@/components/Partners";
import VantaDotsBackground from "@/components/ParticlesBackground";

/* =========================
   CONTACT PAGE SCHEMA
========================= */

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://mmc.biz.pk/contact-us/#webpage",
      url: "https://mmc.biz.pk/contact-us",
      name: "Contact MMC",
      description:
        "Contact MMC for cybersecurity, ICT, networking, data center, surveillance and technology solutions across Pakistan.",
      isPartOf: {
        "@id": "https://mmc.biz.pk/#website",
      },
      about: {
        "@id": "https://mmc.biz.pk/#organization",
      },
      mainEntity: {
        "@id": "https://mmc.biz.pk/#organization",
      },
    },
   
    {
      "@type": "BreadcrumbList",
      "@id": "https://mmc.biz.pk/contact-us/#breadcrumb",
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
          name: "Contact Us",
          item: "https://mmc.biz.pk/contact-us",
        },
      ],
    },
  ],
};

const SocialX = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.2-6.6L4.9 22H1.8l8.1-9.3L1 2h7.5l4.7 6.1L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
  </svg>
);

const SocialFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.6-1.5H17V3.7C16.7 3.6 15.7 3.5 14.6 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.9V13h2.7v8h2.9Z" />
  </svg>
);

const SocialYoutube = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2c.4-1.5.4-4.7.4-4.7Zm-12 3V9l5.2 3-5.2 3Z" />
  </svg>
);

const contactCards = [
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+92 311 1555 053"],
    href: "tel:+923111555053",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@mmc.biz.pk"],
    href: "mailto:info@mmc.biz.pk",
  },
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["C-10, Block-9, Gulshan-e-Iqbal, Karachi."],
  },
  {
    icon: MapPin,
    title: "Branch Office",
    lines: ["Bungalow No. A-13, Al-Hilal Society, KDA Scheme-7."],
  },
  {
    icon: MapPin,
    title: "Islamabad Office",
    lines: ["2nd Floor, Emirates Tower, M-13, F-7 Markaz."],
  },
  {
    icon: MapPin,
    title: "Lahore Office",
    lines: [
      "14/5, Shan Arcade, 24 Civic Centre, Barkat Market, New Garden Town.",
    ],
  },
];

export default function ContactUs() {
  return (
    <>
      {/* =========================
          SEO SCHEMA
      ========================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* =========================
          HERO
      ========================= */}

      <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />

        <div className="relative z-10">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Let&apos;s Talk
          </div>

          <h1 className="text-5xl font-bold uppercase text-paper md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================= */}

      <section
        className="border-b border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,102,255,0.1), transparent 50%, rgba(40,167,69,0.08))",
        }}
      >
        <div className="mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((c) => {
            const Wrapper = c.href ? "a" : "div";

            return (
              <Wrapper
                key={c.title}
                {...(c.href ? { href: c.href } : {})}
                className="group rounded-xl border border-line bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_0_30px_-10px_rgba(0,102,255,0.5)]"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-signal/15 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-4 text-sm font-semibold text-paper">
                  {c.title}
                </h3>

                {c.lines.map((l) => (
                  <p
                    key={l}
                    className="mt-1 text-xs leading-relaxed text-steel"
                  >
                    {l}
                  </p>
                ))}
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* =========================
          PARTNERS
      ========================= */}

      <Partners />

      {/* =========================
          GET IN TOUCH
      ========================= */}

      <section
        className="relative overflow-hidden border-t border-line px-6 py-20"
        style={{
          background:
            "linear-gradient(120deg, #06170f, #000000 55%, #001a3d)",
        }}
      >
        <div className="mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-paper">
              Get In Touch
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
              Have questions or need more information? Our team is here to
              help with expert guidance, clear answers, and tailored solutions
              to meet your business needs and goals.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex gap-3">
              {[SocialFacebook, SocialX, SocialYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-signal/30 text-paper/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:bg-signal hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Map */}

            <h3 className="mt-10 text-lg font-semibold text-paper">
              Find Us Here
            </h3>

            <div className="mt-4 overflow-hidden rounded-xl border border-line">
              <iframe
                title="MMC Head Office Location"
                src="https://www.google.com/maps?q=C-10+Block-9+Gulshan-e-Iqbal+Karachi&output=embed"
                className="h-72 w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
              />
            </div>
          </div>

          {/* =========================
              SECURITY REVIEW FORM
          ========================= */}

          <div className="items-center rounded-2xl border border-signal/40 bg-gradient-to-b from-[#0a1128]/80 to-black p-8 transition-shadow duration-500 hover:shadow-[0_0_60px_-15px_rgba(0,102,255,0.4)]">
            <h3 className="text-2xl font-bold text-paper">
              Get A Free Security Posture Review
            </h3>

            <p className="mt-2 text-sm text-steel">
              30-minute conversation with our vCISO team. No obligation, no
              sales pressure.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />

                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />

                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />

                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="rounded-md border border-line bg-black/60 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-steel focus:border-signal"
                />
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <button
                  type="submit"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.02] hover:bg-paper active:scale-[0.98]"
                >
                  Submit Query
                </button>

                <a
                  href="https://wa.me/923111555053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-signal/90 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}