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
          className="w-40 sm:w-52 h-12 object-contain filter drop-shadow-[0_0_0_rgba(255,255,255,0.05)]"
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
    <section className="border-t border-grid border-b border-grid">
      <div className="px-4 sm:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 max-w-7xl mx-auto">
          {/* Label */}
          <div className="shrink-0">
            <div className="font-hand text-accent text-lg md:text-xl tilt-left block mb-1">
              ← the ones deciding
            </div>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-gray font-semibold">
              Neighborhood Hacks has
              <br />
              judges from
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 flex-1">
            {judgeCompanies.map((company, i) => (
              <LogoCard
                key={company.name}
                logo={company.logo}
                name={company.name}
                tilt={i % 2 === 0 ? "tilt-right" : "tilt-left"}
              />
            ))}

            {/* "+ more coming" note */}
            <span className="font-hand text-dim text-lg tilt-right">
              + more coming
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
