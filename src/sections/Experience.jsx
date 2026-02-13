const timelineItems = [
    {
        year: '2025',
        title: 'Campus Connect Platform',
        description: 'Built and deployed a full-featured campus networking website with event management, club pages, and real-time collaboration features.',
        type: 'project',
        icon: '🚀',
    },
    {
        year: '2025',
        title: 'Virtual Art Gallery',
        description: 'Developed an immersive virtual gallery with 3D tours, role-based dashboards, and curated exhibitions using React and Three.js.',
        type: 'project',
        icon: '🎨',
    },
    {
        year: '2024',
        title: '300+ Competitive Programming Problems',
        description: 'Solved over 300 problems across platforms like LeetCode and Codeforces, strengthening algorithmic thinking and data structure expertise.',
        type: 'achievement',
        icon: '🏆',
    },
    ,
    {
        year: '2024',
        title: 'Competitive Programming Start',
        description: 'Started competitive programming with C/C++, learning core algorithms, data structures, and problem-solving techniques.',
        type: 'learning',
        icon: '💡',
    },
    {
        year: '2024',
        title: 'College Journey Begins',
        description: 'Started pursuing computer science degree with a passion for coding, web development, and software engineering.',
        type: 'education',
        icon: '🎓',
    },
];

const typeColors = {
    project: '#00f0ff',
    achievement: '#f59e0b',
    learning: '#a855f7',
    education: '#22d3ee',
};

export default function Experience() {
    return (
        <section
            id="experience"
            style={{
                padding: '120px 24px',
                maxWidth: 800,
                margin: '0 auto',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="section-heading">Experience & Journey</h2>
            </div>

            <div className="reveal" style={{ position: 'relative', marginTop: 20 }}>
                {/* Timeline line */}
                <div
                    style={{
                        position: 'absolute',
                        left: 24,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: 'linear-gradient(to bottom, #00f0ff33, #a855f733, #ec489933, transparent)',
                    }}
                />

                {timelineItems.map((item, index) => (
                    <div
                        key={index}
                        className="reveal"
                        style={{
                            display: 'flex',
                            gap: 24,
                            marginBottom: 40,
                            position: 'relative',
                        }}
                    >
                        {/* Dot */}
                        <div
                            style={{
                                flexShrink: 0,
                                width: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: 4,
                            }}
                        >
                            <div
                                style={{
                                    width: 14,
                                    height: 14,
                                    borderRadius: '50%',
                                    border: `2px solid ${typeColors[item.type]}`,
                                    background: `${typeColors[item.type]}22`,
                                    boxShadow: `0 0 12px ${typeColors[item.type]}33`,
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            />
                        </div>

                        {/* Card */}
                        <div
                            className="glass card-hover"
                            style={{
                                padding: '24px',
                                flex: 1,
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                                <span
                                    style={{
                                        fontFamily: '"JetBrains Mono", monospace',
                                        fontSize: '0.75rem',
                                        padding: '3px 10px',
                                        borderRadius: 6,
                                        background: `${typeColors[item.type]}11`,
                                        border: `1px solid ${typeColors[item.type]}22`,
                                        color: typeColors[item.type],
                                    }}
                                >
                                    {item.year}
                                </span>
                                <span
                                    style={{
                                        fontSize: '0.65rem',
                                        padding: '2px 8px',
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.04)',
                                        color: 'rgba(255,255,255,0.3)',
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                    }}
                                >
                                    {item.type}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,0.9)',
                                    marginBottom: 8,
                                    letterSpacing: 0.3,
                                }}
                            >
                                {item.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    lineHeight: 1.7,
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
