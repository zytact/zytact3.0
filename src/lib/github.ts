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
    status: 'ok' | 'error';
}

export async function fetchGitHubContributions(
    username: string
): Promise<GitHubContributions> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            {
                next: { revalidate: 3600 },
                signal: controller.signal,
            }
        );

        if (!response.ok) {
            console.error('GitHub contributions fetch failed', {
                username,
                status: response.status,
                statusText: response.statusText,
            });
            return {
                weeks: [],
                totalContributions: 0,
                status: 'error',
            };
        }

        const data = await response.json();
        if (!data || typeof data !== 'object') {
            console.error('GitHub contributions payload invalid', {
                username,
                message: 'Payload is not an object',
            });
            return {
                weeks: [],
                totalContributions: 0,
                status: 'error',
            };
        }

        if (!Array.isArray(data.contributions)) {
            console.error('GitHub contributions payload invalid', {
                username,
                message: 'Contributions is not an array',
            });
            return {
                weeks: [],
                totalContributions: 0,
                status: 'error',
            };
        }

        const contributions: ContributionDay[] = data.contributions
            .filter((contribution: unknown) => {
                if (!contribution || typeof contribution !== 'object')
                    return false;
                const record = contribution as {
                    date?: unknown;
                    count?: unknown;
                    level?: unknown;
                };
                return (
                    typeof record.date === 'string' &&
                    typeof record.count === 'number' &&
                    typeof record.level === 'number'
                );
            })
            .map(
                (contribution: {
                    date: string;
                    count: number;
                    level: number;
                }) => ({
                    date: contribution.date,
                    count: contribution.count,
                    level: contribution.level as 0 | 1 | 2 | 3 | 4,
                })
            );

        if (contributions.length === 0) {
            console.error('GitHub contributions payload invalid', {
                username,
                message: 'No valid contributions entries',
            });
            return {
                weeks: [],
                totalContributions: 0,
                status: 'error',
            };
        }

        const weeks: ContributionWeek[] = [];

        let currentWeek: ContributionDay[] = [];

        contributions.forEach((contribution) => {
            const date = new Date(contribution.date);
            const dayOfWeek = date.getDay();

            if (dayOfWeek === 0 && currentWeek.length > 0) {
                weeks.push({ days: currentWeek });
                currentWeek = [];
            }

            currentWeek.push(contribution);
        });

        if (currentWeek.length > 0) {
            weeks.push({ days: currentWeek });
        }

        const totalLastYear =
            typeof data.total?.lastYear === 'number' ? data.total.lastYear : 0;

        return {
            weeks,
            totalContributions: totalLastYear,
            status: 'ok',
        };
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Unknown error';
        console.error('GitHub contributions fetch failed', {
            username,
            message,
        });
        return {
            weeks: [],
            totalContributions: 0,
            status: 'error',
        };
    } finally {
        clearTimeout(timeout);
    }
}

export function getLongestContributionStreak(
    contributions: GitHubContributions
): number | null {
    if (contributions.status !== 'ok') return null;

    const days = contributions.weeks.flatMap((week) => week.days);
    if (days.length === 0) return null;

    let longest = 0;
    let current = 0;

    for (const day of days) {
        if (day.count > 0) {
            current += 1;
            if (current > longest) longest = current;
        } else {
            current = 0;
        }
    }

    return longest > 0 ? longest : null;
}
