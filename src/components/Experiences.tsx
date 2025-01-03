import './styles/Experiences.css';
import ExperiencesAccordion from './ExperiencesAccordion';
import { IExperience } from '../types/Experiences';
import useExperiences from '../hooks/useExperiences';
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

const Experiences = () => {
  const { expanded, experiences, accordionToggleOpen } = useExperiences();
  const { t } = useTranslation();

  return (
    <section id="resume">
      <SectionTitle text={t('experiences.title')} />
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
