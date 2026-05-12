export function cursorValue(value: string) {
    return { 'data-cur': value };
}

export function Sticker({
    x,
    y,
    rotate = 0,
    bg,
    color = '#fff',
    children,
}: {
    x: string | number;
    y: string | number;
    rotate?: number;
    bg: string;
    color?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className="direction-b-sticker"
            style={{
                left: x,
                top: y,
                transform: `rotate(${rotate}deg)`,
                background: bg,
                color,
            }}
        >
            {children}
        </div>
    );
}
