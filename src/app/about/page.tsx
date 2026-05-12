import type { Metadata } from 'next';

import { DirectionBAboutPage } from '@/components/about';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Full-stack developer based in Guwahati, India. Started coding at 13, building on the web since 2016. My story, experience timeline, and tech stack.',
};

export default function AboutPage() {
    return <DirectionBAboutPage />;
}
