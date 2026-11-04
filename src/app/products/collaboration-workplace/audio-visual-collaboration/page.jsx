import Link from "next/link";
import { ArrowUpRight, ClipboardList, Headphones, RefreshCw } from "lucide-react";
import AVQuotationForm from "./AVQuotationForm";
import AVMotion from "./AVMotion";

const processSteps = [
  {
    icon: Headphones,
    title: "Talk About Your AV Needs",
    description:
      "MMC provides complete AV solutions across Pakistan, including video conferencing, interactive LED displays, projectors and professional sound systems for corporate offices and educational institutions, with installation and technical support.",
  },
  {
    icon: ClipboardList,
    title: "Arrange for a Site Survey",
    description:
      "We assess your AV requirements, room layout, acoustics and equipment needs, then recommend a solution for offices, boardrooms, conference rooms, schools, colleges and universities.",
  },
  {
    icon: RefreshCw,
    title: "Professional AV Installation at Your Site",
    description:
      "Our team installs and integrates your displays, video conferencing and sound systems, with connectivity checks, system testing and dependable performance support.",
  },
];

const partners = ["JBL", "ATEN", "audio-technica", "Extron", "EPSON", "Electro-Voice"];

const solutions = [
  {
    title: "Audio Conferencing Solutions",
    description:
      "Advanced audio conferencing for corporate offices, conference rooms and boardrooms. Clear voice communication helps teams hold effective, reliable business discussions.",
  },
  {
    title: "Video Conferencing Solutions",
    description:
      "Professional video conferencing for offices, boardrooms and meeting rooms, with cameras, microphones, speakers and integrated room systems for seamless collaboration.",
  },
  {
    title: "Interactive LED Displays",
    description:
      "Interactive displays for offices, schools, colleges and universities. Support presentations, digital whiteboarding, collaboration and engaging learning experiences.",
  },
  {
    title: "Conference Room & Boardroom Solutions",
    description:
      "Complete room AV solutions with displays, microphones, speakers, video conferencing and centralized controls for efficient meetings and professional collaboration.",
  },
  {
    title: "Projector Solutions",
    description:
      "Projection systems and screens for corporate presentations, classrooms, training rooms and auditoriums, selected for clear visuals and reliable performance.",
  },
  {
    title: "Professional Sound Systems",
    description:
      "Speakers, amplifiers, microphones and audio mixers for offices, conference rooms, educational institutions and auditoriums, configured for clear sound coverage.",
  },
  {
    title: "LED Video Walls & SMD Displays",
    description:
      "Large-format display solutions for corporate environments, auditoriums, commercial spaces and events, built for impactful visuals and digital communication.",
  },
  {
    title: "Digital Signage Solutions",
    description:
      "Digital displays for reception areas, offices, educational institutions and commercial spaces to share announcements, company information and promotions.",
  },
  {
    title: "Auditorium & Stage Solutions",
    description:
      "Integrated AV for auditoriums, conference halls and stage environments, including projection, LED displays, professional sound, microphones and stage equipment.",
  },
];

function ImagePlaceholder({ title }) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder for ${title}`}
      className="flex min-h-[250px] w-full items-center justify-center bg-[#edf3fb] text-center sm:min-h-[320px] lg:min-h-[370px]"
    >
      <div className="border border-dashed border-[#1674ff]/50 px-6 py-5 text-[#1674ff]">
        <p className="text-xs font-bold uppercase tracking-[0.18em]">Image space</p>
        <p className="mt-2 max-w-xs text-sm text-slate-600">Add your {title.toLowerCase()} image here</p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Professional Audio Visual Solutions | MMC",
  description:
    "Professional audio visual solutions in Pakistan for meeting rooms, classrooms, boardrooms, auditoriums and workplaces.",
};

export default function AudioVisualCollaborationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101827]">
      <section className="av-hero relative overflow-hidden bg-[#c5dcff] px-6 py-16 sm:py-20 lg:py-28">
        <AVMotion animation="glow-one" className="av-hero-glow av-hero-glow-one" />
        <AVMotion animation="glow-two" className="av-hero-glow av-hero-glow-two" />
        <div className="av-hero-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
          <AVMotion animation="hero-left">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1268e8]">Audio Visual Solutions</p>
            <h1 className="max-w-2xl text-4xl font-bold uppercase leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Professional AV Solutions From Leading Brands
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#16243b]">
              Transform your meeting rooms, classrooms and auditoriums with MMC&apos;s professional audio visual solutions. From interactive LED displays and video conferencing systems to projectors, professional audio and complete meeting room solutions, we deliver reliable technology tailored to your needs.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#16243b]">
              Looking for the right AV solution? Contact our team for expert guidance, product recommendations and a customized quotation.
            </p>
          </AVMotion>

          <AVMotion animation="hero-right" className="av-quote-card rounded-2xl border-2 border-[#1674ff] bg-white/25 p-6 sm:p-9">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Request a Custom AV Quotation</h2>
            <p className="mt-4 max-w-xl leading-6 text-[#26364e]">
              Share your requirements and get expert product recommendations and a tailored quotation.
            </p>
            <AVQuotationForm />
          </AVMotion>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-center text-3xl font-bold uppercase sm:text-5xl">Our Trusted <span className="text-[#1674ff]">Technology</span> Partners</h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <AVMotion key={partner} animation="partner" className="flex min-h-20 items-center justify-center px-3 text-center text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                {partner}
              </AVMotion>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-9 text-center text-3xl font-bold uppercase sm:mb-12 sm:text-5xl">How <span className="text-[#1674ff]">We</span> Work</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {processSteps.map(({ icon: Icon, title, description }) => (
              <AVMotion key={title} as="article" animation="reveal" className="rounded-2xl border border-slate-300 bg-white p-6 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e5efff] text-[#152238]"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
              </AVMotion>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1240px] space-y-9 sm:space-y-12">
          {solutions.map((solution, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <AVMotion key={solution.title} as="article" animation="reveal-row" className="grid overflow-hidden rounded-2xl border border-slate-300 bg-white lg:grid-cols-2">
                {imageFirst && <ImagePlaceholder title={solution.title} />}
                <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-10">
                  <h2 className="text-2xl font-bold uppercase leading-tight sm:text-3xl">{solution.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">{solution.description}</p>
                  <Link href="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0866f5] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#0056d6]">
                    Read More <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                {!imageFirst && <ImagePlaceholder title={solution.title} />}
              </AVMotion>
            );
          })}
        </div>
      </section>
    </main>
  );
}
