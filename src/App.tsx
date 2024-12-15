import { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the scrollable container

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${entry.target.id}`
              );
            });
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 0);
      }
    };
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <a href="#section1">Home</a>
        <a href="#section2">Projetos</a>
        <a href="#section3">Experiences</a>
        <a href="#section4">Contact me</a>
      </nav>
      <div className="container" ref={containerRef}>
        <section id="section1" style={{ backgroundColor: '#f0f8ff' }}>
          <h1>Home SSection</h1>
        </section>
        <section id="section2" style={{ backgroundColor: '#faebd7' }}>
          <h1>Projetos Section</h1>
        </section>
        <section id="section3" style={{ backgroundColor: '#e0ffff' }}>
          <h1>Experiences Section</h1>
        </section>
        <section id="section4" style={{ backgroundColor: '#e0ffff' }}>
          <h1>Contact me section</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
