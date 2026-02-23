import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import GoldDivider from '../ui/GoldDivider';

export default function Footer({ data }) {
    const year = new Date().getFullYear();
    const name = data?.profile?.name || 'Portfolio';

    return (
        <footer className="footer">
            <GoldDivider />

            <p className="footer-text">
                © {year} {name}. All Rights Reserved.
            </p>
            <p className="footer-text" style={{ marginTop: '0.3rem', fontSize: '0.75rem' }}>
                Tekla Modeler | Steel Detailer | Automation Developer
            </p>
            <div className="footer-links">
                {data?.contact?.linkedin && (
                    <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                )}
                {data?.contact?.email && (
                    <a href={`mailto:${data.contact.email}`} className="footer-link" aria-label="Email">
                        <FaEnvelope />
                    </a>
                )}
                <a href="#" className="footer-link" aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>
        </footer>
    );
}
