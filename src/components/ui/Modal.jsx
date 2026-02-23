import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function Modal({ isOpen, onClose, project }) {
    const [activeImage, setActiveImage] = useState(0);

    if (!isOpen || !project) return null;

    const images = project.images || [];

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        <IoClose />
                    </button>

                    {images.length > 0 && (
                        <>
                            <img
                                src={images[activeImage]}
                                alt={project.title}
                                className="modal-gallery"
                                onError={(e) => {
                                    e.target.src = `https://placehold.co/900x400/2b1d14/c4622d?text=${encodeURIComponent(project.title)}`;
                                }}
                            />
                            {images.length > 1 && (
                                <div className="modal-thumbs">
                                    {images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${project.title} ${i + 1}`}
                                            className={`modal-thumb ${i === activeImage ? 'active' : ''}`}
                                            onClick={() => setActiveImage(i)}
                                            onError={(e) => {
                                                e.target.src = `https://placehold.co/80x60/2b1d14/c4622d?text=${i + 1}`;
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    <div className="modal-body">
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            marginBottom: '0.75rem',
                            color: 'var(--color-cream)',
                        }}>
                            {project.title}
                        </h3>

                        {project.type && (
                            <p style={{ color: 'var(--color-rust-light)', marginBottom: '0.5rem', fontWeight: 600 }}>
                                {project.type}
                            </p>
                        )}

                        <p style={{
                            color: 'var(--color-cream-dark)',
                            lineHeight: '1.7',
                            marginBottom: '1rem',
                        }}>
                            {project.description}
                        </p>

                        {project.details && (
                            <p style={{
                                color: 'var(--color-cream-dark)',
                                lineHeight: '1.7',
                                marginBottom: '1rem',
                                fontStyle: 'italic',
                            }}>
                                {project.details}
                            </p>
                        )}

                        {project.boltDetails && (
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontFamily: 'var(--font-body)', color: 'var(--color-rust-light)', marginBottom: '0.3rem', fontWeight: 600 }}>
                                    Bolt Details
                                </h4>
                                <p style={{ color: 'var(--color-cream-dark)', fontSize: '0.9rem' }}>
                                    {project.boltDetails}
                                </p>
                            </div>
                        )}

                        {project.standards && (
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontFamily: 'var(--font-body)', color: 'var(--color-rust-light)', marginBottom: '0.3rem', fontWeight: 600 }}>
                                    Design Standards
                                </h4>
                                <p style={{ color: 'var(--color-cream-dark)', fontSize: '0.9rem' }}>
                                    {project.standards}
                                </p>
                            </div>
                        )}

                        {project.software && (
                            <div className="card-tags">
                                {project.software.map((sw, i) => (
                                    <span key={i} className="tag">{sw}</span>
                                ))}
                            </div>
                        )}

                        {project.tools && (
                            <div className="card-tags">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tag">{tool}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
