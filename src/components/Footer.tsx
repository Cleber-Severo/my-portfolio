const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      style={{
        color: '#d9d9d9',
        borderTop: '1px solid rgba(255,255,255, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5rem 1rem',
        width: '100%',
      }}
    >
      <h3>&copy; {currentYear} Todos Direitos Reservados</h3>
      <h3>Desenvolvido por: Cléber Severo</h3>
    </footer>
  );
};

export default Footer;
