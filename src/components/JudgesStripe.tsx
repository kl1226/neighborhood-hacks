"use client";

import { useState } from "react";
import { judgeCompanies } from "@/lib/judges";

function LogoCard({
  logo,
  name,
  tilt,
}: {
  logo: string;
  name: string;
  tilt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href="#"
      aria-label={`Judged by a representative from ${name}`}
      title={name}
      className={`group inline-flex items-center justify-center group-hover:opacity-75 transition-opacity ${tilt}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          className={`object-contain ${name === "US Bank" ? "w-56 sm:w-72 h-20" : "w-48 sm:w-64 h-16"}`}
        />
      ) : (
        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-gray border border-dashed border-grid px-4 py-3 font-semibold">
          [{name}]
        </span>
      )}
      <span className="sr-only">{name}</span>
    </a>
  );
}

export default function JudgesStripe() {
  return (
      <section>
        <div className="px-4 sm:px-8 py-12 sm:py-14">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-4 mb-12">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-off-white">
                OUR JUDGES
              </h2>
              <span className="font-hand text-accent text-xl sm:mb-1 whitespace-nowrap">
                (the ones deciding)
              </span>
            </div>
  
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 mb-12">
              {judgeCompanies.map((sponsor, i) => (
                <LogoCard
                  key={sponsor.name}
                  logo={sponsor.logo}
                  name={sponsor.name}
                  tilt={i % 2 === 0 ? "tilt-right" : "tilt-left"}
                />
              ))}
  
              {/* "+ more coming" note */}
              <span className="font-hand text-dim text-2xl tilt-right">
                + more coming
              </span>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  