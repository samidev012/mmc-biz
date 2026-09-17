"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Which companies and industries does MMC serve?",
    a: "MMC provides technology and ICT solutions for banks, financial institutions, regulators, enterprises, corporate organizations, and other businesses that require reliable and secure technology infrastructure.",
  },
  {
    q: "Does MMC provide complete data center solutions?",
    a: "Yes — from infrastructure planning and deployment to security, cabling, and ongoing operational support for mission-critical environments.",
  },
  {
    q: "Can MMC help improve our organization's cybersecurity?",
    a: "Yes — MMC delivers threat protection, security monitoring, VAPT, and managed security services to strengthen your organization's security posture.",
  },
  {
    q: "Can MMC provide customized technology solutions?",
    a: "Yes — our custom software and AI team builds tailored applications and integrations around your specific business requirements.",
  },
  {
    q: "Does MMC provide hardware and infrastructure solutions?",
    a: "Yes — enterprise hardware, networking, and ICT infrastructure sourced and deployed for reliable, scalable environments.",
  },
  {
    q: "How can I contact MMC for a technology solution?",
    a: "Reach out through the Contact Us page or call our team directly — we'll schedule a discovery call to understand your requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative border-t border-line px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #0a1a2e 0%, #060d1a 50%, #000000 100%), transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr]  background: radial-gradient(ellipse at 60% 40%, #0a1a2e 0%, #060d1a 50%, #000000 100%)">

        {/* Left column */}
        <div>
          <h2 className="text-4xl font-bold uppercase leading-tight md:text-5xl">
            <span className="text-paper">Frequently </span>

            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px #0066ff",
              }}
            >
              Asked
            </span>

            <br />

            <span className="text-paper">Questions</span>
          </h2>

          <div className="mt-8 rounded-2xl border border-signal/40 bg-gradient-to-b from-[#0a1128]/60 to-black p-8">
            <h3 className="text-2xl font-bold text-paper">
              Have a Technology Challenge?
            </h3>

            <p className="mt-3 text-sm font-medium text-signal">
              Let&apos;s build the right solution for your business.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-steel">
              Whether you need cybersecurity, enterprise infrastructure, data
              center solutions, surveillance, hardware, software, or digital
              services, MMC can help you plan and implement the right
              technology solution.
            </p>

            {/* Get in Touch button */}
            <a
              href="/contact-us"
              className="mt-6 inline-block rounded-md bg-signal px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-signal/90"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 rounded-xl bg-signal px-6 py-4 text-left transition-colors hover:bg-signal/90"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-white" />
                    )}
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {f.q}
                  </span>
                </button>

                {isOpen && (
                  <div className="rounded-xl border border-line bg-black/60 px-6 py-5">
                    <p className="text-sm leading-relaxed text-steel">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}