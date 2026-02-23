import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndustry, FaBuilding, FaWarehouse, FaProjectDiagram } from 'react-icons/fa';
import { GiOilPump } from 'react-icons/gi';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Modal from '../ui/Modal';

const categoryIcons = {
    'Industrial': FaIndustry,
    'PEB': FaWarehouse,
    'Commercial': FaBuilding,
    'Pipe Racks': GiOilPump,
    'default': FaProjectDiagram
};

export default function Portfolio({ projects }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = useMemo(() => {
        if (!projects) return ['All'];
        const cats = [...new Set(projects.map((p) => p.category))];
        return ['All', ...cats];
    }, [projects]);

    const filtered = useMemo(() => {
        if (!projects) return [];
        if (activeCategory === 'All') return projects;
        return projects.filter((p) => p.category === activeCategory);
    }, [projects, activeCategory]);

    if (!projects) return null;

    return (
        <section className="section section-dark" id="portfolio">
            <div className="container">
                <SectionHeader
                    title="Tekla Modeling Portfolio"
                    subtitle="Architectural precision across diverse industrial and commercial sectors"
                />

                <ScrollReveal>
                    <div className="filter-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <motion.div className="grid-3" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => {
                            const Icon = categoryIcons[project.category] || categoryIcons.default;
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="card"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="card-image"
                                            onError={(e) => {
                                                e.target.src = `https://placehold.co/400x240/120e0c/cd7f32?text=${encodeURIComponent(project.title)}`;
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
                                            <Icon />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                            <span className="tag">{project.category}</span>
                                        </div>
                                        <h3 className="card-title">{project.title}</h3>
                                        <p className="card-desc">{project.description.substring(0, 90)}...</p>
                                        <div className="card-tags">
                                            {project.software.map((sw, j) => (
                                                <span key={j} className="tag" style={{ border: 'none', background: 'rgba(255,255,255,0.05)', color: 'var(--color-cream-dark)' }}>
                                                    {sw}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}

