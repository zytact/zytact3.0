import { readFile } from 'node:fs/promises';
import path from 'node:path';

type OgFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type OgFontStyle = 'normal' | 'italic';
type OgFont = {
    data: Buffer | ArrayBuffer;
    name: string;
    weight?: OgFontWeight;
    style?: OgFontStyle;
    lang?: string;
};

const fontsDir = path.join(process.cwd(), 'public', 'fonts');
const instrumentSerifPath = path.join(fontsDir, 'InstrumentSerif-Regular.ttf');
const dmSansPath = path.join(fontsDir, 'DMSans-Regular.ttf');
const caveatPath = path.join(fontsDir, 'Caveat-Bold.ttf');

export async function loadOgFonts() {
    const [serif, sans, hand] = await Promise.all([
        readFile(instrumentSerifPath),
        readFile(dmSansPath),
        readFile(caveatPath),
    ]);

    const fonts: OgFont[] = [
        {
            name: 'Instrument Serif',
            data: serif,
            weight: 400,
            style: 'normal',
        },
        {
            name: 'DM Sans',
            data: sans,
            weight: 400,
            style: 'normal',
        },
        {
            name: 'Caveat',
            data: hand,
            weight: 700,
            style: 'normal',
        },
    ];

    return fonts;
}
