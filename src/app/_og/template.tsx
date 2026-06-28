import type { ReactElement } from 'react';
import { siteConfig } from '@/lib/data';

export const size = { width: 1200, height: 630 } as const;
export const contentType = 'image/png';

type OgTemplateProps = {
    title: string;
    subtitle: string;
    sticker: string;
};

export function renderOgImage({ title, subtitle, sticker }: OgTemplateProps): ReactElement {
    return (
        <div
            style={{
                backgroundColor: '#eef3fa',
                width: '100%',
                height: '100%',
                padding: 80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    color: '#1d63d4',
                    fontFamily: 'Caveat',
                    fontSize: 32,
                    fontWeight: 700,
                    letterSpacing: '-0.5px',
                }}
            >
                <span
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        backgroundColor: '#1d63d4',
                    }}
                />
                <span>{sticker}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                    style={{
                        fontFamily: 'Instrument Serif',
                        fontSize: 110,
                        fontWeight: 400,
                        letterSpacing: '-3px',
                        color: '#141820',
                        lineHeight: 1.05,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontFamily: 'DM Sans',
                        fontSize: 32,
                        fontWeight: 500,
                        color: '#5a6a82',
                        maxWidth: 900,
                        lineHeight: 1.3,
                    }}
                >
                    {subtitle}
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'DM Sans',
                    fontSize: 22,
                    color: '#2d3750',
                }}
            >
                <span>{siteConfig.url}</span>
                <div style={{ display: 'flex', gap: 10 }}>
                    <span
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            backgroundColor: '#fbbf24',
                        }}
                    />
                    <span
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            backgroundColor: '#22c55e',
                        }}
                    />
                    <span
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            backgroundColor: '#a855f7',
                        }}
                    />
                    <span
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            backgroundColor: '#ec4899',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
