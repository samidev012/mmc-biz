import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Industries We Serve | MMC Pakistan",
  description: "Explore MMC technology and ICT solutions for banking, finance, government, healthcare, education, telecom, retail and enterprise organizations.",
  path: "/industries",
});

export default function IndustriesLayout({ children }) { return children; }
