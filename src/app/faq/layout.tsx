import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 FAQ | Eligibility, Teams & Tools",
  description:
    "Get answers about eligibility, coding experience, teams, cost, safety, time zones, and AI tool use at the virtual high school hackathon.",
  path: "/faq",
});

export default function FAQLayout({ children }: { children: ReactNode }) {
  return children;
}
