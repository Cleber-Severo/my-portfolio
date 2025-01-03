import { useTranslation } from "react-i18next";

const useExperiencesData = () => {
    const { t, i18n } = useTranslation();
  
  const experiences = [
    {
      id: 1,
      accordionPannel: 'pannel1',
      jobPosition: t('experiences.pannels.systemDeveloper.title'),
      place: 'Amaro Contact Center',
      description: t('experiences.pannels.systemDeveloper.description'),
      time: '09/2023 - Até o momento',
      tags: ['React', 'JQuery', 'NodeJs', 'Express', 'SQL', 'Docker'],
    },
    {
      id: 2,
      accordionPannel: 'pannel2',
      jobPosition: t('experiences.pannels.frontEndJr.title'),
      place: 'Termotubos Importação e Exportação',
      description: t('experiences.pannels.frontEndJr.description'),
      time: '01/2023 - 08/2023',
      tags: ['JQuery', 'Html', 'CSS', 'JavaScript', 'TailwindCss'],
    },
    {
      id: 3,
      accordionPannel: 'pannel3',
      jobPosition: t('experiences.pannels.technic.title'),
      place: 'AUT Service',
      description: t('experiences.pannels.technic.description'),
      time: '09/2018 - 01/2023 ',
      tags:
        i18n.language === 'en'
          ? ['Electronics', 'Quality', 'Repair', 'Testing']
          : ['Eletrônica', 'Qualidade', 'Reparo', 'Testes'],
    },
  ];

  return {
    experiences,
  };
};

export default useExperiencesData;
