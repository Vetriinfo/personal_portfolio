import { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Modal from '../ui/Modal';

export default function Connections({ connections }) {
    const [selected, setSelected] = useState(null);

    if (!connections) return null;

    return (
        <section className="section section-dark" id="connections">
            <div className="container">
                <SectionHeader
                    title="Connection Detailing"
                    subtitle="Precision-engineered steel connections with complete bolt and weld details"
                />

                <div className="grid-3">
                    {connections.map((conn, i) => (
                        <ScrollReveal key={conn.id} delay={i * 0.1}>
                            <div className="card" onClick={() => setSelected(conn)}>
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={conn.images[0]}
                                        alt={conn.type}
                                        className="card-image"
                                        onError={(e) => {
                                            e.target.src = `https://placehold.co/400x240/120e0c/cd7f32?text=${encodeURIComponent(conn.type)}`;
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
                                        <FaProjectDiagram />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">{conn.type}</h3>
                                    <p className="card-desc">{conn.description.substring(0, 90)}...</p>
                                    <div style={{ margin: '1rem 0' }}>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--color-bronze-light)',
                                            fontWeight: 600,
                                            background: 'rgba(205, 127, 50, 0.1)',
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            display: 'inline-block'
                                        }}>
                                            {conn.boltDetails}
                                        </p>
                                    </div>
                                    <div className="card-tags">
                                        {conn.standards.split(', ').map((std, j) => (
                                            <span key={j} className="tag" style={{ border: 'none', background: 'rgba(255,255,255,0.05)', color: 'var(--color-cream-dark)' }}>
                                                {std}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selected}
                onClose={() => setSelected(null)}
                project={selected ? { ...selected, title: selected.type } : null}
            />
        </section>
    );
}

