import type { Metadata } from 'next';

import { PageHeader } from '@/components/PageHeader';
import { BlogList } from '@/components/BlogList';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Thoughts on code, design, and building products.',
};

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="Blog"
                description="Thoughts on code, design, and building products. I write about what I learn and share my experiences."
            />
            <BlogList showAll />
        </>
    );
}
