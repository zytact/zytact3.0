'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Calendar } from 'lucide-react';

import { siteConfig, experiences, techStack } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/PageHeader';

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

export function AboutContent() {
    return (
        <>
            <PageHeader
                title="About Me"
                description="A little bit about who I am, what I do, and what drives me."
            />

            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-12 lg:grid-cols-3"
                    >
                        {/* Sidebar */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-1"
                        >
                            <div className="sticky top-24 space-y-6">
                                {/* Avatar */}
                                <Avatar className="border-background ring-border/50 h-40 w-40 border-4 shadow-xl ring-1">
                                    <AvatarImage
                                        src={siteConfig.avatar}
                                        alt={siteConfig.name}
                                    />
                                    <AvatarFallback className="text-4xl font-semibold">
                                        {siteConfig.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </AvatarFallback>
                                </Avatar>

                                {/* Quick Info */}
                                <div className="space-y-3">
                                    <h2 className="text-xl font-semibold">
                                        {siteConfig.name}
                                    </h2>
                                    <p className="text-muted-foreground">
                                        {siteConfig.role}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col gap-2">
                                    <Button asChild className="w-full">
                                        <Link
                                            href={`mailto:${siteConfig.email}`}
                                        >
                                            Get in Touch
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <a
                                            href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download Resume
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <div className="space-y-12 lg:col-span-2">
                            {/* Bio */}
                            <motion.div variants={itemVariants}>
                                <h3 className="mb-4 text-lg font-semibold">
                                    Background
                                </h3>
                                <div className="text-muted-foreground space-y-4">
                                    <p>
                                        I&apos;m a full-stack developer with a
                                        passion for building products that make
                                        a difference. I started coding when I
                                        was 15, and ever since, I&apos;ve been
                                        obsessed with creating things on the
                                        internet.
                                    </p>
                                    <p>
                                        My journey has taken me through
                                        different eras, starting from 2016 when
                                        React had just begun. Along the way,
                                        I&apos;ve learned that the best products
                                        come from a deep understanding of users
                                        and a relentless focus on quality.
                                    </p>
                                    <p>
                                        When I&apos;m not coding, you&apos;ll
                                        find me contributing to open source,
                                        writing about tech, or exploring new
                                        technologies. I believe in building in
                                        public and sharing knowledge with the
                                        community.
                                    </p>
                                </div>
                            </motion.div>

                            <Separator />

                            {/* Experience */}
                            <motion.div variants={itemVariants}>
                                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                                    <Briefcase className="h-5 w-5" />
                                    Experience
                                </h3>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div
                                            key={index}
                                            className="border-border relative border-l-2 pl-6"
                                        >
                                            {/* Timeline dot */}
                                            <div className="border-background absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 bg-blue-500" />

                                            <div className="space-y-2">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <h4 className="font-semibold">
                                                        {exp.title}
                                                    </h4>
                                                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {exp.period}
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground text-sm">
                                                    {exp.company} •{' '}
                                                    {exp.location}
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    {exp.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.technologies.map(
                                                        (tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="secondary"
                                                                className="text-xs font-normal"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <Separator />

                            {/* Skills */}
                            <motion.div variants={itemVariants}>
                                <h3 className="mb-6 text-lg font-semibold">
                                    Skills & Technologies
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {[
                                        'frontend',
                                        'backend',
                                        'database',
                                        'devops',
                                        'tools',
                                    ].map((category) => {
                                        const items = techStack.filter(
                                            (t) => t.category === category
                                        );
                                        if (items.length === 0) return null;

                                        return (
                                            <div key={category}>
                                                <h4 className="text-muted-foreground mb-3 text-sm font-medium capitalize">
                                                    {category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {items.map((tech) => (
                                                        <Badge
                                                            key={tech.name}
                                                            variant="outline"
                                                            className="font-normal"
                                                        >
                                                            {tech.name}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            <Separator />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
