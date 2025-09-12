import type { MetadataRoute } from "next";
import { allSlugs } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const staticRoutes = ["", "/works", "/courses", "/about", "/blog", "/contact", "/bio", "/store", "/epk", "/search"]
    .map((p) => ({
      url: `${base}${p || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    }));

  const dynamicRoutes = allSlugs().map((slug) => ({
    url: `${base}${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
