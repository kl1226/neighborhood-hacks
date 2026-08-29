import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Prizes & Awards",
  description:
    "View overall prizes, category awards, and participant recognition for Neighborhood Hacks 2026.",
  path: "/prizes",
  index: false,
});

const prizes = [
  {
    place: "1ST",
    title: "1ST PLACE",
    prize: "[Prize]",
    highlight: true,
  },
  {
    place: "2ND",
    title: "2ND PLACE",
    prize: "[Prize]",
    highlight: false,
  },
  {
    place: "3RD",
    title: "3RD PLACE",
    prize: "[Prize]",
    highlight: false,
  },
];

const categoryAwards = [
  {
    title: "[CATEGORY AWARD]",
    prize: "[Prize]",
  },
  {
    title: "[CATEGORY AWARD]",
    prize: "[Prize]",
  },
];

export default function Prizes() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_006 / PRIZES
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          PRIZES
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          what you&apos;re competing for
        </p>

        {/* Main Prizes */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            OVERALL WINNERS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizes.map((prize, i) => (
              <div
                key={prize.title}
                className={`p-5 sm:p-6 lg:p-8 text-center ${prize.highlight ? "rough-border-accent tilt-slight" : i === 1 ? "rough-border tilt-right" : "dashed-border tilt-left"}`}
              >
                <div className="font-hand text-4xl text-accent mb-4">
                  {prize.place}
                </div>
                <h3 className="font-display text-lg font-bold text-off-white mb-2">
                  {prize.title}
                </h3>
                <p className="font-display text-2xl font-bold text-off-white">
                  {prize.prize}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Awards */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            CATEGORY AWARDS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categoryAwards.map((award, i) => (
              <div
                key={i}
                className={`p-6 text-center ${i === 0 ? "rough-border tilt-left" : "dashed-border"}`}
              >
                <h3 className="font-display text-lg font-bold text-off-white mb-1">
                  {award.title}
                </h3>
                <p className="font-display text-xl font-bold text-accent">
                  {award.prize}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* All participants */}
        <div className="paper-cut p-6 mb-12 text-center">
          <p className="font-mono text-sm text-near-black font-semibold">
            ALL PARTICIPANTS RECEIVE{" "}
            <span className="font-bold">[SWAG/CERTIFICATE]</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/challenge"
            className="inline-block font-mono text-sm uppercase tracking-[0.15em] text-near-black bg-accent px-8 py-4 hover:bg-off-white transition-colors font-semibold"
          >
            SEE THE CHALLENGE →
          </Link>
        </div>
      </div>
    </section>
  );
}
