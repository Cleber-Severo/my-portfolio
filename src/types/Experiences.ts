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
  handleChange: (panel: string) => 
    (_: React.SyntheticEvent, isExpanded: boolean) => void;
  data: IExperience;
}
