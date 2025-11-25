// Site configuration
export const siteConfig = {
    name: 'Arnab Chakraborty',
    tagline: 'Learn • Build • Ship • Repeat',
    description:
        "I build from zero. Whether it's frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle.",
    role: 'Full-Stack Developer & Builder',
    github: 'https://github.com/zytact',
    twitter: 'https://twitter.com/zytact',
    linkedin: 'https://linkedin.com/in/zytact',
    email: 'that.zytact@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/50040499?v=4',
};

// Navigation links
export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
];

// Projects data
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    year: number;
    link?: string;
    github?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'strokeshare',
        title: 'Strokeshare',
        description:
            'A Whiteboarding app made with Next.js, Tailwind CSS, Shadcn UI, React Konva and Vitest.',
        image: '/projects/strokeshare.jpg',
        tags: [
            'Next.js',
            'TypeScript',
            'Tailwind',
            'Shadcn UI',
            'React Konva',
            'Vitest',
        ],
        year: 2025,
        link: 'https://strokeshare.zytact.com',
        github: 'https://github.com/zytact/strokeshare',
        featured: true,
    },
    {
        id: 'inventrack',
        title: 'Inventrack',
        description:
            'An inventory management system with the power of AI, made with Next.js, Tailwind CSS, Shadcn UI, TanStack Query, Clerk, Drizzle ORM, PostgreSQL and Gemini.',
        image: '/projects/inventrack.jpg',
        tags: [
            'Next.js',
            'TypeScript',
            'Tailwind',
            'Shadcn UI',
            'TanStack Query',
            'Clerk',
            'Drizzle ORM',
            'PostgreSQL',
            'AI',
        ],
        year: 2025,
        link: 'https://inventrack.zytact.com',
        github: 'https://github.com/zytact/inventrack',
        featured: true,
    },
    {
        id: 'exiftuner',
        title: 'Exif Tuner',
        description:
            'A Web App to modify Exif Data in Images using Next.js and Piexif JS.',
        image: '/projects/ExifTuner.jpg',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Piexif JS', 'Zod'],
        year: 2024,
        github: 'https://github.com/zytact/ExifTuner',
        featured: false,
    },
    {
        id: 'jiyu',
        title: 'Jiyu',
        description:
            'A simple anime list tracker for your phone using Flutter. This app uses the Jikan API (unofficial Myanimelist API) to fetch images.',
        image: '/projects/jiyu.jpg',
        tags: ['Flutter', 'Dart', 'Jikan API', 'Firebase'],
        year: 2020,
        link: 'https://github.com/zytact/Jiyu',
        featured: true,
    },
    {
        id: 'rustcharge',
        title: 'RustCharge',
        description:
            'A CLI application that can be run with arguments as a background process to alert you about battery events.',
        image: '/projects/rustcharge.jpg',
        tags: ['Rust'],
        year: 2025,
        link: 'https://github.com/zytact/RustCharge',
        featured: false,
    },
    {
        id: 'tsukuyomi',
        title: 'Tsukuyomi',
        description:
            'Tsukuyomi is a Browser Extension that lets you manually sleep tabs to reduce memory use — clean, simple, efficient.',
        image: '/projects/tsukuyomi.jpg',
        tags: ['Typescript', 'React'],
        year: 2025,
        github: 'https://github.com/zytact/tsukuyomi',
        featured: false,
    },
    {
        id: 'finance-calculator',
        title: 'Finance Calculator',
        description:
            'A comprehensive web application for financial calculations and investment planning. Calculate returns for various investment scenarios including SIP, lumpsum investments, CAGR, and inflation adjustments.',
        image: '/projects/finance-calculator.jpg',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        year: 2025,
        link: 'https://finance.zytact.com',
        github: 'https://github.com/zytact/finance',
        featured: false,
    },
    {
        id: 'sorting-visualizer',
        title: 'Sorting Visualizer',
        description:
            'A web application that visualizes various sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort using React and TypeScript.',
        image: '/projects/sorting-visualizer.jpg',
        tags: ['Python', 'Matplotlib'],
        year: 2021,
        github: 'https://github.com/zytact/Sorting-Visualizer',
        featured: false,
    },
    {
        id: 'informer-python',
        title: 'Informer Python',
        description: 'Whatsapp online tracker written in Python.',
        image: '/projects/informer-python.jpg',
        tags: ['Python', 'Selenium'],
        year: 2020,
        github: 'https://github.com/zytact/Informer-python',
        featured: false,
    },
];

