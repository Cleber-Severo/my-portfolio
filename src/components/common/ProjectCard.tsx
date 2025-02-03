import { FiLink } from '@react-icons/all-files/fi/FiLink';

import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { IProjectCard } from '../../types/Projects';



const ProjectCard = ({
  title,
  description,
  img,
  icons,
  url,
  githubUrl,
}: IProjectCard) => {
  
  return (
    <div className="project-card">
      <img src={img || ''} alt="Project 1" />
      <article>
        <div>
          <h3>{title}</h3>
          <div>
            <a href={githubUrl} target="_blank">
              <FiGithub />
            </a>
            <a href={url} target="_blank">
              <FiLink />
            </a>
          </div>
        </div>
        <p>{description}</p>
      </article>
      <footer>{icons}</footer>
    </div>
  );
};

export default ProjectCard;
