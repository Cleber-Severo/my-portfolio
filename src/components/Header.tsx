import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { FiTerminal } from '@react-icons/all-files/fi/FiTerminal';
import React, { useEffect, useState } from 'react';

import './styles/Header.css'

interface IHeaderProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Header = ({ containerRef }: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {

        setIsScrolled(window.scrollY > 0);
      
    };
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className='logo'>
        <FiTerminal />
        Cléber Severo
      </div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#section2">Projetos</a>
        <a href="#section3">Experiences</a>
        <a href="#section4">Contact me</a>
      </nav>
      <div>
        <a
          href="https://github.com/Cleber-Severo"
          style={{ color: 'white' }}
          target="_blank"
        >
          <SiGithub style={{ fontSize: '1.4rem' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
