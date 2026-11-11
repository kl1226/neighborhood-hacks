import { sha256 } from "@noble/hashes/sha2.js";

type BrowserChallenge = {
  token: string;
  difficulty: number;
  expiresAt: number;
};

export type BrowserProof = { token: string; counter: number };

export class BrowserProofError extends Error {}

function readChallenge(value: unknown): BrowserChallenge {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new BrowserProofError("The browser check couldn’t start. Please try again.");
  }
  const challenge = value as Record<string, unknown>;
  if (
    typeof challenge.token !== "string" ||
    challenge.token.length === 0 ||
    challenge.token.length > 8192 ||
    typeof challenge.difficulty !== "number" ||
    !Number.isInteger(challenge.difficulty) ||
    challenge.difficulty < 1 ||
    challenge.difficulty > 22 ||
    typeof challenge.expiresAt !== "number" ||
    !Number.isFinite(challenge.expiresAt) ||
    challenge.expiresAt <= Date.now()
  ) {
    throw new BrowserProofError("The browser check expired or couldn’t start. Please try again.");
  }
  return challenge as BrowserChallenge;
}

function hasLeadingZeroBits(hash: Uint8Array, difficulty: number): boolean {
  const fullBytes = Math.floor(difficulty / 8);
  for (let index = 0; index < fullBytes; index++) {
    if (hash[index] !== 0) return false;
  }
  const remainingBits = difficulty % 8;
  return remainingBits === 0 || hash[fullBytes] >>> (8 - remainingBits) === 0;
}

export async function solveBrowserProof(
  value: unknown,
  signal: AbortSignal,
): Promise<BrowserProof> {
  if (typeof TextEncoder !== "function") {
    throw new BrowserProofError(
      "Your browser can’t complete this check. Please try an up-to-date browser.",
    );
  }

  const challenge = readChallenge(value);
  const encoder = new TextEncoder();
  const deadline = Math.min(Date.now() + 30_000, challenge.expiresAt);
  const batchSize = 2048;

  for (let batchStart = 0; batchStart <= 2 ** 32; batchStart += batchSize) {
    if (signal.aborted) throw new DOMException("Aborted", "AbortError");
    if (Date.now() >= deadline) {
      throw new BrowserProofError(
        "The browser check took too long. Please try again, or use another browser.",
      );
    }

    const batchEnd = Math.min(batchStart + batchSize, 2 ** 32 + 1);
    for (let counter = batchStart; counter < batchEnd; counter++) {
      if (counter % 128 === 0 && Date.now() >= deadline) {
        throw new BrowserProofError(
          "The browser check took too long. Please try again, or use another browser.",
        );
      }
      const hash = sha256(encoder.encode(`${challenge.token}:${counter}`));
      if (hasLeadingZeroBits(hash, challenge.difficulty)) {
        return { token: challenge.token, counter };
      }
    }

    // Let the page paint and handle input between small batches of hashes.
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
  }

  throw new BrowserProofError("The browser check couldn’t finish. Please try again.");
}
