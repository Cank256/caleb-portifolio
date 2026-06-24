export type ProjectCategory = "graphics" | "websites" | "webapps" | "mobile";

export interface Project {
  num: string;
  title: string;
  description: string;
  stack: string[];
  cat: ProjectCategory;
  role: string;
  year: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    num: "01",
    title: "REM Church Media & Brand",
    description: "Ongoing brand, social and video design work — graphics, reels, and event visuals.",
    stack: ["Branding", "Premiere Pro", "Social Design"],
    cat: "graphics",
    role: "Lead Designer & Media",
    year: "2020 — Present",
    challenge:
      "REM needed a consistent visual identity and a steady stream of high-quality media to support its services, events and community outreach across social platforms.",
    solution:
      "I established the brand system and lead ongoing graphic, social and video production — designing event visuals, weekly reels, sermon graphics and campaign assets, while directing the media workflow end to end.",
  },
  {
    num: "01",
    title: "Luigi Giussani Foundation",
    description:
      "A full corporate site with custom design and content management for an education-focused foundation.",
    stack: ["WordPress", "Custom Design"],
    cat: "websites",
    role: "ICT & Web Developer",
    year: "2021 — Present",
    challenge:
      "An established education foundation needed a polished, easy-to-manage web presence that staff could update without technical help.",
    solution:
      "I designed and built a custom WordPress site with a tailored theme and content structure, giving the team full control over content while keeping a refined, professional look.",
  },
  {
    num: "02",
    title: "Luigi Giussani Institute of Higher Education",
    description:
      "An institutional site with a modern frontend and a robust admin-driven backend for content.",
    stack: ["NextJS", "Laravel", "Filament"],
    cat: "websites",
    role: "Full-stack Developer",
    year: "2022 — 2023",
    challenge:
      "The institute required a modern, fast public website backed by a flexible admin system to manage programmes, news and academic content.",
    solution:
      "I built a NextJS frontend for speed and SEO, paired with a Laravel + Filament backend giving administrators a powerful, friendly dashboard to manage everything.",
  },
  {
    num: "03",
    title: "Rural Evangelical Ministries",
    description:
      "A mission-driven website spotlighting community outreach, ministry work and giving.",
    stack: ["Web Design", "CMS"],
    cat: "websites",
    role: "Web Designer & Developer",
    year: "2022",
    challenge:
      "A growing ministry needed a website to share its outreach work, tell its story and make giving simple for supporters.",
    solution:
      "I delivered a clean, mission-driven site with clear storytelling, an outreach showcase and an accessible giving flow, all managed through a lightweight CMS.",
  },
  {
    num: "01",
    title: "ACT Now Teacher Platform",
    description:
      "A teacher training and resource platform with a tailored UI/UX flow built for educators.",
    stack: ["Laravel", "UI/UX Design"],
    cat: "webapps",
    role: "Backend & UI/UX Developer",
    year: "2023",
    challenge:
      "Teachers needed a single platform to access training materials and resources with a flow that felt simple, not technical.",
    solution:
      "I built the platform on Laravel with a carefully designed UI/UX, structuring resources and training journeys so educators could find and use what they needed quickly.",
  },
  {
    num: "02",
    title: "Flix 256",
    description:
      "A movie & TV search app with rich discovery, powered by a fast API-driven stack.",
    stack: ["VueJS", "NodeJS", "MongoDB"],
    cat: "webapps",
    role: "Full-stack Developer",
    year: "2023",
    challenge:
      "Users wanted a fast, modern way to discover movies and TV shows with rich detail and smooth browsing.",
    solution:
      "I built a VueJS frontend backed by a NodeJS API and MongoDB, delivering fast search, rich discovery and a responsive, app-like experience.",
  },
  {
    num: "03",
    title: "Payment Gateway",
    description:
      "A secure, scalable payment gateway integrating multiple provider APIs and transaction flows.",
    stack: ["NodeJS", "MongoDB", "Payment APIs"],
    cat: "webapps",
    role: "Backend Developer",
    year: "2023",
    challenge:
      "The project needed a secure, reliable way to accept payments through several providers with consistent transaction handling.",
    solution:
      "I engineered a NodeJS + MongoDB gateway integrating multiple payment APIs, with robust transaction flows, validation and error handling built for scale.",
  },
  {
    num: "04",
    title: "Music & Artist Search App",
    description:
      "A search experience for discovering music and artists with clean, responsive results.",
    stack: ["Laravel"],
    cat: "webapps",
    role: "Full-stack Developer",
    year: "2022",
    challenge:
      "Listeners needed a quick, clean way to search and explore music and artists with responsive results.",
    solution:
      "I built a Laravel application with an efficient search experience and a clean, responsive interface that surfaces results instantly.",
  },
  {
    num: "01",
    title: "Flix 256",
    description:
      "The mobile companion for Flix 256 — movie & TV discovery on the go with a fluid native feel.",
    stack: ["Mobile", "API-Driven"],
    cat: "mobile",
    role: "Mobile Developer",
    year: "2023",
    challenge:
      "Flix 256 needed a mobile companion so users could discover movies and TV on the go with a native, fluid feel.",
    solution:
      "I built the mobile experience on top of the same API-driven stack, focusing on smooth navigation, fast discovery and a responsive, native-feeling interface.",
  },
  {
    num: "02",
    title: "Pearl Tour and Travel",
    description:
      "A travel companion app for browsing tours, destinations and booking experiences.",
    stack: ["Mobile", "Travel"],
    cat: "mobile",
    role: "Mobile Developer",
    year: "2022",
    challenge:
      "A tour operator wanted a mobile app for travellers to browse tours and destinations and book experiences easily.",
    solution:
      "I built a travel companion app with intuitive browsing of tours and destinations and a streamlined booking flow designed for travellers on the move.",
  },
];

export const skills = [
  "JavaScript", "PHP", "Laravel", "NodeJS", "VueJS", "WordPress",
  "Canva", "Adobe Premiere", "HTML/CSS", "MySQL", "MongoDB", "Figma",
];

export const experience = [
  {
    role: "ICT & Digital Communications Manager",
    org: "Luigi Giussani Foundation",
    date: "2021 — Present",
    desc: "Lead ICT infrastructure and the foundation's full digital presence — managing the website, internal systems, and communications strategy across platforms.",
  },
  {
    role: "Systems & Digital Content Administrator",
    org: "UGMart Limited",
    date: "2020 — 2021",
    desc: "Administered e-commerce systems and produced digital content, keeping product platforms and marketing channels running smoothly.",
  },
  {
    role: "ICT Coordinator & Comms Tutor",
    org: "Bethel International Christian School",
    date: "2019 — 2020",
    desc: "Coordinated school ICT operations and taught communications, mentoring students in digital and technical skills.",
  },
  {
    role: "Sponsor & Donor Relations Officer",
    org: "Compassion International",
    date: "2017 — 2019",
    desc: "Managed sponsor and donor relationships, handling digital correspondence and reporting to keep supporters engaged.",
  },
];
