import { motion } from 'framer-motion';
import { FaEye, FaRobot, FaDownload, FaEnvelope } from 'react-icons/fa';

export default function Hero({ data }) {
    if (!data) return null;
    const { profile, hero } = data;

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero">
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.img
                    src={profile.photo}
                    alt={profile.name}
                    className="hero-photo"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: 'spring', damping: 15 }}
                    onError={(e) => {
                        e.target.src = `https://placehold.co/160x160/2b1d14/c4622d?text=${encodeURIComponent(profile.name.charAt(0))}`;
                    }}
                />

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {profile.name}
                </motion.h1>

                <motion.p
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    {profile.title}
                </motion.p>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    {profile.tagline}
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                >
                    <button className="btn btn-primary" onClick={() => scrollTo('#portfolio')}>
                        <FaEye /> View Projects
                    </button>
                    <button className="btn btn-outline" onClick={() => scrollTo('#automation')}>
                        <FaRobot /> Automation Tools
                    </button>
                    <a href={data.resume?.pdfPath || '/resume.pdf'} download className="btn btn-outline">
                        <FaDownload /> Download Resume
                    </a>
                    <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
                        <FaEnvelope /> Contact Me
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
