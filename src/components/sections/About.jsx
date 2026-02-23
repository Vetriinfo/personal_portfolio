import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { FaCubes, FaLink, FaCode, FaIndustry } from 'react-icons/fa';

const iconMap = {
    cube: FaCubes,
    link: FaLink,
    code: FaCode,
    industry: FaIndustry,
};

export default function About({ data }) {
    if (!data) return null;
    const { about } = data;

    return (
        <section className="section section-leather" id="about">
            <div className="container">
                <SectionHeader title={about.heading} />

                <div className="about-grid">
                    <ScrollReveal direction="left">
                        <p style={{
                            color: 'var(--color-cream-dark)',
                            fontSize: '1.1rem',
                            lineHeight: '1.9',
                            opacity: 0.9
                        }}>
                            {about.description}
                        </p>
                    </ScrollReveal>

                    <div>
                        {about.highlights.map((item, i) => {
                            const IconComp = iconMap[item.icon] || FaCubes;
                            return (
                                <ScrollReveal key={i} delay={i * 0.15} direction="right">
                                    <div className="about-stat" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            background: 'rgba(205, 127, 50, 0.1)',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            marginRight: '1.5rem',
                                            color: 'var(--color-bronze)'
                                        }}>
                                            <IconComp size={24} />
                                        </div>
                                        <div className="about-stat-text">
                                            <h4 style={{ color: 'var(--color-gold-light)', marginBottom: '0.25rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--color-cream-dark)', fontSize: '0.9rem' }}>{item.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

