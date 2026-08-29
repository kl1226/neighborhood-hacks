import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Register for Neighborhood Hacks 2026 | Free & Virtual",
  description:
    "Register free on Devpost for Neighborhood Hacks 2026, a worldwide virtual hackathon for high school students building solutions to local problems.",
  path: "/register",
});

export default function Register() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_009 / REGISTER
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          REGISTER
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          your neighborhood is waiting
        </p>

        {/* Intro — paper cutout */}
        <div className="paper-cut p-6 sm:p-8 md:p-12 mb-12">
          <p className="font-mono text-base text-near-black/80 leading-relaxed mb-6 font-semibold">
            Ready to build something that matters where you live? Registration
            is free and open to high schoolers worldwide.
          </p>
          <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
            We recommend creating a team (or find one on our{" "}
            <a
              href="https://discord.gg/7rfZsBk5kW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-near-black font-bold underline underline-offset-2 hover:text-accent"
            >
              Discord
            </a>
            ) and a real problem you care about. That&apos;s it.
            *solo entries are allowed
          </p>
        </div>

        {/* Devpost CTA — rough border */}
        <div className="rough-border p-5 sm:p-8 md:p-12 text-center mb-12 tilt-right">
          <h2 className="font-display text-2xl font-bold text-off-white mb-4">
            REGISTER ON DEVPOST
          </h2>
          <p className="font-mono text-base text-gray mb-6 font-semibold">
            All registrations happen through our Devpost page.
          </p>
          <a
            href="https://neighborhood-hacks-2026.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm uppercase tracking-[0.15em] text-near-black bg-accent px-5 sm:px-10 py-3 sm:py-4 hover:bg-off-white transition-colors font-semibold"
          >
            REGISTER ON DEVPOST →
          </a>
        </div>

        {/* Steps */}
        <div>
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            HOW TO GET STARTED
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "REGISTER ON DEVPOST",
                desc: "Create your account and sign up for Neighborhood Hacks.",
              },
              {
                step: "02",
                title: "CHOOSE HOW TO BUILD",
                desc: "Build solo, bring teammates, or connect with other students in our Discord's #team-formation channel.",
              },
              {
                step: "03",
                title: "PICK A PROBLEM",
                desc: "Think about a real issue in your community that you want to solve.",
              },
              {
                step: "04",
                title: "BUILD DURING THE EVENT",
                desc: "When the hacking period starts, you'll have a week to build your solution.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`flex gap-4 items-start ${i % 2 === 0 ? "" : "tilt-slight"}`}
              >
                <span className="font-hand text-2xl text-accent shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display font-bold text-off-white text-sm">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm text-gray font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
