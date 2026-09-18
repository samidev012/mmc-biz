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
  title: "MMC | ICT Solutions for Pakistan's Banks, Regulators & Enterprises",
  description:
    "For over 30 years, MMC has delivered software, cybersecurity, data center, hardware, surveillance, and digital solutions to Pakistan's leading organizations.",
     icons: {
  icon: "/Favicon.png",
},
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} ${plexMono.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}