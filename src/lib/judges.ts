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
    logo: "/judges/AmazonLogo.jpg",
  },
  {
    name: "US Bank",
    logo: "/judges/USBankLogo.png",
  },
];

export const judgePanelists: Judge[] = [
  {
    name: "Naveen Goel",
    title: "Senior Technical Program Manager",
    company: "Amazon",
    image: "/judges/AmazonLogo.jpg",
  },
  {
    name: "Nikhil Singh",
    title: "Lead Software Engineer",
    company: "US Bank",
    image: "/judges/USBankLogo.png",
  },
];
