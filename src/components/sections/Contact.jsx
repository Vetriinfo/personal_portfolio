import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact({ data }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    if (!data) return null;
    const { contact } = data;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contact.formAction && contact.formAction !== 'https://formspree.io/f/your-form-id') {
            try {
                await fetch(contact.formAction, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } catch (err) {
                // silently handle
            }
        }
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactLinks = [
        {
            icon: FaEnvelope,
            label: 'Email',
            href: `mailto:${contact.email}`,
            value: contact.email,
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            href: contact.linkedin,
            value: 'LinkedIn Profile',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            href: `https://wa.me/${contact.whatsapp?.replace(/\D/g, '')}`,
            value: contact.whatsapp,
        },
    ];

    return (
        <section className="section section-leather" id="contact">
            <div className="container">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Let's discuss your next steel project"
                />

                <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Contact Links */}
                    <ScrollReveal direction="left">
                        <div>
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.3rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-cream)',
                            }}>
                                Contact Info
                            </h3>
                            {contactLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        marginBottom: '0.75rem',
                                        background: 'var(--color-dark)',
                                        border: '1px solid rgba(196,98,45,0.2)',
                                        borderRadius: '6px',
                                        transition: 'all 0.3s',
                                        color: 'var(--color-cream)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-rust)';
                                        e.currentTarget.style.transform = 'translateX(6px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(196,98,45,0.2)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <link.icon style={{ fontSize: '1.4rem', color: 'var(--color-rust)' }} />
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{link.label}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-cream-dark)' }}>{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="right">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-textarea"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                <FaPaperPlane /> Send Message
                            </button>
                            {submitted && (
                                <p style={{
                                    marginTop: '1rem',
                                    textAlign: 'center',
                                    color: 'var(--color-rust-light)',
                                    fontWeight: 600,
                                }}>
                                    ✓ Message sent! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
