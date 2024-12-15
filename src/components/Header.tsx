import React, { useEffect, useState } from 'react'

interface IHeaderProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Header = ({ containerRef }: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 0);
      }
    };
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <a href="#section1">Home</a>
      <a href="#section2">Projetos</a>
      <a href="#section3">Experiences</a>
      <a href="#section4">Contact me</a>
    </nav>
  );
};

export default Header