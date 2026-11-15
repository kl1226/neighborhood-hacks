"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { BrowserProofError, solveBrowserProof, type BrowserProof } from "./browser-proof";
import CertificatePanel from "./certificate-panel";
import { readResults, type Project, type Results } from "./result-data";
type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "dark";
      size: "compact" | "normal";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

const lookupEndpoint = process.env.NEXT_PUBLIC_RESULTS_API_URL?.trim();
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
const usesTurnstile = process.env.NEXT_PUBLIC_RESULTS_BOT_MODE === "turnstile";
const isConfigured = Boolean(lookupEndpoint && (!usesTurnstile || siteKey));

function turnstile() {
  return (window as Window & { turnstile?: TurnstileApi }).turnstile;
}

function safeProjectUrl(url?: string): string | undefined {
  if (!url) return;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:") return parsed.href;
  } catch {
    return;
  }
}

function browserChallengeEndpoint(endpoint: string): string {
  const url = new URL(endpoint, window.location.origin);
  if (!/\/lookup\/?$/.test(url.pathname)) {
    throw new BrowserProofError("Results are temporarily unavailable. Please try again later.");
  }
  url.pathname = url.pathname.replace(/\/lookup\/?$/, "/challenge");
  url.search = "";
  url.hash = "";
  return url.href;
}

function projectReviewState(project: Project): { heading: string; description: string } {
  if (project.feedback.length > 0) {
    return {
      heading: "Submitted · Reviewed",
      description: "Your project was submitted and reviewed in the initial round.",
    };
  }
  if (project.status === "screening_failed") {
    return {
      heading: "Did not advance past screening",
      description:
        "Your project was submitted but did not advance to initial-round judging, so no initial-round judge feedback is available.",
    };
  }
  if (project.status === "reviewed_without_feedback") {
    return {
      heading: "Passed screening · No initial-round feedback recorded",
      description:
        "Your project passed screening and was included in the initial-round judging list, but no written initial-round judge comments were recorded.",
    };
  }
  return {
    heading: "Project submitted",
    description:
      "Your project was submitted. No initial-round feedback was recorded.",
  };
}

