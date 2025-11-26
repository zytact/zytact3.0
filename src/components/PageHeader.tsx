'use client';

import { motion } from 'motion/react';

interface PageHeaderProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
    return (
        <section className="border-border/40 from-muted/30 to-background relative overflow-hidden border-b bg-gradient-to-b">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                >
                    <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-muted-foreground text-lg">
                            {description}
                        </p>
                    )}
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
