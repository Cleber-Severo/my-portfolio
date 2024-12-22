import './App.css';
import { Animation } from './components/Animation';
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
        <section id="resume">
          <h1>Experiences Section</h1>
        </section>
        <section id="contact">
          <h1>Contact me section</h1>
        </section>
      </main>
    </div>
  );
};

export default App;
