"use client";

import { useState } from "react";
import { sponsors } from "@/lib/sponsors";

function LogoCard({
  src,
  name,
  tilt,
}: {
  src?: string;
  name: string;
  tilt: string;
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <span
      title={name}
      className={`inline-flex items-center justify-center ${tilt}`}
    >
      {!failed && src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          className="object-contain w-48 sm:w-56 h-16 sm:h-20"
        />
      ) : (
        <span className="font-mono text-sm uppercase tracking-[0.15em] text-gray border border-dashed border-grid px-4 py-3 font-semibold">
          [{name}]
        </span>
      )}
      <span className="sr-only">{name}</span>
    </span>
  );
}

export default function SponsorsStripe() {
  return (
    <section className="border-t border-grid border-b border-grid">
      <div className="px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-4 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-off-white">
              OUR SPONSORS
            </h2>
            <span className="font-hand text-accent text-xl sm:mb-1 whitespace-nowrap">
              (couldn&apos;t do this without them)
            </span>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8 mb-12">
            {sponsors.map((sponsor, i) => (
              <LogoCard
                key={sponsor.name}
                src={sponsor.logo}
                name={sponsor.name}
                tilt={i % 2 === 0 ? "tilt-right" : "tilt-left"}
              />
            ))}

            {/* "+ more coming" note */}
            <span className="font-hand text-dim text-2xl tilt-right">
              + more coming
            </span>
          </div>

          {/* Thank you note */}
          <div className="paper-cut p-6 sm:p-8 text-center tilt-slight">
            <p className="font-mono text-sm text-near-black/80 leading-relaxed max-w-2xl mx-auto font-semibold">
              A huge thank you to all of our sponsors for making Neighborhood
              Hacks 2026 possible — your support helps us give students the
              tools to solve problems in their own communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
