import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import JudgesStripe from "@/components/JudgesStripe";
import { createPageMetadata, HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import { websiteStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData data={websiteStructuredData} />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-4 sm:px-8 pt-20 pb-16">
        {/* Handwritten annotation — top right */}
        <div className="absolute top-24 right-8 md:right-16 font-hand text-accent text-lg tilt-right">
          ← this is it
        </div>

        {/* Main content — asymmetric, offset left */}
        <div className="w-full min-w-0 max-w-5xl ml-0 md:ml-12 lg:ml-24 xl:ml-40 relative">
          {/* Issue number label */}
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
            2026 — GLOBAL VIRTUAL EVENT
          </div>

          {/* Main title — large, brutalist */}
          <h1 className="font-display text-[clamp(2.4rem,11vw,10rem)] font-bold text-off-white leading-[0.85] mb-8">
            NEIGHBORHOOD
            <br />
            <span className="text-accent">HACKS</span>
          </h1>

          {/* Subtitle — handwritten */}
          <p className="font-hand text-3xl md:text-4xl text-dim mb-8 tilt-left">
            Build locally, share globally
          </p>

          {/* Body — monospace */}
          <p className="font-mono text-sm sm:text-base text-gray leading-relaxed max-w-xl mb-12 font-semibold">
            A global hackathon for high schoolers. Over seven days, students from
            every continent design and build solutions to challenges in their
            own communities. There are no skill requirements, and anyone in
            high school is welcome to join. This competition runs from October
            16–24, 2026.
          </p>

          {/* CTAs — rough-bordered buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="https://neighborhood-hacks-2026.devpost.com/"
              className="rough-border-accent bg-accent text-near-black font-mono text-sm uppercase tracking-[0.15em] px-8 py-4 hover:bg-off-white transition-colors text-center font-semibold"
            >
              REGISTER NOW →
            </Link>
            <a
              href="https://discord.gg/7rfZsBk5kW"
              target="_blank"
              rel="noopener noreferrer"
              className="rough-border font-mono text-sm uppercase tracking-[0.15em] text-off-white px-8 py-4 hover:text-accent hover:border-accent transition-colors text-center font-semibold"
            >
              JOIN DISCORD ↗
            </a>
          </div>

          {/* Stat line — editorial metadata */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-dim font-semibold">
            <span>WORLDWIDE</span>
            <span className="hidden sm:inline text-grid">|</span>
            <span>200–1K PARTICIPANTS</span>
            <span className="hidden sm:inline text-grid">|</span>
            <span>VIRTUAL</span>
            <span className="hidden sm:inline text-grid">|</span>
            <span>7 DAYS</span>
            <span className="hidden sm:inline text-grid">|</span>
            <span>TEAMS OF 1-5</span>
            <span className="hidden sm:inline text-grid">|</span>
            <span className="text-accent">[$X] IN PRIZES</span>
          </div>

        </div>

        {/* Decorative paper cutout — bottom right */}
        <div className="absolute bottom-16 right-8 lg:right-24 hidden lg:block">
          <div className="paper-cut-sm w-28 h-36 flex items-center justify-center p-3 tilt-left">
            <span className="font-hand text-near-black text-center text-sm">
              Scroll ↓
            </span>
          </div>
        </div>

      </section>

      {/* Judges — announcement stripe */}
      <JudgesStripe />

      {/* Why Neighborhood Hacks */}
      <section className="py-24 px-4 sm:px-8 border-t border-grid">
        <div className="max-w-6xl mx-auto">
          {/* Section header — handwritten annotation */}
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-4 mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-off-white">
              WHY THIS?
            </h2>
            <span className="font-hand text-accent text-xl sm:mb-1 whitespace-nowrap">
              (glad you asked)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — paper cutout */}
            <div className="paper-cut p-6 sm:p-8 card-hover tilt-right">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50 mb-3 font-semibold">
                001
              </div>
              <h3 className="font-display text-xl font-bold text-near-black mb-3">
                ROOTED IN REALITY
              </h3>
              <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
                Every project starts with a real problem the team has personally
                seen — not a hypothetical &quot;wouldn&apos;t it be cool
                if.&quot; You know your neighborhood better than anyone.
              </p>
            </div>

            {/* Card 2 — rough border */}
            <div className="rough-border p-6 sm:p-8 card-hover tilt-right">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-3 font-semibold">
                002
              </div>
              <h3 className="font-display text-xl font-bold text-off-white mb-3">
                TRULY GLOBAL
              </h3>
              <p className="font-mono text-base text-gray leading-relaxed font-semibold">
                Students from every continent, every background, every skill
                level. Your local problem matters just as much as anyone
                else&apos;s — that&apos;s the whole point.
              </p>
            </div>

            {/* Card 3 — dashed border */}
            <div className="dashed-border p-6 sm:p-8 card-hover tilt-left">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-3 font-semibold">
                003
              </div>
              <h3 className="font-display text-xl font-bold text-off-white mb-3">
                THREE-STAGE REVIEW
              </h3>
              <p className="font-mono text-base text-gray leading-relaxed font-semibold">
                Automated screening checks the requirements, an initial review
                chooses the finalists, and professional judges choose the
                winners.
              </p>
            </div>

            {/* Card 4 — paper cutout */}
            <div className="paper-cut p-6 sm:p-8 card-hover tilt-left">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-near-black/50 mb-3 font-semibold">
                004
              </div>
              <h3 className="font-display text-xl font-bold text-near-black mb-3">
                FOR ALL SKILL LEVELS
              </h3>
              <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
                Whether this is your first hackathon or your tenth, Neighborhood
                Hacks is designed so every skill level has a fair shot at
                building something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner — paper strip */}
      <section className="py-20 px-4 sm:px-8 border-t border-grid">
        <div className="max-w-4xl mx-auto">
          <div className="paper-cut p-6 sm:p-12 md:p-16 text-center tilt-slight">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-near-black mb-6">
              READY TO BUILD?
            </h2>
            <p className="font-mono text-base text-near-black/80 mb-8 max-w-lg mx-auto font-semibold">
              Your neighborhood has problems worth solving. Work in a team of
              1-5 people, pick a real problem, and build the fix in a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://neighborhood-hacks-2026.devpost.com/"
                className="font-mono text-sm uppercase tracking-[0.15em] bg-near-black text-off-white px-5 sm:px-8 py-4 hover:bg-accent hover:text-near-black transition-colors font-semibold"
              >
                REGISTER NOW →
              </Link>
              <Link
                href="/challenge"
                className="font-mono text-sm uppercase tracking-[0.15em] text-near-black border-2 border-near-black px-5 sm:px-8 py-4 hover:bg-near-black hover:text-off-white transition-colors font-semibold"
              >
                SEE THE CHALLENGE
              </Link>
            </div>
          </div>

          {/* Handwritten note */}
          <p className="font-hand text-xl text-dim text-right mt-4 tilt-right">
            no experience needed ↓
          </p>
        </div>
      </section>
    </>
  );
}
