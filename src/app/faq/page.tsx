"use client";

import { useState } from "react";

const faqs = [
  {
    question: "DO I NEED CODING EXPERIENCE?",
    answer:
      "No. Neighborhood Hacks welcomes all skill levels — beginners are encouraged to join and learn.",
  },
  {
    question: "IS THIS OPEN TO STUDENTS WORLDWIDE?",
    answer:
      "Yes. Neighborhood Hacks is fully virtual and open to high schoolers from any country.",
  },
  {
    question: "DO I NEED A TEAM?",
    answer:
      "Teams of 3-5 are highly recommended, but not required. If you don't have a team yet, join our Discord: we'll have a dedicated team-formation channel to help you find teammates before the event starts.",
  },
  {
    question: "IS THERE A COST?",
    answer:
      "Not at all! Neighborhood Hacks is free and accessible for all.",
  },
  {
    question: "WHAT DO I NEED TO PARTICIPATE?",
    answer: "A computer with internet access.",
  },
  {
    question: "HOW ARE MINORS KEPT SAFE?",
    answer:
      "The discord page is monitored to ensure safe behavior. We also have a code of conduct that all participants must follow.",
  },
  {
    question: "WHAT IF MY TEAM IS IN DIFFERENT TIMEZONES?",
    answer:
      "That's completely fine — coordinate with your team to find a time that works for everyone. The hackathon is designed to be flexible and accommodate different schedules.",
  },
  {
    question: "CAN I USE AI TOOLS?",
    answer:
      "Yes! We encourage participants to use AI tools to enhance their projects, but we also expect that the work submitted is primarily your own. Make sure to understand the capabilities and limitations of any AI tools you use.",
  },
];

type CardStyle = "paper" | "rough" | "dashed";

function getCardStyle(index: number): CardStyle {
  const mod = index % 3;
  if (mod === 0) return "paper";
  if (mod === 1) return "rough";
  return "dashed";
}

function cardClasses(style: CardStyle): string {
  if (style === "paper") return "paper-cut-sm overflow-hidden";
  if (style === "rough") return "rough-border overflow-hidden";
  return "dashed-border overflow-hidden";
}

function questionColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black" : "text-off-white";
}

function answerColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black/70" : "text-gray";
}

function plusColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black" : "text-accent";
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-3xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_008 / FAQ
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          FAQ
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          frequently asked questions
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const style = getCardStyle(index);
            return (
              <div key={index} className={cardClasses(style)}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between gap-3 sm:gap-4"
                >
                  <span
                    className={`font-display font-bold text-sm ${questionColor(style)}`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`${plusColor(style)} shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M8 2V14M2 8H14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`accordion-content ${openIndex === index ? "open" : ""}`}
                >
                  <div
                    className={`px-4 sm:px-6 pb-4 font-mono text-base leading-relaxed font-semibold ${answerColor(style)}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="font-hand text-xl text-dim mb-4">
            still have questions?
          </p>
          <a
            href="https://discord.gg/rS2nmaqpzG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm uppercase tracking-[0.15em] text-near-black bg-accent px-6 py-3 hover:bg-off-white transition-colors font-semibold"
          >
            ASK ON DISCORD ↗
          </a>
        </div>
      </div>
    </section>
  );
}
