import { HeartHandshake, Leaf, Lightbulb, Trophy, Repeat2, Scale, BarChart3, PenLine } from "lucide-react";
import Footer from "@/components/Footer";
import VantaDotsBackground from "@/components/ParticlesBackground";
 
 
 export default function Clients() {
  return (
    <>
 
 <section className="relative overflow-hidden border-b border-line px-6 py-24 text-center" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(0,102,255,0.22), transparent 70%)" }}>
              <VantaDotsBackground  />
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-semibold tracking-wide text-signal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                Let&apos;s Talk
              </div>
              <h1 className="text-5xl font-bold uppercase text-paper md:text-6xl">About Us</h1>
            </section>
            <Footer />
</>
  )
};