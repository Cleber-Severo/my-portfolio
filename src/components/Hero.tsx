import ProgrammingHero from '../assets/images/hero.png'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';

import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h2 style={{ letterSpacing: '12px' }}>Olá, meu nome é</h2>
        <div className="typing-container">Cléber Severo</div>
        <p>
          Desenvolvedor de software com ampla experiência em construir
          aplicações altamente escaláveis, focado na entrega de soluções ágeis e
          eficientes que agregam valor ao cliente.
        </p>
        <p>Seja Bem-vindo ao meu portfólio</p>
        <button>Contact-me</button>
      </div>
      <img
        src={ProgrammingHero}
        alt="Ilustração de um desenvolvedor"
        className="hero-image"
      />
      <a href="#section2">
        <div className="icon-wrap">
          <IoIosArrowDown />
        </div>
      </a>
    </section>
  );
};

export default Hero;
