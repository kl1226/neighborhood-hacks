import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Sponsors & Partners",
  description:
    "Meet the organizations supporting Neighborhood Hacks 2026 and learn how to help high school students build solutions for their communities.",
  path: "/sponsors",
  index: false,
});

export default function Sponsors() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_007 / SPONSORS
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          SPONSORS
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          the people making this possible
        </p>

        {/* Intro */}
        <div className="mb-12">
          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl font-semibold">
            Neighborhood Hacks is made possible by sponsors who believe in
            giving students the tools to solve problems in their own
            communities.{" "}
            <a
              href="mailto:neighborhoodhacks@gmail.com"
              className="text-accent hover:text-off-white underline underline-offset-2"
            >
              Interested in sponsoring? Reach out here
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-accent hover:text-off-white underline underline-offset-2"
            >
              download our sponsorship deck
            </a>
            .
          </p>
        </div>

        {/* Equal-weight sponsor grid */}
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
            OUR SPONSORS &amp; PARTNERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="paper-cut-sm aspect-video flex items-center justify-center"
              >
                <span className="font-mono text-sm text-near-black/50 font-semibold">
                  [LOGO]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-16 paper-cut p-5 sm:p-8 text-center tilt-right">
          <h2 className="font-display text-2xl font-bold text-near-black mb-4">
            WANT TO SUPPORT THE NEXT GENERATION?
          </h2>
          <p className="font-mono text-base text-near-black/80 mb-6 max-w-xl mx-auto font-semibold">
            Sponsor Neighborhood Hacks and connect with young
            builders from around the world.
          </p>
          <a
            href="mailto:neighborhoodhacks@gmail.com"
            className="inline-block font-mono text-sm uppercase tracking-[0.15em] bg-near-black text-off-white px-4 sm:px-8 py-3 hover:bg-accent hover:text-near-black transition-colors font-semibold"
          >
            BECOME A SPONSOR →
          </a>
        </div>
      </div>
    </section>
  );
}
