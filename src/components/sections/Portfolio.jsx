import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Modal from '../ui/Modal';

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
                    subtitle="Precision steel modeling across diverse project types"
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
                        {filtered.map((project, i) => (
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
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="card-image"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/400x220/2b1d14/c4622d?text=${encodeURIComponent(project.title)}`;
                                    }}
                                />
                                <div className="card-body">
                                    <span className="tag" style={{ marginBottom: '8px', display: 'inline-block' }}>
                                        {project.category}
                                    </span>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-desc">{project.description.substring(0, 100)}...</p>
                                    <div className="card-tags">
                                        {project.software.map((sw, j) => (
                                            <span key={j} className="tag">{sw}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
