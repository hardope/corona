import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Corona Schools",
    description: "Nursery, primary and secondary schools and a college of education in Lagos and Ogun State, Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C9000A",
    // The emblem sits inside the maskable safe zone, so one file serves both purposes.
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
