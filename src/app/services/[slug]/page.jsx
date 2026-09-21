import AttomPage from "./attom";
import { notFound } from "next/navigation";

const pages = {
  attom: AttomPage,
};

export default async function ServicePage({ params }) {
  const { slug } = await params; // ✅ await zaroori hai Next.js 15 mein
  const Component = pages[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}