import { useState, useEffect } from 'react';

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const isMobile = window.matchMedia('(pointer: coarse)').matches;
        if (isMobile) return;

        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleLeave = () => setVisible(false);
        const handleEnter = () => setVisible(true);

        window.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseleave', handleLeave);
        document.addEventListener('mouseenter', handleEnter);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseleave', handleLeave);
            document.removeEventListener('mouseenter', handleEnter);
        };
    }, [visible]);

    return (
        <div
            style={{
                position: 'fixed',
                top: pos.y - 200,
                left: pos.x - 200,
                width: 400,
                height: 400,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 9998,
                transition: 'opacity 0.3s',
                opacity: visible ? 1 : 0,
            }}
        />
    );
}
