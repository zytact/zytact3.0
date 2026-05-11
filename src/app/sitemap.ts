import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zytact.com',
            lastModified: new Date('2026-05-12'),
        },
        {
            url: 'https://zytact.com/about',
            lastModified: new Date('2026-05-12'),
        },
        {
            url: 'https://zytact.com/proof-of-work',
            lastModified: new Date('2026-05-12'),
        },
    ];
}
