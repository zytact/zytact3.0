import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/data';
import { loadOgFonts } from './_og/fonts';
import { contentType, renderOgImage, size } from './_og/template';

export { contentType, size };

export const alt = `${siteConfig.name} Open Graph image`;

export default async function Image() {
    const fonts = await loadOgFonts();

    return new ImageResponse(
        renderOgImage({
            title: siteConfig.name,
            subtitle: siteConfig.tagline,
            sticker: siteConfig.role,
        }),
        { ...size, fonts }
    );
}
