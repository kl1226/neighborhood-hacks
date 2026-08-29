import StructuredData from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";
import { eventStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Schedule & Event Timeline",
  description:
    "See registration, kickoff, hacking, submission, judging, and winner milestones for the seven-day virtual Neighborhood Hacks high school hackathon.",
  path: "/timeline",
});

const milestones = [
  {
    date: "August 28th",
    title: "REGISTRATION OPENS",
    description: "Sign up and decide whether to build solo or with teammates.",
  },
  {
    date: "October 16th",
    title: "PROMPT ANNOUNCED + KICKOFF",
    description:
      "The hackathon officially begins! Join the kickoff event to learn about the challenge and meet your fellow participants.",
  },
  {
    date: "October 16th – October 23rd",
    title: "HACKING PERIOD (One Week)",
    description:
      "Build your project. Work asynchronously on your own or with your team.",
  },
  {
    date: "October 23rd 11:59 PM CST",
    title: "SUBMISSIONS CLOSE",
    description:
      "Submit your project, written explanation, and demo before the deadline.",
  },
  {
    date: "October 24th – October 25th",
    title: "ROUND 1: AUTOMATED SCREENING",
    description:
      "An automated check confirms that every required part of the submission is present.",
  },
  {
    date: "TBD",
    title: "ROUND 2: INITIAL REVIEW",
    description:
      "Reviewers assess complete submissions using the rubric and choose the finalists.",
  },
  {
    date: "TBD",
    title: "ROUND 3: FINAL ROUND",
    description:
      "Professional judges review the finalists and choose the winners.",
  },
  {
    date: "TBD",
    title: "WINNERS ANNOUNCED",
    description: "Closing ceremony with awards and celebration.",
  },
];

export default function Timeline() {
  return (
    <>
      <StructuredData data={eventStructuredData} />
      <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_004 / HOW IT WORKS
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          TIMELINE
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          your roadmap
        </p>

        {/* Format note — paper cutout */}
        <div className="paper-cut p-6 mb-12">
          <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
            Fully virtual — participate from anywhere with internet. Join
            the discord to get help from fellow participants from any timezone.
            Hacking runs for one week.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-6 pb-10 relative">
              {/* Number + line */}
              <div className="flex flex-col items-center">
                <div className="font-mono text-[11px] text-accent w-10 text-center shrink-0 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-grid mt-2" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-2 ${index % 2 === 0 ? "" : "tilt-slight"}`}>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim font-semibold">
                  {milestone.date}
                </span>
                <h3 className="font-display text-lg font-bold text-off-white mt-1">
                  {milestone.title}
                </h3>
                <p className="font-mono text-sm text-gray mt-1 font-semibold">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team formation note */}
        <div className="rough-border p-6 tilt-right">
          <h2 className="font-display text-xl font-bold text-off-white mb-3">
            TEAM FORMATION
          </h2>
          <p className="font-mono text-sm text-gray leading-relaxed font-semibold">
            Teams of 3-5 students suggested, however solo entries are allowed. Don&apos;t have a team yet?
            Head to our{" "}
            <a
              href="https://discord.gg/7rfZsBk5kW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-off-white underline underline-offset-2"
            >
              Discord
            </a>{" "}
            before the event to find teammates in the #team-formation channel.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
