import './App.css';
import Header from './components/Header';
import { useApp } from './hooks/useApp';

const App = () => {
  const { containerRef } = useApp();

  return (
    <div className="container" ref={containerRef}>
      <Header containerRef={containerRef} />
      <section id="section1">
        <h1>Seja Bem-Vindo ao meu portfolio!</h1>
      </section>
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
