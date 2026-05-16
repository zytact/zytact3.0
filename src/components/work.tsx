import Link from 'next/link';

import type { Project } from '@/lib/data';
import { openSourcePRs, projects } from '@/lib/data';
import { cursorValue } from './components';

function DirectionBProjectCard({
    project,
    index,
    featured,
}: {
    project: Project;
    index: number;
    featured: boolean;
}) {
    const rotations = [-1.5, 1, -0.5, 1.5, -1, 0.5];
    const backgrounds = [
        'var(--b-tint-paper)',
        'var(--b-tint-blue)',
        'var(--b-tint-cyan)',
        'var(--b-tint-pink)',
        'var(--b-tint-green)',
        'var(--b-tint-purple)',
    ];
    const rotation = rotations[index % rotations.length];
    const href = project.link || project.github || '#';

    return (
        <Link
            href={href}
            className={`direction-b-project-card ${featured ? 'is-featured' : ''}`}
            style={{
                background: backgrounds[index % backgrounds.length],
                transform: `rotate(${rotation}deg)`,
            }}
            {...cursorValue('🚀')}
        >
            <div className="direction-b-project-top">
                <div>
                    <span>{project.title[0]}</span>
                    <div>
                        <h3>{project.title}</h3>
                        <p>shipped · {project.year}</p>
                    </div>
                </div>
                <i>↗</i>
            </div>
            <p>{project.description}</p>
            <div className="direction-b-tags">
                {project.tags.slice(0, featured ? 7 : 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </Link>
    );
}

export function DirectionBProjectsSection({ all = false }: { all?: boolean }) {
    const items = all
        ? projects
        : projects.filter((project) => project.featured);

    return (
        <section className="direction-b-section">
            <div className="direction-b-section-heading">
                <h2>
                    Proof of <em>work</em>.
                </h2>
                <p>← things I&apos;ve actually shipped</p>
            </div>
            <div className="direction-b-project-grid">
                {items.map((project, index) => (
                    <DirectionBProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        featured={index === 0 || (all && index % 5 === 0)}
                    />
                ))}
            </div>
        </section>
    );
}

export function DirectionBWorkPage() {
    return (
        <>
            <section className="direction-b-page-hero">
                <h1>
                    Everything <em>I&apos;ve</em>
                    <br />
                    shipped.
                </h1>
                <p>
                    A collection of projects, experiments, and open source
                    contributions.
                </p>
            </section>
            <DirectionBProjectsSection all />
            <DirectionBPRSection />
        </>
    );
}

export function DirectionBPRSection() {
    return (
        <section className="direction-b-section final">
            <div className="direction-b-section-heading">
                <h2>
                    Open <em>source</em>.
                </h2>
                <p>giving back ✿</p>
            </div>
            <div className="direction-b-pr-grid">
                {openSourcePRs.map((pr, index) => (
                    <Link
                        key={pr.id}
                        href={pr.prUrl}
                        className="direction-b-pr-card"
                        style={{
                            background:
                                index % 3 === 0
                                    ? 'var(--b-tint-blue)'
                                    : index % 3 === 1
                                      ? 'var(--b-tint-pr-purple)'
                                      : 'var(--b-tint-green)',
                            transform: `rotate(${index % 3 === 0 ? -0.5 : index % 3 === 1 ? 0.5 : -0.3}deg)`,
                        }}
                        {...cursorValue('✓')}
                    >
                        <div>
                            <span>{pr.status}</span>
                            <time>
                                {new Date(pr.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </time>
                        </div>
                        <h3>{pr.title}</h3>
                        <p>{pr.repo}</p>
                        <footer>
                            {pr.description} · PR #{pr.prNumber}
                        </footer>
                    </Link>
                ))}
            </div>
        </section>
    );
}
