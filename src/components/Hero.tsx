import ProgrammingHero from '../assets/images/hero.png';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoMdArrowRoundForward } from '@react-icons/all-files/io/IoMdArrowRoundForward';

import './styles/Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div>
        <h2 style={{ letterSpacing: '12px' }}>{t('hero.saudation')}</h2>
        <div className="typing-container">Cléber Severo</div>
        <p>{t('hero.description')}</p>
        <p>{t('hero.welcome')}</p>
        <button>
          <a href="#contact">
            {t('hero.contactBtn')} <IoMdArrowRoundForward />
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
