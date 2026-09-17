import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "MMC-Biz ",
  description: "My website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}