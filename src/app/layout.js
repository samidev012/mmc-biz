import { Poppins, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

// =====================================================
// Fonts
// =====================================================

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

// =====================================================
// Default SEO
// =====================================================

const DEFAULT_TITLE =
  "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises";

const DEFAULT_DESC =
  "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.";

// =====================================================
// Global Metadata
// =====================================================

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: "%s | MMC",
  },

  description: DEFAULT_DESC,

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

// =====================================================
// Organization Schema
// =====================================================

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

// =====================================================
// NEW: Theme init script (page load par flash rokta hai)
// Default dark hai, light sirf tab jab user ne select kiya ho
// =====================================================

const themeScript = `
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
`;

// =====================================================
// Root Layout
// =====================================================

export default function RootLayout({ children }) {
  return (
    // NEW: suppressHydrationWarning (script server/client class mismatch ke liye)
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* NEW: theme script, JSON-LD se pehle */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

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

        {/* NEW: force-dark, taake abhi ke dark sections light mode mein na tootein */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}