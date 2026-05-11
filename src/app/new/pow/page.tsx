import type { Metadata } from 'next';

import { DirectionBWorkPage } from '@/components/new-design/DirectionB';

export const metadata: Metadata = {
    title: 'Proof of Work',
    description:
        'A playful showcase of projects and open source contributions.',
};

export default function NewProofOfWorkPage() {
    return <DirectionBWorkPage />;
}
