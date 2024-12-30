import { useEffect, useState } from 'react';
import { IHeaderProps } from '../types/Header';

const useHeader = ({ containerRef }: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false)

  const toggleNav = () => setShowNav(!showNav)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 130);
    };
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return { isScrolled, toggleNav, showNav };
};

export default useHeader;
