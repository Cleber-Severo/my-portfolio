import { useEffect, useState } from 'react';
import { IHeaderProps } from '../types/Header';

const useHeader = ({ containerRef }: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 130);
    };
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return { isScrolled };
};

export default useHeader;
