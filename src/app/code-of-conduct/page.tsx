import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Code of Conduct",
  description:
    "Read the standards for respectful, inclusive, and safe participation across Neighborhood Hacks event spaces, plus reporting and enforcement details.",
  path: "/code-of-conduct",
});

export default function CodeOfConduct() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto md:ml-24 lg:ml-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_010 / CODE OF CONDUCT
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          CODE OF CONDUCT
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          be a good neighbor
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              OUR COMMITMENT
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              Neighborhood Hacks should be welcoming, inclusive, and safe for
              everyone. This code applies to participants, organizers, judges,
              mentors, and sponsors in every official event space, including
              Discord, calls, livestreams, and project discussions.
            </p>
          </div>

          <div className="paper-cut-sm p-6">
            <h2 className="font-display text-2xl font-bold text-near-black mb-4">
              BE A GOOD NEIGHBOR
            </h2>
            <ul className="font-mono text-base text-near-black/80 leading-relaxed font-semibold space-y-2">
              <li>Treat people with respect, patience, and kindness.</li>
              <li>
                Welcome different backgrounds, identities, abilities, and skill
                levels.
              </li>
              <li>
                Give constructive feedback and respect people&apos;s privacy and
                boundaries.
              </li>
              <li>Credit other people&apos;s work and compete honestly.</li>
            </ul>
          </div>

          <div className="rough-border p-6 tilt-right">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              NOT OKAY HERE
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              Harassment, discrimination, bullying, threats, stalking,
              intimidation, sexual content or attention, doxxing, impersonation,
              plagiarism, sabotage, and sharing someone&apos;s private information
              without consent are not tolerated. Any romantic or sexual conduct
              directed at a minor is strictly prohibited. Adults must keep
              communication with minors in official, group-based event spaces.
            </p>
          </div>

          <div className="dashed-border p-6">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              SPEAK UP
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              If you experience or witness a problem, email{" "}
              <a
                href="mailto:contact@neighborhoodhacks.org"
                className="text-accent underline [overflow-wrap:anywhere]"
              >
                contact@neighborhoodhacks.org
              </a>
              . Reports will be handled promptly and as privately as reasonably
              possible. Retaliation against anyone who raises a concern in good
              faith is also a violation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              ENFORCEMENT
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              Organizers may warn, remove, disqualify, or ban anyone who breaks
              this code. Serious safety concerns may be reported to the
              appropriate authorities. Organizer decisions are final and will
              always prioritize participant safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
