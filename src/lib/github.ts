'use server';

export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
    days: ContributionDay[];
}

export interface GitHubContributions {
    weeks: ContributionWeek[];
    totalContributions: number;
}

export async function fetchGitHubContributions(
    username: string
): Promise<GitHubContributions> {
    try {
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch contributions');
        }

        const data = await response.json();

        const weeks: ContributionWeek[] = [];
        const contributions: ContributionDay[] = data.contributions || [];

        let currentWeek: ContributionDay[] = [];

        contributions.forEach(
            (contribution: { date: string; count: number; level: number }) => {
                const date = new Date(contribution.date);
                const dayOfWeek = date.getDay();

                if (dayOfWeek === 0 && currentWeek.length > 0) {
                    weeks.push({ days: currentWeek });
                    currentWeek = [];
                }

                currentWeek.push({
                    date: contribution.date,
                    count: contribution.count,
                    level: contribution.level as 0 | 1 | 2 | 3 | 4,
                });
            }
        );

        if (currentWeek.length > 0) {
            weeks.push({ days: currentWeek });
        }

        return {
            weeks,
            totalContributions: data.total?.lastYear || 0,
        };
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return {
            weeks: [],
            totalContributions: 0,
        };
    }
}
