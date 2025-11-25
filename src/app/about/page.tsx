import type { Metadata } from 'next';

import { AboutContent } from './about-content';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about me, my journey, and what drives me.',
};

export default function AboutPage() {
    return <AboutContent />;
}
