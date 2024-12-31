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
  const { isScrolled, toggleNav, showNav } = useHeader({ containerRef });

  return (
    <header 
      // className={isScrolled ? 'scrolled' : '' + showNav ? 'header-show-nav' : ''}
      className={classNames({
        'scrolled': isScrolled,
        'header-show-nav': showNav
      })}
    >
      <a href="#hero" className="logo">
        <FiTerminal />
        Cléber Severo
      </a>
      <nav className={showNav ? 'show' : ''}>
        <a href="#hero">Home</a>
        <a href="#projects">Projetos</a>
        <a href="#resume">Experiência</a>
        <a href="#contact">Contato</a>
      </nav>
      <div>
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
      {showNav 
        ?  <FaTimes className="toggle-nav" onClick={toggleNav} />
        :  <FaBars className="toggle-nav" onClick={toggleNav} />
      }
    </header>
  );
};

export default Header;
