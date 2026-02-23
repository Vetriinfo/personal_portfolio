import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Connections', href: '#connections' },
    { label: 'Automation', href: '#automation' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <a href="#" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    ⚙ PORTFOLIO
                </a>

                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <button className="nav-link" onClick={() => scrollTo(item.href)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    className={`hamburger ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="mobile-nav-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            className="mobile-nav open"
                            initial={{ x: 280 }}
                            animate={{ x: 0 }}
                            exit={{ x: 280 }}
                            transition={{ type: 'spring', damping: 25 }}
                        >
                            <ul className="mobile-nav-links">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <button className="mobile-nav-link" onClick={() => scrollTo(item.href)}>
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
