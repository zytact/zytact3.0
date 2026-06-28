'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { siteConfig } from '@/lib/data';
import { cursorValue } from './components';

function EmojiCursor({ scopeRef }: { scopeRef: React.RefObject<HTMLDivElement | null> }) {
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
            const element = document.elementFromPoint(event.clientX, event.clientY);
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
        <div ref={ref} className="direction-b-cursor" style={{ opacity: visible ? 1 : 0 }}>
            {emoji}
        </div>
    );
}

function PaperGrain() {
    return (
        <svg className="direction-b-grain" aria-hidden="true">
            <filter id="direction-b-grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" />
                <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#direction-b-grain)" />
        </svg>
    );
}

function DirectionBNav() {
    const pathname = usePathname();
    const links = [
        { href: '/', name: 'Home', cur: '🏠' },
        { href: '/proof-of-work', name: 'Proof of Work', cur: '⚒️' },
        { href: '/about', name: 'About', cur: '🙋' },
    ];

    return (
        <header className="direction-b-nav">
            <Link href="/" className="direction-b-logo" {...cursorValue('🏠')}>
                {siteConfig.firstName.toLowerCase()}.
            </Link>
            <nav className="direction-b-nav-links" aria-label="Portfolio navigation">
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

function DirectionBFooter() {
    return (
        <footer className="direction-b-footer">
            <div>{siteConfig.tagline.toLowerCase().replaceAll(' • ', ' · ')}.</div>
            <p>
                © {siteConfig.copyYear} {siteConfig.name} · made with too much coffee ☕
            </p>
        </footer>
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
