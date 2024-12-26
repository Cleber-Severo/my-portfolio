import React from 'react';
import useExperiencesData from './useExperiencesData';

const useExperiences = () => {
  const { experiences } = useExperiencesData();

  const [expanded, setExpanded] = React.useState<string | false>(experiences[0].accordionPannel);

  const accordionToggleOpen =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return { experiences, expanded, accordionToggleOpen };
};

export default useExperiences;
