import { FaArrowRight, FaClock } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

export default function Automations({ automations }) {
    if (!automations) return null;

    return (
        <section className="section section-dark" id="automation">
            <div className="container">
                <SectionHeader
                    title="Automation Projects"
                    subtitle="Custom tools and scripts that supercharge structural engineering workflows"
                />

                <div className="grid-2">
                    {automations.map((auto, i) => (
                        <ScrollReveal key={auto.id} delay={i * 0.1}>
                            <div className="card" style={{ cursor: 'default' }}>
                                <img
                                    src={auto.image}
                                    alt={auto.title}
                                    className="card-image"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/400x220/2b1d14/c4622d?text=${encodeURIComponent(auto.title)}`;
                                    }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{auto.title}</h3>
                                    <p className="card-desc">{auto.description}</p>

                                    {/* Workflow diagram */}
                                    <div className="workflow-steps">
                                        {auto.workflow.map((step, j) => (
                                            <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span className="workflow-step">{step}</span>
                                                {j < auto.workflow.length - 1 && (
                                                    <FaArrowRight className="workflow-arrow" />
                                                )}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Input / Output */}
                                    <div style={{ margin: '1rem 0', fontSize: '0.85rem' }}>
                                        <p style={{ color: 'var(--color-cream-dark)', marginBottom: '0.3rem' }}>
                                            <strong style={{ color: 'var(--color-rust-light)' }}>Input:</strong>{' '}
                                            {auto.inputOutput.input}
                                        </p>
                                        <p style={{ color: 'var(--color-cream-dark)' }}>
                                            <strong style={{ color: 'var(--color-rust-light)' }}>Output:</strong>{' '}
                                            {auto.inputOutput.output}
                                        </p>
                                    </div>

                                    {/* Time Saved Badge */}
                                    <div className="time-saved-badge">
                                        <FaClock /> {auto.timeSaved}
                                    </div>

                                    {/* Tools */}
                                    <div className="card-tags" style={{ marginTop: '0.75rem' }}>
                                        {auto.tools.map((tool, j) => (
                                            <span key={j} className="tag">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
