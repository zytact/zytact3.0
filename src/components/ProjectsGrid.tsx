'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Calendar } from 'lucide-react';

import { projects, type Project } from '@/lib/data';
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface ProjectsGridProps {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

function ProjectExpandedView({ project }: { project: Project }) {
    const description = project.fullDescription || project.description;

    // Split by bullet points and filter empty strings
    const descriptionPoints = description
        .split('•')
        .map((point) => point.trim())
        .filter((point) => point.length > 0);

    return (
        <div className="flex flex-col gap-4">
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-muted-foreground/30 text-6xl font-bold">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            {/* Year */}
            <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
            </div>

            {/* Full Description */}
            {descriptionPoints.length > 1 ? (
                <ul className="space-y-3">
                    {descriptionPoints.map((point, index) => (
                        <li
                            key={index}
                            className="bg-muted/30 border-l-primary/50 flex gap-3 rounded-r-md border-l-2 py-2 pr-3 pl-3"
                        >
                            <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                            <span className="text-foreground/80 text-sm leading-relaxed">
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-foreground/80 text-sm leading-relaxed">
                    {description}
                </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
                {project.link && (
                    <Button asChild variant="default" className="flex-1 gap-2">
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Project
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                )}
                {project.github && (
                    <Button asChild variant="outline" className="flex-1 gap-2">
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                            View Code
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}

function ProjectCard({
    project,
    onSelect,
}: {
    project: Project;
    onSelect: () => void;
}) {
    return (
        <motion.div variants={itemVariants}>
            <Card
                className="group border-border/50 bg-card/50 hover:border-foreground/10 flex h-full cursor-pointer flex-col overflow-hidden backdrop-blur-sm transition-all hover:shadow-xl"
                onClick={onSelect}
            >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <span className="text-muted-foreground/30 text-4xl font-bold">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="from-background/80 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Project title overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                            {project.title}
                        </h3>
                    </div>
                </div>

                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="sr-only">
                            {project.title}
                        </CardTitle>
                        <span className="text-muted-foreground text-xs">
                            {project.year}
                        </span>
                    </div>
                    <CardDescription className="line-clamp-2 text-sm">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs font-normal"
                            >
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 4 && (
                            <Badge
                                variant="outline"
                                className="text-xs font-normal"
                            >
                                +{project.tags.length - 4}
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="mt-auto gap-2 pt-2">
                    {project.link && (
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit
                                <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="flex-1 gap-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-3.5 w-3.5" />
                                Code
                            </Link>
                        </Button>
                    )}
                    {!project.link && !project.github && (
                        <Button variant="outline" size="sm" className="w-full">
                            More Info
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export function ProjectsGrid({
    showAll = false,
    limit = 6,
}: ProjectsGridProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const displayedProjects = showAll
        ? projects
        : projects.filter((p) => p.featured).slice(0, limit);

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
                            Proof of Work
                        </h2>
                        <p className="text-muted-foreground">
                            Projects I&apos;ve built and shipped
                        </p>
                    </div>
                    {!showAll && (
                        <Button asChild variant="ghost" className="group">
                            <Link href="/pow">
                                View all
                                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </Button>
                    )}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {displayedProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={() => setSelectedProject(project)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Expanded Project Dialog */}
            <Dialog
                open={selectedProject !== null}
                onOpenChange={(open) => !open && setSelectedProject(null)}
            >
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-xl">
                                    {selectedProject.title}
                                </DialogTitle>
                                <DialogDescription className="sr-only">
                                    Details about {selectedProject.title}
                                </DialogDescription>
                            </DialogHeader>
                            <ProjectExpandedView project={selectedProject} />
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
