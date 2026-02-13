import { HomeProps } from ".";
import {
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask,
  SiMongodb,
  SiDocker,
  SiSass,
  SiVitest,
  SiStorybook,
  SiGitlab,
  SiCypress,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { TbWebhook } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaDownload, FaFileAlt } from "react-icons/fa";

export const homeData: HomeProps = {
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
        href: "/resume.pdf",
        label: "Download Resume",
        icon: <FaDownload />,
        download: "William_Marchant_Resume.pdf",
      },
      {
        href: "https://github.com/wmarchant13/Personal-Website#readme",
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
          "Build reusable React packages with TypeScript and SASS modules for a Fortune 500 company, supporting scalable frontend development. Write unit and component tests using Vitest and React Testing Library across multiple packages. Contribute to the redevelopment of a Fortune 500 company's website; collaborate on building a Payload CMS solution that streamlines content author workflows.",
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
          <SiTypescript title="TypeScript" />,
          <SiReact title="React" />,
          <SiSass title="SCSS" />,
          <SiHtml5 title="HTML" />,
          <SiVitest title="Vitest" />,
          <SiStorybook title="Storybook" />,
          <SiGitlab title="GitLab" />,
        ],
      },
      {
        label: "June 2023 – August 2023",
        title: "Technology Intern",
        subtitle: "M&T Bank",
        children:
          "Developed a web application that connects women of color in the Buffalo area with financial advisors. Leveraged TypeScript, React, HTML, and CSS to build the web app, added Cypress test coverage, and enforced quality gates through a YAML-based CI pipeline. Part of a research experiment comparing AI-generated code to human developers, kept a weekly log to track progress and differences between the two.",
        skills: [
          "TypeScript",
          "CSS",
          "YAML",
          "Cypress",
          "CI Pipeline",
          "Gitlab",
        ],
        skillIcons: [
          <SiTypescript title="TypeScript" />,
          <SiReact title="React" />,
          <SiHtml5 title="HTML" />,
          <SiCss3 title="CSS" />,
          <SiCypress title="Cypress" />,
          <SiGitlab title="GitLab" />,
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
        title: "Database Project",
        subtitle: "University Project",
        children:
          "Designed and implemented a SQL database using PostgreSQL with publicly available datasets. Developed a database schema to solve a defined problem and wrote queries to manipulate and analyze the data. Delivered and presented formal findings to demonstrate project outcomes.",
        skills: ["PostgreSQL", "SQL"],
        skillIcons: [<SiPostgresql title="PostgreSql" />],
      },
      {
        title: "UB Roomies",
        subtitle: "University Project",
        children:
          "Built a roommate-finder web app for UB students using TypeScript, JavaScript, React, HTML, and CSS. Implemented features for friending, messaging, posting, and apartment listings.",
        skills: ["TypeScript", "JavaScript", "React", "HTML", "CSS"],
        skillIcons: [
          <SiTypescript title="TypeScript" />,
          <SiJavascript title="JavaScript" />,
          <SiReact title="React" />,
          <SiHtml5 title="HTML5" />,
          <SiCss3 title="CSS3" />,
        ],
      },
      {
        title: "Group Web App Project",
        subtitle: "University Project",
        children:
          "Developed a full-stack web application with secure login, live chat, media sharing, and full user customization. Managed team workflow via GitHub and leveraged Python Flask, HTML, CSS, WebSockets, MongoDB Atlas, and Docker.",
        skills: [
          "Python",
          "Flask",
          "MongoDB",
          "Github",
          "HTML",
          "CSS",
          "WebSockets",
          "Docker",
        ],
        skillIcons: [
          <SiPython title="Python" />,
          <SiFlask title="Flask" />,
          <SiMongodb title="MongoDB" />,
          <DiGithubBadge title="GitHub" />,
          <SiHtml5 title="HTML5" />,
          <SiCss3 title="CSS3" />,
          <TbWebhook title="WebSockets" />,
          <SiDocker title="Docker" />,
        ],
      },
    ],
  },
  educationSection: {
    entries: [
      {
        label: "2020 \u2013 2024",
        title: "BS, Computer Science",
        subtitle: "University at Buffalo",
        items: [
          "GPA: 3.4",
          "Scholarships: Pride of New York Scholarship Recipient, Athletic Scholarship for Cross Country/Track",
          "Member of the NCAA D1 Cross Country, Indoor, and Outdoor Track teams",
          "Relevant Courses: Systems Programming, Applied Human Computer-Interaction and Interface Design, Distributed Systems, Algorithms and Complexity, Data Models and Query Languages, Intro to Machine Learning",
          "Dean's List 2020, MAC All-Academic Team 2021-23 Cross Country, 2022-24 Indoor Track, and 2023-24 Outdoor Track",
        ],
      },
    ],
  },
  skillsSection: {
    blocks: [
      {
        title: "Programming Languages",
        skills: [
          "Java",
          "JavaScript",
          "Python",
          "Scala",
          "TypeScript",
          "SQL",
          "Go",
        ],
      },
      {
        title: "Computer Skills",
        skills: [
          "Bash Shell Script",
          "Linux",
          "Docker",
          "Github",
          "GitLab",
          "React",
          "Cypress",
          "Vitest",
          "CSS",
          "SCSS",
          "Postman",
          "HTML",
          "Jira",
          "Figma",
          "Asana",
          "CMS",
          "Storybook",
          "YAML",
        ],
      },
    ],
  },
};
