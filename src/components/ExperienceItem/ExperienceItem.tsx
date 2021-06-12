import React, { FunctionComponent, useState } from 'react';
import classes from './ExperienceItem.module.scss';
import expandImg from '../../icons/expand.svg';
import classNames from 'classnames';

export interface ExperienceItemProps {
  text: string;
  title: string;
  year: string;
  isOpen: boolean;
}

export const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({ text, title, year, isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <>
      <div className={classes.titleContainer}>
        <button className={classes.titleContainerItem} onClick={() => setOpen(!open)}>
          {/* TODO: Лучше использовать функцию classNames */}
          <h2 className={`${classes.year} ${classes.titleContainerItemText}`}>{year}</h2>
          <h2 className={`${classes.title} ${classes.titleContainerItemText}`}>{title}</h2>
          <img
            className={classNames(classes.expandBtn, { [classes.collapse]: !open })}
            src={expandImg}
            // TODO: Можно запариться и сделать альт по условию
            alt="expand-collapse"
          />
        </button>
      </div>
      <p className={classNames(classes.text, { [classes.hiddenText]: !open })}>{text}</p>
    </>
  );
};
