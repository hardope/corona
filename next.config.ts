import type { NextConfig } from "next";

// Old coronaschools.org (WordPress) URLs → their equivalents here, so existing
// search rankings and inbound links carry over when this site replaces it.
const LEGACY_REDIRECTS: Record<string, string> = {
  "/our-schools": "/schools",
  "/nursery-ikoyi": "/schools",
  "/gbagada-school": "/schools",
  "/ikoyi-school": "/schools",
  "/corona-school-lekki": "/schools",
  "/victoria-island": "/schools",
  "/corona-day-secondary-school-lekki": "/schools",
  "/secondary-school-agbara": "/schools",
  "/schools-history": "/about",
  "/corona-ceo-message": "/about",
  "/corona-school-de-message": "/about",
  "/contact-us": "/contact",
  "/corona-schools-techhub": "/techhub",
  "/admission": "/admissions",
  "/admission-campaign": "/admissions",
  "/application-form-page-corona-schools": "/admissions",
  "/css-and-cdss-download-admission-form": "/admissions",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(LEGACY_REDIRECTS).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
