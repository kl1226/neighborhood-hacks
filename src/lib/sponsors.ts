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
      "Backboard: $10 developer credits for 500 winners, worth $5,000 in total",
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
  {
    name: "Formaloo",
    tier: "supporting",
    contribution: "Formaloo: sponsor of Neighborhood Hacks",
    logo: "/sponsors/Formaloo-logo-2026.png",
    logoClassName: "!w-72 sm:!w-96 scale-[1.03]",
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
    contribution: "Momen: workshop and builder resources for participants",
    logo: "/sponsors/Momen-logo-2026.png",
    logoClassName: "!w-64 sm:!w-80 rounded-sm bg-off-white px-3 py-2",
  },
];

export const DOMAIN_SPONSOR_VALUE = 1500;
export const MOJOAUTH_SPONSOR_VALUE = 3000;
export const FORMALOO_SPONSOR_VALUE = 1500;
export const SPINE_SPONSOR_VALUE = 379;
export const PYXEL_EDIT_SPONSOR_VALUE = 45;
export const CASH_PRIZE_VALUE = 150;
export const BACKBOARD_SPONSOR_VALUE = 5000;
export const BACKBOARD_WINNER_COUNT = 500;
export const FREE_DOMAIN_COUNT = 100;
export const FINALIST_COUNT = 10;
export const TOTAL_PRIZE_VALUE =
  DOMAIN_SPONSOR_VALUE +
  MOJOAUTH_SPONSOR_VALUE +
  FORMALOO_SPONSOR_VALUE +
  SPINE_SPONSOR_VALUE +
  PYXEL_EDIT_SPONSOR_VALUE +
  CASH_PRIZE_VALUE +
  BACKBOARD_SPONSOR_VALUE;