export default function ResultsLookup() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<Results | null>(null);
  const [error, setError] = useState("");
  const [noMatch, setNoMatch] = useState(false);
  const [phase, setPhase] = useState<"idle" | "checking" | "lookup">("idle");
  const busy = phase !== "idle";
  const hasFeedback = result?.projects.some(
    (project) => project.feedback.length > 0 || project.finalFeedback.length > 0,
  ) ?? false;
  const showNoFeedbackHelp = !busy && (noMatch || Boolean(result && !hasFeedback));
  const [scriptReady, setScriptReady] = useState(false);
  const [challengeToken, setChallengeToken] = useState("");
  const [challengeError, setChallengeError] = useState(false);
  const [challengeVersion, setChallengeVersion] = useState(0);
  const challengeContainer = useRef<HTMLDivElement>(null);
  const request = useRef<AbortController | null>(null);
  const mounted = useRef(true);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      request.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (result) resultHeading.current?.focus();
  }, [result]);

  useEffect(() => {
    const api = turnstile();
    if (!usesTurnstile || !scriptReady || !api || !siteKey || !challengeContainer.current || result) {
      return;
    }

    let active = true;
    let widgetId: string;
    try {
      widgetId = api.render(challengeContainer.current, {
        sitekey: siteKey,
        action: "results_lookup",
        theme: "dark",
        size: window.matchMedia("(min-width: 480px)").matches
          ? "normal"
          : "compact",
        callback: (token) => {
          if (!active) return;
          setChallengeToken(token);
          setChallengeError(false);
        },
        "expired-callback": () => {
          if (active) setChallengeToken("");
        },
        "error-callback": () => {
          if (!active) return;
          setChallengeToken("");
          setChallengeError(true);
        },
      });
    } catch {
      const errorNotice = window.setTimeout(() => setChallengeError(true), 0);
      return () => {
        active = false;
        window.clearTimeout(errorNotice);
      };
    }

    return () => {
      active = false;
      api.remove(widgetId);
    };
  }, [scriptReady, challengeVersion, result]);

  async function lookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !isConfigured || !lookupEndpoint || (usesTurnstile && !challengeToken)) return;

    setPhase(usesTurnstile ? "lookup" : "checking");
    setError("");
    setNoMatch(false);
    const token = challengeToken;
    setChallengeToken("");
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 60_000);
    const normalizedEmail = email.trim();

    try {
      let proof: BrowserProof | undefined;
      if (!usesTurnstile) {
        const challengeResponse = await fetch(browserChallengeEndpoint(lookupEndpoint), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: normalizedEmail }),
          cache: "no-store",
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: controller.signal,
        });
        if (challengeResponse.status === 429) {
          throw new BrowserProofError("Too many lookups. Please wait a few minutes and try again.");
        }
        if (!challengeResponse.ok) {
          throw new BrowserProofError("The browser check couldn’t start. Please try again in a moment.");
        }
        proof = await solveBrowserProof(await challengeResponse.json(), controller.signal);
        if (!mounted.current || controller.signal.aborted) return;
        setPhase("lookup");
      }

      const response = await fetch(lookupEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          ...(usesTurnstile ? { turnstileToken: token } : { proof }),
        }),
        cache: "no-store",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: controller.signal,
      });

      if (!mounted.current || controller.signal.aborted) return;

      if (response.status === 404) {
        setNoMatch(true);
        setError("No registration found for this email.");
      } else if (response.status === 429) {
        setError("Too many lookups. Please wait a few minutes and try again.");
      } else if (response.status === 400 || response.status === 403) {
        setError("The browser check couldn’t be confirmed. Please try again.");
      } else if (!response.ok) {
        setError("Results are temporarily unavailable. Please try again later.");
      } else {
        const data = readResults(await response.json());
        if (!data) throw new Error("Unexpected results response");
        setResult(data);
      }
    } catch (cause) {
      if (!mounted.current) return;
      setError(
        cause instanceof BrowserProofError
          ? cause.message
          : controller.signal.aborted
            ? "The lookup took too long. Please try again."
            : "We couldn’t load your results. Please try again in a moment.",
      );
    } finally {
      window.clearTimeout(timeout);
      if (request.current === controller) request.current = null;
      if (mounted.current) {
        setPhase("idle");
        if (usesTurnstile) setChallengeVersion((version) => version + 1);
      }
    }
  }

  function startAgain() {
    request.current?.abort();
    request.current = null;
    setPhase("idle");
    setResult(null);
    setEmail("");
    setError("");
    setNoMatch(false);
    setChallengeToken("");
    setChallengeError(false);
    window.requestAnimationFrame(() => emailInput.current?.focus());
  }

  return (
    <>
      {isConfigured && usesTurnstile && (
        <Script
          id="results-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setScriptReady(true)}
          onError={() => setChallengeError(true)}
        />
      )}

      {!result ? (
        <div className="rough-border p-5 sm:p-8 max-w-2xl">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-off-white">
              FIND YOUR RESULTS
            </h2>
            <span aria-hidden="true" className="font-hand text-2xl text-accent tilt-right">
              for you ↙
            </span>
          </div>

          {!isConfigured && (
            <p role="status" className="font-mono text-sm text-off-white bg-grid p-4 mb-6 leading-relaxed">
              Results lookup is coming soon. Please check back here for your
              results.
            </p>
          )}

          <form onSubmit={lookup} aria-busy={busy}>
            <label htmlFor="results-email" className="block font-mono text-[11px] uppercase tracking-[0.15em] font-semibold text-off-white mb-3">
              YOUR DEVPOST EMAIL
            </label>
            <input
              ref={emailInput}
              id="results-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              maxLength={254}
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
                setNoMatch(false);
              }}
              disabled={busy || !isConfigured}
              aria-describedby={[
                showNoFeedbackHelp ? "results-email-help" : "",
                error ? "results-error" : "",
              ].filter(Boolean).join(" ") || undefined}
              className="w-full min-w-0 border border-gray bg-near-black px-4 py-3 font-mono text-base text-off-white placeholder:text-dim focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 disabled:opacity-50"
              placeholder="you@example.com"
            />
            {isConfigured && usesTurnstile && (
              <div className="my-6">
                <div ref={challengeContainer} />
                {!scriptReady && !challengeError && (
                  <p role="status" className="font-mono text-xs text-gray">
                    Loading bot check…
                  </p>
                )}
                {challengeError && (
                  <p role="alert" className="font-mono text-xs text-off-white leading-relaxed mt-3">
                    The bot check couldn’t load. Refresh the page and try again.
                  </p>
                )}
              </div>
            )}

            {error && (
              <p id="results-error" role="alert" className="font-mono text-sm text-off-white border-l-2 border-accent pl-4 mb-5 leading-relaxed">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!isConfigured || (usesTurnstile && !challengeToken) || busy}
              className="mt-5 min-h-12 w-full sm:w-auto inline-flex items-center justify-center bg-accent text-near-black px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] font-bold hover:bg-off-white transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {phase === "checking"
                ? "CHECKING YOUR BROWSER…"
                : phase === "lookup"
                  ? "FINDING YOUR RESULTS…"
                  : "VIEW MY RESULTS →"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="border-t-2 border-off-white pt-6 mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gray mb-2 font-semibold">
                YOUR NEIGHBORHOOD HACKS RESULTS
              </p>
              <h2 ref={resultHeading} tabIndex={-1} className="font-display text-3xl sm:text-4xl font-bold text-off-white break-words focus:outline-none">
                {result.participant.name || "YOUR RESULTS"}
              </h2>
            </div>
            <button
              type="button"
              onClick={startAgain}
              className="shrink-0 min-h-11 self-start font-mono text-[11px] uppercase tracking-[0.1em] text-accent underline underline-offset-4 hover:text-off-white focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              LOOK UP ANOTHER EMAIL
            </button>
          </div>

          {result.projects.length ? (
            <div className="space-y-8">
              {result.projects.map((project) => {
                const projectUrl = safeProjectUrl(project.url);
                const reviewState = projectReviewState(project);
                return (
                  <article key={project.id} className="rough-border p-5 sm:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3 font-semibold">
                      {reviewState.heading}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-off-white break-words">
                      {project.title}
                    </h3>
                    {projectUrl && (
                      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 font-mono text-xs text-gray underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 mt-2">
                        View project on Devpost ↗
                      </a>
                    )}

                    <p className="font-mono text-sm text-gray leading-relaxed mt-5">
                      {reviewState.description}
                    </p>

                    {project.feedback.length ? (
                      <div className="mt-6 space-y-6">
                        <h4 className="font-display text-lg font-bold text-off-white">
                          INITIAL-ROUND FEEDBACK
                        </h4>
                        {project.feedback.map((feedback, index) => (
                          <div key={index} className="border-t border-grid pt-5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray mb-3 font-semibold">
                              {feedback.judge || (project.feedback.length > 1 ? `REVIEW ${index + 1}` : "REVIEWER FEEDBACK")}
                            </p>
                            <p className="font-mono text-sm sm:text-base text-off-white leading-relaxed whitespace-pre-wrap [overflow-wrap:anywhere]">
                              {feedback.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {project.isFinalist || project.finalFeedback.length > 0 ? (
                      <div className="mt-8 border-t-2 border-accent pt-6 space-y-6">
                        <h4 className="font-display text-lg font-bold text-off-white">
                          FINALIST-ROUND FEEDBACK
                        </h4>
                        {project.finalFeedback.length > 0 ? project.finalFeedback.map((feedback, index) => (
                          <div key={index} className="border-t border-grid pt-5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray mb-3 font-semibold">
                              {feedback.judge || (project.finalFeedback.length > 1 ? `REVIEW ${index + 1}` : "REVIEWER FEEDBACK")}
                            </p>
                            <p className="font-mono text-sm sm:text-base text-off-white leading-relaxed whitespace-pre-wrap [overflow-wrap:anywhere]">
                              {feedback.comment}
                            </p>
                          </div>
                        )) : (
                          <p className="font-mono text-sm text-gray leading-relaxed">
                            No written final-round comments were recorded for
                            this project.
                          </p>
                        )}
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rough-border p-5 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-off-white mb-3">
                Registered · No project submitted
              </h3>
              <p className="font-mono text-sm text-gray leading-relaxed">
                We found your registration, but no submitted project is linked
                to it, so there is no judging feedback.
              </p>
            </div>
          )}

          <CertificatePanel
            certificate={result.certificate}
            hasSubmission={result.projects.length > 0}
            onLookupAgain={startAgain}
          />
        </div>
      )}

      {showNoFeedbackHelp && (
        <div className="font-mono text-xs text-gray leading-relaxed mt-8 max-w-2xl space-y-3">
          <p id="results-email-help">
            Use the email linked to your Devpost registration. No account or
            email verification needed.
          </p>
          <p>
            Having trouble finding your feedback? Contact{" "}
            <a href="mailto:contact@neighborhoodhacks.org" className="text-off-white underline underline-offset-4 hover:text-accent [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4">
              contact@neighborhoodhacks.org
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
