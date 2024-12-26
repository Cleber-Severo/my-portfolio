import * as React from 'react';
import useExperiencesData from '../hooks/useExperiencesData';
import './styles/Experiences.css';
import ExperiencesAccordion from './ExperiencesAccordion';
import { IExperience } from '../types/Experiences';

const Experiences = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const { experiences } = useExperiencesData();

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section id="resume">
      <h2>Experiência</h2>
      <div>
        {experiences.map((experience: IExperience) => (
            <ExperiencesAccordion 
              data={experience} 
              expanded={expanded} 
              handleChange={handleChange} 
              key={experience.id} 
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
