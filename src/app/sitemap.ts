import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

const indexableRoutes = [
  "/",
  "/about",
  "/challenge",
  "/timeline",
  "/judging",
  "/faq",
  "/register",
  "/code-of-conduct",
  "/rules",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: canonicalUrl(route),
  }));
}
