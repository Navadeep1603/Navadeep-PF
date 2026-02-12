import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open mailto with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.open(`mailto:navadeep@gmail.com?subject=${subject}&body=${body}`, '_blank');
    };

    const contactInfo = [
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            label: 'Email',
            value: 'navadeep@gmail.com',
            href: 'mailto:navadeep@gmail.com',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/navadeep',
            href: 'https://linkedin.com/in/navadeep',
        },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/navadeep',
            href: 'https://github.com/navadeep',
        },
    ];

    const inputStyle = (field) => ({
        width: '100%',
        padding: '14px 18px',
        borderRadius: 12,
        border: `1px solid ${focused === field ? 'rgba(0,240,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
        background: 'rgba(255,255,255,0.03)',
        color: '#e2e8f0',
        fontSize: '0.9rem',
        fontFamily: '"Inter", sans-serif',
        outline: 'none',
        transition: 'all 0.3s',
        boxShadow: focused === field ? '0 0 20px rgba(0,240,255,0.08)' : 'none',
    });

    return (
        <section
            id="contact"
            style={{
                padding: '120px 24px',
                maxWidth: 1000,
                margin: '0 auto',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="section-heading">Get In Touch</h2>
            </div>

            <div
                className="reveal"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 40,
                    marginTop: 20,
                }}
            >
                {/* Contact Info */}
                <div>
                    <p
                        style={{
                            fontSize: '1rem',
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: 1.8,
                            marginBottom: 32,
                        }}
                    >
                        I'm always open to new opportunities, collaborations, or just a friendly conversation.
                        Feel free to reach out!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {contactInfo.map(info => (
                            <a
                                key={info.label}
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 16,
                                    padding: '18px 20px',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)';
                                    e.currentTarget.style.transform = 'translateX(8px)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.08)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        background: 'rgba(0,240,255,0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#00f0ff',
                                        flexShrink: 0,
                                    }}
                                >
                                    {info.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                                        {info.label}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                                        {info.value}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="glass"
                    style={{ padding: '32px' }}
                >
                    <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase' }}>
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            style={inputStyle('name')}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase' }}>
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            style={inputStyle('email')}
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div style={{ marginBottom: 24 }}>
                        <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase' }}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                            style={{
                                ...inputStyle('message'),
                                minHeight: 130,
                                resize: 'vertical',
                            }}
                            placeholder="Tell me about your project or idea..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                            Send Message
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
}
