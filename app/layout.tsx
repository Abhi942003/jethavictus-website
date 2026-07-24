import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const hero = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hero",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jethavictus Solutions | Engineered for Victory. Built for the Future.",
  description:
    "Jethavictus is a high-performance technology consulting firm delivering bold, scalable, measurable outcomes across AI, cloud, cybersecurity, ERP, IoT, and blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${hero.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
