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
    { name: 'Proof of Work', href: '/proof-of-work' },
    { name: 'About', href: '/about' },
];

export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
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
            'A responsive, high-performance web drawing app (Next.js + React + Konva) with infinite canvas, shape/text/image tools, undo/redo, and export to PNG/SVG/JSON (.str).',
        fullDescription: `• Strokeshare is a polished, production-oriented web drawing application that demonstrates building complex interactive experiences in the browser. It uses Next.js and React with TypeScript to deliver a responsive UI and Konva/react-konva for a high-performance, GPU-accelerated canvas. The app supports freehand drawing, shapes (rectangles/circles/arrows), text editing, image import, pan/zoom, and a transformer-based selection UX for moving/resizing objects.
• Core product capabilities include a robust undo/redo history persisted to localStorage, full canvas import/export (PNG, SVG, and a structured project format .str), and an export pipeline that supports optional background rendering and embedded images. The app uses the File System Access API with fallbacks to deliver a seamless save/load experience across browsers.
• Engineering highlights: a centralized Zustand store for deterministic state and history management; careful Konva integration for touch and mouse input; a custom eraser that computes proximity to lines/shapes for accurate erasure; performant serialization to SVG with image defs; and modular UI built from Radix + Tailwind primitives for accessibility and composability. The design balances feature depth with a concise code structure so the app is maintainable and extensible.`,
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
            'An AI-powered, full‑stack inventory management dashboard built with Next.js and TypeScript that gives small retailers real‑time stock visibility, AI demand forecasts, automated expiry & restock handling, and dynamic pricing recommendations.',
        fullDescription: `• A production‑ready inventory web app tailored for small stores: real‑time inventory, purchases, sales, expired‑stock tracking, and category management to keep daily operations accurate and auditable.  
• AI‑first features: integrated LLM pipeline (server route to Gemini) that powers AI stock‑level recommendations, product discontinuation suggestions, and AI‑driven dynamic pricing to optimize margins and reduce waste.  
• Data model & multi‑tenant safety: Postgres schema implemented with drizzle-orm (users, items, sold_items, purchases, expired_items, sales_reports) to isolate per‑user data and enable safe, server‑side operations.  
• Full stack serverless architecture: Next.js App Router route handlers for backend APIs, ready for serverless deployment (designed for Neon Postgres + Vercel).  
• UX & dashboards: polished responsive UI built with TailwindCSS + Shadcn UI components, interactive tables and charts (Recharts), and a focused dashboard with AI tools (stock levels, recommendations, dynamic pricing, expiry tracking).  
• Client data fetching & state: efficient client/server sync using @tanstack/react-query for caching, loading states, and optimistic updates.  
• Authentication & security: sign‑in and session management wired for production using Clerk (pluggable auth provider).  
• Reusable component library: modular UI components (tables, forms, sidebar, navbar, charts) and domain hooks for maintainability and rapid iteration.  
• Observability & developer ergonomics: TypeScript across the stack, linting, format scripts, and DB tooling (drizzle-kit) to keep schema, migrations, and local dev consistent. `,
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
            'A privacy-first web app to view, batch-edit, and download EXIF metadata on JPEG images directly in the browser, built with Next.js, TypeScript, Tailwind CSS, and piexifjs.',
        fullDescription: `• Solves the common pain of incorrect or missing EXIF metadata by letting users inspect and update date/time, GPS coordinates, and camera make/model without uploading images to a server.  
 • Key features: client-side EXIF read/write, batch processing, image preview carousel, form validation, and one-click downloads that preserve image quality.  
 • Frontend-focused implementation: uses FileReader + data-URLs for image handling, piexifjs for EXIF manipulation (lib/modifyExif.ts), and a small utility to trigger downloads (lib/downloadImage.ts).  
 • Robust UX: form validation via zod + react-hook-form, organized tabs for Date & Time / GPS / Camera, and a responsive component-based UI built with Tailwind CSS and accessible primitives.  
 • Privacy-first architecture: all processing happens entirely in the user’s browser (no server-side uploads or storage), making it safe for sensitive photos and reducing operational complexity. `,
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
            'A polished Flutter anime-tracker (Android-first) that syncs a locally stored watchlist with Firebase, supports Google sign-in, and presents a fast, dark-themed grid UI for tracking Watching / Completed / Dropped series.',
        fullDescription: `• Problem solved: a lightweight, offline-capable mobile app for anime fans to track progress, quickly update episodes watched, and preserve their library with cloud backups.  
• Core features: add anime entries, increment watched episodes, move items to Completed or Dropped, delete entries, view total watch time, and restore/save backups to Firebase Storage.  
• Platform & languages: built with Flutter and Dart (single codebase targeting Android; iOS build instructions included).  
• Authentication: end-to-end Google Sign-In using Firebase Auth with a StreamBuilder-based auth flow for seamless sign-in/sign-out and conditional routing.  
• Local persistence: reliable offline-first storage using sqflite (SQLite) with clear DB models and CRUD helpers for Watching / Completed / Dropped lists.  
• Cloud sync & backup: integration with Firebase Storage to upload/download user backups so data survives device changes.  
• UI & UX: dark theme, responsive staggered grid layout (flutter_staggered_grid_view), Hero transitions, pull-to-refresh, and thoughtful affordances (increment button, long-press actions, user account drawer).  
• Asynchronous & state patterns: uses FutureBuilder, StreamBuilder, async/await and Futures for predictable async flows and UI state updates. `,
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
            'Rustcharge is a compact, cross-platform battery monitor written in Rust that sends desktop notifications and plays custom sounds when your battery crosses configurable thresholds.',
        fullDescription: `• Purpose: Lightweight CLI tool that monitors system battery and notifies you when charge goes above or below user-defined percentages, helping prevent overcharging or unexpected shutdowns.
 • Key features: real-time monitoring, configurable thresholds (--above, --below), adjustable poll interval (--sec), optional disabling of high/low alerts (--no-above, --no-below), custom notification sounds (--sound-path), and urgency control on Linux (--urgency).
 • Implementation: small, modular Rust codebase with src/main.rs orchestrating a simple polling loop and two focused utilities src/utils/battery_status.rs (battery reading via the battery crate) and src/utils/sound.rs (audio playback via rodio).
 • Tech stack: idiomatic Rust using battery, notify-rust, rodio, and clap; build with cargo build --release.
 • Design tradeoffs: prioritizes simplicity and low resource usage — a periodic loop checks battery state and triggers notifications, avoiding heavy background services while remaining easy to extend or daemonize.`,
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
            'Tsukuyomi — a lightweight, privacy-first browser extension (React + TypeScript) that lets users manually suspend tabs to free memory and speed up their browser.',
        fullDescription: `• Solves browser bloat by letting users suspend inactive tabs on demand, keeping tabs available while drastically reducing their memory footprint.  
• Clean, focused UI that lists open tabs with favicons and titles, supports single-click suspension and Shift+click range suspension for bulk cleanup.  
• Cross‑browser compatibility: handles differences between Chrome and Firefox extension APIs so the same codebase works across Chromium browsers and Firefox.  
• Privacy-first design: works entirely offline with no telemetry or tracking — ideal for users who care about control and data safety.  
• Built with modern web tooling for fast iteration and small bundles: React 19, TypeScript, Vite, Bun-friendly scripts, Tailwind for utility-first styling.`,
        image: '/projects/tsukuyomi.png',
        tags: ['Typescript', 'React'],
        year: 2025,
        github: 'https://github.com/zytact/tsukuyomi',
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
    technologies?: string[];
}

export const experiences: Experience[] = [
    {
        title: 'Web Development CoLead',
        company: 'Google Developer Group on Campus - Guahati University',
        location: 'Guwahati',
        period: 'September 2025 - Present',
        description:
            'Leading the web development team to create and maintain web applications for various campus events and initiatives.',
    },
    {
        title: 'Research Intern',
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
