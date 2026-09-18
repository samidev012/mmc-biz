import { HeartHandshake, Leaf, Lightbulb, Trophy, Repeat2, Scale, BarChart3, PenLine } from "lucide-react";
import VantaDotsBackground from "@/components/ParticlesBackground";

const applications = [
  { n: "01", title: "Integrity", desc: "We operate with honesty, transparency, and strong ethical principles building lasting trust with every client and partner we work with.", icon: HeartHandshake },
  { n: "02", title: "Sustainability", desc: "We're committed to sustainable practices across our operations and solutions, helping build a better future for our communities and environment.", icon: Leaf },
  { n: "03", title: "Innovation", desc: "We embrace creativity and continuously push forward, staying at the cutting edge of technology.", icon: Lightbulb },
  { n: "04", title: "Excellence", desc: "We hold ourselves to the highest standards, consistently delivering quality solutions and services that meet or exceed industry benchmarks.", icon: Trophy },
];

const certifications = ["P@SHA", "PSEB", "ISO 27001", "Govt. Registered"];

const principles = [
  { title: "Sidq — Truthfulness", desc: "Honest timelines, costs, and capabilities — every proposal and update is an act of truthfulness.", icon: Repeat2 },
  { title: "Adl — Justice", desc: "Every person in the chain — clients, team, partners — is treated with complete fairness.", icon: Scale },
  { title: "Khidmah — Service", desc: "Technology built at MMC is not just code, it is service to creation. We build things that help people live and work better.", icon: BarChart3 },
  { title: "Amanah — Trust", desc: "Every project is a sacred trust. We guard it with full commitment: meeting deadlines, protecting data, delivering what was promised.", icon: PenLine },
];

export default function AboutUs() {
  return (
    <>
      {/* Page title */}
      <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center">
        <VantaDotsBackground />
        <div className="relative z-10">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Let&apos;s Talk
          </div>
          <h1 className="text-5xl font-bold uppercase text-paper md:text-6xl">About Us</h1>
        </div>
      </section>

      {/* Applications */}
      <section className="px-6 py-20" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold uppercase text-paper">Applications</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <div key={a.n} className="rounded-xl border border-line bg-black/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-steel">{a.n}</span>
                  <a.icon className="h-5 w-5 text-signal" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-paper">{a.title}</h3>
                <p className="mt-2 text-sm text-steel">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line/50 pt-12 sm:grid-cols-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-center justify-center">
                <span className="text-center font-mono text-sm font-semibold uppercase tracking-wide text-paper/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-line px-6 py-20" style={{ background: "linear-gradient(120deg, #0a1128, #000000 60%, #06170f)" }}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-circuit">Who We Are</p>
          <h2 className="mt-3 text-3xl font-bold text-paper md:text-4xl">
            Technology <span className="text-signal">That Moves</span> Your Business Forward
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-steel">
            MMC is a technology solutions and ICT services provider helping organizations
            build secure, connected, and future-ready digital environments. From
            enterprise infrastructure and cybersecurity to data centers, surveillance,
            software integration, and digital solutions, we combine technical expertise
            with trusted technologies to solve complex business challenges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Our Mission</h3>
              <p className="mt-3 text-sm text-steel">
                To empower organizations with secure, reliable, and innovative technology
                solutions that improve operational efficiency, strengthen digital
                resilience, and support sustainable business growth.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Our Vision</h3>
              <p className="mt-3 text-sm text-steel">
                To become a trusted technology partner for organizations across Pakistan
                by delivering world-class ICT solutions, exceptional service, and
                innovative digital capabilities.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-black/40 p-6 text-left">
              <h3 className="text-lg font-semibold text-paper">Why Choose Us</h3>
              <p className="mt-3 text-sm text-steel">
                We combine industry experience, technical expertise, trusted technology
                partnerships, and customer-focused support to deliver solutions built
                around your organization&apos;s real business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner ribbon */}
      <section className="border-t border-line px-6 py-16 text-center" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <h2 className="mx-auto max-w-4xl text-2xl font-bold uppercase text-paper md:text-3xl">
          Your trusted <span className="text-signal">partner</span> in digital transformation,
          helping <span className="text-signal">you stay ahead</span> of the competition
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-steel">
          For over three decades, MMC has helped Pakistan&apos;s banks, regulators, and
          enterprises navigate an ever-changing technology landscape. From infrastructure
          and cybersecurity to surveillance and digital marketing, we combine deep
          technical expertise with dependable, long-term partnerships — so our clients
          can focus on growth while we handle the technology behind it.
        </p>
      </section>

      {/* Guiding Principles */}
      <section className="border-t border-line px-6 py-20" style={{ background: "linear-gradient(90deg, #06170f, #0a1128 60%, #001a3d)" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-bold uppercase leading-tight text-paper">
              Guiding
              <br />
              <span className="text-signal">Principles</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel">
              Our work is an act of Ibadah — worship through excellence, honesty, and
              service. We believe that building beneficial things with integrity is a
              path that pleases Allah (SWT).
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-black/40 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-paper">{p.title}</h3>
                <p className="mt-2 text-sm text-steel">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}