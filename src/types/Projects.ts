import { ReactElement } from "react";

export interface IProjectCard {
  id?: number;
  title: string;
  description: string;
  img: string;
  icons: ReactElement;
  url: string;
  githubUrl: string;
}
