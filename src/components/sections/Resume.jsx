import { FaDownload, FaFileAlt } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';

export default function Resume({ data }) {
    if (!data) return null;

    const pdfPath = data.resume?.pdfPath || '/resume.pdf';

    return (
        <section className="section section-dark" id="resume">
            <div className="container">
                <SectionHeader
                    title="Resume"
                    subtitle="Download or preview my professional resume"
                />

                <ScrollReveal>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <a
                            href={pdfPath}
                            download
                            className="btn btn-primary"
                            style={{ display: 'inline-flex' }}
                        >
                            <FaDownload /> Download Resume PDF
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div style={{
                        position: 'relative',
                        border: '2px solid var(--color-rust)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: 'var(--color-leather)',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 16px',
                            background: 'var(--color-dark)',
                            borderBottom: '1px solid rgba(196,98,45,0.3)',
                        }}>
                            <FaFileAlt style={{ color: 'var(--color-rust)' }} />
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-cream-dark)' }}>
                                resume.pdf
                            </span>
                        </div>
                        <iframe
                            src={pdfPath}
                            className="resume-viewer"
                            title="Resume Preview"
                            style={{ border: 'none', display: 'block' }}
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--color-cream-dark)',
                    }}>
                        💡 To update: replace the <code style={{ color: 'var(--color-rust-light)' }}>public/resume.pdf</code> file and refresh the page.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
