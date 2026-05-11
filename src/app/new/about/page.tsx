import type { Metadata } from 'next';

import { DirectionBAboutPage } from '@/components/new-design/DirectionB';

export const metadata: Metadata = {
    title: 'About',
    description: 'A playful about page for the new portfolio design direction.',
};

export default function NewAboutPage() {
    return <DirectionBAboutPage />;
}
