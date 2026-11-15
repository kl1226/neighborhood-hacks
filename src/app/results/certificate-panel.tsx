"use client";

import { useEffect, useRef, useState } from "react";
import {
  safeCertificateDownloadUrl,
  type AvailableCertificate,
  type Certificate,
} from "./result-data";

type CertificatePanelProps = {
  certificate: Certificate;
  hasSubmission: boolean;
  onLookupAgain: () => void;
};

function CertificateDownload({
  certificate,
  onLookupAgain,
}: {
  certificate: AvailableCertificate;
  onLookupAgain: () => void;
}) {
  const [expired, setExpired] = useState(() => Date.now() >= certificate.expiresAt);
  const [downloadRequested, setDownloadRequested] = useState(false);
  const downloadStarted = useRef(false);
  const downloadNotice = useRef<number | null>(null);
  const downloadUrl = safeCertificateDownloadUrl(
    certificate.downloadUrl,
    process.env.NEXT_PUBLIC_RESULTS_API_URL?.trim(),
  );

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setExpired(true),
      Math.max(0, Math.min(certificate.expiresAt - Date.now(), 2_147_483_647)),
    );
    return () => {
      window.clearTimeout(timeout);
      if (downloadNotice.current !== null) window.clearTimeout(downloadNotice.current);
    };
  }, [certificate.expiresAt]);

  if (downloadRequested || expired || !downloadUrl) {
    return (
      <div>
        <p role="status" className="font-mono text-sm text-near-black/80 leading-relaxed max-w-xl font-semibold">
          {downloadRequested
            ? "Your download was requested. Look up your email again if you need another copy."
            : expired
              ? "Your download link has expired. Look up your email again to get a new link."
              : "Your certificate download is temporarily unavailable. Look up your email again to try a new link."}
        </p>
        <button
          type="button"
          onClick={onLookupAgain}
          className="mt-5 min-h-11 font-mono text-xs uppercase tracking-[0.12em] text-near-black underline underline-offset-4 font-bold hover:text-near-black/60 focus-visible:outline-2 focus-visible:outline-near-black focus-visible:outline-offset-4"
        >
          LOOK UP MY EMAIL AGAIN →
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-sm text-near-black/80 leading-relaxed max-w-xl font-semibold">
        Your certificate of participation is ready. Save a PDF copy below.
      </p>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        download
        onClick={(event) => {
          if (downloadStarted.current) {
            event.preventDefault();
            return;
          }
          downloadStarted.current = true;
          // Keep the anchor in place until the browser starts its default action.
          downloadNotice.current = window.setTimeout(() => setDownloadRequested(true), 0);
        }}
        className="mt-6 inline-flex min-h-12 items-center justify-center bg-near-black text-off-white px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-center font-bold hover:bg-near-black/80 focus-visible:outline-2 focus-visible:outline-near-black focus-visible:outline-offset-4"
      >
        DOWNLOAD PARTICIPATION CERTIFICATE ↓
      </a>
    </div>
  );
}

export default function CertificatePanel({
  certificate,
  hasSubmission,
  onLookupAgain,
}: CertificatePanelProps) {
  const isEligible = hasSubmission && certificate.status !== "not_eligible";
  return (
    <section aria-labelledby="certificate-title" className="paper-cut p-7 sm:p-10 mt-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-near-black/60 mb-3 font-semibold">
        {!isEligible
          ? "PROJECT SUBMISSION REQUIRED"
          : certificate.status === "available"
            ? "YOUR PARTICIPATION CERTIFICATE"
            : "BEING PREPARED"}
      </p>
      <h3 id="certificate-title" className="font-display text-2xl font-bold text-near-black mb-3">
        CERTIFICATE OF PARTICIPATION
      </h3>
      {!isEligible ? (
        <p className="font-mono text-sm text-near-black/80 leading-relaxed max-w-xl font-semibold">
          Participation certificates are available to people who submitted a
          project to Neighborhood Hacks.
        </p>
      ) : certificate.status === "available" ? (
        <CertificateDownload
          key={`${certificate.certificateId}:${certificate.expiresAt}`}
          certificate={certificate}
          onLookupAgain={onLookupAgain}
        />
      ) : (
        <p className="font-mono text-sm text-near-black/80 leading-relaxed max-w-xl font-semibold">
          Your participation certificate is being prepared. Check back here soon.
        </p>
      )}
    </section>
  );
}
