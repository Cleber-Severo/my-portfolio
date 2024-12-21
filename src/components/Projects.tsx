import useProjectsData from '../hooks/useProjectsData';
import ProjectCard from './ProjectCard';

import './styles/Projects.css';

const Projects = () => {
  const { listProjects } = useProjectsData();

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
