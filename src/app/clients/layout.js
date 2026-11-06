import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "MMC Clients and Technology Partners",
  description: "Meet organizations and technology partners working with MMC on cybersecurity, networking, data center and enterprise technology solutions.",
  path: "/clients",
});

export default function ClientsLayout({ children }) { return children; }
