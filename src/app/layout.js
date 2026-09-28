import { Poppins, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const DEFAULT_TITLE =
  "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises";
const DEFAULT_DESC =
  "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.";

// NOTE: yahan alternates/canonical aur openGraph.url nahi hai.
// Har page apna canonical khud deta hai (lib/seo.js ke through).
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | MMC",
  },
  description: DEFAULT_DESC,
  icons: { icon: "/Favicon.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "MMC",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mmcbiz",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/images/og-default.webp"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MMC",
  url: SITE_URL,
  logo: `${SITE_URL}/images/MMC.webp`,
  description:
    "Pakistan's multi-division ICT partner since 1995 — software, cybersecurity, infrastructure, surveillance and digital marketing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-10, Block-9, Gulshan-e-Iqbal",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-311-1555053",
    contactType: "customer service",
    email: "info@mmc.biz.pk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}