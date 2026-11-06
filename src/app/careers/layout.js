import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Careers at MMC | Build Your Technology Career",
  description: "Explore careers at MMC and join teams delivering cybersecurity, software, data center, networking and enterprise technology solutions in Pakistan.",
  path: "/careers",
});

export default function CareersLayout({ children }) { return children; }
