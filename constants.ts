import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  meta: {
    title: "AntonDev",
    tagline: "Frontend Web Developer",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ],
  hero: {
    headline: "Anthony Alabado",
    subHeadline: "Frontend Web Developer",
    bio: "I am a dedicated web developer focusing on front-end development specializing in ReactJS and Tailwind CSS. I am well-versed in web development architecture and have a thorough understanding of how to integrate front-end interfaces with back-end systems.",
    actions: {
      primary: { label: "Download Resume", url: "#" },
      secondary: { label: "Contact Me", url: "mailto:anthony.alabado@example.com" },
    },
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Hello! I'm Anthony Alabado, a dedicated Front-End Web Developer with a strong passion for crafting exceptional digital experiences. I graduated with a Bachelor's degree in Information Technology and my interest in web development was sparked during my high school years when I was first exposed to its captivating world. Even amidst various school activities, my curiosity led me to explore online courses and embark on self-guided projects. Since then, I have continuously fueling my enthusiasm for web development, eagerly seeking new challenges and opportunities to further grow my skills.",
      "Design and code hygiene are at the core of my expertise. With a focus on aesthetics design and clean code, I believe in the importance of well-designed interfaces and robust coding practices. Throughout the development process, I employ design thinking principles to create visually appealing interfaces that prioritize user satisfaction. Simultaneously, I maintain a strong commitment to code hygiene, ensuring the codebase is organized, readable, and maintainable."
    ]
  },
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for managing products and orders, featuring dark mode and data visualization.",
      tags: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
    },
    {
      title: "Social Media Feed",
      description: "Infinite scroll social feed implementation with optimistic UI updates and image optimization.",
      tags: ["React", "Query", "Intersection Observer"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task board with drag-and-drop functionality and real-time state management.",
      tags: ["TypeScript", "Redux Toolkit", "DND"],
      link: "#",
    },
    {
      title: "Portfolio Template",
      description: "A highly performant, accessible, and customizable portfolio template for developers.",
      tags: ["Next.js", "Framer Motion", "Accessibility"],
      link: "#",
    },
  ],
  skills: [
    { name: "ReactJS", icon: "Code" },
    { name: "Tailwind CSS", icon: "Layout" },
    { name: "TypeScript", icon: "Box" },
    { name: "JavaScript (ES6+)", icon: "Code" },
    { name: "HTML5 & CSS3", icon: "Globe" },
    { name: "Git & GitHub", icon: "Server" },
    { name: "Responsive Design", icon: "Layout" },
    { name: "REST APIs", icon: "Cloud" },
  ],
  certifications: [
    {
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      link: "#"
    },
    {
      name: "Legacy Front End Certification",
      issuer: "freeCodeCamp",
      date: "2022",
      link: "#"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      link: "#"
    }
  ],
  footer: {
    copyright: "© 2024 Anthony Alabado. Built with React & Tailwind.",
    socials: [
      { platform: "GitHub", url: "https://github.com", icon: "Github" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    ],
  },
};