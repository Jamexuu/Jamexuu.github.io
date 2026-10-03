export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  role: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechCategory {
  title: string;
  description: string;
  technologies: {
    name: string;
    note?: string;
  }[];
}

export interface LearningItem {
  topic: string;
  context: string;
  status: 'In Progress' | 'Active Exploration' | 'Up Next';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  institution: string;
  description: string;
  badge?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
  type: 'email' | 'github' | 'linkedin' | 'facebook';
}
