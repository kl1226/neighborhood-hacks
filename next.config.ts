import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const usesRepoSubpath = isGithubPages && !hasCustomDomain;

const repoName = "neighborhood-hacks";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(usesRepoSubpath
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

export default nextConfig;
