import './App.css';
import Header from './components/Header';
import { useApp } from './hooks/useApp';

const App = () => {
  const { containerRef } = useApp()

  return (
    <div>
      <Header containerRef={containerRef} />
      <div className="container" ref={containerRef}>
        <section id="section1" style={{ backgroundColor: '#f0f8ff' }}>
          <h1>Seja Bem-Vindo ao meu portfolio!</h1>
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
