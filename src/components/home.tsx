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
    type GitHubContributions,
} from '@/lib/github';
import { cursorValue, Sticker } from './components';
import { ContributionGraphClient } from './shell-client';
import { DirectionBPRSection, DirectionBProjectsSection } from './work';

const categoryStyles = {
    frontend: { bg: '#1d63d4', color: '#fff' },
    backend: { bg: '#a855f7', color: '#fff' },
    database: { bg: '#22c55e', color: '#141820' },
    ai: { bg: '#ec4899', color: '#fff' },
    tools: { bg: '#fbbf24', color: '#141820' },
    devops: { bg: '#ef4444', color: '#fff' },
} as const;

export async function DirectionBHome() {
    const contributions = await fetchGitHubContributions(
        siteConfig.githubHandle
    );

    return (
        <>
            <DirectionBHero />
            <DirectionBContributionGraph contributions={contributions} />
            <DirectionBTechStack />
            <DirectionBProjectsSection />
            <DirectionBPRSection />
        </>
    );
}

function DirectionBHero() {
    return (
        <section className="direction-b-hero">
            <Sticker x="85%" y={50} rotate={12} bg="var(--b-pink)">
                since 2016
            </Sticker>
            <Sticker x="88%" y={420} rotate={8} bg="var(--b-purple)">
                AI · full-stack
            </Sticker>

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
                        {...cursorValue('🛠️')}
                    >
                        <span className="direction-b-note-card-label">
                            tools today
                        </span>
                        <div className="direction-b-note-card-chips">
                            {techStack.slice(0, 5).map((t) => (
                                <span key={t.name}>{t.name}</span>
                            ))}
                        </div>
                    </div>
                    <Sticker x="68%" y={-18} rotate={12} bg="var(--b-yellow)">
                        builder ✦
                    </Sticker>
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
