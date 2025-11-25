'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import {
    fetchGitHubContributions,
    type ContributionWeek,
    type GitHubContributions,
} from '@/lib/github';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

interface ContributionGraphProps {
    username: string;
}

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

const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const levelColors = [
    'bg-contrib-0',
    'bg-contrib-1',
    'bg-contrib-2',
    'bg-contrib-3',
    'bg-contrib-4',
];

const CELL_SIZE = 10;
const CELL_GAP = 3;
const MIN_LABEL_GAP_COLS = 3; // Minimum columns between month labels to avoid overlap

function getMonthLabels(
    weeks: ContributionWeek[]
): { month: string; col: number }[] {
    const rawLabels: { month: string; col: number }[] = [];
    let lastMonth = -1;

    // First pass: collect all month transitions
    weeks.forEach((week, i) => {
        if (week.days.length > 0) {
            const firstDayDate = new Date(week.days[0].date);
            const month = firstDayDate.getMonth();

            if (month !== lastMonth) {
                rawLabels.push({ month: months[month], col: i });
                lastMonth = month;
            }
        }
    });

    // Second pass: filter out labels that are too close together
    // Skip the FIRST label if it's too close to the second (partial month at start)
    const filteredLabels: { month: string; col: number }[] = [];

    for (let i = 0; i < rawLabels.length; i++) {
        const current = rawLabels[i];
        const next = rawLabels[i + 1];

        // If this is the first label and the next one is very close, skip this one
        // (it's likely a partial month at the start)
        if (i === 0 && next && next.col - current.col < MIN_LABEL_GAP_COLS) {
            continue;
        }

        // For other labels, check if there's enough gap from the last added label
        const lastAdded = filteredLabels[filteredLabels.length - 1];
        if (!lastAdded || current.col - lastAdded.col >= MIN_LABEL_GAP_COLS) {
            filteredLabels.push(current);
        }
    }

    return filteredLabels;
}

export function ContributionGraph({ username }: ContributionGraphProps) {
    const [data, setData] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitHubContributions(username)
            .then(setData)
            .finally(() => setLoading(false));
    }, [username]);

    const monthLabels = useMemo(
        () => (data?.weeks ? getMonthLabels(data.weeks) : []),
        [data]
    );

    if (loading) {
        return (
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="border-border/50 bg-card/50 animate-pulse rounded-xl border p-4 sm:p-6">
                        <div className="bg-muted h-6 w-48 rounded" />
                        <div className="bg-muted mt-4 h-[120px] w-full rounded" />
                    </div>
                </div>
            </section>
        );
    }

    if (!data || data.weeks.length === 0) {
        return (
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="border-border/50 bg-card/50 rounded-xl border p-4 text-center sm:p-6">
                        <p className="text-muted-foreground">
                            Unable to load contribution data
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const gridWidth = data.weeks.length * (CELL_SIZE + CELL_GAP) - CELL_GAP;

    return (
        <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-muted-foreground text-xl font-medium">
                            GitHub Contributions{' '}
                            <span className="text-foreground">@{username}</span>
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            {data.totalContributions.toLocaleString()}{' '}
                            contributions in the last year
                        </p>
                    </div>

                    {/* Graph Container */}
                    <div className="border-border/50 bg-card/50 overflow-x-auto rounded-xl border p-4 backdrop-blur-sm sm:p-6">
                        <div className="inline-block min-w-fit">
                            {/* Month labels row */}
                            <div className="mb-2 flex">
                                {/* Spacer for day labels */}
                                <div className="w-10 shrink-0" />
                                {/* Month labels container */}
                                <div
                                    className="relative h-4"
                                    style={{ width: gridWidth }}
                                >
                                    {monthLabels.map((label, i) => (
                                        <span
                                            key={`${label.month}-${i}`}
                                            className="text-muted-foreground absolute text-xs"
                                            style={{
                                                left:
                                                    label.col *
                                                    (CELL_SIZE + CELL_GAP),
                                            }}
                                        >
                                            {label.month}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Grid with day labels */}
                            <div className="flex">
                                {/* Day labels */}
                                <div
                                    className="flex w-10 shrink-0 flex-col text-xs"
                                    style={{ gap: CELL_GAP }}
                                >
                                    {dayLabels.map((day, i) => (
                                        <div
                                            key={day}
                                            className="text-muted-foreground flex items-center"
                                            style={{ height: CELL_SIZE }}
                                        >
                                            {/* Show only Mon, Wed, Fri */}
                                            {i % 2 === 1 ? day : ''}
                                        </div>
                                    ))}
                                </div>

                                {/* Contribution grid */}
                                <div className="flex" style={{ gap: CELL_GAP }}>
                                    {data.weeks.map((week, weekIndex) => (
                                        <div
                                            key={weekIndex}
                                            className="flex flex-col"
                                            style={{ gap: CELL_GAP }}
                                        >
                                            {/* Pad incomplete first week */}
                                            {weekIndex === 0 &&
                                                week.days.length < 7 &&
                                                Array.from({
                                                    length:
                                                        7 - week.days.length,
                                                }).map((_, i) => (
                                                    <div
                                                        key={`empty-${i}`}
                                                        style={{
                                                            width: CELL_SIZE,
                                                            height: CELL_SIZE,
                                                        }}
                                                    />
                                                ))}
                                            {week.days.map((day, dayIndex) => (
                                                <Tooltip
                                                    key={`${weekIndex}-${dayIndex}`}
                                                >
                                                    <TooltipTrigger asChild>
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    weekIndex *
                                                                        0.005 +
                                                                    dayIndex *
                                                                        0.002,
                                                                duration: 0.15,
                                                            }}
                                                            className={`rounded-sm ${levelColors[day.level]} hover:ring-foreground/30 cursor-pointer transition-all hover:ring-2`}
                                                            style={{
                                                                width: CELL_SIZE,
                                                                height: CELL_SIZE,
                                                            }}
                                                        />
                                                    </TooltipTrigger>
                                                    <TooltipContent
                                                        side="top"
                                                        className="text-xs"
                                                    >
                                                        <p className="font-medium">
                                                            {day.count}{' '}
                                                            contribution
                                                            {day.count !== 1
                                                                ? 's'
                                                                : ''}
                                                        </p>
                                                        <p className="text-muted-foreground">
                                                            {new Date(
                                                                day.date
                                                            ).toLocaleDateString(
                                                                'en-US',
                                                                {
                                                                    weekday:
                                                                        'long',
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                }
                                                            )}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="text-muted-foreground mt-4 flex items-center justify-end gap-2 text-xs">
                                <span>Less</span>
                                <div className="flex" style={{ gap: CELL_GAP }}>
                                    {levelColors.map((color, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-sm ${color}`}
                                            style={{
                                                width: CELL_SIZE,
                                                height: CELL_SIZE,
                                            }}
                                        />
                                    ))}
                                </div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
