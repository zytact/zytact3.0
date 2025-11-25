'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { techStack, type TechItem } from '@/lib/data';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
    },
};

// Map tech icon names to actual SVG files in /public
const iconToSvgMap: Record<string, string> = {
    react: '/react_dark.svg',
    nextjs: '/nextjs_icon_dark.svg',
    typescript: '/typescript.svg',
    tailwind: '/tailwindcss.svg',
    clerk: '/clerk-icon-dark.svg',
    betterauth: '/better-auth_dark.svg',
    tanstackquery: '/tanstackquery.svg',
    nodejs: '/nodejs.svg',
    python: '/python.svg',
    express: '/expressjs_dark.svg',
    trpc: '/trpc.svg',
    convex: '/convex.svg',
    drizzle: '/drizzle-orm_dark.svg',
    postgresql: '/postgresql.svg',
    mongodb: '/mongodb-icon-dark.svg',
    git: '/git.svg',
    vscode: '/vscode.svg',
    neovim: '/neovim.svg',
    vitest: '/vitest.svg',
    jest: '/jest.svg',
    linux: '/linux.svg',
    zod: '/zod.svg',
};

function TechIcon({ tech }: { tech: TechItem }) {
    const svgPath = iconToSvgMap[tech.icon];

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center gap-2"
                >
                    <div className="border-border/50 bg-card/50 text-muted-foreground group-hover:border-foreground/20 group-hover:text-foreground flex h-14 w-14 items-center justify-center rounded-xl border transition-all group-hover:shadow-lg">
                        {svgPath ? (
                            <Image
                                src={svgPath}
                                alt={tech.name}
                                width={24}
                                height={24}
                                className="h-6 w-6"
                            />
                        ) : (
                            <span className="text-lg font-bold">
                                {tech.name.charAt(0)}
                            </span>
                        )}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground text-xs transition-colors">
                        {tech.name}
                    </span>
                </motion.div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <p className="font-medium">{tech.name}</p>
                <p className="text-muted-foreground text-xs capitalize">
                    {tech.category}
                </p>
            </TooltipContent>
        </Tooltip>
    );
}

export function TechStack() {
    return (
        <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-muted-foreground mb-2 text-xl font-medium">
                        Stack I use
                    </h2>
                    <p className="text-foreground text-base">
                        Technologies I work with to build products that solve
                        real problems
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-6"
                >
                    {techStack.map((tech) => (
                        <TechIcon key={tech.name} tech={tech} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
