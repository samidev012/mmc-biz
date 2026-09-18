import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Enterprise Client",
    quote:
      "MMC provided a professional and reliable technology solution that aligned perfectly with our operational requirements. Their team was responsive, knowledgeable, and focused on delivering results.",
    rating: 5,
  },
  {
    name: "Hassan Ali",
    role: "Corporate Client",
    quote:
      "Working with MMC gave us greater confidence in our technology infrastructure. Their technical expertise and commitment to quality made the entire process smooth and efficient.",
    rating: 5,
    featured: true,
  },
  {
    name: "Farhan Ahmed",
    role: "Business Client",
    quote:
      "From consultation to implementation, MMC demonstrated strong technical knowledge and excellent customer support. They understood our requirements and delivered a practical solution.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative border-t border-line px-6 py-24 background: radial-gradient(ellipse at 60% 40%, #0a1a2e 0%, #060d1a 50%, #000000 100%)"
     
    >
      {/* fade edges so the grid doesn't look tiled */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto  text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-circuit ">
          Testimonial
        </p>
        
          <h2 className="animate-fade-in-up mt-3 text-3xl font-bold text-paper uppercase transition-all duration-500 hover:tracking-wide md:text-6xl">
          <span className="text-paper">What Our </span>  <span className="text-signal"> Clients Are </span> Saying
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-steel">
          Discover real stories from clients who&apos;ve unlocked growth, efficiency,
          and success with our solutions.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group relative flex flex-col rounded-2xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 ${
                t.featured
                  ? "border-signal bg-gradient-to-b from-signal/10 to-black shadow-[0_0_50px_-15px_rgba(0,102,255,0.5)] md:-translate-y-4"
                  : "border-line bg-black/40 hover:border-signal/40"
              }`}
            >
              <Quote className="h-8 w-8 text-signal/30" />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">
                {t.quote}
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signal/15 font-mono text-sm font-semibold text-signal">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-signal">{t.name}</p>
                  <p className="text-xs font-medium text-circuit">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}