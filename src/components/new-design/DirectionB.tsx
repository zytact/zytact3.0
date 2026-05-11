'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import {
    experiences,
    openSourcePRs,
    projects,
    siteConfig,
    techStack,
    type Project,
} from '@/lib/data';
import {
    fetchGitHubContributions,
    type GitHubContributions,
    type ContributionWeek,
} from '@/lib/github';

const colors = {
    bg: '#eef3fa',
    bgSoft: '#e2ecf7',
    ink: '#141820',
    inkSoft: '#2d3750',
    mute: '#5a6a82',
    accent: '#1d63d4',
    red: '#ef4444',
    yellow: '#fbbf24',
    green: '#22c55e',
    purple: '#a855f7',
    pink: '#ec4899',
    paper: '#f5f9ff',
};

const socialLinks = [
    ['🐙', 'GitHub', siteConfig.github],
    ['🐦', 'Twitter', siteConfig.twitter],
    ['💼', 'LinkedIn', siteConfig.linkedin],
    ['💬', 'Discord', siteConfig.discord],
    ['✉️', 'Email', `mailto:${siteConfig.email}`],
];

const categories = [
    { key: 'frontend', label: 'Frontend', bg: colors.accent, color: '#fff' },
    { key: 'backend', label: 'Backend', bg: colors.purple, color: '#fff' },
    { key: 'database', label: 'Database', bg: colors.green, color: colors.ink },
    { key: 'ai', label: 'AI / LLMs', bg: colors.pink, color: '#fff' },
    { key: 'tools', label: 'Tools', bg: colors.yellow, color: colors.ink },
    { key: 'devops', label: 'DevOps', bg: colors.red, color: '#fff' },
] as const;

function cursorValue(value: string) {
    return { 'data-cur': value };
}

