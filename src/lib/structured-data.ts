import { SITE_URL } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Neighborhood Hacks",
      url: `${SITE_URL}/`,
      email: "hotcometgames@gmail.com",
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/favicon.ico`,
        contentUrl: `${SITE_URL}/favicon.ico`,
        width: 1254,
        height: 1254,
        caption: "Neighborhood Hacks",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Neighborhood Hacks",
      alternateName: "Neighborhood Hacks 2026",
      description:
        "A free, global virtual hackathon for high school students building technology solutions to real problems in their communities.",
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

export const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE_URL}/#event-2026`,
  name: "Neighborhood Hacks 2026",
  description:
    "A free, global, seven-day virtual hackathon for high school students to design and build technology solutions to real problems in their communities.",
  url: `${SITE_URL}/timeline/`,
  mainEntityOfPage: `${SITE_URL}/timeline/`,
  sameAs: "https://neighborhood-hacks-2026.devpost.com/",
  image: `${SITE_URL}/og.png`,
  startDate: "2026-10-16",
  endDate: "2026-10-23",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://neighborhood-hacks-2026.devpost.com/",
  },
  organizer: { "@id": organizationId },
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    url: "https://neighborhood-hacks-2026.devpost.com/",
    price: 0,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-08-28",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "High school students",
  },
};
