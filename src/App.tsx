import './App.css';
import { Animation } from './components/Animation.tsx';
import Contact from './components/Contact.tsx';
import Experiences from './components/Experiences.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import { useApp } from './hooks/useApp.ts';

const App = () => {
  const { containerRef } = useApp();

  return (
    <div className="container" ref={containerRef}>
      <Animation />
      <Header containerRef={containerRef} />
      <main>
        <Hero />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
