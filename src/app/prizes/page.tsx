import Link from "next/link";
import SponsorsStripe from "@/components/SponsorsStripe";
import { createPageMetadata } from "@/lib/seo";
import {
  TOTAL_PRIZE_VALUE,
  MOJOAUTH_SPONSOR_VALUE,
  BACKBOARD_SPONSOR_VALUE,
  BACKBOARD_WINNER_COUNT,
} from "@/lib/sponsors";

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
    cash: "$125",
    description:
      "Neighborhood Hacks Grand Prize Certificate",
    mojoauthValue: 600,
    totalValue: "$725",
    footnote: "",
    highlight: true,
  },
  {
    place: "🥈",
    title: "SECOND PLACE",
    cash: "$25",
    description:
      "Neighborhood Hacks Second Place Certificate",
    mojoauthValue: 600,
    totalValue: "$625",
    footnote: "",
    highlight: false,
  },
  {
    place: "🥉",
    title: "THIRD PLACE",
    cash: null,
    description:
      "Neighborhood Hacks Third Place Certificate",
    mojoauthValue: 600,
    totalValue: "$600",
    footnote: "",
    highlight: false,
  },
];

const categoryAwards = [
  {
    title: "MOST UNIQUE SOLUTION",
    description: "",
    mojoauthValue: 600,
    totalValue: "$600",
  },
  {
    title: "BEST TECHNICAL EXECUTION",
    description: "",
    mojoauthValue: 600,
    totalValue: "$600",
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
                <h3 className="font-display text-lg font-bold text-off-white mb-4">
                  {prize.title}
                </h3>
                {prize.cash && (
                  <p className="font-display text-3xl font-bold text-accent mb-4">
                    {prize.cash} Cash Prize
                  </p>
                )}
                <ul className="font-mono text-sm text-gray text-left max-w-md mx-auto space-y-3 mb-4 font-semibold">
                  <li className="flex items-baseline gap-2">
                    <span className="text-accent">·</span>
                    <span>
                      MojoAuth one-year license (
                      <span className="text-accent">${prize.mojoauthValue} worth</span>)
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-accent">·</span>
                    <span>{prize.description}</span>
                  </li>
                </ul>
                <p className="font-mono text-[11px] italic text-dim leading-relaxed mb-2">
                  {prize.totalValue} Total Value
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
                <p className="font-mono text-sm text-accent font-semibold mb-3">
                  {award.description}
                </p>
                <ul className="font-mono text-sm text-gray text-left max-w-xs mx-auto space-y-2 mb-3 font-semibold">
                  <li className="flex items-baseline gap-2">
                    <span className="text-accent">·</span>
                    <span>
                      MojoAuth one-year license (
                      <span className="text-accent">${award.mojoauthValue} worth</span>)
                    </span>
                  </li>
                </ul>
                <p className="font-mono text-[11px] italic text-dim leading-relaxed">
                  {award.totalValue} Total Value
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Backboard prize */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            PARTICIPANT PRIZES
          </h2>
          <div className="rough-border-accent p-6 sm:p-8 tilt-slight">
            <div className="flex flex-col items-center gap-6 text-left sm:flex-row sm:gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sponsors/backboard2.svg"
                alt="Backboard logo"
                className="object-contain w-40 sm:w-48 h-16"
              />
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-off-white mb-4">
                  BACKBOARD DEVELOPER CREDITS — {BACKBOARD_WINNER_COUNT} WINNERS
                </h3>
                <ul className="font-mono text-sm text-gray space-y-3 font-semibold">
                  <li className="flex items-baseline gap-2">
                    <span className="text-accent">·</span>
                    <span>
                      <span className="text-accent">$10 in developer credits</span>{" "}
                      usable across Backboard&apos;s Unified API, Studio, R-CLI,
                      and Terminal Bench with promo code{" "}
                      <span className="text-accent whitespace-nowrap">
                        NEIGHBORHOODHACKS2026
                      </span>
                    </span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-accent">·</span>
                    <span>
                      Sign up and redeem at{" "}
                      <a
                        href="https://app.backboard.io/hackathon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline [overflow-wrap:anywhere]"
                      >
                        app.backboard.io/hackathon
                      </a>
                    </span>
                  </li>
                </ul>
                <p className="font-mono text-[11px] italic text-dim leading-relaxed mt-4">
                  Open to all participants — ${BACKBOARD_SPONSOR_VALUE.toLocaleString("en-US")}{" "}
                  in total value
                </p>
              </div>
            </div>
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

          <div className="rough-border-accent p-6 sm:p-8 mt-8 text-center tilt-left">
            <h3 className="font-display text-2xl font-bold text-off-white mb-3">
              5 ONE-YEAR MOJOAUTH LICENSES
            </h3>
            <p className="font-mono text-base text-gray leading-relaxed max-w-xl mx-auto font-semibold">
              MojoAuth is sponsoring five licenses, each valid for one year,
              worth ${MOJOAUTH_SPONSOR_VALUE.toLocaleString("en-US")} in total.
            </p>
          </div>

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
