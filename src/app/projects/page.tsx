import type { Metadata } from 'next';

import { PageHeader } from '@/components/PageHeader';
import { ProjectsGrid } from '@/components/ProjectsGrid';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A showcase of my work and side projects.',
};

export default function ProjectsPage() {
    return (
        <>
            <PageHeader
                title="Projects"
                description="A collection of work I've shipped over the years. From full-stack applications to open-source tools."
            />
            <ProjectsGrid showAll />
        </>
    );
}
