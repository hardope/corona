import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IconSprite } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/content";

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

// Pages set their own title, description and canonical. openGraph/twitter
// deliberately omit title/description so Next fills them from each page's.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Private Schools in Lagos, Nigeria`,
  },
  description:
    "Corona Schools' Trust Council runs nursery, primary and secondary schools and a college of education in Lagos and Ogun State, Nigeria. Founded in 1955.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@corona_schools",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#17110D" },
  ],
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
