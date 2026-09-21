import Footer from "@/components/Footer";
import {
  Monitor,
  Scale,
  Share2,
  Globe,
  Minimize2,
  ShieldCheck,
  UserCog,
  Calendar,
} from "lucide-react";

const benefits = [
  { icon: Monitor, title: "Skill Development", desc: "Helping employees to uplift their expertise with proper guidance and training, polishing their skills and capabilities." },
  { icon: Scale, title: "Work-Life Balance", desc: "Promoting employees' work-life balance in our diversified culture to ensure their mental and physical health." },
  { icon: Share2, title: "Real-Life Projects", desc: "Encouraging employees to get hands-on experience in real-life projects and direct client dealing." },
  { icon: Globe, title: "Professional Networking", desc: "Learn and grow in a supportive environment and expand your professional network for life." },
  { icon: Minimize2, title: "Company Holidays", desc: "Two weeks worth every year. Including your birthday, of course." },
  { icon: ShieldCheck, title: "Performance Bonuses", desc: "Company wide. Do great work, be rewarded for it — it's that simple." },
  { icon: UserCog, title: "Training & Education", desc: "Internships, reimbursement for certs, a leadership training track, and more." },
  { icon: Calendar, title: "Fun Events", desc: "Happy hours, get-togethers, and other fun events with the team." },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto grid  overflow-hidden rounded-2xl border border-signal/20 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-[#0a1128] to-black p-8 md:p-12">
            <h1 className="text-3xl font-bold uppercase leading-tight text-paper md:text-4xl">
              MMC - Your{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1.2px #0066ff" }}>
                Next Career
              </span>
              <br />
              Breakthrough
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-steel">
              Passive network services are one of the most crucial aspects of network
              installation and setup, referring to services related to network
              infrastructure. The term &ldquo;passive&rdquo; refers to inactive
              equipment. Passive network devices and services in computer networks do
              not perform any activity on the signals or data passing through the
              network. As a result, these services are limited to the installation and
              implementation of network infrastructure, installation and setup of
              network and server equipment, network cabling and trunking in a
              structured manner, as well as the installation of PBX phones, electrical
              systems, and UPS systems, without involving configuration tasks.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-steel">
              MMC, with its experienced team and up-to-date knowledge in the field of
              network infrastructure and passive services, is ready to offer these
              services across the country. The company is always striving to meet the
              demands of businesses for improving infrastructure, bandwidth, reliable
              communication paths, and secure alternative communication routes to
              ensure system stability in various conditions. MMC provides the best
              solutions for implementing passive networks, enhancing existing
              infrastructure, and expanding and upgrading projects with optimized
              prices and engineered solutions.
            </p>

            
           <a   href="/contact-us"
              className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-signal/90"
            >
              Get A Free Quote
            </a>
          </div>

          <div
            className="min-h-[320px] bg-cover bg-center lg:min-h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80')",
            }}
          />
        </div>
      </section>

      {/* Growth section */}
      <section
        className="border-b border-line px-6 py-20"
        style={{ background: "linear-gradient(160deg, #000000, #06170f 55%, #0a1128)" }}
      >
        <div className="mx-auto  text-center">
          <h2 className="text-3xl font-bold uppercase text-paper md:text-4xl">
            Creating Your <span className="text-signal">Pathway To Growth</span> And
            Achievement
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-steel">
            Providing a platform for freshers and professionals to accelerate their
            career journey and reach new heights in the IT industry.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-xl border border-line bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_30px_-12px_rgba(0,102,255,0.5)]"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-signal">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}