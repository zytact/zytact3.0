import type { Metadata } from 'next';

import { DirectionBAboutPage } from '@/components/portfolio/about';

export const metadata: Metadata = {
    title: 'About',
    description: 'A playful about page for the portfolio.',
};

export default function AboutPage() {
    return <DirectionBAboutPage />;
}
