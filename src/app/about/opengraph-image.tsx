import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/data';
import { loadOgFonts } from '../_og/fonts';
import { contentType, renderOgImage, size } from '../_og/template';

export { contentType, size };

export const alt = 'About Open Graph image';

export default async function Image() {
    const fonts = await loadOgFonts();

    return new ImageResponse(
        renderOgImage({
            title: 'About',
            subtitle: siteConfig.description,
            sticker: 'who I am',
        }),
        { ...size, fonts }
    );
}
