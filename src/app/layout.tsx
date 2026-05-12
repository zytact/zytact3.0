import type { Metadata } from 'next';
import {
    Caveat,
    DM_Sans,
    Geist,
    Geist_Mono,
    Instrument_Serif,
} from 'next/font/google';
import './globals.css';
import { DirectionBLayout } from '@/components/shell';
import { siteConfig } from '@/lib/data';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const dmSans = DM_Sans({
    variable: '--font-direction-b-sans',
    subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
    variable: '--font-direction-b-serif',
    subsets: ['latin'],
    weight: '400',
});

const caveat = Caveat({
    variable: '--font-direction-b-hand',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} | ${siteConfig.role}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'developer',
        'software engineer',
        'full-stack',
        'react',
        'next.js',
        'typescript',
        'portfolio',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${instrumentSerif.variable} ${caveat.variable} font-sans antialiased`}
            >
                <DirectionBLayout>{children}</DirectionBLayout>
            </body>
        </html>
    );
}
