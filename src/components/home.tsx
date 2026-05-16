import Link from 'next/link';
import type { CSSProperties } from 'react';

import {
    getCurrentExperience,
    siteConfig,
    socialLinks,
    techCategories,
    techStack,
} from '@/lib/data';
import {
    fetchGitHubContributions,
    getLongestContributionStreak,
    type GitHubContributions,
} from '@/lib/github';
import { cursorValue, Sticker } from './components';
import { ContributionGraphClient } from './shell-client';
import { DirectionBPRSection, DirectionBProjectsSection } from './work';

const categoryStyles = {
    frontend: { bg: 'var(--b-accent)', color: 'var(--b-cat-frontend-fg)' },
    backend: { bg: 'var(--b-purple)', color: 'var(--b-cat-backend-fg)' },
    database: { bg: 'var(--b-green)', color: 'var(--b-cat-database-fg)' },
    ai: { bg: 'var(--b-pink)', color: 'var(--b-cat-ai-fg)' },
    tools: { bg: 'var(--b-yellow)', color: 'var(--b-cat-tools-fg)' },
    devops: { bg: 'var(--b-red)', color: 'var(--b-cat-devops-fg)' },
} as const;

export async function DirectionBHome() {
    const contributions = await fetchGitHubContributions(
        siteConfig.githubHandle
    );
    const longestStreak = getLongestContributionStreak(contributions);

    return (
        <>
            <DirectionBHero longestStreak={longestStreak} />
            <DirectionBContributionGraph contributions={contributions} />
            <DirectionBTechStack />
            <DirectionBProjectsSection />
            <DirectionBPRSection />
        </>
    );
}

function DirectionBHero({ longestStreak }: { longestStreak: number | null }) {
    return (
        <section className="direction-b-hero">
            <div className="direction-b-hero-grid">
                <div>
                    <div className="direction-b-status">
                        Currently shipping · {siteConfig.location}
                    </div>
                    <h1>
                        Hi, I&apos;m
                        <br />
                        <em>{siteConfig.firstName}</em> —
                    </h1>
                    <h2>
                        full-stack developer
                        <br />& <mark>compulsive builder</mark>.
                    </h2>
                    <p>{siteConfig.description}</p>
                    <div className="direction-b-actions">
                        <Link
                            href="/proof-of-work"
                            className="direction-b-button primary"
                            {...cursorValue('👋')}
                        >
                            See my work →
                        </Link>
                        <Link
                            href={siteConfig.resume}
                            className="direction-b-button"
                            {...cursorValue('📄')}
                        >
                            Résumé
                        </Link>
                    </div>
                </div>
                <div className="direction-b-hero-cards">
                    <div
                        className="direction-b-note-card"
                        style={{ '--tilt': '-3deg' } as CSSProperties}
                        {...cursorValue('🗓️')}
                    >
                        <span className="direction-b-note-card-num">
                            {siteConfig.yearsOfExperience}
                        </span>
                        <span className="direction-b-note-card-label">
                            years shipping
                        </span>
                        <span className="direction-b-note-card-sub">
                            {'// since ' + siteConfig.startYear}
                        </span>
                    </div>
                    <div
                        className="direction-b-note-card"
                        style={{ '--tilt': '4deg' } as CSSProperties}
                        {...cursorValue('📍')}
                    >
                        <ul className="direction-b-note-card-list">
                            <li>
                                <span>✦</span> shipping at{' '}
                                {getCurrentExperience()?.company}
                            </li>
                            <li>
                                <span>📍</span> {siteConfig.location}
                            </li>
                            <li>
                                <span>✉️</span> open to work
                            </li>
                        </ul>
                    </div>
                    <div
                        className="direction-b-note-card"
                        style={{ '--tilt': '-1.5deg' } as CSSProperties}
                        {...cursorValue('🔥')}
                    >
                        <span className="direction-b-note-card-num">
                            {longestStreak ?? '—'}
                        </span>
                        <span className="direction-b-note-card-label">
                            longest streak
                        </span>
                        <span className="direction-b-note-card-sub">
                            {'// days in a row'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="direction-b-social-strip">
                <span>→ find me here</span>
                <div>
                    {socialLinks.map(({ emoji, label, href }) => (
                        <Link key={label} href={href} {...cursorValue(emoji)}>
                            {emoji} {label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function DirectionBContributionGraph({
    contributions,
}: {
    contributions: GitHubContributions;
}) {
    return (
        <ContributionGraphClient
            contributions={contributions}
            githubHandle={siteConfig.githubHandle}
        />
    );
}

function DirectionBTechStack() {
    return (
        <section className="direction-b-section">
            <div className="direction-b-section-heading">
                <h2>
                    The <em>toolbox</em>.
                </h2>
                <p>↪ what I reach for to make things real</p>
            </div>
            <div className="direction-b-tech-grid">
                {techCategories.map((category) => {
                    const items = techStack.filter(
                        (tech) => tech.category === category.key
                    );
                    const styles = categoryStyles[category.key];
                    return (
                        <div
                            key={category.key}
                            className="direction-b-card direction-b-tech-card"
                        >
                            <span
                                style={{
                                    background: styles.bg,
                                    color: styles.color,
                                }}
                            >
                                {category.label}
                            </span>
                            <div>
                                {items.map((tech) => (
                                    <b key={tech.name} {...cursorValue('✨')}>
                                        {tech.name}
                                    </b>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
