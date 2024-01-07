import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marsa Naufal",
  initials: "MN",
  location: "Indonesia, Kalimantan Timur, Samarinda",
  locationLink: "https://www.google.com/maps/place/Samarinda",
  about: "Software Engineer",
  personalWebsiteUrl: "http://google.com/404",
  summary:
    "Saya adalah seorang individu yang dapat berkomunikasi dengan jelas dan mampu menyampaikan ide-ide inovatif dan kreatif di dalam lingkungan organisasi maupun lingkungan kerja. Selain itu, saya mampu beradaptasi dengan cepat di lingkungan sekitar, dan dapat membangun sebuah hubungan yang profesional dan solid dengan orang-orang sekitarnya.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/88637179?s=400&u=e225d3c2a884517a7726bdd3187a870a5e43d1ca&v=4",
  contact: {
    email: "marsanaufal@protonmail.com",
    tel: "+6281257266152",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Amertaa",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mrsanaufal/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Institut Teknologi Kalimantan",
      degree: "S1-Teknik Elektro",
      start: "2023",
      end: "Sekarang",
    },
    {
      school: "SMK NEGERI 7 SAMARINDA",
      degree: "Rekayasa Perangkat Lunak",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Robotik Institut Teknologi Kalimantan",
      link: "https://github.com/ROBOTIKITK",
      badges: ["Hybrid"],
      title: "Staff Programming",
      // logo: ParabolLogo,
      start: "Jan 2023",
      end: "Sekarang",
      description: "",
    },
    {
      company: "CV. GreenNusa Computindo",
      link: "https://green-nusa.net/",
      badges: ["Hybrid"],
      title: "Backend Developer",
      // logo: ParabolLogo,
      start: "Jun 2023",
      end: "Des 2023",
      description:
        "Membangun dan memperbaiki sebuah website profesional di bagian sistem suatu website untuk perusahaan-perusahaan yang membutuhkan, guna meningkatkan produktivitas dalam proses pekerjaan mereka. Yang melibatkan beberapa Framework seperti Laravel, Tailwind, Bootstrap, hingga database seperti MySQL.",
    },
    {
      company: "PT. Barqun Digital Teknologi",
      link: "https://barqun.com",
      badges: ["On-site"],
      title: "Website Developer",
      // logo: ClevertechLogo,
      start: "Mar 2022",
      end: "Mei 2022",
      description:
        "Memperbaiki sebuah website profesional untuk beberapa perusahaan yang dan melibatkan beberapa Teknologi seperti Bootstrap, Tailwind hingga SCSS/SASS.",
    },
  ],
  skills: [
    "Laravel",
    "Wordpress",
    "MySQL",
    "Arduino",
    "Git",
    "UI/UX",
    "Tailwind",
    "SCSS",
    "Bootstrap",
    "JavaScript",
  ],
  projects: [
    {
      title: "Trackrecord",
      techStack: [
        "Backend Developer",
        "Laravel",
        "MySQL",
        "Vanilla javaScript",
      ],
      description:
        "Aplikasi website guna mengorganisir sebuah sistematika pada perusahaan",
    },
    {
      title: "Bumbu Fried Chicken",
      techStack: ["Backend Developer", "Wordpress", "Elementor"],
      description:
        "Website profile untuk meng-promosikan sebuah UMKM yang ada di Samarinda",
    },
    {
      title: "E-Cast",
      techStack: ["Backend Developer", "Laravel", "MySQL", "Boostrap"],
      description:
        "Sebuah aplikasi website guna menghitung pemasukan dalam suatu perusahaan.",
    },
    {
      title: "Website Profile Barqun Digital",
      techStack: ["Website Developer", "Bootstrap", "SCSS", "UI/UX"],
      description:
        "Website profile untuk meningkatkan engagement suatu Startup Teknologi di Samarinda",
    },
    {
      title: "E-books",
      techStack: [
        "Backend Developer",
        "PHP",
        "MySQL",
        "Tailwind",
        "JavaScript",
      ],
      description:
        "Aplikasi website yang digunakan untuk membeli sebuah buku digital",
    },
    {
      title: "Parking app",
      techStack: ["Backend Developer", "PHP", "MySQL", "Tailwind"],
      description:
        "Web parkir merupakan aplikasi website guna meningkatkan keamanan dan produktifitas dalam suatu parkiran",
    },
  ],
} as const;
