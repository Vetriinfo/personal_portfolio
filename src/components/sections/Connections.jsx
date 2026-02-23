import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Modal from '../ui/Modal';

export default function Connections({ connections }) {
    const [selected, setSelected] = useState(null);

    if (!connections) return null;

    return (
        <section className="section section-leather" id="connections">
            <div className="container">
                <SectionHeader
                    title="Connection Detailing"
                    subtitle="Precision-engineered steel connections with complete bolt and weld details"
                />

                <div className="grid-3">
                    {connections.map((conn, i) => (
                        <ScrollReveal key={conn.id} delay={i * 0.1}>
                            <div className="card" onClick={() => setSelected(conn)}>
                                <img
                                    src={conn.images[0]}
                                    alt={conn.type}
                                    className="card-image"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/400x220/2b1d14/c4622d?text=${encodeURIComponent(conn.type)}`;
                                    }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{conn.type}</h3>
                                    <p className="card-desc">{conn.description.substring(0, 100)}...</p>
                                    <div style={{ marginTop: '0.75rem' }}>
                                        <p style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--color-rust-light)',
                                            fontWeight: 600,
                                        }}>
                                            {conn.boltDetails}
                                        </p>
                                    </div>
                                    <div className="card-tags">
                                        {conn.standards.split(', ').map((std, j) => (
                                            <span key={j} className="tag">{std}</span>
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
