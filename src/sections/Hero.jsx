import { useState, useEffect, useRef } from 'react';

const roles = [
    'Full-Stack Developer',
    'Competitive Programmer',
    'React Enthusiast',
    'Problem Solver',
    'UI/UX Explorer',
];

function TypingAnimation() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const current = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        timeoutRef.current = setTimeout(() => {
            if (!isDeleting) {
                setText(current.slice(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setText(current.slice(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeoutRef.current);
    }, [text, isDeleting, roleIndex]);

    return (
        <span style={{ color: '#00f0ff' }}>
            {text}
            <span
                style={{
                    borderRight: '2px solid #00f0ff',
                    marginLeft: 2,
                    animation: 'typing-cursor 0.8s step-end infinite',
                }}
            >
                &nbsp;
            </span>
        </span>
    );
}

function Particle({ index }) {
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    const colors = ['#00f0ff', '#a855f7', '#ec4899'];
    const color = colors[index % 3];

    return (
        <div
            style={{
                position: 'absolute',
                bottom: -20,
                left: `${left}%`,
                width: size,
                height: size,
                borderRadius: '50%',
                background: color,
                opacity: 0.3,
                animation: `particle-float ${duration}s linear ${delay}s infinite`,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                pointerEvents: 'none',
            }}
        />
    );
}

export default function Hero() {
    const socials = [
        {
            label: 'GitHub',
            href: 'https://github.com/navadeep',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/navadeep',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: 'Email',
            href: 'mailto:challanavadeep8@gmail.com',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 24px',
            }}
        >
            {/* Particles */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {Array.from({ length: 20 }, (_, i) => (
                    <Particle key={i} index={i} />
                ))}
            </div>

            {/* Decorative grid */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    textAlign: 'center',
                    maxWidth: 800,
                    position: 'relative',
                    zIndex: 1,
                    animation: 'slide-up 1s ease-out',
                }}
            >
                {/* Greeting */}
                <p
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.9rem',
                        color: '#00f0ff',
                        letterSpacing: 3,
                        marginBottom: 16,
                        opacity: 0.8,
                    }}
                >
                    {'// Hello World, I\'m'}
                </p>

                {/* Name */}
                <h1
                    style={{
                        fontFamily: '"Orbitron", sans-serif',
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: 20,
                    }}
                >
                    <span className="gradient-text">NAVADEEP</span>
                </h1>

                {/* Typing animation */}
                <h2
                    style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: 32,
                        minHeight: '2em',
                    }}
                >
                    I'm a <TypingAnimation />
                </h2>

                {/* Description */}
                <p
                    style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: 550,
                        margin: '0 auto 40px',
                        lineHeight: 1.8,
                    }}
                >
                    Crafting modern web experiences with clean code, creative design, and a
                    passion for solving complex problems.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
                    <a href="#projects" className="btn-primary" onClick={e => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <span>View Projects</span>
                    </a>
                    <a href="#contact" className="btn-outline" onClick={e => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Get in Touch
                    </a>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
                    {socials.map(s => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.4)',
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = '#00f0ff';
                                e.currentTarget.style.borderColor = 'rgba(0,240,255,0.4)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,240,255,0.15)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            aria-label={s.label}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    animation: 'float 3s ease infinite',
                }}
            >
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: 2 }}>SCROLL</span>
                <div
                    style={{
                        width: 20,
                        height: 32,
                        borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 6,
                    }}
                >
                    <div
                        style={{
                            width: 3,
                            height: 8,
                            borderRadius: 2,
                            background: '#00f0ff',
                            animation: 'float 2s ease infinite',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