// Tech stack data
export interface TechItem {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'devops' | 'tools' | 'database';
}

export const techStack: TechItem[] = [
    // Frontend
    { name: 'React', icon: 'react', category: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    { name: 'Clerk Auth', icon: 'clerk', category: 'frontend' },
    { name: 'Better Auth', icon: 'betterauth', category: 'frontend' },
    { name: 'Tanstack Query', icon: 'tanstackquery', category: 'frontend' },
    { name: 'Zustand', icon: 'zustand', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: 'nodejs', category: 'backend' },
    { name: 'Python', icon: 'python', category: 'backend' },
    { name: 'Express', icon: 'express', category: 'backend' },
    { name: 'tRPC', icon: 'trpc', category: 'backend' },
    { name: 'Convex', icon: 'convex', category: 'backend' },
    { name: 'Drizzle ORM', icon: 'drizzle', category: 'backend' },

    // Database
    { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },

    // DevOps
    { name: 'Vercel', icon: 'vercel', category: 'devops' },
    { name: 'GitHub Actions', icon: 'github', category: 'devops' },

    // Tools
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'VS Code', icon: 'vscode', category: 'tools' },
    { name: 'Neo(Vim)', icon: 'neovim', category: 'tools' },
    { name: 'Vitest', icon: 'vitest', category: 'tools' },
    { name: 'Jest', icon: 'jest', category: 'tools' },
    { name: 'Linux', icon: 'linux', category: 'tools' },
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
        slug: 'building-modern-web-apps',
        title: 'Building Modern Web Applications with Next.js 15',
        description:
            'A comprehensive guide to building performant and scalable web applications using the latest features of Next.js.',
        date: '2024-11-20',
        readTime: '8 min read',
        tags: ['Next.js', 'React', 'Web Development'],
        featured: true,
    },
    {
        slug: 'typescript-best-practices',
        title: 'TypeScript Best Practices in 2024',
        description:
            'Learn the patterns and practices that make TypeScript codebases maintainable and type-safe.',
        date: '2024-11-15',
        readTime: '6 min read',
        tags: ['TypeScript', 'JavaScript', 'Best Practices'],
        featured: true,
    },
    {
        slug: 'design-systems-at-scale',
        title: 'Building Design Systems at Scale',
        description:
            'How to create and maintain a design system that grows with your organization.',
        date: '2024-11-10',
        readTime: '10 min read',
        tags: ['Design Systems', 'React', 'UI/UX'],
    },
    {
        slug: 'ai-in-development',
        title: 'AI-Assisted Development: A Practical Guide',
        description:
            'Exploring how AI tools can enhance developer productivity without replacing human creativity.',
        date: '2024-11-05',
        readTime: '7 min read',
        tags: ['AI', 'Developer Tools', 'Productivity'],
    },
    {
        slug: 'open-source-journey',
        title: 'My Open Source Journey',
        description:
            'Reflections on contributing to open source and building in public.',
        date: '2024-10-28',
        readTime: '5 min read',
        tags: ['Open Source', 'Community', 'Career'],
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

    const currentDate = new Date(startDate);

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
                    date: currentDate.toISOString().split('T')[0],
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
            total +
            week.days.reduce((weekTotal, day) => weekTotal + day.count, 0),
        0
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
        title: 'Research Assistant',
        company: 'National Institute of Technology',
        location: 'Silchar',
        period: 'June - July 2025',
        description:
            'Worked under Dr. Ram Kumar Karsh to develop a real-time Indian Sign Language recognition system using a hybrid 2D Convolutional Neural Network + LSTM architecture trained on a custom video dataset.',
        technologies: [
            'Python',
            'TensorFlow',
            'Keras',
            'OpenCV',
            'MediaPipe',
            'Seaborn',
        ],
    },
];
