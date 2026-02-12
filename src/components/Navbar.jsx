import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

            // Detect active section
            const sections = navLinks.map(l => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
        >
            {/* Scroll Progress Bar */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 2,
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00f0ff, #a855f7, #ec4899)',
                    transition: 'width 0.1s',
                    zIndex: 10,
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 24px',
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                    style={{
                        fontFamily: '"Orbitron", sans-serif',
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        letterSpacing: 3,
                        textDecoration: 'none',
                        background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    {'<N/>'}
                </a>

                {/* Desktop Links */}
                <div
                    style={{
                        display: 'flex',
                        gap: 32,
                        alignItems: 'center',
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            style={{
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                letterSpacing: 0.5,
                                color: activeSection === link.href.slice(1)
                                    ? '#00f0ff'
                                    : 'rgba(255,255,255,0.6)',
                                transition: 'color 0.3s',
                                position: 'relative',
                            }}
                            onMouseEnter={e => e.target.style.color = '#00f0ff'}
                            onMouseLeave={e => {
                                if (activeSection !== link.href.slice(1))
                                    e.target.style.color = 'rgba(255,255,255,0.6)';
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8,
                    }}
                    aria-label="Toggle menu"
                >
                    <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <span style={{
                            display: 'block', height: 2, background: '#00f0ff', borderRadius: 1,
                            transition: 'all 0.3s',
                            transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                        }} />
                        <span style={{
                            display: 'block', height: 2, background: '#00f0ff', borderRadius: 1,
                            transition: 'all 0.3s',
                            opacity: mobileOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', height: 2, background: '#00f0ff', borderRadius: 1,
                            transition: 'all 0.3s',
                            transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                        }} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    display: 'none',
                    position: 'absolute',
                    top: 70,
                    left: 0,
                    right: 0,
                    background: 'rgba(10, 10, 15, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    padding: mobileOpen ? '20px 0' : '0',
                    maxHeight: mobileOpen ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                }}
            >
                {navLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        style={{
                            display: 'block',
                            padding: '12px 24px',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            color: activeSection === link.href.slice(1) ? '#00f0ff' : 'rgba(255,255,255,0.6)',
                            transition: 'color 0.3s',
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .nav-mobile-menu { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
