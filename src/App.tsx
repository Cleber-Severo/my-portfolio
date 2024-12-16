import './App.css';
import { Animation } from './components/Animation';
import Header from './components/Header';
import Hero from './components/Hero';
import { useApp } from './hooks/useApp';

const App = () => {
  const { containerRef } = useApp();

  return (
    <div className="container" ref={containerRef}>
      <Animation />
      <Header containerRef={containerRef} />
      <Hero />
      <section id="section2">
        <h1>Projetos Section</h1>
      </section>
      <section id="section3">
        <h1>Experiences Section</h1>
      </section>
      <section id="section4">
        <h1>Contact me section</h1>
      </section>
    </div>
  );
};

export default App;
