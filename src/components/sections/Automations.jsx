import { FaArrowRight, FaClock, FaCogs } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

export default function Automations({ automations }) {
    if (!automations) return null;

    return (
        <section className="section section-leather" id="automation">
            <div className="container">
                <SectionHeader
                    title="Automation Projects"
                    subtitle="Architectural engineering supercharged by custom algorithmic tools"
                />

                <div className="grid-2">
                    {automations.map((auto, i) => (
                        <ScrollReveal key={auto.id} delay={i * 0.1}>
                            <div className="card" style={{ cursor: 'default' }}>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={auto.image}
                                        alt={auto.title}
                                        className="card-image"
                                        onError={(e) => {
                                            e.target.src = `https://placehold.co/400x240/120e0c/cd7f32?text=${encodeURIComponent(auto.title)}`;
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(4px)',
                                        padding: '8px',
                                        borderRadius: '12px',
                                        color: 'white',
                                        fontSize: '1.2rem',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}>
                                        <FaCogs />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{auto.title}</h3>
                                    <p className="card-desc" style={{ marginBottom: '1.5rem' }}>{auto.description}</p>

                                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(205, 127, 50, 0.1)', marginBottom: '1.5rem' }}>
                                        <div className="workflow-steps">
                                            {auto.workflow.map((step, j) => (
                                                <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <span className="workflow-step" style={{ background: 'var(--color-dark)', border: '1px solid var(--color-bronze)', color: 'var(--color-gold-light)' }}>
                                                        {step}
                                                    </span>
                                                    {j < auto.workflow.length - 1 && (
                                                        <FaArrowRight style={{ color: 'var(--color-bronze)', fontSize: '0.8rem' }} />
                                                    )}
                                                </span>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                                            <p style={{ color: 'var(--color-cream-dark)', marginBottom: '0.4rem' }}>
                                                <strong style={{ color: 'var(--color-gold)' }}>Input:</strong> {auto.inputOutput.input}
                                            </p>
                                            <p style={{ color: 'var(--color-cream-dark)' }}>
                                                <strong style={{ color: 'var(--color-gold)' }}>Output:</strong> {auto.inputOutput.output}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="time-saved-badge" style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-gold-light)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                            <FaClock /> {auto.timeSaved}
                                        </div>
                                        <div className="card-tags">
                                            {auto.tools.map((tool, j) => (
                                                <span key={j} className="tag" style={{ border: 'none', background: 'rgba(255,255,255,0.05)', color: 'var(--color-cream-dark)' }}>
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
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

