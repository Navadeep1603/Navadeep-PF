import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, label, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = Math.max(1, Math.floor(target / 60));
                    const interval = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(start);
                        }
                    }, 30);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} style={{ textAlign: 'center' }}>
            <div
                style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: '#00f0ff',
                    textShadow: '0 0 20px rgba(0,240,255,0.3)',
                    lineHeight: 1,
                    marginBottom: 8,
                }}
            >
                {count}{suffix}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase' }}>
                {label}
            </div>
        </div>
    );
}

function SkillBar({ name, percentage }) {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setWidth(percentage);
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div ref={ref} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>{name}</span>
                <span style={{ fontSize: '0.8rem', color: '#00f0ff', fontFamily: '"JetBrains Mono", monospace' }}>{percentage}%</span>
            </div>
            <div
                style={{
                    height: 4,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: `${width}%`,
                        background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                        borderRadius: 2,
                        transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 0 10px rgba(0,240,255,0.3)',
                    }}
                />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: '120px 24px',
                maxWidth: 1100,
                margin: '0 auto',
                position: 'relative',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="section-heading">About Me</h2>
            </div>

            <div
                className="reveal"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 48,
                    marginTop: 20,
                }}
            >
                {/* Bio Card */}
                <div
                    className="glass"
                    style={{ padding: '40px 36px' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
                        <div>
                            <h3
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    color: '#00f0ff',
                                    marginBottom: 20,
                                    letterSpacing: 1,
                                }}
                            >
                                Who am I?
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                                I'm a passionate full-stack developer and competitive programmer with a deep love for building
                                modern web applications. Currently pursuing my degree, I spend my time crafting clean,
                                efficient code and exploring cutting-edge technologies.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontSize: '0.95rem', marginTop: 16 }}>
                                My journey spans from building real-world web platforms like Campus Connect to solving
                                algorithmic challenges. I believe in writing code that's not just functional, but
                                elegant and maintainable.
                            </p>

                            {/* Quick info tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                                {['🎓 Student', '💻 Developer', '🧩 Problem Solver', '🎨 UI Enthusiast'].map(tag => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: '6px 14px',
                                            borderRadius: 20,
                                            fontSize: '0.75rem',
                                            background: 'rgba(0,240,255,0.06)',
                                            border: '1px solid rgba(0,240,255,0.15)',
                                            color: 'rgba(255,255,255,0.6)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Skill Bars */}
                        <div>
                            <h3
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    color: '#a855f7',
                                    marginBottom: 20,
                                    letterSpacing: 1,
                                }}
                            >
                                Proficiency
                            </h3>
                            <SkillBar name="React / JavaScript" percentage={90} />
                            <SkillBar name="HTML / CSS" percentage={95} />
                            <SkillBar name="Node.js" percentage={75} />
                            <SkillBar name="C / C++" percentage={80} />
                            <SkillBar name="Python" percentage={70} />
                            <SkillBar name="Git & GitHub" percentage={85} />
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: 24,
                    }}
                >
                    {[
                        { target: 10, label: 'Projects Built', suffix: '+' },
                        { target: 15, label: 'GitHub Repos', suffix: '+' },
                        { target: 300, label: 'Problems Solved', suffix: '+' },
                        { target: 5, label: 'Technologies', suffix: '+' },
                    ].map(stat => (
                        <div
                            key={stat.label}
                            className="glass card-hover"
                            style={{ padding: '32px 20px' }}
                        >
                            <AnimatedCounter {...stat} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
