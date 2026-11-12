import { createPageMetadata } from "@/lib/seo";
import ResultsLookup from "./results-lookup";

export const metadata = createPageMetadata({
  title: "Feedback & Certificates | Neighborhood Hacks 2026",
  description:
    "Find your Neighborhood Hacks initial-round feedback using the email you registered with on Devpost.",
  path: "/results",
  index: false,
});

export default function ResultsPage() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-16 lg:ml-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          NEIGHBORHOOD HACKS 2026 / YOUR RESULTS
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-off-white leading-none mb-6">
          FEEDBACK &amp;
          <br />
          CERTIFICATES
        </h1>
        <p className="font-mono text-sm sm:text-base text-gray leading-relaxed max-w-2xl mb-10 font-semibold">
          Enter the email you used on Devpost to find your project&apos;s
          initial-round feedback. Participation certificates will be added here
          later.
        </p>
        <ResultsLookup />
      </div>
    </section>
  );
}
