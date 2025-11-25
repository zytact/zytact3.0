'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

import {
    generateMockContributions,
    getTotalContributions,
    type ContributionWeek,
} from '@/lib/data';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

interface ContributionGraphProps {
    username?: string;
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

const levelColors = [
    'bg-contrib-0',
    'bg-contrib-1',
    'bg-contrib-2',
    'bg-contrib-3',
    'bg-contrib-4',
];

function getMonthLabels(
    weeks: ContributionWeek[]
): { month: string; col: number }[] {
    const labels: { month: string; col: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, i) => {
        if (week.days.length > 0) {
            const date = new Date(week.days[0].date);
            const month = date.getMonth();
            if (month !== lastMonth) {
                labels.push({ month: months[month], col: i });
                lastMonth = month;
            }
        }
    });

    return labels;
}

export function ContributionGraph({
    username = 'yourusername',
}: ContributionGraphProps) {
    const contributions = useMemo(() => generateMockContributions(), []);
    const totalContributions = useMemo(
        () => getTotalContributions(contributions),
        [contributions]
    );
    const monthLabels = useMemo(
        () => getMonthLabels(contributions),
        [contributions]
    );

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
                            {totalContributions.toLocaleString()} contributions
                            in the last year
                        </p>
                    </div>

                    {/* Graph */}
                    <div className="border-border/50 bg-card/50 overflow-x-auto rounded-xl border p-4 backdrop-blur-sm">
                        {/* Month labels */}
                        <div className="text-muted-foreground mb-2 flex text-xs">
                            <div className="w-8" />{' '}
                            {/* Spacer for day labels */}
                            <div className="relative flex-1">
                                {monthLabels.map((label, i) => (
                                    <span
                                        key={`${label.month}-${i}`}
                                        className="absolute"
                                        style={{
                                            left: `${(label.col / contributions.length) * 100}%`,
                                        }}
                                    >
                                        {label.month}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[3px]">
                            {/* Day labels */}
                            <div className="text-muted-foreground flex w-8 flex-col justify-around text-xs">
                                <span>Mon</span>
                                <span>Wed</span>
                                <span>Fri</span>
                            </div>

                            {/* Contribution cells */}
                            <div className="flex gap-[3px]">
                                {contributions.map((week, weekIndex) => (
                                    <div
                                        key={weekIndex}
                                        className="flex flex-col gap-[3px]"
                                    >
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
                                                                    0.01 +
                                                                dayIndex *
                                                                    0.005,
                                                            duration: 0.2,
                                                        }}
                                                        className={`h-[10px] w-[10px] rounded-sm ${levelColors[day.level]} hover:ring-foreground/20 transition-all hover:ring-1`}
                                                    />
                                                </TooltipTrigger>
                                                <TooltipContent
                                                    side="top"
                                                    className="text-xs"
                                                >
                                                    <p className="font-medium">
                                                        {day.count} contribution
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
                                                                weekday: 'long',
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
                            {levelColors.map((color, i) => (
                                <div
                                    key={i}
                                    className={`h-[10px] w-[10px] rounded-sm ${color}`}
                                />
                            ))}
                            <span>More</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
