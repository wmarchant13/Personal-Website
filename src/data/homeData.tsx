import { HomePageProps } from "@/components/home-page";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask,
  SiSass,
  SiVitest,
  SiStorybook,
  SiGitlab,
  SiCypress,
  SiNextdotjs,
  SiGithubcopilot,
  SiBun,
  SiSqlite,
  SiDotnet,
  SiSharp,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { TbApi, TbBrandCSharp, TbWebhook } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaDownload, FaFileAlt } from "react-icons/fa";
import { assetPath } from "@/utililties/assetPath";

export const homeData: HomePageProps = {
  heroSection: {
    preTitle: "Written By",
    name: "William Marchant",
    occupation: "Software Engineer",
    email: "wmarchant13@gmail.com",
    phone: "+1 518-813-7261",
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/william-marchant-4b2633294/",
        label: "LinkedIn",
        icon: <FaLinkedin />,
        external: true,
      },
      {
        href: "https://github.com/wmarchant13",
        label: "GitHub",
        icon: <FaGithub />,
        external: true,
      },
      {
        href: assetPath("/resume.pdf"),
        label: "Download Resume",
        icon: <FaDownload />,
        download: "William_Marchant_Resume.pdf",
      },
      {
        href: "https://github.com/wmarchant13/personal-website#readme",
        label: "Read Me",
        icon: <FaFileAlt />,
        external: true,
      },
    ],
  },
  quoteSection: {
    text: "\u201CTo give anything less than your best is to sacrifice the gift.\u201D",
    attribution: "\u2014 Steve Prefontaine",
  },
  experienceSection: {
    experiences: [
      {
        label: "June 2024 – Present",
        title: "Junior Software Engineer",
        subtitle: "Mean Guppy",
        children:
          "Build reusable TypeScript and SASS-based design system components used across enterprise-scale applications, standardizing UI patterns and improving development efficiency.Improve application stability by implementing comprehensive unit and component testing with Vitest and React Testing Library, reducing regressions in production workflows.Built a Payload CMS + React-based content platform with custom component architecture to support enterprise-scale website re-authoring and migration for a Fortune 500 company, powering hundreds of pages.Implement frontend data layers and API integrations to manage asynchronous requests and structured response handling, enabling reliable dynamic UI rendering.",
        skills: [
          "TypeScript",
          "SCSS",
          "Payload CMS",
          "Vitest",
          "React",
          "HTML",
          "Gitlab",
          "Storybook",
        ],
        skillIcons: [
          <SiTypescript key="ts-mean-guppy" title="TypeScript" />,
          <SiReact key="react-mean-guppy" title="React" />,
          <SiSass key="sass-mean-guppy" title="SCSS" />,
          <SiHtml5 key="html-mean-guppy" title="HTML" />,
          <SiVitest key="vitest-mean-guppy" title="Vitest" />,
          <SiStorybook key="storybook-mean-guppy" title="Storybook" />,
          <SiGitlab key="gitlab-mean-guppy" title="GitLab" />,
        ],
      },
      {
        title: "Technology Intern",
        subtitle: "M&T Bank",
        children:
          "Developed a TypeScript and React web application connecting women of color in Buffalo with financial advisors, improving access to financial guidance and support resources. Implemented Cypress end-to-end tests and YAML-based CI/CD pipelines to ensure reliable, production-ready deployments. Collaborated in a Scrum-based Agile team through sprint planning, stand-ups, and retrospectives. Contributed to a research study comparing AI-generated and human-written code, maintaining weekly logs and documenting findings.",
        skills: [
          "TypeScript",
          "CSS",
          "YAML",
          "Cypress",
          "CI Pipeline",
          "Gitlab",
        ],
        skillIcons: [
          <SiTypescript key="ts-mtb" title="TypeScript" />,
          <SiReact key="react-mtb" title="React" />,
          <SiHtml5 key="html-mtb" title="HTML" />,
          <SiCss3 key="css-mtb" title="CSS" />,
          <SiCypress key="cypress-mtb" title="Cypress" />,
          <SiGitlab key="gitlab-mtb" title="GitLab" />,
        ],
      },
      {
        label: "June 2021 – August 2022",
        title: "Cashier/Sales Associate",
        subtitle: "Stewart's Shops",
        children:
          "Worked as part of a team to prepare food, stock shelves, organize coolers and freezers, operate the cash register, serve ice cream, and ensure store cleanliness.",
      },
    ],
  },
  projectSection: {
    projects: [
      {
        title: "Real Weather App",
        subtitle: "Personal Project",
        children:
          "Developed a weather application using .NET MAUI (.NET 8) and C#, integrating real-time data from the OpenWeather API, with user-provided API key input for secure local configuration. Architected and built an ASP .NET backend to manage API requests and streamline data processing, improving performance and scalability. Implemented asynchronous data fetching and error handling to ensure responsive performance and reliable weather updates across devices in a locally hosted environment.",
        skills: [".NET", "C#", "API"],
        skillIcons: [
          <SiDotnet key=".NET" title=".Net" />,
          <TbBrandCSharp key="C#" title="C#" />,
          ,
          <TbApi key="API" title="API" />,
        ],
      },
      {
        title: "Personal Website",
        subtitle: "Personal Project",
        children:
          "Built and deployed a personal portfolio website using React, Next.js, Bun, TypeScript, SCSS, and HTML. Designed responsive, performance-optimized UI with modern component architecture. Implemented CI pipeline for automated semantic versioned releases and changelog updates. Leveraged AI tools such as Cursor and GitHub Copilot to accelerate development.",
        skills: ["TypeScript", "React", "HTML", "SCSS", "Bun", "Next.js", "AI"],
        skillIcons: [
          <SiTypescript key="ts-personal-website" title="TypeScript" />,
          <SiReact key="react-personal-website" title="React" />,
          <SiHtml5 key="html-personal-website" title="HTML5" />,
          <SiSass key="sass-personal-website" title="Sass" />,
          <SiNextdotjs key="next.js-personal-website" title="Next.js" />,
          <SiGithubcopilot key="copilot-personal-website" title="Copilot" />,
          <SiBun key="bun-personal-website" title="Bun" />,
        ],
      },
      {
        title: "CRUD Notes",
        subtitle: "Personal Project",
        children:
          "Architected and managed a SQLite database to support full CRUD functionality in a Flask-based web application. Wrote and executed SQL queries to handle data insertion, updates, deletion, and retrieval. Established database connections within Flask routes to ensure reliable transaction handling. Maintained data integrity through structured schema design and controlled query execution.",
        skills: ["Python", "Flask", "GitHub", "HTML", "CSS", "SQLite"],
        skillIcons: [
          <SiPython key="python-group" title="Python" />,
          <SiFlask key="flask-group" title="Flask" />,
          <DiGithubBadge key="github-group" title="GitHub" />,
          <SiHtml5 key="html-group" title="HTML5" />,
          <SiCss3 key="css-group" title="CSS3" />,
          <SiSqlite key="sqlite-group" title="sqlit" />,
        ],
      },
    ],
  },
  educationSection: {
    entries: [
      {
        label: "2020 \u2013 2024",
        title: "BS, Computer Science",
        subtitle: "University at Buffalo, State University of New York",
        items: [
          "Relevant Courses: Systems Programming, Applied Human Computer-Interaction and Interface Design, Distributed Systems, Algorithms and Complexity, Data Models and Query Languages, Intro to Machine Learning",
        ],
      },
      {
        label: "2016 \u2013 2020",
        title: "High School Diploma",
        subtitle: "Burnt Hills-Ballston Lake High School",
      },
    ],
  },
  awardsSection: {
    awards: [
      {
        label: "2021",
        title: "Dean's List",
        subtitle: "University at Buffalo",
        children:
          "Recognized for academic excellence across the 2020-2021 academic year.",
      },
      {
        label: "2024",
        title: "Cum Laude",
        subtitle: "University at Buffalo",
        children:
          "Recognized for academic excellence across undegraduate academic career.",
      },
      {
        label: "2021 \u2013 2024",
        title: "8x MAC All-Academic Team",
        subtitle: "Cross Country / Indoor & Outdoor Track",
        children:
          "Selected for consistent academic performance while competing at a high level on the NCAA Division I Cross Country and Track teams.",
      },
      {
        label: "2020 - 2022",
        title: "Pride of New York Scholarship",
        subtitle: "University Scholarship",
        children:
          "Merit-based scholarship awarded for high school academic achievement.",
      },
      {
        label: "2022 - 2024",
        title: "Athletic Scholarship",
        subtitle: "University Scholarship",
        children:
          "Merit-based scholarship awarded for athletic and academic achievement.",
      },
    ],
  },
  skillsSection: {
    blocks: [
      {
        title: "Programming Languages",
        skills: [
          "Java",
          "Python",
          "Go",
          "Scala",
          "JavaScript",
          "TypeScript",
          "SQL",
        ],
      },
      {
        title: "Tools and Platforms",
        skills: [
          "React",
          "HTML",
          "CSS/SCSS",
          "Next.js",
          "Storybook",
          "Cypress",
          "Vitest",
          "GitHub",
          "GitLab",
          "Postman",
          "Jira",
          "CMS",
          "Figma",
          "YAML",
          "Cursor",
          "GitHub Copilot",
        ],
      },
    ],
  },
};
