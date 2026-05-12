import type { Metadata } from 'next';

import { DirectionBWorkPage } from '@/components/work';

export const metadata: Metadata = {
    title: 'Proof of Work',
    description:
        'Projects and open source contributions shipped by Arnab Chakraborty — from side projects to production apps.',
};

export default function ProofOfWorkPage() {
    return <DirectionBWorkPage />;
}
