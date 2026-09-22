import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Boxes, ChartNoAxesCombined, CircuitBoard, Database, Eye, Network, ShieldCheck } from 'lucide-react';

const services = [
  { 
    eyebrow: 'Digital solutions', 
    title: 'Build a stronger digital presence', 
    description: 'Transform your online presence with strategic digital marketing, creative design, SEO, content, and social solutions that generate measurable engagement and growth.', 
    icon: ChartNoAxesCombined, 
    image: '/images/Marketing-Book-File.png' // Apna image path
  },
  { 
    eyebrow: 'Advanced security', 
    title: 'Protect what matters most', 
    description: 'Deploy intelligent CCTV and surveillance solutions designed to enhance visibility, strengthen security, and provide real-time insights for safer, smarter operations.', 
    icon: Eye, 
    image: '/images/CCTV-Camera.png'
  },
  { 
    eyebrow: 'Enterprise infrastructure', 
    title: 'Infrastructure built for performance', 
    description: 'Equip your organization with dependable enterprise hardware and network infrastructure designed for operational speed, security, and long-term growth.', 
    icon: Network, 
    image: '/images/Circuit-Board.png'
  },
  { 
    eyebrow: 'Data center solutions', 
    title: 'Build a secure, reliable data center', 
    description: 'Create and manage high-performance data environments with scalable computing, storage, virtualization, backup, and business continuity solutions.', 
    icon: Database, 
    image: '/images/IT-Server.png'
  },
  { 
    eyebrow: 'Cybersecurity & risk protection', 
    title: 'Stay ahead of evolving cyber threats', 
    description: 'Strengthen your cybersecurity strategy with advanced threat detection, endpoint protection, and digital defense solutions built for modern business.', 
    icon: ShieldCheck, 
    image: '/images/Cybersecurity.png'
  },
  { 
    eyebrow: 'Integrated technology', 
    title: 'Connect every part of your business', 
    description: 'Bring your systems, teams, and operations together with smart integration services designed around your goals.', 
    icon: Boxes, 
    image: '/images/AI.png'
  },
];

function ServiceVisual({ image, title }) {
  return (
    <div className="service-visual group relative overflow-hidden rounded-2xl" aria-hidden="true">
      {/* Background decorative elements */}
      <div className="visual-grid absolute inset-0 opacity-20" />
      <div className="visual-orbit orbit-one absolute" />
      <div className="visual-orbit orbit-two absolute" />
      
      {/* Main Image */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
        
        {/* Scan line effect */}
        <span className="visual-scan absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </div>
      
      {/* Corner dots */}
      <div className="visual-dots absolute right-4 top-4 flex gap-1.5">
        <i className="h-1.5 w-1.5 rounded-full bg-signal opacity-60" />
        <i className="h-1.5 w-1.5 rounded-full bg-signal opacity-80" />
        <i className="h-1.5 w-1.5 rounded-full bg-signal" />
        <i className="h-1.5 w-1.5 rounded-full bg-circuit opacity-60" />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="services-section bg-ink px-0 py-0 sm:px-8" id="services">
      <div className="mx-auto max-w-[118rem]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="services-eyebrow">Our solutions</p>
          
          <h2 className="animate-fade-in-up mt-3 text-3xl font-bold text-paper uppercase transition-all duration-500 hover:tracking-wide md:text-6xl">
            Technology solutions <span className="text-signal">that drive</span> business growth
          </h2>
          <p className="mt-5 text-sm leading-6 text-paper/75 sm:text-base">
            Explore our comprehensive range of technology services, designed to support performance, resilience, and long-term operational efficiency.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {services.map((service, index) => (
            <article 
              className={`service-row group ${index % 2 ? 'service-row-reverse' : ''}`} 
              key={service.title}
            >
              <div className="service-copy">
                <p className="text-sm font-medium uppercase tracking-wider text-circuit">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-paper transition-colors duration-300 group-hover:text-signal sm:text-3xl">
                  {service.title}
                </h3>
                <span className="service-copy-line mt-4 block h-px w-16 bg-gradient-to-r from-signal to-transparent" />
                
                {/* Mobile visual */}
                <div className="service-mobile-visual my-6 sm:hidden">
                  <ServiceVisual image={service.image} title={service.title} />
                </div>

                <p className="service-description mt-4 text-sm leading-relaxed text-steel sm:text-base">
                  {service.description}
                </p>

                <Link 
                  href="/services" 
                  className="service-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal transition-all duration-300 hover:gap-3 hover:text-circuit"
                >
                  Explore service 
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>

                <b className="mt-8 block font-mono text-6xl text-line/30 sm:text-8xl">
                  0{index + 1}
                </b>
              </div>

              {/* Desktop visual */}
              <div className="hidden sm:block">
                <ServiceVisual image={service.image} title={service.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}