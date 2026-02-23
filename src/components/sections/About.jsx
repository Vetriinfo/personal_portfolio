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
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                        }}>
                            {about.description}
                        </p>
                    </ScrollReveal>

                    <div>
                        {about.highlights.map((item, i) => {
                            const IconComp = iconMap[item.icon] || FaCubes;
                            return (
                                <ScrollReveal key={i} delay={i * 0.15} direction="right">
                                    <div className="about-stat">
                                        <IconComp className="about-stat-icon" />
                                        <div className="about-stat-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
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
