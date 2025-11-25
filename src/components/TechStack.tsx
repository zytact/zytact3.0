'use client';

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

// Simple SVG icons for tech stack
function TechSvgIcon({ name }: { name: string }) {
    const iconContent: Record<string, React.ReactNode> = {
        React: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                <path
                    fillRule="evenodd"
                    d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Zm0-2c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
                />
            </svg>
        ),
    };

    return (
        iconContent[name] || (
            <span className="text-lg font-bold">{name.charAt(0)}</span>
        )
    );
}

function TechIcon({ tech }: { tech: TechItem }) {
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
                        <TechSvgIcon name={tech.name} />
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
