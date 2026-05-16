'use client';

import { useMemo } from 'react';

import type { ContributionWeek, GitHubContributions } from '@/lib/github';
import { Sticker } from './components';

function getMonthLabels(weeks: ContributionWeek[]) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const labels: { month: string; col: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, index) => {
        if (!week.days[0]) return;
        const month = new Date(week.days[0].date).getMonth();
        if (month !== lastMonth && index > 0) {
            labels.push({ month: months[month], col: index });
            lastMonth = month;
        }
    });

    return labels;
}

export function ContributionGraphClient({
    contributions,
    githubHandle,
}: {
    contributions: GitHubContributions;
    githubHandle: string;
}) {
    const labels = useMemo(
        () => getMonthLabels(contributions.weeks),
        [contributions.weeks]
    );
    const graphColors = [
        'var(--b-graph-0)',
        'var(--b-graph-1)',
        'var(--b-graph-2)',
        'var(--b-graph-3)',
        'var(--b-graph-4)',
    ];

    if (contributions.status === 'error' || contributions.weeks.length === 0) {
        return (
            <section className="direction-b-section">
                <div className="direction-b-card direction-b-empty">
                    Unable to load contribution data.
                </div>
            </section>
        );
    }

    return (
        <section className="direction-b-section direction-b-graph-section">
            <Sticker x="78%" y={10} rotate={-6} bg="var(--b-green)">
                {contributions.totalContributions.toLocaleString()} this year!
            </Sticker>
            <div className="direction-b-card direction-b-graph-card">
                <div className="direction-b-section-heading compact">
                    <h3>
                        <em>Showing up,</em> daily.
                    </h3>
                    <p>@{githubHandle} on GitHub →</p>
                </div>
                <div className="direction-b-graph-scroll">
                    <div className="direction-b-months">
                        {labels.map((label) => (
                            <span
                                key={`${label.month}-${label.col}`}
                                style={{ left: label.col * 12 }}
                            >
                                {label.month}
                            </span>
                        ))}
                    </div>
                    <div className="direction-b-graph-grid">
                        <div className="direction-b-days">
                            {['', 'M', '', 'W', '', 'F', ''].map(
                                (day, index) => (
                                    <div key={`${day}-${index}`}>{day}</div>
                                )
                            )}
                        </div>
                        <div className="direction-b-weeks">
                            {contributions.weeks.map((week, weekIndex) => (
                                <div
                                    key={weekIndex}
                                    className="direction-b-week"
                                >
                                    {week.days.map((day) => (
                                        <div
                                            key={day.date}
                                            title={`${day.count} contributions on ${day.date}`}
                                            style={{
                                                background:
                                                    graphColors[day.level],
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
