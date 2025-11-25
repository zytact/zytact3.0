// Site configuration
export const siteConfig = {
  name: "Arnab Chakraborty",
  tagline: "Learn • Build • Ship • Repeat",
  description:
    "I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle.",
  role: "Full-Stack Developer & Builder",
  github: "https://github.com/zytact",
  twitter: "https://twitter.com/zytact",
  linkedin: "https://linkedin.com/in/zytact",
  email: "that.zytact@gmail.com",
  avatar: "/avatar.jpg", // Add your avatar to public folder
};

// Navigation links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

// Projects data
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Alpha",
    description:
      "A modern web application built with Next.js and TypeScript for seamless user experiences.",
    longDescription:
      "Full-featured SaaS platform with authentication, payments, and real-time collaboration features.",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://project-alpha.com",
    github: "https://github.com/yourusername/project-alpha",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI Assistant",
    description:
      "An AI-powered productivity tool that helps developers write better code faster.",
    longDescription:
      "Leverages GPT-4 and custom fine-tuned models to provide intelligent code suggestions and documentation.",
    image: "/projects/project-2.jpg",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    link: "https://ai-assistant.dev",
    github: "https://github.com/yourusername/ai-assistant",
    featured: true,
  },
  {
    id: "project-3",
    title: "Design System",
    description:
      "A comprehensive component library with 50+ accessible React components.",
    image: "/projects/project-3.jpg",
    tags: ["React", "Storybook", "Radix UI", "CSS"],
    github: "https://github.com/yourusername/design-system",
    featured: true,
  },
  {
    id: "project-4",
    title: "Mobile App",
    description:
      "Cross-platform mobile application for task management and team collaboration.",
    image: "/projects/project-4.jpg",
    tags: ["React Native", "Expo", "Firebase"],
    link: "https://apps.apple.com/app",
    featured: false,
  },
  {
    id: "project-5",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with beautiful visualizations and insights.",
    image: "/projects/project-5.jpg",
    tags: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    featured: false,
  },
  {
    id: "project-6",
    title: "CLI Tool",
    description:
      "Developer productivity CLI for scaffolding and automating repetitive tasks.",
    image: "/projects/project-6.jpg",
    tags: ["Go", "Cobra", "CLI"],
    github: "https://github.com/yourusername/cli-tool",
    featured: false,
  },
];

// Tech stack data
export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "devops" | "tools" | "database";
}

export const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "Vue.js", icon: "vue", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Python", icon: "python", category: "backend" },
  { name: "Go", icon: "go", category: "backend" },
  { name: "Rust", icon: "rust", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "Redis", icon: "redis", category: "database" },

  // DevOps
  { name: "Docker", icon: "docker", category: "devops" },
  { name: "AWS", icon: "aws", category: "devops" },
  { name: "Vercel", icon: "vercel", category: "devops" },
  { name: "GitHub Actions", icon: "github", category: "devops" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
];

// Blog posts data
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js 15",
    description:
      "A comprehensive guide to building performant and scalable web applications using the latest features of Next.js.",
    date: "2024-11-20",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    featured: true,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices in 2024",
    description:
      "Learn the patterns and practices that make TypeScript codebases maintainable and type-safe.",
    date: "2024-11-15",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    featured: true,
  },
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems at Scale",
    description:
      "How to create and maintain a design system that grows with your organization.",
    date: "2024-11-10",
    readTime: "10 min read",
    tags: ["Design Systems", "React", "UI/UX"],
  },
  {
    slug: "ai-in-development",
    title: "AI-Assisted Development: A Practical Guide",
    description:
      "Exploring how AI tools can enhance developer productivity without replacing human creativity.",
    date: "2024-11-05",
    readTime: "7 min read",
    tags: ["AI", "Developer Tools", "Productivity"],
  },
  {
    slug: "open-source-journey",
    title: "My Open Source Journey",
    description:
      "Reflections on contributing to open source and building in public.",
    date: "2024-10-28",
    readTime: "5 min read",
    tags: ["Open Source", "Community", "Career"],
  },
];

// Contributions data (mock data for the graph)
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

// Generate mock contribution data for the last year
export function generateMockContributions(): ContributionWeek[] {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  // Start from the beginning of the week one year ago
  const startDate = new Date(oneYearAgo);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  let currentDate = new Date(startDate);

  while (currentDate <= today) {
    const week: ContributionDay[] = [];

    for (let i = 0; i < 7; i++) {
      if (currentDate <= today) {
        // Generate random contribution count with some patterns
        const dayOfWeek = currentDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        let count: number;
        const rand = Math.random();

        if (isWeekend) {
          // Lower activity on weekends
          count =
            rand < 0.4
              ? 0
              : rand < 0.7
                ? Math.floor(Math.random() * 3) + 1
                : Math.floor(Math.random() * 6) + 3;
        } else {
          // Higher activity on weekdays
          count =
            rand < 0.15
              ? 0
              : rand < 0.4
                ? Math.floor(Math.random() * 4) + 1
                : rand < 0.7
                  ? Math.floor(Math.random() * 8) + 4
                  : Math.floor(Math.random() * 12) + 8;
        }

        const level =
          count === 0
            ? 0
            : count <= 3
              ? 1
              : count <= 6
                ? 2
                : count <= 10
                  ? 3
                  : 4;

        week.push({
          date: currentDate.toISOString().split("T")[0],
          count,
          level: level as 0 | 1 | 2 | 3 | 4,
        });
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push({ days: week });
  }

  return weeks;
}

// Get total contributions
export function getTotalContributions(weeks: ContributionWeek[]): number {
  return weeks.reduce(
    (total, week) =>
      total + week.days.reduce((weekTotal, day) => weekTotal + day.count, 0),
    0,
  );
}

// Experience/Timeline data
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading frontend architecture and building scalable web applications for millions of users.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    title: "Full-Stack Developer",
    company: "Startup Inc",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description:
      "Built product features from scratch and improved application performance by 40%.",
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2019 - 2021",
    description:
      "Developed web applications for clients across various industries.",
    technologies: ["React", "Vue.js", "Node.js", "MongoDB"],
  },
];
