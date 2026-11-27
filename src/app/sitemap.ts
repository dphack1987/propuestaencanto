import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://casayanuba.com",
      lastModified: "2026-11-27",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
