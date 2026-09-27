"use client";

import { useState } from "react";
import { partners, sponsors } from "@/lib/sponsors";

function LogoCard({
  src,
  name,
  tilt,
  logoClassName = "",
}: {
  src?: string;
  name: string;
  tilt: string;
  logoClassName?: string;
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
          className={`object-contain w-48 sm:w-56 h-16 sm:h-20 ${logoClassName}`}
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
    <section>
      <div className="px-4 sm:px-8 py-12 sm:py-14">
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
                logoClassName={sponsor.logoClassName}
                tilt={i % 2 === 0 ? "tilt-right" : "tilt-left"}
              />
            ))}

            {/* "+ more coming" note */}
            <span className="font-hand text-dim text-2xl tilt-right">
              + more coming
            </span>
          </div>

          <div className="border-t border-grid pt-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-off-white mb-6">
              OUR PARTNERS
            </h2>
            <div className="flex flex-wrap gap-6">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-5 rough-border px-5 py-4 hover:border-accent transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-xl font-bold text-off-white">
                      {partner.name} ↗
                    </span>
                    <span className="font-mono text-sm text-gray font-semibold">
                      {partner.description}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
