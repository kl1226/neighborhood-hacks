export type Sponsor = {
  name: string;
  tier: "title" | "supporting";
  contribution: string;
  logo?: string;
  logoClassName?: string;
  url?: string;
};

export type Partner = {
  name: string;
  url: string;
  logo: string;
  description: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Backboard",
    tier: "supporting",
    contribution:
      "Backboard: $10 developer credits for 100 participants, worth $1,000 in total",
    logo: "/sponsors/backboard2.svg",
  },
  {
    name: "MojoAuth",
    tier: "supporting",
    contribution: "MojoAuth: 5 one-year licenses worth $3,000 in total",
    logo: "/sponsors/mojoauth.svg",
    logoClassName: "invert",
  },
  {
    name: "XYZ Domains",
    tier: "supporting",
    contribution: "XYZ: free one-year domains for the first 100 requests after the hackathon",
    logo: "/sponsors/xyz-logo-color.png",
  },
  {
    name: "Formaloo",
    tier: "supporting",
    contribution: "Formaloo: sponsor of Neighborhood Hacks",
    logo: "/sponsors/Formaloo-logo-2026.png",
    logoClassName: "!w-72 sm:!w-96 scale-[0.9785]",
  },
  {
    name: "esoteric",
    tier: "supporting",
    contribution: "esoteric: sponsor of Neighborhood Hacks",
    logo: "/sponsors/esoteric_software_logo.png",
  },
  {
    name: "Pyxel Edit",
    tier: "supporting",
    contribution: "Pyxel Edit: sponsor of Neighborhood Hacks",
    logo: "/sponsors/PyxelEdit.png",
  },
  {
    name: "Momen",
    tier: "supporting",
    contribution: "Momen: grand prize credits, participant credits, and an optional workshop",
    logo: "/sponsors/Momen-logo-2026.png",
    logoClassName: "!w-64 sm:!w-80 rounded-sm bg-off-white px-3 py-2",
  },
  {
    name: "Deployxa",
    tier: "supporting",
    contribution: "Deployxa: infrastructure sponsor of Neighborhood Hacks",
    logo: "/sponsors/deployxa-logo-dark.png",
    url: "https://deployxa.com/",
  },
  {
    name: "Agentboxd",
    tier: "supporting",
    contribution: "Agentboxd: builder access and a winning team prize",
    logo: "/sponsors/agentboxd-logo-dark.png",
    url: "https://agentboxd.com/",
  },
  {
    name: "DevSwarm",
    tier: "supporting",
    contribution: "DevSwarm: Pro subscriptions for winners and participants",
    logo: "/sponsors/devswarm-sponsor.png",
    url: "https://devswarm.ai/",
  },
  {
    name: "Wasmer",
    tier: "supporting",
    contribution: "Wasmer: hosting credits and Pro subscriptions for winners and participants",
    logo: "/sponsors/wasmer-logo-white.png",
    url: "https://wasmer.io/",
  },
];

export const partners: Partner[] = [
  {
    name: "Doq",
    url: "https://doq.world/",
    logo: "/partners/Doq-logo.png",
    description: "Discover competitions for high school students",
  },
];

// Devpost's published prize values include cash and non-cash awards.
export const TOTAL_PRIZE_VALUE = 60866;
export const BACKBOARD_WINNER_COUNT = 100;
export const FREE_DOMAIN_COUNT = 100;
export const FINALIST_COUNT = 10;
