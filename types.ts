export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: string; // Using string names for Lucide icons mapping
  level?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  meta: {
    title: string;
    tagline: string;
  };
  navLinks: NavLink[];
  hero: {
    headline: string;
    subHeadline: string;
    bio: string;
    actions: {
      primary: { label: string; url: string };
      secondary: { label: string; url: string };
    };
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  footer: {
    copyright: string;
    socials: SocialLink[];
  };
}