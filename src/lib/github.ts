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

// Fetch real GitHub contributions using the github-contributions-api
export async function fetchGitHubContributions(
    username: string
): Promise<GitHubContributions> {
    try {
        // Using a public API that scrapes GitHub contribution data
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error('Failed to fetch contributions');
        }

        const data = await response.json();

        // Transform the API response to our format
        const weeks: ContributionWeek[] = [];
        const contributions: ContributionDay[] = data.contributions || [];

        // Group contributions by week (7 days each)
        // The API returns contributions sorted by date
        let currentWeek: ContributionDay[] = [];

        contributions.forEach(
            (contribution: { date: string; count: number; level: number }) => {
                const date = new Date(contribution.date);
                const dayOfWeek = date.getDay(); // 0 = Sunday

                // Start a new week on Sunday
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

        // Push the last week if it has any days
        if (currentWeek.length > 0) {
            weeks.push({ days: currentWeek });
        }

        return {
            weeks,
            totalContributions: data.total?.lastYear || 0,
        };
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        // Return empty data on error
        return {
            weeks: [],
            totalContributions: 0,
        };
    }
}
