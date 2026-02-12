import { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setFadeOut(true), 300);
                    setTimeout(() => onComplete(), 800);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0a0f',
                transition: 'opacity 0.5s ease, visibility 0.5s ease',
                opacity: fadeOut ? 0 : 1,
                visibility: fadeOut ? 'hidden' : 'visible',
            }}
        >
            {/* Animated rings */}
            <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 40 }}>
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid rgba(0, 240, 255, 0.15)',
                        borderTop: '2px solid #00f0ff',
                        borderRadius: '50%',
                        animation: 'spin-slow 1.5s linear infinite',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 15,
                        border: '2px solid rgba(168, 85, 247, 0.15)',
                        borderBottom: '2px solid #a855f7',
                        borderRadius: '50%',
                        animation: 'spin-slow 2s linear infinite reverse',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 30,
                        border: '2px solid rgba(236, 72, 153, 0.15)',
                        borderTop: '2px solid #ec4899',
                        borderRadius: '50%',
                        animation: 'spin-slow 1s linear infinite',
                    }}
                />
                {/* Center dot */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#00f0ff',
                        boxShadow: '0 0 15px #00f0ff, 0 0 30px rgba(0,240,255,0.5)',
                        animation: 'pulse-glow 1.5s ease infinite',
                    }}
                />
            </div>

            {/* Name */}
            <h1
                style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '6px',
                    background: 'linear-gradient(135deg, #00f0ff, #a855f7, #ec4899)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease infinite',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 24,
                }}
            >
                NAVADEEP
            </h1>

            {/* Progress bar */}
            <div
                style={{
                    width: 200,
                    height: 2,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 1,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: `${Math.min(progress, 100)}%`,
                        background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                        borderRadius: 1,
                        transition: 'width 0.15s ease',
                        boxShadow: '0 0 10px #00f0ff',
                    }}
                />
            </div>

            <p
                style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: 12,
                    letterSpacing: 2,
                }}
            >
                {Math.min(Math.round(progress), 100)}%
            </p>
        </div>
    );
}
