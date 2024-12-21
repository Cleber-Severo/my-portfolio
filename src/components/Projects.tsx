import ProjectCard from './ProjectCard';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { FaJs } from '@react-icons/all-files/fa/FaJs';
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt';
import { FaSass } from '@react-icons/all-files/fa/FaSass';


import './styles/Projects.css';

const listProjects = [
  {
    id: 1,
    title: 'Meteora',
    description: 'Loja virtual interativa',
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
    description: 'Pokemon pokedex com tipos e evoluções',
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
    title: 'Meteora',
    description: 'Loja virtual interativa',
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
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>projetos</h2>
      <div className="projects-wrapper">
        {listProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
