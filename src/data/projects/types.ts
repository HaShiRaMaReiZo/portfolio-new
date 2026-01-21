export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  components?: {
    name: string;
    description: string;
    technologies: string[];
    screenshots?: string[];
  }[];
}

export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
];

