export type Sponsor = {
  name: string;
  tier: "title" | "supporting";
  contribution: string;
  logo?: string;
  logoClassName?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Backboard",
    tier: "supporting",
    contribution:
      "Backboard: $10 developer credits for 250 winners, worth $2,500 in total",
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
    contribution: "XYZ: 100 free domains for participating teams",
    logo: "/sponsors/xyz-logo-color.png",
  },
];

export const DOMAIN_SPONSOR_VALUE = 1650;
export const MOJOAUTH_SPONSOR_VALUE = 3000;
export const BACKBOARD_SPONSOR_VALUE = 2500;
export const BACKBOARD_WINNER_COUNT = 250;
export const TOTAL_PRIZE_VALUE =
  DOMAIN_SPONSOR_VALUE + MOJOAUTH_SPONSOR_VALUE + BACKBOARD_SPONSOR_VALUE;
export const FREE_DOMAIN_COUNT = 100;
