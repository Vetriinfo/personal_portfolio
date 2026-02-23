import { useContentData } from './hooks/useContentData';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Connections from './components/sections/Connections';
import Automations from './components/sections/Automations';
import TechStack from './components/sections/TechStack';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const { siteConfig, projects, connections, automations, techStack, loading, error } = useContentData();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-dark)',
        color: 'var(--color-cream)',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--color-leather)',
            borderTop: '3px solid var(--color-rust)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem',
          }} />
          Loading...
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-dark)',
        color: 'var(--color-rust)',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.2rem',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <div>
          <p>⚠ Error loading content</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-cream-dark)', marginTop: '0.5rem' }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <Hero data={siteConfig} />
      <About data={siteConfig} />
      <Portfolio projects={projects} />
      <Connections connections={connections} />
      <Automations automations={automations} />
      <TechStack techStack={techStack} />
      <Resume data={siteConfig} />
      <Contact data={siteConfig} />
      <Footer data={siteConfig} />
    </>
  );
}

export default App;





