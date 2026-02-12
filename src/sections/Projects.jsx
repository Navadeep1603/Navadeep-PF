const projects = [
    {
        title: 'Campus Connect',
        description: 'A full-featured campus networking platform with event management, student clubs, and real-time collaboration tools. Built with React and modern UI patterns.',
        tags: ['React', 'Node.js', 'CSS', 'JavaScript'],
        liveUrl: '#',
        githubUrl: 'https://github.com/navadeep',
        gradient: 'linear-gradient(135deg, #00f0ff22, #a855f722)',
        accent: '#00f0ff',
    },
    {
        title: 'Virtual Art Gallery',
        description: 'An immersive virtual art gallery web app featuring 3D tours, artist profiles, curated exhibitions, and role-based dashboards for admin, artist, and curator.',
        tags: ['React', 'Vite', 'Three.js', 'CSS'],
        liveUrl: '#',
        githubUrl: 'https://github.com/navadeep',
        gradient: 'linear-gradient(135deg, #a855f722, #ec489922)',
        accent: '#a855f7',
    },
    {
        title: 'Valentine Website',
        description: 'A romantic, animated celebration website with typewriter effects, floating hearts, particle animations, and interactive surprise moments.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: '#',
        githubUrl: 'https://github.com/navadeep',
        gradient: 'linear-gradient(135deg, #ec489922, #f43f5e22)',
        accent: '#ec4899',
    },
    {
        title: 'Developer Portfolio',
        description: 'This very portfolio — a futuristic, glassmorphic personal website with custom cursor effects, neon aesthetics, and smooth scroll animations.',
        tags: ['React', 'Tailwind CSS', 'Vite'],
        liveUrl: '#',
        githubUrl: 'https://github.com/navadeep',
        gradient: 'linear-gradient(135deg, #22d3ee22, #00f0ff22)',
        accent: '#22d3ee',
    },
    {
        title: 'CP Solutions Hub',
        description: 'A curated collection of competitive programming solutions with detailed explanations, time complexity analysis, and categorized by difficulty.',
        tags: ['C++', 'Python', 'Algorithms'],
        liveUrl: '#',
        githubUrl: 'https://github.com/navadeep',
        gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
        accent: '#f59e0b',
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: '120px 24px',
                maxWidth: 1100,
                margin: '0 auto',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="section-heading">Featured Projects</h2>
            </div>

            <div
                className="reveal"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 24,
                    marginTop: 20,
                }}
            >
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="glass card-hover"
                        style={{
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Preview Header */}
                        <div
                            style={{
                                height: 180,
                                background: project.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Decorative grid */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `
                    linear-gradient(${project.accent}11 1px, transparent 1px),
                    linear-gradient(90deg, ${project.accent}11 1px, transparent 1px)
                  `,
                                    backgroundSize: '30px 30px',
                                }}
                            />
                            {/* Icon */}
                            <div
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 16,
                                    background: 'rgba(10,10,15,0.6)',
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${project.accent}33`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    position: 'relative',
                                }}
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5">
                                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3
                                style={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,0.9)',
                                    marginBottom: 12,
                                    letterSpacing: 0.5,
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    lineHeight: 1.7,
                                    marginBottom: 20,
                                    flex: 1,
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: '4px 10px',
                                            borderRadius: 6,
                                            fontSize: '0.7rem',
                                            fontFamily: '"JetBrains Mono", monospace',
                                            background: `${project.accent}0d`,
                                            border: `1px solid ${project.accent}22`,
                                            color: project.accent,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: 12 }}>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        padding: '8px 16px',
                                        borderRadius: 8,
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        background: `${project.accent}15`,
                                        color: project.accent,
                                        textDecoration: 'none',
                                        border: `1px solid ${project.accent}22`,
                                        transition: 'all 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = `${project.accent}25`;
                                        e.currentTarget.style.borderColor = `${project.accent}44`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = `${project.accent}15`;
                                        e.currentTarget.style.borderColor = `${project.accent}22`;
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        padding: '8px 16px',
                                        borderRadius: 8,
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        background: 'rgba(255,255,255,0.04)',
                                        color: 'rgba(255,255,255,0.5)',
                                        textDecoration: 'none',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        transition: 'all 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
