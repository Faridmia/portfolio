export type ProjectCategory = 'All' | 'WordPress' | 'Laravel & PHP' | 'Automation & AI' | 'Other';

export interface Project {
  id: string;
  title: string;
  category: 'WordPress' | 'Laravel & PHP' | 'Automation & AI' | 'Other';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  isPublicProduct?: boolean;
  statusBadge: string;
  highlights: string[];
  accentColor: string;
  imageType: 'hotel' | 'menu' | 'currency' | 'education' | 'notification' | 'laravel' | 'pos' | 'automation';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  bullets: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  skills: {
    name: string;
    level: 'Production' | 'Proficient' | 'Experimentation';
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result?: string;
  description?: string;
  isTraining?: boolean;
}

export interface ProfileLink {
  platform: string;
  handle: string;
  url: string;
  description: string;
  badge: string;
  icon: string;
}
