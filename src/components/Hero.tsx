'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
    ArrowRight,
    FileText,
    Github,
    LinkedinIcon,
    MailIcon,
    TwitterIcon,
} from 'lucide-react';

import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Discord icon component (not available in lucide-react)
function DiscordIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

const socialLinks = [
    { name: 'GitHub', href: siteConfig.github, icon: Github },
    { name: 'Twitter', href: siteConfig.twitter, icon: TwitterIcon },
    { name: 'LinkedIn', href: siteConfig.linkedin, icon: LinkedinIcon },
    { name: 'Discord', href: siteConfig.discord, icon: DiscordIcon },
    { name: 'Email', href: `mailto:${siteConfig.email}`, icon: MailIcon },
    { name: 'Resume', href: siteConfig.resume, icon: FileText },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background gradient blur effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute top-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    {/* Avatar */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <Avatar className="border-background ring-border/50 h-28 w-28 border-4 shadow-xl ring-1">
                            <AvatarImage
                                src={siteConfig.avatar}
                                alt={siteConfig.name}
                            />
                            <AvatarFallback className="text-2xl font-semibold">
                                {siteConfig.name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')}
                            </AvatarFallback>
                        </Avatar>
                    </motion.div>

                    {/* Name & Role */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            {siteConfig.name}
                        </h1>
                        <p className="text-muted-foreground text-lg sm:text-xl">
                            {siteConfig.role}
                        </p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground/80 mb-4 font-serif text-lg italic"
                    >
                        {siteConfig.tagline}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground mb-8 max-w-2xl text-base leading-relaxed sm:text-lg"
                    >
                        <span className="text-foreground font-semibold">
                            I build from zero.
                        </span>{' '}
                        {siteConfig.description.replace(
                            'I build from zero. ',
                            ''
                        )}
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-10 flex items-center gap-3"
                    >
                        {socialLinks.map((social) => (
                            <motion.div
                                key={social.name}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-border/50 bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button asChild size="lg" className="group">
                            <Link href="/projects">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/about">About Me</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
