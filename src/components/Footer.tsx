import { useTranslation } from 'react-i18next';
import './styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="my-portfolio-footer">
      <h3>
        &copy; {currentYear} {t('footer.copyright')}
      </h3>
      <h3>{t('footer.developedBy')}: Cléber Severo</h3>
    </footer>
  );
};

export default Footer;
