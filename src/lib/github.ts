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

const GITHUB_GRAPHQL_QUERY = `
query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}
`;

const LEVEL_MAP: Record<string, 0 | 1 | 2 | 3 | 4> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

export async function fetchGitHubContributions(
    username: string
): Promise<GitHubContributions> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        console.error('GitHub contributions fetch failed', {
            username,
            message: 'GITHUB_TOKEN environment variable is not set',
        });
        return { weeks: [], totalContributions: 0, status: 'error' };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GITHUB_GRAPHQL_QUERY,
                variables: { username },
            }),
            next: { revalidate: 3600 },
            signal: controller.signal,
        });

        if (!response.ok) {
            console.error('GitHub contributions fetch failed', {
                username,
                status: response.status,
                statusText: response.statusText,
            });
            return { weeks: [], totalContributions: 0, status: 'error' };
        }

        const json = await response.json();
        const calendar =
            json?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar || !Array.isArray(calendar.weeks)) {
            console.error('GitHub contributions payload invalid', {
                username,
                message: 'Unexpected GraphQL response shape',
            });
            return { weeks: [], totalContributions: 0, status: 'error' };
        }

        const weeks: ContributionWeek[] = calendar.weeks
            .filter((w: unknown) => w && typeof w === 'object')
            .map((w: { contributionDays?: unknown[] }) => ({
                days: (w.contributionDays ?? [])
                    .filter(
                        (
                            d: unknown
                        ): d is {
                            date: string;
                            contributionCount: number;
                            contributionLevel: string;
                        } => {
                            if (!d || typeof d !== 'object') return false;
                            const r = d as Record<string, unknown>;
                            return (
                                typeof r.date === 'string' &&
                                typeof r.contributionCount === 'number' &&
                                typeof r.contributionLevel === 'string'
                            );
                        }
                    )
                    .map((d) => ({
                        date: d.date,
                        count: d.contributionCount,
                        level: LEVEL_MAP[d.contributionLevel] ?? 0,
                    })),
            }));

        return {
            weeks,
            totalContributions: calendar.totalContributions ?? 0,
            status: 'ok',
        };
    } catch (error) {
        const message =
            error instanceof Error ? error.message : 'Unknown error';
        console.error('GitHub contributions fetch failed', {
            username,
            message,
        });
        return { weeks: [], totalContributions: 0, status: 'error' };
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
