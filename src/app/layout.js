import { Poppins, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata = {
  metadataBase: new URL("https://mmc-biz.vercel.app"),
   alternates: {
    canonical: "/",   // ✅ ye line add karo
  },
  title: {
    default: "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
    template: "%s | MMC",
  },
  description:
    "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.",
  keywords: [
    "ICT solutions Pakistan",
    "cybersecurity Pakistan",
    "data center Pakistan",
    "CCTV surveillance Pakistan",
    "MMC",
  ],
  icons: {
    icon: "/Favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://mmc-biz.vercel.app",
    siteName: "MMC",
    title: "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
    description:
      "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.",
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: "MMC - ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  site: "@mmcbiz",   // ✅ ye line add karo
  title: "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
  description:
    "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.",
  images: ["/images/og-default.webp"],
},
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MMC",
  url: "https://mmc-biz.vercel.app",
  logo: "https://mmc-biz.vercel.app/images/MMC.webp",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}