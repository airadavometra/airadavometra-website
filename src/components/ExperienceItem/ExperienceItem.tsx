import React, { FunctionComponent } from 'react';
import classes from './ExperienceItem.module.scss';
import expandImg from '../../icons/expand.png';

export interface ExperienceItemProps {
  text: string;
  title: string;
  year: string;
}

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({ text, title, year }) => {
  return (
    <>
      <div className={classes.titleContainer}>
        <h2 className={`${classes.year} ${classes.titleContainerItem}`}>{year}</h2>
        <h2 className={`${classes.title} ${classes.titleContainerItem}`}>{title}</h2>
        <button className={classes.titleContainerItem}>
          <img className={classes.expand} src={expandImg} alt="expand-collapse" />
        </button>
      </div>
      <p className={classes.text}>{text}</p>
    </>
  );
};
