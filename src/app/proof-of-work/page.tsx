import type { Metadata } from 'next';

import { DirectionBWorkPage } from '@/components/portfolio/work';

export const metadata: Metadata = {
    title: 'Proof of Work',
    description:
        'A playful showcase of projects and open source contributions.',
};

export default function ProofOfWorkPage() {
    return <DirectionBWorkPage />;
}
