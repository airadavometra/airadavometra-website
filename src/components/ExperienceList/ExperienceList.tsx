import React, { FunctionComponent } from 'react';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import classes from './ExperienceList.module.scss';

export interface ExperienceListProps {
  experienceInfoArray: ExperienceInfo[];
}

export type ExperienceInfo = {
  year: string;
  title: string;
  text: string;
  isOpen: boolean;
};

export const ExperienceList: FunctionComponent<ExperienceListProps> = ({ experienceInfoArray }) => {
  return (
    <ul className={classes.experienceList}>
      {experienceInfoArray.map((item, index) => (
        <li className={classes.experienceItem} key={index}>
          <ExperienceItem isOpen={item.isOpen} year={item.year} title={item.title} text={item.text} />
        </li>
      ))}
    </ul>
  );
};
