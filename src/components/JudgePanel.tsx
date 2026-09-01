"use client";

import { useState } from "react";
import { judgePanelists } from "@/lib/judges";

function JudgePhoto({ image, alt }: { image: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-full">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-hand text-2xl text-near-black/40">[PHOTO]</span>
        </div>
      )}
    </div>
  );
}

export default function JudgePanel() {
  return (
    <div className="mt-20">
      <div className="flex items-end gap-4">
        <h2 className="font-display text-2xl font-bold text-off-white">
          JUDGE PANELISTS
        </h2>
        <span className="font-hand text-accent text-lg mb-1 hidden sm:inline">
          (the final deciders)
        </span>
      </div>
      <p className="font-mono text-base text-gray leading-relaxed mt-4 max-w-2xl font-semibold">
        Meet the professional judges who will be evaluating your submissions. They bring a wealth of experience and expertise to the table, ensuring that every project is assessed fairly and thoroughly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {judgePanelists.map((judge, i) => {
          const isPaper = i % 2 === 0;
          return (
            <div
              key={judge.name}
              className={`${isPaper ? "paper-cut tilt-left" : "rough-border tilt-right"} card-hover`}
            >
              <div className="flex items-center gap-5 p-6 sm:p-7">
                <JudgePhoto
                  image={judge.image}
                  alt={`${judge.name}, ${judge.company}`}
                />

                {/* Details */}
                <div>
                  <div
                    className={`font-display text-xl font-bold ${
                      isPaper ? "text-near-black" : "text-off-white"
                    }`}
                  >
                    {judge.name}
                  </div>
                  <div
                    className={`font-mono text-xs uppercase tracking-[0.15em] mt-1 ${
                      isPaper ? "text-near-black/60" : "text-gray"
                    }`}
                  >
                    {judge.title}
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 mt-3 font-mono text-xs uppercase tracking-[0.15em] font-bold ${
                      isPaper ? "text-near-black" : "text-accent"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent opacity-80 inline-block" />
                    {judge.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
