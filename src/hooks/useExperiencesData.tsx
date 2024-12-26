
const useExperiencesData = () => {
  const experiences = [
    {
      id: 1,
      accordionPannel: 'pannel1',
      jobPosition: 'Desenvolvedor de Sistemas',
      place: 'Amaro Contact Center',
      description:
        'Desenvolvimento, aprimoramento e suporte de sistemas buscando as melhores práticas.',
      time: '09/2023 - Até o momento',
    },
    {
      id: 2,
      accordionPannel: 'pannel2',
      jobPosition: 'Desenvolvedor Front-End Jr',
      place: 'Termotubos Importação e Exportação',
      description:
        "Desenvolvimento e suporte do site interno da empresa (Intranet) com o uso de diversas tecnologias e técnicas de desenvolvimento web buscando maior desempenho e visuais agradáveis de acordo com a experiência dos usuários. Trabalho feito junto ao time de Back-End realizando a leitura de endpoints de API's internas e externas, utilização de dados dinâmicos, menus colapsáveis, modais, formulários com validações, tabelas, responsividade e código organizado.",
      time: '01/2023 - 08/2023 ',
    },
  ];

  return {
    experiences,
  };
};

export default useExperiencesData;
