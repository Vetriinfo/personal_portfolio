import WesternDivider from './WesternDivider';
import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ title, subtitle }) {
    return (
        <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    letterSpacing: '2px',
                    marginBottom: '0.5rem',
                }}>
                    {title}
                </h2>
                {subtitle && (
                    <p style={{
                        color: 'var(--color-cream-dark)',
                        fontSize: '1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        {subtitle}
                    </p>
                )}
                <WesternDivider />
            </div>
        </ScrollReveal>
    );
}