function EmojiCursor({
    scopeRef,
}: {
    scopeRef: React.RefObject<HTMLDivElement | null>;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [emoji, setEmoji] = useState('✦');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scope = scopeRef.current;
        if (!scope) return;

        const onMove = (event: MouseEvent) => {
            const rect = scope.getBoundingClientRect();
            if (ref.current) {
                ref.current.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px) rotate(-12deg)`;
            }

            setVisible(true);
            const element = document.elementFromPoint(
                event.clientX,
                event.clientY
            );
            const target = element?.closest?.('[data-cur]');
            setEmoji(target?.getAttribute('data-cur') || '✦');
        };

        const onLeave = () => setVisible(false);

        scope.addEventListener('mousemove', onMove);
        scope.addEventListener('mouseleave', onLeave);

        return () => {
            scope.removeEventListener('mousemove', onMove);
            scope.removeEventListener('mouseleave', onLeave);
        };
    }, [scopeRef]);

    return (
        <div
            ref={ref}
            className="direction-b-cursor"
            style={{ opacity: visible ? 1 : 0 }}
        >
            {emoji}
        </div>
    );
}

function PaperGrain() {
    return (
        <svg className="direction-b-grain" aria-hidden="true">
            <filter id="direction-b-grain">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.85"
                    numOctaves="2"
                    seed="3"
                />
                <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#direction-b-grain)" />
        </svg>
    );
}

function Sticker({
    x,
    y,
    rotate = 0,
    bg,
    color = '#fff',
    children,
}: {
    x: string | number;
    y: string | number;
    rotate?: number;
    bg: string;
    color?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className="direction-b-sticker"
            style={{
                left: x,
                top: y,
                transform: `rotate(${rotate}deg)`,
                background: bg,
                color,
            }}
        >
            {children}
        </div>
    );
}

function DirectionBNav() {
    const pathname = usePathname();
    const links = [
        { href: '/new', name: 'Home', cur: '🏠' },
        { href: '/new/pow', name: 'Proof of Work', cur: '⚒️' },
        { href: '/new/about', name: 'About', cur: '🙋' },
    ];

    return (
        <header className="direction-b-nav">
            <Link
                href="/new"
                className="direction-b-logo"
                {...cursorValue('🏠')}
            >
                <span>{siteConfig.firstName[0].toLowerCase()}</span>
                {siteConfig.firstName.toLowerCase()}.
            </Link>
            <nav
                className="direction-b-nav-links"
                aria-label="New design navigation"
            >
                {links.map((link) => {
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={active ? 'is-active' : undefined}
                            {...cursorValue(link.cur)}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <Link
                href={`mailto:${siteConfig.email}`}
                className="direction-b-nav-cta"
                {...cursorValue('✉️')}
            >
                Say hi →
            </Link>
        </header>
    );
}

export function DirectionBLayout({ children }: { children: React.ReactNode }) {
    const scopeRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scopeRef} className="direction-b">
            <PaperGrain />
            <EmojiCursor scopeRef={scopeRef} />
            <DirectionBNav />
            {children}
            <DirectionBFooter />
        </div>
    );
}

export function DirectionBHome() {
    return (
        <>
            <DirectionBHero />
            <DirectionBContributionGraph />
            <DirectionBTechStack />
            <DirectionBProjectsSection />
            <DirectionBPRSection />
        </>
    );
}

function DirectionBHero() {
    return (
        <section className="direction-b-hero">
            <Sticker
                x="6%"
                y={30}
                rotate={-8}
                bg={colors.yellow}
                color={colors.ink}
            >
                open to work
            </Sticker>
            <Sticker x="85%" y={50} rotate={12} bg={colors.pink}>
                since 2016
            </Sticker>
            <Sticker x="88%" y={420} rotate={8} bg={colors.purple}>
                AI · full-stack
            </Sticker>

            <div className="direction-b-hero-grid">
                <div>
                    <div className="direction-b-status">
                        <span />
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
                            href="/new/pow"
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
                <div className="direction-b-portrait-wrap">
                    <div
                        className="direction-b-portrait"
                        {...cursorValue('😄')}
                    >
                        {siteConfig.firstName[0]}
                        {siteConfig.lastName[0]}
                    </div>
                    <Sticker
                        x={210}
                        y={250}
                        rotate={10}
                        bg={colors.yellow}
                        color={colors.ink}
                    >
                        builder ✦
                    </Sticker>
                </div>
            </div>

            <div className="direction-b-social-strip">
                <span>→ find me here</span>
                <div>
                    {socialLinks.map(([emoji, label, href]) => (
                        <Link key={label} href={href} {...cursorValue(emoji)}>
                            {emoji} {label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function getMonthLabels(weeks: ContributionWeek[]) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const labels: { month: string; col: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, index) => {
        if (!week.days[0]) return;
        const month = new Date(week.days[0].date).getMonth();
        if (month !== lastMonth && index > 0) {
            labels.push({ month: months[month], col: index });
            lastMonth = month;
        }
    });

    return labels;
}

function DirectionBContributionGraph() {
    const [data, setData] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitHubContributions(siteConfig.githubHandle)
            .then(setData)
            .finally(() => setLoading(false));
    }, []);

    const labels = useMemo(
        () => (data ? getMonthLabels(data.weeks) : []),
        [data]
    );
    const graphColors = ['#dce8f5', '#a8c9eb', '#5ea3e0', '#2872d4', '#1450a0'];

    if (loading) {
        return (
            <section className="direction-b-section">
                <div className="direction-b-card direction-b-graph-card is-loading" />
            </section>
        );
    }

    if (!data || data.weeks.length === 0) {
        return (
            <section className="direction-b-section">
                <div className="direction-b-card direction-b-empty">
                    Unable to load contribution data.
                </div>
            </section>
        );
    }

    return (
        <section className="direction-b-section">
            <div className="direction-b-card direction-b-graph-card">
                <Sticker
                    x="78%"
                    y={10}
                    rotate={-6}
                    bg={colors.green}
                    color={colors.ink}
                >
                    {data.totalContributions.toLocaleString()} this year!
                </Sticker>
                <div className="direction-b-section-heading compact">
                    <h3>
                        <em>Showing up,</em> daily.
                    </h3>
                    <p>@{siteConfig.githubHandle} on GitHub →</p>
                </div>
                <div className="direction-b-graph-scroll">
                    <div className="direction-b-months">
                        {labels.map((label) => (
                            <span
                                key={`${label.month}-${label.col}`}
                                style={{ left: label.col * 12 }}
                            >
                                {label.month}
                            </span>
                        ))}
                    </div>
                    <div className="direction-b-graph-grid">
                        <div className="direction-b-days">
                            {['', 'M', '', 'W', '', 'F', ''].map(
                                (day, index) => (
                                    <div key={`${day}-${index}`}>{day}</div>
                                )
                            )}
                        </div>
                        <div className="direction-b-weeks">
                            {data.weeks.map((week, weekIndex) => (
                                <div
                                    key={weekIndex}
                                    className="direction-b-week"
                                >
                                    {week.days.map((day) => (
                                        <div
                                            key={day.date}
                                            title={`${day.count} contributions on ${day.date}`}
                                            style={{
                                                background:
                                                    graphColors[day.level],
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                {categories.map((category) => {
                    const items = techStack.filter(
                        (tech) => tech.category === category.key
                    );
                    return (
                        <div
                            key={category.key}
                            className="direction-b-card direction-b-tech-card"
                        >
                            <span
                                style={{
                                    background: category.bg,
                                    color: category.color,
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
        colors.paper,
        '#dbeafe',
        '#e0f2fe',
        '#fce7f3',
        '#dcfce7',
        '#fae8ff',
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
                                    ? '#dbeafe'
                                    : index % 3 === 1
                                      ? '#f3e8ff'
                                      : '#dcfce7',
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

export function DirectionBWorkPage() {
    return (
        <>
            <section className="direction-b-page-hero">
                <Sticker
                    x="78%"
                    y={60}
                    rotate={-6}
                    bg={colors.green}
                    color={colors.ink}
                >
                    ← receipts inside
                </Sticker>
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

export function DirectionBAboutPage() {
    return (
        <>
            <section className="direction-b-page-hero">
                <Sticker
                    x="80%"
                    y={40}
                    rotate={6}
                    bg={colors.yellow}
                    color={colors.ink}
                >
                    hello, hi! ✿
                </Sticker>
                <h1>
                    About <em>me</em>.
                </h1>
                <p>
                    A little bit about who I am, what I do, and what drives me.
                </p>
            </section>
            <section className="direction-b-about">
                <aside>
                    <div className="direction-b-profile-card">
                        <div>AC</div>
                        <h2>{siteConfig.name.split(' ')[0]}</h2>
                        <p>{siteConfig.role}</p>
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
                                    {experience.technologies && (
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

function DirectionBFooter() {
    return (
        <footer className="direction-b-footer">
            <div>
                {siteConfig.tagline.toLowerCase().replaceAll(' • ', ' · ')}.
            </div>
            <p>© 2026 {siteConfig.name} · made with too much coffee ☕</p>
        </footer>
    );
}
