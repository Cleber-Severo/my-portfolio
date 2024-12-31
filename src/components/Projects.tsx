import { Grid2 } from '@mui/material';
import useProjectsData from '../hooks/useProjectsData';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

import './styles/Projects.css';

const Projects = () => {
  const { listProjects } = useProjectsData();

  return (
    <section id="projects">
      <SectionTitle text="Projetos" />
      <div className="projects-wrapper">
        <Grid2 container spacing={2} justifyContent={'center'} flexWrap={'wrap'}>
          {listProjects.map((project) => (
            <Grid2 size={{ lg: 4, sm: 6 }} sx={{ maxWidth: '300px', minHeight: '360px' }}>
              <ProjectCard key={project.id} {...project} />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </section>
  );
};

export default Projects;
