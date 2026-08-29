import type { Metadata } from "next";

export const SITE_URL = "https://neighborhoodhacks.org";
export const SITE_NAME = "Neighborhood Hacks 2026";
export const HOME_TITLE =
  "Neighborhood Hacks 2026 | Global Online High School Hackathon";
export const HOME_DESCRIPTION =
  "Join Neighborhood Hacks 2026, a free seven-day virtual hackathon where high school students worldwide build solutions to real community problems.";

const SOCIAL_IMAGE = {
  url: `${SITE_URL}/og.png`,
  width: 1200,
  height: 630,
  alt: "Neighborhood Hacks 2026 — Build locally, share globally",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function canonicalUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath.replace(/\/$/, "")}/`;
}

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataOptions): Metadata {
  const canonical = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: canonical,
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
