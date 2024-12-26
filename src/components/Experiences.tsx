import './styles/Experiences.css';
import ExperiencesAccordion from './ExperiencesAccordion';
import { IExperience } from '../types/Experiences';
import useExperiences from '../hooks/useExperiences';

const Experiences = () => {
  const { expanded, experiences, accordionToggleOpen } = useExperiences()

  return (
    <section id="resume">
      <h2>Experiência</h2>
      <div>
        {experiences.map((experience: IExperience) => (
          <ExperiencesAccordion
            data={experience}
            expanded={expanded}
            accordionToggleOpen={accordionToggleOpen}
            key={experience.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
