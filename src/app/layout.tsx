import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IconSprite } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/fraunces-900.woff2", weight: "900", style: "normal" },
    { path: "../fonts/fraunces-italic-500.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = localFont({
  src: [
    { path: "../fonts/publicsans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/publicsans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/publicsans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Corona Schools' Trust Council",
    default: "Corona Schools' Trust Council",
  },
  description:
    "An Odyssey of Influence — seven decades of world-class education across eight campuses in Lagos and Ogun State, Nigeria.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <IconSprite />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
