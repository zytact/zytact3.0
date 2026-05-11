import type { Metadata } from 'next';

import { DirectionBLayout } from '@/components/new-design/DirectionB';

export const metadata: Metadata = {
    title: 'New Design',
    description: 'Preview of the playful studio portfolio design direction.',
};

export default function NewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <DirectionBLayout>{children}</DirectionBLayout>;
}
