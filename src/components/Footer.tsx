'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, LinkedinIcon, Mail, TwitterIcon } from 'lucide-react';

import { siteConfig } from '@/lib/data';

const socialLinks = [
    {
        name: 'GitHub',
        href: siteConfig.github,
        icon: Github,
    },
    {
        name: 'Twitter',
        href: siteConfig.twitter,
        icon: TwitterIcon,
    },
    {
        name: 'LinkedIn',
        href: siteConfig.linkedin,
        icon: LinkedinIcon,
    },
    {
        name: 'Email',
        href: `mailto:${siteConfig.email}`,
        icon: Mail,
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-border/40 bg-background/50 border-t">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
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
                    </div>

                    {/* Tagline */}
                    <p className="text-muted-foreground text-center font-serif text-sm italic">
                        {siteConfig.tagline}
                    </p>

                    {/* Copyright */}
                    <div className="text-muted-foreground flex flex-col items-center gap-2 text-center text-xs">
                        <p>
                            &copy; {currentYear} {siteConfig.name}. All rights
                            reserved.
                        </p>
                        <p>
                            Built with{' '}
                            <Link
                                href="https://nextjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-4 hover:underline"
                            >
                                Next.js
                            </Link>
                            ,{' '}
                            <Link
                                href="https://tailwindcss.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-4 hover:underline"
                            >
                                Tailwind CSS
                            </Link>
                            , and{' '}
                            <Link
                                href="https://ui.shadcn.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-4 hover:underline"
                            >
                                shadcn/ui
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
