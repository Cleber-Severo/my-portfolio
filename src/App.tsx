import './App.css';
import { Animation } from './components/Animation';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { useApp } from './hooks/useApp';

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
