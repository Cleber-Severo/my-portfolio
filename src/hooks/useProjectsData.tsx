import { SiReact } from '@react-icons/all-files/si/SiReact';
import { FaJs } from '@react-icons/all-files/fa/FaJs';
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt';
import { FaSass } from '@react-icons/all-files/fa/FaSass';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { useTranslation } from 'react-i18next';

const useProjectsData = () => {
  const { t } = useTranslation();

  const listProjects = [
    {
      id: 1,
      title: 'Meteora',
      description: t('projects.cards.meteora'),
      url: 'https://meteora-9lmj.vercel.app/',
      githubUrl: 'https://github.com/Cleber-Severo/Meteora',
      img: 'images/projeto-meteora.png',
      icons: (
        <>
          <SiReact />
          <FaJs />
          <FaCss3Alt />
        </>
      ),
    },
    {
      id: 2,
      title: 'Pokedex',
      description: t('projects.cards.pokedex'),
      url: 'https://pokedex-delta-dun.vercel.app/',
      githubUrl: 'https://github.com/Cleber-Severo/Pokedex',
      img: 'images/pokemon.png',
      icons: (
        <>
          <SiReact />
          <FaJs />
          <FaSass />
        </>
      ),
    },
    {
      id: 3,
      title: 'Controle de Despesas',
      description: t('projects.cards.expensesControl'),
      url: 'https://cleber-severo.github.io/Controle-de-despesas/',
      githubUrl: 'https://github.com/Cleber-Severo/Controle-de-despesas',
      img: 'images/controle-despesas.png',
      icons: (
        <>
          <FaCss3Alt />
          <FaHtml5 />
          <FaJs />
        </>
      ),
    },
    {
      id: 4,
      title: 'Ado Pet',
      description: t('projects.cards.adoPet'),
      url: 'https://adopet-lac-ten.vercel.app/',
      githubUrl: 'https://github.com/Cleber-Severo/AdoPet',
      img: 'images/adopet.png',
      icons: (
        <>
          <FaCss3Alt />
          <FaHtml5 />
          <FaJs />
        </>
      ),
    },
  ];

  return {
    listProjects,
  };
};

export default useProjectsData;
