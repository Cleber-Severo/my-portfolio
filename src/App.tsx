import './App.css';
import { Animation } from './components/common/Animation.tsx';
import Contact from './components/sections/Contact.tsx';
import Experiences from './components/sections/Experiences.tsx';
import Footer from './components/layout/Footer.tsx';
import Header from './components/layout/Header.tsx';
import Hero from './components/sections/Hero.tsx';
import Projects from './components/sections/Projects.tsx';
import { useApp } from './hooks/useApp.ts';
import './i18n/config.ts';

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
