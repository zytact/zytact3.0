import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zytact.com',
            lastModified: new Date(),
        },
        {
            url: 'https://zytact.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://zytact.com/pow',
            lastModified: new Date(),
        },
    ];
}
