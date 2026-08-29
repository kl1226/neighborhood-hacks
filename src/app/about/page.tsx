import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Neighborhood Hacks 2026 | Our Mission",
  description:
    "Discover why Neighborhood Hacks helps high school students worldwide turn real community problems into useful technology during a free virtual hackathon.",
  path: "/about",
});

export default function About() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_002 / ABOUT
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          ABOUT
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          why we made Neighborhood Hacks
        </p>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            WHAT IT IS
          </h2>
          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl font-semibold">
            Neighborhood Hacks is a global hackathon where high schoolers use
            technology to solve real problems in their own communities, not
            hypothetical ones. We believe the most impactful builders start by
            looking at what&apos;s broken around them and building the fix. Over
            one week, students from every continent design, build, and pitch
            solutions to challenges they&apos;ve personally witnessed at home,
            then join a global community of young builders doing the same thing,
            everywhere else.
          </p>
        </div>

        {/* Origin story */}
        <div className="paper-cut p-8 md:p-12 mb-16 tilt-right">
          <h2 className="font-display text-2xl font-bold text-near-black mb-6">
            HOW IT STARTED
          </h2>
          <p className="font-mono text-base text-near-black/80 leading-relaxed mb-4 font-semibold">
            Caleb and Kian started Neighborhood Hacks after noticing that many
            hackathon prompts had little to do with students&apos; daily lives. They
            wanted to make an event based on problems students already know
            firsthand.
          </p>
          <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
            Projects can focus on health and wellbeing, environmental
            sustainability, education and access, community safety, civic
            connection, accessibility, or inclusion. The topic is up to each
            student, as long as it comes from their own community.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            WHO CAN JOIN
          </h2>
          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl font-semibold">
            Any high school student can join from anywhere in the world. The
            event is free, and you do not need coding or hackathon experience.
            You can work on your own or with a team of up to five. Come with a
            problem in your community that you want to understand better.
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-display text-2xl font-bold text-off-white mb-8">
            WHAT MATTERS HERE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rough-border p-6 tilt-left">
              <h3 className="font-display font-bold text-off-white mb-2">
                LOCAL CONTEXT
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                People who live in a place notice details that outsiders may
                miss. We want students to use that knowledge when choosing what
                to build.
              </p>
            </div>
            <div className="paper-cut-sm p-6 tilt-right">
              <h3 className="font-display font-bold text-near-black mb-2">
                USEFUL WORK
              </h3>
              <p className="font-mono text-sm text-near-black/70 font-semibold">
                Technology should fit the problem and be useful to the people
                affected by it.
              </p>
            </div>
            <div className="dashed-border p-6">
              <h3 className="font-display font-bold text-off-white mb-2">
                OPEN TO BEGINNERS
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                No prior experience is required. We offer help during the week
                and schedule activities across time zones.
              </p>
            </div>
            <div className="rough-border p-6 tilt-slight">
              <h3 className="font-display font-bold text-off-white mb-2">
                LEARNING TOGETHER
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                Projects will be judged, but rankings are only one part of the
                event. Neighborhood Hacks is also a place to meet students from
                other communities and learn from their work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
