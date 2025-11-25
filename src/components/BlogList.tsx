'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

import { blogPosts, type BlogPost } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface BlogListProps {
    showAll?: boolean;
    limit?: number;
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
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
    },
};

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <motion.article variants={itemVariants}>
            <Link
                href={`/blog/${post.slug}`}
                className="group border-border/50 bg-card/50 hover:border-foreground/10 hover:bg-card block rounded-2xl border p-6 backdrop-blur-sm transition-all hover:shadow-lg"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-emerald-500 sm:text-xl dark:group-hover:text-emerald-400">
                            {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground line-clamp-2 text-sm sm:text-base">
                            {post.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs font-normal"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Meta info */}
                        <div className="text-muted-foreground flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden shrink-0 self-center sm:block">
                        <div className="border-border/50 text-muted-foreground group-hover:border-foreground/20 group-hover:bg-accent group-hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all">
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}

export function BlogList({ showAll = false, limit = 3 }: BlogListProps) {
    const displayedPosts = showAll
        ? blogPosts
        : blogPosts.filter((p) => p.featured).slice(0, limit);

    return (
        <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex items-end justify-between"
                >
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                            {showAll ? 'All Posts' : 'Latest Writing'}
                        </h2>
                        <p className="text-muted-foreground">
                            Thoughts on code, design, and building products
                        </p>
                    </div>
                    {!showAll && (
                        <Link
                            href="/blog"
                            className="group text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors"
                        >
                            View all
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    )}
                </motion.div>

                {/* Blog Posts */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {displayedPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
