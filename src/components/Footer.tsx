import './styles/Footer.css'

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className='my-portfolio-footer'>
      <h3>&copy; {currentYear} Todos Direitos Reservados</h3>
      <h3>Desenvolvido por: Cléber Severo</h3>
    </footer>
  );
};

export default Footer;
