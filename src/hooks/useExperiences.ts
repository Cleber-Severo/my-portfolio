import React from 'react';
import useExperiencesData from './useExperiencesData';

const useExperiences = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const { experiences } = useExperiencesData();

  const accordionToggleOpen =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return { experiences, expanded, accordionToggleOpen };
};

export default useExperiences;
