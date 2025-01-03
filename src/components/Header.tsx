import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { FiTerminal } from '@react-icons/all-files/fi/FiTerminal';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';

import './styles/Header.css';
import { IHeaderProps } from '../types/Header';
import useHeader from '../hooks/useHeader';
import classNames from 'classnames';

const Header = ({ containerRef }: IHeaderProps) => {
  const { isScrolled, toggleNav, showNav, t, i18n, toggleLanguage } = useHeader({containerRef});
 

  return (
    <header
      className={classNames({
        scrolled: isScrolled,
        'header-show-nav': showNav,
      })}
    >
      <a href="#hero" className="logo">
        <FiTerminal />
        Cléber Severo
      </a>
      <nav className={showNav ? 'show' : ''}>
        <a href="#hero">Home</a>
        <a href="#projects">{t('header.projects')}</a>
        <a href="#resume">{t('header.experience')}</a>
        <a href="#contact">{t('header.contact')}</a>
      </nav>
      <div>
        <span onClick={toggleLanguage} className='internacionalization-btn'>{i18n.language === 'en' ? 'EN' : 'PT-BR'}</span>
        <a
          href="https://www.linkedin.com/in/cleber-severo/"
          style={{ color: 'white' }}
          target="_blank"
        >
          <SiLinkedin style={{ fontSize: '1.4rem' }} />
        </a>
        <a
          href="https://github.com/Cleber-Severo"
          style={{ color: 'white', marginLeft: '8px' }}
          target="_blank"
        >
          <SiGithub style={{ fontSize: '1.4rem' }} />
        </a>
      </div>
      {showNav ? (
        <FaTimes className="toggle-nav" onClick={toggleNav} />
      ) : (
        <FaBars className="toggle-nav" onClick={toggleNav} />
      )}
    </header>
  );
};

export default Header;
