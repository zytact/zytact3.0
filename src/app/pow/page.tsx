import type { Metadata } from 'next';

import { PageHeader } from '@/components/PageHeader';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { PRGrid } from '@/components/PRGrid';

export const metadata: Metadata = {
    title: 'Proof of Work',
    description: 'A showcase of my projects and open source contributions.',
};

export default function PoWPage() {
    return (
        <>
            <PageHeader
                title="Proof of Work"
                description="A collection of projects I've shipped and open source contributions I've made over the years."
            />
            <ProjectsGrid showAll />
            <div id="open-source">
                <PRGrid showAll showHeader />
            </div>
        </>
    );
}
