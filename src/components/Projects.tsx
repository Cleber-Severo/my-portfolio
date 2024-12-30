import useProjectsData from '../hooks/useProjectsData';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

import './styles/Projects.css';

const Projects = () => {
  const { listProjects } = useProjectsData();

  return (
    <section id="projects">
      <SectionTitle text='Projetos' />
      <div className="projects-wrapper">
        {listProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
