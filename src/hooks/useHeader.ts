import { useEffect, useState } from 'react';
import { IHeaderProps } from '../types/Header';
import { useTranslation } from 'react-i18next';

const useHeader = ({ containerRef }: IHeaderProps) => {
  
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  
  const { t, i18n } = useTranslation();

  const toggleNav = () => setShowNav(!showNav);
  const handleScroll = () => setIsScrolled(window.scrollY > 130);


 const toggleLanguage = () => {
   const newSetLang = i18n.language === 'en' ? 'pt-BR' : 'en';
   i18n.changeLanguage(newSetLang);
 };

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return { isScrolled, toggleNav, showNav, t, i18n, toggleLanguage };
};

export default useHeader;
