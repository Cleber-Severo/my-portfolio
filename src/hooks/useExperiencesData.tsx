
const useExperiencesData = () => {
  const experiences = [
    {
      id: 1,
      accordionPannel: 'pannel1',
      jobPosition: 'Desenvolvedor de Sistemas',
      place: 'Amaro Contact Center',
      description:
        'Desenvolvimento de sistemas eficientes e escaláveis, aplicando metodologias ágeis para entregar soluções que aliam alta performance e excelente experiência do usuário. Com foco na criação de interfaces intuitivas e aplicações robustas, garanto resultados que equilibram estética, funcionalidade e eficiência.',
      time: '09/2023 - Até o momento',
      tags: [
        'React',
        'JQuery',
        'NodeJs',
        'Express',
        'SQL',
        'Docker',
      ],
    },
    {
      id: 2,
      accordionPannel: 'pannel2',
      jobPosition: 'Desenvolvedor Front-End Jr',
      place: 'Termotubos Importação e Exportação',
      description:
        "Desenvolvimento e suporte do site interno da empresa (Intranet) com o uso de diversas tecnologias e técnicas de desenvolvimento web buscando maior desempenho e visuais agradáveis de acordo com a experiência dos usuários. Trabalho feito junto ao time de Back-End realizando a leitura de endpoints de API's internas e externas, utilização de dados dinâmicos, menus colapsáveis, modais, formulários com validações, tabelas, responsividade e código organizado.",
      time: '01/2023 - 08/2023 ',
      tags: ['JQuery', 'Html', 'CSS', 'JavaScript', 'TailwindCss'],
    },
    {
      id: 3,
      accordionPannel: 'pannel3',
      jobPosition: 'Técnico Eletrônico',
      place: 'AUT Service',
      description:
        ' Atuação com análises, orçamentos e testes para equipamentos de Automação Industrial, assegurando que todas as atividades estejam de acordo com as normas e diretrizes estabelecidas pela companhia.',
      time: '09/2018 - 01/2023 ',
      tags: ['Eletrônica', 'Qualidade', 'Reparo', 'Testes'],
    },
  ];

  return {
    experiences,
  };
};

export default useExperiencesData;
