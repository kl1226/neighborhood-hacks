export type Feedback = { judge?: string; comment: string };

export type Project = {
  id: string;
  title: string;
  url?: string;
  feedback: Feedback[];
  finalFeedback: Feedback[];
  isFinalist?: boolean;
  status?: string;
};

export type AvailableCertificate = {
  status: "available";
  certificateId: string;
  downloadUrl: string;
  expiresAt: number;
};

export type Certificate =
  | AvailableCertificate
  | { status: "pending" }
  | { status: "not_eligible" };

export type Results = {
  participant: { name: string };
  projects: Project[];
  certificate: Certificate;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readFeedback(value: unknown): Feedback[] | null {
  if (!Array.isArray(value)) return null;
  const feedback: Feedback[] = [];
  for (const entry of value) {
    if (!isRecord(entry) || typeof entry.comment !== "string") return null;
    if (entry.comment.trim()) {
      feedback.push({
        comment: entry.comment,
        ...(typeof entry.judge === "string" && entry.judge.trim()
          ? { judge: entry.judge }
          : {}),
      });
    }
  }
  return feedback;
}

function readCertificate(value: unknown): Certificate | null {
  if (!isRecord(value)) return null;
  if (value.status === "pending" || value.status === "not_eligible") {
    return { status: value.status };
  }
  if (
    value.status !== "available" ||
    typeof value.certificateId !== "string" ||
    value.certificateId.length === 0 ||
    typeof value.downloadUrl !== "string" ||
    value.downloadUrl.length === 0 ||
    typeof value.expiresAt !== "number" ||
    !Number.isFinite(value.expiresAt) ||
    value.expiresAt <= 0
  ) {
    return null;
  }
  return {
    status: "available",
    certificateId: value.certificateId,
    downloadUrl: value.downloadUrl,
    expiresAt: value.expiresAt,
  };
}

export function readResults(value: unknown): Results | null {
  if (
    !isRecord(value) ||
    !isRecord(value.participant) ||
    typeof value.participant.name !== "string" ||
    !Array.isArray(value.projects)
  ) {
    return null;
  }
  const certificate = readCertificate(value.certificate);
  if (!certificate) return null;

  const projects: Project[] = [];
  for (const project of value.projects) {
    if (
      !isRecord(project) ||
      typeof project.id !== "string" ||
      typeof project.title !== "string" ||
      (project.isFinalist !== undefined && typeof project.isFinalist !== "boolean")
    ) {
      return null;
    }
    const feedback = readFeedback(project.feedback);
    const finalFeedback = readFeedback(
      project.finalFeedback === undefined ? [] : project.finalFeedback,
    );
    if (!feedback || !finalFeedback) return null;

    projects.push({
      id: project.id,
      title: project.title,
      feedback,
      finalFeedback,
      ...(typeof project.isFinalist === "boolean" ? { isFinalist: project.isFinalist } : {}),
      ...(typeof project.url === "string" ? { url: project.url } : {}),
      ...(typeof project.status === "string" ? { status: project.status } : {}),
    });
  }

  return {
    participant: { name: value.participant.name },
    projects,
    certificate,
  };
}

export function safeCertificateDownloadUrl(
  downloadUrl: string,
  lookupEndpoint?: string,
): string | undefined {
  if (!lookupEndpoint) return;
  try {
    const api = new URL(lookupEndpoint);
    const download = new URL(downloadUrl);
    const tokens = download.searchParams.getAll("token");
    if (
      api.protocol !== "https:" ||
      api.username || api.password ||
      download.protocol !== "https:" ||
      download.origin !== api.origin ||
      download.username || download.password ||
      download.pathname !== "/api/results/certificate" ||
      download.hash ||
      tokens.length !== 1 ||
      tokens[0].length === 0 ||
      tokens[0].length > 8192 ||
      [...download.searchParams.keys()].some((key) => key !== "token")
    ) {
      return;
    }
    return download.href;
  } catch {
    return;
  }
}
