import { Hero } from '@/components/Hero';
import { ContributionGraph } from '@/components/ContributionGraph';
import { TechStack } from '@/components/TechStack';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { PRGrid } from '@/components/PRGrid';

export default function Home() {
    return (
        <>
            <Hero />
            <ContributionGraph username="zytact" />
            <TechStack />
            <ProjectsGrid />
            <PRGrid />
        </>
    );
}
