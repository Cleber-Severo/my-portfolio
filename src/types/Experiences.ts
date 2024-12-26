export interface IExperience {
  id: number;
  accordionPannel: string;
  jobPosition: string;
  place: string;
  description: string;
  time: string;
  tags: string[];
}

export interface IExperiencesAccordionProps {
  expanded: string | boolean;
  accordionToggleOpen: (
    panel: string
  ) => (_: React.SyntheticEvent, isExpanded: boolean) => void;
  data: IExperience;
}
