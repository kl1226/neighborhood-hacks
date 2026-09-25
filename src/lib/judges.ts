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
  {
    name: "Meta",
    logo: "/judges/Meta-Logo.png",
  },
  {
    name: "Microsoft",
    logo: "/judges/microsoft-icon.webp",
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
    name: "Akhil Kumar Mengani",
    title: "Senior Software Engineer",
    company: "Meta",
    image: "/judges/AkhilKumarMengani.png",
  },
  {
    name: "Gayathri Chilukala",
    title: "Software Engineer",
    company: "Microsoft — Azure OpenAI Team",
    image: "/judges/GayathrioChilukala.png",
  },
  {
    name: "Nikhil Singh",
    title: "Lead Software Engineer",
    company: "US Bank",
    image: "/judges/NikhilHeadshot.png",
  },
  {
    name: "Sai Prasad Saladi",
    title: "Senior Software Engineer",
    company: "US Bank",
    image: "/judges/Sai.jpeg",
  },
  {
    name: "Sravanthi Kondoju",
    title: "Data Platform Lead",
    company: "Target",
    image: "/judges/Sravanthi.png",
  },
  {
    name: "Ramesh Venkatachalapathy",
    title: "Principal Engineer",
    company: "AT&T",
    image: "/judges/Ramesh_ProfilePic.jpg",
  },
  {
    name: "Nikhil Reddy Donapati",
    title: "Software Engineer",
    company: "NeuroNet Solutions Inc.",
    image: "/judges/NikhilR.jpg",
  },
  {
    name: "Monish Chandrashekar",
    title: "Manager – Cyber Risk, Data Engineering & AI",
    company: "PwC",
    image: "/judges/Monish.JPG",
  },
  {
    name: "Renata Blazhko",
    title: "Product & Data Analysis Lead",
    company: "MIPT",
    image: "/judges/RenataBlazhko.png",
  },
];
