export type Sponsor = {
  name: string;
  tier: "title" | "supporting";
  contribution: string;
  logo?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Hot Comet Games",
    tier: "title",
    contribution: "Hot Comet Games: Title Sponsor",
    logo: "/sponsors/HotCometLogo2.0.png",
  },
  {
    name: "XYZ Domains",
    tier: "supporting",
    contribution: "XYZ: 100 free domains for participating teams",
    logo: "/sponsors/xyz-logo-color.png",
  },
];

export const DOMAIN_SPONSOR_VALUE = 1650;
export const FREE_DOMAIN_COUNT = 100;
