import { ReactElement } from 'react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';

import { FiGithub } from '@react-icons/all-files/fi/FiGithub';

interface IProjectCard {
  id?: number;
  title: string;
  description: string;
  img: string;
  icons: ReactElement;
  url: string;
  githubUrl: string;
}

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
              <FiExternalLink />
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