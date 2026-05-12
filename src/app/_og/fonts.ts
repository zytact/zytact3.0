const instrumentSerifUrl =
    'https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf';
const dmSansUrl =
    'https://raw.githubusercontent.com/googlefonts/dm-fonts/main/Sans/fonts/ttf/DMSans-Regular.ttf';
const caveatUrl =
    'https://raw.githubusercontent.com/googlefonts/caveat/master/fonts/ttf/Caveat-Bold.ttf';

export async function loadOgFonts() {
    const [serif, sans, hand] = await Promise.all([
        fetch(instrumentSerifUrl).then((response) => response.arrayBuffer()),
        fetch(dmSansUrl).then((response) => response.arrayBuffer()),
        fetch(caveatUrl).then((response) => response.arrayBuffer()),
    ]);

    return [
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
}
