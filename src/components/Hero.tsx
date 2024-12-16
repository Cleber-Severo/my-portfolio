
import './styles/Hero.css'

const Hero = () => {
  return (
    <section id="hero">
      <h1>Seja Bem-Vindo ao meu portfolio!</h1>
      <button
        style={{
          backgroundColor: '#2ecc71',
          padding: '1rem 2rem',
          color: 'white',
          borderRadius: '25px',
          border: 'none',
          fontWeight: '700',
          cursor: 'pointer',
        }}
      >
        Contact-me
      </button>
    </section>
  );
};

export default Hero;
