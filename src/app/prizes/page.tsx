import Link from "next/link";
import SponsorsStripe from "@/components/SponsorsStripe";
import { createPageMetadata } from "@/lib/seo";
import { sponsors, DOMAIN_SPONSOR_VALUE } from "@/lib/sponsors";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Prizes & Sponsors",
  description:
    "View overall prizes, category awards, participant recognition, and the sponsors making Neighborhood Hacks 2026 possible.",
  path: "/prizes",
});

const prizes = [
  {
    place: "🥇",
    title: "GRAND PRIZE",
    description:
      "Neighborhood Hacks Grand Prize Certificate",
    footnote: "Cash and additional prizes will be added as more sponsors join.",
    highlight: true,
  },
  {
    place: "🥈",
    title: "SECOND PLACE",
    description:
      "Neighborhood Hacks Second Place Certificate",
    footnote: "Cash and additional prizes will be added as more sponsors join.",
    highlight: false,
  },
  {
    place: "🥉",
    title: "THIRD PLACE",
    description:
      "Neighborhood Hacks Third Place Certificate",
    footnote: "Cash and additional prizes will be added as more sponsors join.",
    highlight: false,
  },
];

const categoryAwards = [
  {
    title: "[CATEGORY AWARD]",
    description: "To be announced.",
  },
  {
    title: "[CATEGORY AWARD]",
    description: "To be announced.",
  },
];

export default function Prizes() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_006 / PRIZES &amp; SPONSORS
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          PRIZES
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          what you&apos;re competing for
        </p>

        {/* Total prize value */}
        <div className="rough-border-accent p-6 sm:p-8 mb-16 text-center tilt-slight">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-2 font-semibold">
            TOTAL PRIZE VALUE
          </div>
          <div className="font-display text-4xl sm:text-6xl font-bold text-accent">
            ${DOMAIN_SPONSOR_VALUE}+
          </div>
          <p className="font-mono text-sm text-gray mt-3 max-w-md mx-auto font-semibold">
            Our prizes are funded by our amazing sponsors — every dollar goes
            straight back into the prizes you&apos;re competing for.
          </p>
        </div>

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
                <div className="font-hand text-4xl mb-4">{prize.place}</div>
                <h3 className="font-display text-lg font-bold text-off-white mb-3">
                  {prize.title}
                </h3>
                <p className="font-mono text-sm text-gray leading-relaxed mb-4 font-semibold">
                  {prize.description}
                </p>
                <p className="font-mono text-[11px] italic text-dim leading-relaxed">
                  {prize.footnote}
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
                <h3 className="font-display text-lg font-bold text-off-white mb-2">
                  {award.title}
                </h3>
                <p className="font-mono text-sm text-accent font-semibold">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Sponsors */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-2">
            SPONSORS
          </h2>
          <p className="font-hand text-2xl text-accent mb-8 tilt-left">
            the people making this possible
          </p>

          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl mb-8 font-semibold">
            Neighborhood Hacks is made possible by sponsors who believe in
            giving students the tools to solve problems in their own
            communities. Our prizes are funded entirely by them — thank you!
          </p>

          <SponsorsStripe />

          {/* Domain giveaway */}
          <div className="paper-cut p-6 sm:p-8 mt-8 text-center tilt-slight">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50 mb-3 font-semibold">
              FREE DOMAINS — FIRST COME, FIRST SERVE
            </div>
            <h3 className="font-display text-2xl font-bold text-near-black mb-3">
              EVERY TEAM GETS A FREE DOMAIN
            </h3>
            <p className="font-mono text-base text-near-black/80 leading-relaxed max-w-xl mx-auto font-semibold">
              Thanks to our sponsor XYZ Domains, every team receives a free
              domain for their project. Only 100 are available and they go
              first come, first served — so register early and claim yours
              before they run out!
            </p>
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <div className="paper-cut p-5 sm:p-8 text-center mb-12 tilt-right">
          <h2 className="font-display text-2xl font-bold text-near-black mb-4">
            WANT TO SUPPORT THE NEXT GENERATION?
          </h2>
          <p className="font-mono text-base text-near-black/80 mb-6 max-w-xl mx-auto font-semibold">
            Sponsor Neighborhood Hacks and connect with young builders from
            around the world.
          </p>
          <a
            href="mailto:hotcometgames@gmail.com"
            className="inline-block font-mono text-sm uppercase tracking-[0.15em] bg-near-black text-off-white px-4 sm:px-8 py-3 hover:bg-accent hover:text-near-black transition-colors font-semibold"
          >
            BECOME A SPONSOR →
          </a>
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
