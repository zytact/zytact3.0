import { ImageResponse } from 'next/og';
import { loadOgFonts } from '../_og/fonts';
import { contentType, renderOgImage, size } from '../_og/template';

export { contentType, size };

export const alt = 'Proof of Work Open Graph image';

export default async function Image() {
    const fonts = await loadOgFonts();

    return new ImageResponse(
        renderOgImage({
            title: 'Proof of Work',
            subtitle: 'Projects, experience, and open-source contributions',
            sticker: "what I've shipped",
        }),
        { ...size, fonts }
    );
}
