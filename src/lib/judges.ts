export type JudgeCompany = {
  name: string;
  logo: string;
};

export type Judge = {
  name: string;
  title: string;
  company: string;
  image: string;
};

export const judgeCompanies: JudgeCompany[] = [
  {
    name: "Amazon",
    logo: "/judges/Amazon-White-Logo.png",
  },
  {
    name: "US Bank",
    logo: "/judges/USBank.png",
  },
];

export const judgePanelists: Judge[] = [
  {
    name: "Naveen Goel",
    title: "Senior Technical Program Manager",
    company: "Amazon",
    image: "/judges/Naveen.jpeg",
  },
  {
    name: "Nikhil Singh",
    title: "Lead Software Engineer",
    company: "US Bank",
    image: "/judges/NikhilHeadshot.png",
  },
];
