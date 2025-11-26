export const siteConfig = {
    name: 'Arnab Chakraborty',
    tagline: 'Learn • Build • Ship • Repeat',
    description:
        'I turn blank slates into functional reality. My expertise spans the full spectrum of development—crafting intuitive frontends, robust backends, and intelligent AI experiences—guiding every project from the first line of code to the final launch.',
    role: 'Full-Stack Developer & Builder',
    github: 'https://github.com/zytact',
    twitter: 'https://x.com/zytact',
    linkedin: 'https://linkedin.com/in/zytact',
    email: 'that.zytact@gmail.com',
    discord: 'https://discordapp.com/users/629236782705147904',
    resume: '/resume.pdf',
    avatar: 'https://avatars.githubusercontent.com/u/50040499?v=4',
};

export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'PoW', href: '/pow' },
    { name: 'About', href: '/about' },
];

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
        image: '/projects/strokeshare.png',
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
        image: '/projects/inventrack.png',
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
        image: '/projects/exiftuner.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Piexif JS', 'Zod'],
        year: 2024,
        link: 'https://exiftuner.zytact.com',
        github: 'https://github.com/zytact/ExifTuner',
        featured: false,
    },
    {
        id: 'jiyu',
        title: 'Jiyu',
        description:
            'A simple anime list tracker for your phone using Flutter. This app uses the Jikan API (unofficial Myanimelist API) to fetch images.',
        image: '/projects/jiyu.png',
        tags: ['Flutter', 'Dart', 'Jikan API', 'Firebase'],
        year: 2020,
        github: 'https://github.com/zytact/Jiyu',
        featured: true,
    },
    {
        id: 'rustcharge',
        title: 'RustCharge',
        description:
            'A CLI application that can be run with arguments as a background process to alert you about battery events.',
        image: '/projects/rustcharge.png',
        tags: ['Rust'],
        year: 2025,
        github: 'https://github.com/zytact/RustCharge',
        featured: false,
    },
    {
        id: 'tsukuyomi',
        title: 'Tsukuyomi',
        description:
            'Tsukuyomi is a Browser Extension that lets you manually sleep tabs to reduce memory use — clean, simple, efficient.',
        image: '/projects/tsukuyomi.png',
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
        image: '/projects/finance.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
        year: 2025,
        link: 'https://finance.zytact.com',
        github: 'https://github.com/zytact/finance',
        featured: false,
    },
];

export interface TechItem {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'devops' | 'tools' | 'database';
}

export const techStack: TechItem[] = [
    { name: 'React', icon: 'react', category: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    { name: 'Clerk Auth', icon: 'clerk', category: 'frontend' },
    { name: 'Better Auth', icon: 'betterauth', category: 'frontend' },
    { name: 'Tanstack Query', icon: 'tanstackquery', category: 'frontend' },
    { name: 'Zustand', icon: 'zustand', category: 'frontend' },
    { name: 'Node.js', icon: 'nodejs', category: 'backend' },
    { name: 'Python', icon: 'python', category: 'backend' },
    { name: 'Express', icon: 'express', category: 'backend' },
    { name: 'tRPC', icon: 'trpc', category: 'backend' },
    { name: 'Convex', icon: 'convex', category: 'backend' },
    { name: 'Drizzle ORM', icon: 'drizzle', category: 'backend' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    { name: 'GitHub Actions', icon: 'github', category: 'devops' },
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'VS Code', icon: 'vscode', category: 'tools' },
    { name: 'Neo(Vim)', icon: 'neovim', category: 'tools' },
    { name: 'Vitest', icon: 'vitest', category: 'tools' },
    { name: 'Jest', icon: 'jest', category: 'tools' },
    { name: 'Linux', icon: 'linux', category: 'tools' },
];

export interface OpenSourcePR {
    id: string;
    title: string;
    description: string;
    repo: string;
    repoUrl: string;
    prUrl: string;
    prNumber: number;
    status: 'merged' | 'open' | 'closed';
    date: string;
    featured: boolean;
}

export const openSourcePRs: OpenSourcePR[] = [
    {
        id: 'picard-2025',
        title: 'PICARD-2025: Add file path to metadatabox',
        description: 'Feature Addition',
        repo: 'metabrainz/picard',
        repoUrl: 'https://github.com/metabrainz/picard',
        prUrl: 'https://github.com/metabrainz/picard/pull/2563',
        prNumber: 2563,
        status: 'merged',
        date: '2024-12-28',
        featured: true,
    },
    {
        id: 'picard-3000',
        title: 'PICARD-3000: Children\'s Music is shown as "Children\'s Music" in Picard',
        description: 'Bug Fix',
        repo: 'metabrainz/picard',
        repoUrl: 'https://github.com/metabrainz/picard',
        prUrl: 'https://github.com/metabrainz/picard/pull/2548',
        prNumber: 2548,
        status: 'merged',
        date: '2024-11-05',
        featured: true,
    },
];

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
