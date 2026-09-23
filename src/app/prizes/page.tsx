import Link from "next/link";
import SponsorsStripe from "@/components/SponsorsStripe";
import { createPageMetadata } from "@/lib/seo";
import {
  TOTAL_PRIZE_VALUE,
  MOJOAUTH_SPONSOR_VALUE,
  BACKBOARD_WINNER_COUNT,
  FREE_DOMAIN_COUNT,
  FINALIST_COUNT,
} from "@/lib/sponsors";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Prizes & Sponsors",
  description:
    "View overall prizes, category awards, participant recognition, and the sponsors making Neighborhood Hacks 2026 possible.",
  path: "/prizes",
});

type PrizeItem = {
  label: string;
  note?: string;
};

const prizes = [
  {
    place: "🥇",
    title: "GRAND PRIZE",
    cash: "$1,613",
    winners: 1,
    items: [
      { label: "$125 in cash" },
      {
        label: "MojoAuth one-year license",
        note: "$600 worth",
      },
      { label: "Formaloo paid workspace credits", note: "$500 worth" },
      { label: "Spine one-year professional license", note: "$379 worth" },
      { label: "Pyxel Edit license", note: "$9 worth" },
    ],
    certificate: "Neighborhood Hacks First Place Certificate",
    noCashFootnote: false,
    highlight: true,
  },
  {
    place: "🥈",
    title: "SECOND PLACE",
    cash: "$1,134",
    winners: 1,
    items: [
      { label: "$25 in cash" },
      {
        label: "MojoAuth one-year license",
        note: "$600 worth",
      },
      { label: "Formaloo paid workspace credits", note: "$500 worth" },
      { label: "Pyxel Edit license", note: "$9 worth" },
    ],
    certificate: "Neighborhood Hacks Second Place Certificate",
    noCashFootnote: false,
    highlight: false,
  },
  {
    place: "🥉",
    title: "THIRD PLACE",
    cash: "$1,109",
    winners: 1,
    items: [
      {
        label: "MojoAuth one-year license",
        note: "$600 worth",
      },
      { label: "Formaloo paid workspace credits", note: "$500 worth" },
      { label: "Pyxel Edit license", note: "$9 worth" },
    ],
    certificate: "Neighborhood Hacks Third Place Certificate",
    noCashFootnote: true,
    highlight: false,
  },
];

const categoryAwards = [
  {
    title: "MOST UNIQUE SOLUTION",
    cash: "$609",
    winners: 1,
    items: [
      {
        label: "MojoAuth one-year license",
        note: "$600 worth",
      },
      { label: "Pyxel Edit license", note: "$9 worth" },
    ],
    noCashFootnote: true,
  },
  {
    title: "BEST TECHNICAL EXECUTION",
    cash: "$609",
    winners: 1,
    items: [
      {
        label: "MojoAuth one-year license",
        note: "$600 worth",
      },
      { label: "Pyxel Edit license", note: "$9 worth" },
    ],
    noCashFootnote: true,
  },
];

const participantPrizes = [
  {
    title: "XYZ DOMAIN AWARDS",
    cash: "$15",
    winners: `${FREE_DOMAIN_COUNT}`,
    description:
      "The first 100 requests after the hackathon receive a free .xyz domain for a year, no costs for a year. (≈$15 value each)",
    noCashFootnote: true,
  },
  {
    title: "FINALIST CERTIFICATION",
    winners: `${FINALIST_COUNT}`,
    description:
      "The top 10 submissions receive an official Neighborhood Hacks Finalist Certificate",
    noCashFootnote: false,
  },
  {
    title: "BACKBOARD DEVELOPER CREDITS",
    cash: "$10",
    winners: `${BACKBOARD_WINNER_COUNT}`,
    description:
      "$10 developer credits usable across Backboard's Unified API, Studio, R-CLI, and Terminal Bench. Available to all participants of Neighborhood Hacks. Use code: 'NEIGHBORHOODHACKS2026'",
    noCashFootnote: true,
    link: {
      href: "https://app.backboard.io/hackathon",
      label: "Sign up and redeem at app.backboard.io/hackathon",
    },
  },
];

function PrizeItems({ items }: { items: PrizeItem[] }) {
  return (
    <ul className="font-mono text-sm text-gray text-left max-w-md mx-auto space-y-3 mb-4 font-semibold">
      {items.map((item) => (
        <li key={item.label} className="flex items-baseline gap-2">
          <span className="text-accent">·</span>
          <span>
            {item.label}
            {item.note && (
              <>
                <span> — </span>
                <span className="text-accent">{item.note}</span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function NoCashFootnote() {
  return (
    <p className="font-mono text-[11px] italic text-accent leading-relaxed font-semibold">
      ⚠️ THIS IS NOT A CASH PRIZE
    </p>
  );
}

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
            ${TOTAL_PRIZE_VALUE.toLocaleString("en-US")}+
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
                <h3 className="font-display text-lg font-bold text-off-white mb-2">
                  {prize.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim mb-3 font-semibold">
                  {prize.winners} WINNER{prize.winners === 1 ? "" : "S"}
                </p>
                <p className="font-display text-3xl font-bold text-accent mb-4">
                  {prize.cash}
                </p>
                <PrizeItems items={prize.items} />
                <p className="font-mono text-sm text-gray italic text-center max-w-md mx-auto mb-4 font-semibold">
                  {prize.certificate}
                </p>
                {prize.noCashFootnote && <NoCashFootnote />}
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
                key={award.title}
                className={`p-6 text-center ${i === 0 ? "rough-border tilt-left" : "dashed-border"}`}
              >
                <h3 className="font-display text-lg font-bold text-off-white mb-2">
                  {award.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim mb-3 font-semibold">
                  {award.winners} WINNER{award.winners === 1 ? "" : "S"}
                </p>
                <p className="font-mono text-sm text-accent font-semibold mb-3">
                  {award.cash}
                </p>
                <PrizeItems items={award.items} />
                {award.noCashFootnote && <NoCashFootnote />}
              </div>
            ))}
          </div>
        </div>

        {/* Participant prizes */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            PARTICIPANT PRIZES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {participantPrizes.map((prize, i) => (
              <div
                key={prize.title}
                className={`p-6 text-center ${i === 1 ? "dashed-border tilt-left" : i === 0 ? "rough-border" : "rough-border-accent tilt-slight"}`}
              >
                <h3 className="font-display text-lg font-bold text-off-white mb-2">
                  {prize.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim mb-3 font-semibold">
                  {prize.winners} WINNERS
                </p>
                {prize.cash && (
                  <p className="font-mono text-sm text-accent font-semibold mb-3">
                    {prize.cash}
                  </p>
                )}
                <p className="font-mono text-sm text-gray text-left max-w-md mx-auto mb-4 font-semibold">
                  {prize.description}
                </p>
                {prize.link && (
                  <a
                    href={prize.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm text-accent underline [overflow-wrap:anywhere] mb-4 font-semibold"
                  >
                    {prize.link.label}
                  </a>
                )}
                {prize.noCashFootnote && <NoCashFootnote />}
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
            href="mailto:contact@neighborhoodhacks.org"
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