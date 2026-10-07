import type { MetadataRoute } from "next";
import { NAV_LINKS, SITE_URL } from "@/lib/content";

// Every public page is in the primary nav, so the nav is the page list.
// lastModified/priority are omitted: Google ignores them unless they're accurate.
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...NAV_LINKS.map((link) => link.href)].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
