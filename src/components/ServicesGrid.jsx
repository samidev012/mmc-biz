import Link from 'next/link';
import { ArrowUpRight, Boxes, ChartNoAxesCombined, CircuitBoard, Database, Eye, Network, ShieldCheck } from 'lucide-react';

const services = [
  { eyebrow: 'Digital solutions', title: 'Build a stronger digital presence', description: 'Transform your online presence with strategic digital marketing, creative design, SEO, content, and social solutions that generate measurable engagement and growth.', icon: ChartNoAxesCombined, visual: 'digital' },
  { eyebrow: 'Advanced security', title: 'Protect what matters most', description: 'Deploy intelligent CCTV and surveillance solutions designed to enhance visibility, strengthen security, and provide real-time insights for safer, smarter operations.', icon: Eye, visual: 'security' },
  { eyebrow: 'Enterprise infrastructure', title: 'Infrastructure built for performance', description: 'Equip your organization with dependable enterprise hardware and network infrastructure designed for operational speed, security, and long-term growth.', icon: Network, visual: 'network' },
  { eyebrow: 'Data center solutions', title: 'Build a secure, reliable data center', description: 'Create and manage high-performance data environments with scalable computing, storage, virtualization, backup, and business continuity solutions.', icon: Database, visual: 'datacenter' },
  { eyebrow: 'Cybersecurity & risk protection', title: 'Stay ahead of evolving cyber threats', description: 'Strengthen your cybersecurity strategy with advanced threat detection, endpoint protection, and digital defense solutions built for modern business.', icon: ShieldCheck, visual: 'cyber' },
  { eyebrow: 'Integrated technology', title: 'Connect every part of your business', description: 'Bring your systems, teams, and operations together with smart integration services designed around your goals.', icon: Boxes, visual: 'integrated' },
];

function ServiceVisual({ type, Icon }) {
  return <div className={`service-visual service-visual-${type}`} aria-hidden="true">
    <div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    <div className="visual-icon"><Icon /></div><span className="visual-scan" />
    <div className="visual-dots"><i /><i /><i /><i /></div>
  </div>;
}

export default function ServicesSection() {
  return <section className="services-section bg-ink px-0 py-0 sm:px-8 " id="services">
    <div className="mx-auto max-w-[118rem]">
      <div className="mx-auto max-w-4xl text-center"><p className="services-eyebrow">Our solutions</p><h2 className="services-heading mt-4 text-paper">Technology solutions <span>that drive</span> business growth</h2><p className="mt-5 text-sm leading-6 text-paper/75 sm:text-base">Explore our comprehensive range of technology services, designed to support performance, resilience, and long-term operational efficiency.</p></div>
      <div className="mt-12 space-y-4">
        {services.map((service, index) => <article className={`service-row ${index % 2 ? 'service-row-reverse' : ''}`} key={service.title}>
          <div className="service-copy"><p>{service.eyebrow}</p><h3>{service.title}</h3><span className="service-copy-line" /><div className="service-mobile-visual"><ServiceVisual type={service.visual} Icon={service.icon} /></div><p className="service-description">{service.description}</p><Link href="/services" className="service-link">Explore service <ArrowUpRight /></Link><b>0{index + 1}</b></div>
          <ServiceVisual type={service.visual} Icon={service.icon} />
        </article>)}
      </div>
    </div>
  </section>;
} 