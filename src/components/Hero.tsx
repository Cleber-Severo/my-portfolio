import ProgrammingHero from '../assets/images/hero.png'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoMdArrowRoundForward } from '@react-icons/all-files/io/IoMdArrowRoundForward';

import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h2 style={{ letterSpacing: '12px' }}>Olá, meu nome é</h2>
        <div className="typing-container">Cléber Severo</div>
        <p>
          Desenvolvedor de software com experiência em criar soluções ágeis e
          escaláveis que transformam ideias em resultados.
        </p>
        <p>Seja Bem-vindo ao meu portfólio</p>
        <button>
          <a href="#contact">
            Contato <IoMdArrowRoundForward />
          </a>
        </button>
      </div>
      <img
        src={ProgrammingHero}
        alt="Ilustração de um desenvolvedor"
        className="hero-image"
        style={{ transform: 'translateX(30px)' }}
      />
      <a href="#projects">
        <div className="icon-wrap">
          <IoIosArrowDown />
        </div>
      </a>
    </section>
  );
};

export default Hero;
