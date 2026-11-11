import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/products",
    "/health-wellness",
    "/contact",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
