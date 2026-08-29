import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Neighborhood Hacks 2026 Official Rules",
  description:
    "Review eligibility, registration, teams, submissions, judging, prizes, intellectual property, and conduct rules for Neighborhood Hacks 2026.",
  path: "/rules",
});

export default function Rules() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_011 / RULES
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          OFFICIAL RULES
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          the fine print
        </p>

        <div className="space-y-10">
          {/* 1. Eligibility */}
          <div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              1. ELIGIBILITY
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>
                Open to students currently enrolled in high school (or
                equivalent secondary education), generally ages 14-19,
                worldwide.
              </li>
              <li>
                Organizers, judges, and their immediate family members are not
                eligible to compete for prizes.
              </li>
              <li>
                Sponsor representatives may not be part of a competing team.
              </li>
            </ul>
          </div>

          {/* 2. Registration */}
          <div className="paper-cut-sm p-6">
            <h2 className="font-display text-2xl font-bold text-near-black mb-4">
              2. REGISTRATION
            </h2>
            <ul className="font-mono text-base text-near-black/80 leading-relaxed font-semibold space-y-2">
              <li>Registration is free and opens on August 28.</li>
              <li>
                Each participant must register individually with accurate
                information.
              </li>
              <li>
                Providing false information during registration may result in
                disqualification.
              </li>
            </ul>
          </div>

          {/* 3. Teams */}
          <div className="rough-border p-6 tilt-right">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              3. TEAMS
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>
                We highly recommend building in teams of 3-5, however there is
                no team requirement.
              </li>
              <li>
                Team members do not need to attend the same school and may be
                located in different countries or timezones.
              </li>
              <li>
                Use our Discord #looking-for-a-team channel if you need
                teammates.
              </li>
              <li>Each participant may only be part of one team.</li>
            </ul>
          </div>

          {/* 4. What You Can Build */}
          <div className="dashed-border p-6">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              4. WHAT YOU CAN BUILD
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>
                Projects must be built during the official one week hacking
                period (October 16th to October 23rd, CST).
              </li>
              <li>
                Ideation, research, and planning before the event are allowed;
                actual code, design assets, and content must be created during
                the event window.
              </li>
              <li>
                Use of open-source libraries, frameworks, APIs, and AI coding
                assistants (e.g., GitHub Copilot, Claude, ChatGPT) is permitted
                and encouraged, but must be disclosed in your submission&apos;s
                written description.
              </li>
              <li>
                Projects must be your team&apos;s own original work. Do not
                submit pre-existing projects, forks of substantially complete
                projects, or work copied from others without credit.
              </li>
              <li>
                Projects must comply with the terms of service of any
                third-party API, platform, or tool used.
              </li>
            </ul>
          </div>

          {/* 5. Submission Requirements */}
          <div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              5. SUBMISSION REQUIREMENTS
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold mb-4">
              To be judged, teams must submit the following on Devpost by the
              deadline:
            </p>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2 mb-4">
              <li>Project name and elevator pitch</li>
              <li>
                Full written description, including a required answer to:
                &quot;What is the specific problem, and how do you know
                it&apos;s real?&quot;
              </li>
              <li>
                A 2-3 minute demo video showing the project in action
              </li>
              <li>
                A public code repository link (e.g., GitHub)
              </li>
            </ul>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              Late submissions will not be accepted or judged, except in cases
              of documented technical failure on Devpost&apos;s platform
              (contact organizers immediately if this occurs).
            </p>
          </div>

          {/* 6. Judging */}
          <div className="paper-cut-sm p-6">
            <h2 className="font-display text-2xl font-bold text-near-black mb-4">
              6. JUDGING
            </h2>
            <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold mb-4">
              All eligible submissions go through three rounds:
            </p>
            <div className="font-mono text-base text-near-black/80 leading-relaxed font-semibold mb-4 space-y-2">
              <div>
                <span className="font-bold">Round 1 — AI Screening:</span>{" "}
                Automated. Confirms submissions are complete.
              </div>
              <div>
                <span className="font-bold">Round 2 — Peer Judging:</span>{" "}
                Selected student panel from partner schools/clubs. Scores
                submissions against the published rubric; top ~10 advance.
              </div>
              <div>
                <span className="font-bold">Round 3 — Final Round:</span>{" "}
                Professional judges + student panelists. Reviews the same
                submitted materials in greater depth; selects Top 3 winners
                plus 2 category-specific awards.
              </div>
            </div>
            <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold mb-4">
              The full judging rubric (Community Relevance, Impact Potential,
              Technical Execution, Creativity, Presentation &amp; Clarity,
              Accessibility) is published on our website and will not change
              after the event begins.
            </p>
            <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
              Judging decisions are final and not subject to appeal, except in
              cases of a demonstrated rules violation by a winning team (see
              Section 9).
            </p>
          </div>

          {/* 7. Prizes */}
          <div className="rough-border p-6">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              7. PRIZES
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>
                Prizes will be awarded to the Top 3 overall teams and 2
                category-specific award winners, as described on our
                website/Devpost page.
              </li>
              <li>
                The top 10 teams will also receive a finalist certificate.
              </li>
            </ul>
          </div>

          {/* 8. Intellectual Property */}
          <div className="dashed-border p-6">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              8. INTELLECTUAL PROPERTY
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>Participants retain full ownership of the work they create.</li>
              <li>
                By submitting, teams grant Neighborhood Hacks a non-exclusive,
                royalty-free license to display, promote, and reference their
                project (name, description, screenshots, video) for
                event-related and promotional purposes.
              </li>
              <li>
                Teams are responsible for ensuring they have the rights to any
                third-party assets, code, or content used in their submission.
              </li>
            </ul>
          </div>

          {/* 9. Disqualification */}
          <div>
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              9. DISQUALIFICATION
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold mb-4">
              Neighborhood Hacks reserves the right to disqualify any team or
              individual for:
            </p>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>Violating this Code of Conduct</li>
              <li>
                Submitting work that is not original or misrepresenting
                AI/third-party tool usage
              </li>
              <li>Providing false registration information</li>
              <li>
                Any form of cheating, plagiarism, or sabotage of another team
              </li>
            </ul>
          </div>

          {/* 10. Liability & Assumption of Risk */}
          <div className="paper-cut-sm p-6">
            <h2 className="font-display text-2xl font-bold text-near-black mb-4">
              10. LIABILITY &amp; ASSUMPTION OF RISK
            </h2>
            <ul className="font-mono text-base text-near-black/80 leading-relaxed font-semibold space-y-2">
              <li>
                Participation is voluntary. Neighborhood Hacks, its
                organizers, and sponsors are not liable for any technical
                issues, data loss, or damages arising from participation,
                except where prohibited by law.
              </li>
              <li>
                Participants are responsible for their own equipment, internet
                access, and software during the event.
              </li>
              <li>
                For any in-person or local meetup components (if applicable),
                a separate liability waiver will be required.
              </li>
            </ul>
          </div>

          {/* 11. Privacy & Data */}
          <div className="rough-border p-6 tilt-right">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              11. PRIVACY &amp; DATA
            </h2>
            <ul className="font-mono text-base text-gray leading-relaxed font-semibold space-y-2">
              <li>
                Personal information collected during registration (name,
                email, age, location, guardian contact) is used solely for
                event administration and is not sold or shared with third
                parties beyond what&apos;s necessary to run the event (e.g.,
                sponsor prize fulfillment, with participant consent).
              </li>
              <li>
                Data handling complies with applicable privacy regulations,
                including COPPA (US) and GDPR-K provisions for minors, where
                relevant.
              </li>
            </ul>
          </div>

          {/* 12. Changes to Rules */}
          <div className="dashed-border p-6">
            <h2 className="font-display text-2xl font-bold text-off-white mb-4">
              12. CHANGES TO RULES
            </h2>
            <p className="font-mono text-base text-gray leading-relaxed font-semibold">
              Neighborhood Hacks reserves the right to amend these rules if
              necessary, and will communicate any changes clearly via Discord
              announcements and email prior to the event start. Material
              changes will not be made once the hacking period has begun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
