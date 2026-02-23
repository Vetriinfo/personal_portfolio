import GoldDivider from './GoldDivider';
import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ title, subtitle }) {
    return (
        <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <h2 style={{
                    fontSize: '2.8rem',
                    letterSpacing: '1px',
                    marginBottom: '0.75rem',
                    color: 'var(--color-gold-light)',
                    textTransform: 'capitalize'
                }}>
                    {title}
                </h2>
                {subtitle && (
                    <p style={{
                        color: 'var(--color-cream-dark)',
                        fontSize: '1rem',
                        maxWidth: '650px',
                        margin: '0 auto 1.5rem',
                        opacity: 0.8
                    }}>
                        {subtitle}
                    </p>
                )}
                <GoldDivider />
            </div>
        </ScrollReveal>
    );
}

