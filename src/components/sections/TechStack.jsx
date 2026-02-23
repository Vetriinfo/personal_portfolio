import {
    SiPython,
    SiAutocad,
} from 'react-icons/si';
import { FaCogs, FaFileExcel, FaCode } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap = {
    tekla: FaCogs,
    autocad: SiAutocad,
    python: SiPython,
    csharp: FaCode,
    api: FaCode,
    excel: FaFileExcel,
};


export default function TechStack({ techStack }) {
    if (!techStack) return null;

    return (
        <section className="section section-leather" id="techstack">
            <div className="container">
                <SectionHeader
                    title="Software & Tech Stack"
                    subtitle="Advanced technical capabilities powering industrial ingenuity"
                />

                <ScrollReveal>
                    <div className="grid-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {techStack.map((tech, i) => {
                            const IconComp = iconMap[tech.icon] || FaCogs;
                            return (
                                <div key={i} className="tech-icon-card" style={{ background: 'var(--color-dark-alt)', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                                    <IconComp style={{ color: 'var(--color-bronze)', fontSize: '2.8rem' }} />
                                    <span className="tech-icon-name" style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>{tech.name}</span>
                                    <div style={{
                                        width: '100%',
                                        height: '6px',
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        borderRadius: '50px',
                                        overflow: 'hidden',
                                        marginTop: '8px'
                                    }}>
                                        <div style={{
                                            width: `${tech.proficiency}%`,
                                            height: '100%',
                                            background: 'linear-gradient(90deg, var(--color-bronze-dark), var(--color-gold))',
                                            borderRadius: '50px',
                                            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

