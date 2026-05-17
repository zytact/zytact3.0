import Link from 'next/link';
import type { CSSProperties } from 'react';

import {
    experiences,
    getCurrentExperience,
    siteConfig,
    socialLinks,
    techStack,
} from '@/lib/data';
import { cursorValue, Sticker } from './components';

export function DirectionBAboutPage() {
    const currentExperience = getCurrentExperience();
    return (
        <>
            <section className="direction-b-page-hero">
                <Sticker x="80%" y={40} rotate={6} bg="var(--b-yellow)">
                    hello, hi! ✿
                </Sticker>
                <h1>
                    About <em>me</em>.
                </h1>
                <p>
                    A little bit about who I am, what I do, and what drives me.
                </p>
            </section>
            <div className="direction-b-about-actions">
                <Link
                    href={`mailto:${siteConfig.email}`}
                    className="direction-b-button primary"
                    {...cursorValue('✉️')}
                >
                    Get in touch →
                </Link>
                <Link
                    href={siteConfig.resume}
                    className="direction-b-button"
                    {...cursorValue('📄')}
                >
                    Download résumé
                </Link>
            </div>
            <section className="direction-b-about">
                <aside className="direction-b-about-sidebar">
                    <div
                        className="direction-b-note-card"
                        style={{ '--tilt': '-2deg' } as CSSProperties}
                        {...cursorValue('📍')}
                    >
                        <span className="direction-b-note-card-label">
                            based in
                        </span>
                        <span className="direction-b-note-card-place">
                            ✦ {siteConfig.location}
                        </span>
                    </div>
                    {currentExperience && (
                        <div
                            className="direction-b-note-card"
                            style={{ '--tilt': '2.5deg' } as CSSProperties}
                            {...cursorValue('⚒️')}
                        >
                            <span className="direction-b-note-card-label">
                                currently
                            </span>
                            <span className="direction-b-note-card-place">
                                {currentExperience.title}
                            </span>
                            <span className="direction-b-note-card-sub">
                                @ {currentExperience.company}
                            </span>
                        </div>
                    )}
                    <div
                        className="direction-b-note-card"
                        style={{ '--tilt': '-1deg' } as CSSProperties}
                        {...cursorValue('🔗')}
                    >
                        <span className="direction-b-note-card-label">
                            elsewhere
                        </span>
                        <ul className="direction-b-note-card-list">
                            {socialLinks.map(({ emoji, label, href }) => (
                                <li key={label}>
                                    <Link href={href} {...cursorValue(emoji)}>
                                        <span>{emoji}</span> {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <div className="direction-b-about-main">
                    <h3>How I got here ↓</h3>
                    <div className="direction-b-copy">
                        <p>
                            I started tinkering with code at <mark>13</mark>,
                            and have been obsessed with creating things on the
                            internet ever since.
                        </p>
                        <p>
                            My journey took me through different eras, starting
                            around <strong>2016</strong> when React had just
                            begun. Along the way I learned that the best
                            products come from understanding users and a
                            relentless focus on quality.
                        </p>
                        <p>
                            When I&apos;m not coding, you&apos;ll find me
                            contributing to open source, writing about tech, or
                            exploring new technologies. Big believer in building
                            in public.
                        </p>
                    </div>

                    <h3>Experience ⚒</h3>
                    <div className="direction-b-timeline">
                        {experiences.map((experience) => (
                            <article
                                key={`${experience.company}-${experience.title}`}
                            >
                                <span aria-hidden="true" />
                                <div>
                                    <header>
                                        <h4>{experience.title}</h4>
                                        <time>{experience.period}</time>
                                    </header>
                                    <p className="company">
                                        {experience.company} ·{' '}
                                        {experience.location}
                                    </p>
                                    <p>{experience.description}</p>
                                    {'technologies' in experience && (
                                        <div className="direction-b-tags">
                                            {experience.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={`${experience.company}-${tech}`}
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    <h3>Skills & tools ✦</h3>
                    <div className="direction-b-skill-cloud">
                        {techStack.map((tech) => (
                            <span key={tech.name} {...cursorValue('✨')}>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
