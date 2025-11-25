'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitMerge, GitPullRequest, XCircle } from 'lucide-react';

import { openSourcePRs, type OpenSourcePR } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

interface PRGridProps {
    showAll?: boolean;
    limit?: number;
    showHeader?: boolean;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

const statusConfig = {
    merged: {
        icon: GitMerge,
        label: 'Merged',
        className: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    },
    open: {
        icon: GitPullRequest,
        label: 'Open',
        className: 'bg-green-500/10 text-green-500 border-green-500/20',
    },
    closed: {
        icon: XCircle,
        label: 'Closed',
        className: 'bg-red-500/10 text-red-500 border-red-500/20',
    },
};

function PRCard({ pr }: { pr: OpenSourcePR }) {
    const status = statusConfig[pr.status];
    const StatusIcon = status.icon;

    return (
        <motion.div variants={itemVariants}>
            <Card className="group border-border/50 bg-card/50 hover:border-foreground/10 flex h-full flex-col overflow-hidden backdrop-blur-sm transition-all hover:shadow-xl">
                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Badge
                                variant="outline"
                                className={`${status.className} flex items-center gap-1`}
                            >
                                <StatusIcon className="h-3 w-3" />
                                {status.label}
                            </Badge>
                        </div>
                        <span className="text-muted-foreground shrink-0 text-xs">
                            {new Date(pr.date).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                    <CardTitle className="text-base leading-snug">
                        {pr.title}
                    </CardTitle>
                    <Link
                        href={pr.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                        {pr.repo}
                    </Link>
                </CardHeader>

                <CardContent className="flex-1 pb-2">
                    <CardDescription className="line-clamp-2 text-sm">
                        {pr.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="mt-auto pt-2">
                    <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full gap-1"
                    >
                        <Link
                            href={pr.prUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View PR #{pr.prNumber}
                            <ArrowUpRight className="h-3 w-3" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export function PRGrid({
    showAll = false,
    limit = 3,
    showHeader = true,
}: PRGridProps) {
    const displayedPRs = showAll
        ? openSourcePRs
        : openSourcePRs.filter((pr) => pr.featured).slice(0, limit);

    // Don't render anything if there are no PRs to show
    if (displayedPRs.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {showHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 flex items-end justify-between"
                    >
                        <div>
                            <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                                Open Source
                            </h2>
                            <p className="text-muted-foreground">
                                Contributions to open source projects
                            </p>
                        </div>
                        {!showAll && openSourcePRs.length > limit && (
                            <Button asChild variant="ghost" className="group">
                                <Link href="/pow#open-source">
                                    View all
                                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </Button>
                        )}
                    </motion.div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {displayedPRs.map((pr) => (
                        <PRCard key={pr.id} pr={pr} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
