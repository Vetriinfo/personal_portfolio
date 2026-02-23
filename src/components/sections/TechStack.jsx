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
                    subtitle="Tools and technologies I work with every day"
                />

                <ScrollReveal>
                    <div className="grid-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {techStack.map((tech, i) => {
                            const IconComp = iconMap[tech.icon] || FaCogs;
                            return (
                                <div key={i} className="tech-icon-card">
                                    <IconComp className="tech-icon" />
                                    <span className="tech-icon-name">{tech.name}</span>
                                    <div style={{
                                        width: '100%',
                                        height: '4px',
                                        backgroundColor: 'var(--color-dark)',
                                        borderRadius: '2px',
                                        overflow: 'hidden',
                                    }}>
                                        <div style={{
                                            width: `${tech.proficiency}%`,
                                            height: '100%',
                                            background: 'linear-gradient(90deg, var(--color-rust-dark), var(--color-rust-light))',
                                            borderRadius: '2px',
                                            transition: 'width 1s ease',
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
