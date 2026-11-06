import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "About MMC | Technology Partner in Pakistan Since 1995",
  description: "Learn about MMC's history, expertise and approach to delivering ICT, cybersecurity, data center and enterprise technology solutions in Pakistan.",
  path: "/about-us",
});

export default function AboutLayout({ children }) { return children; }
