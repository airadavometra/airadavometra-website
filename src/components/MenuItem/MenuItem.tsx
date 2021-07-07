import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classes from './MenuItem.module.scss';

export interface MenuItemProps {
  isFullScreen: boolean;
  isSelected(id: string): boolean;
  text: string;
  path: string;
  onClick(id: string): void;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({ isFullScreen, isSelected, text, path, onClick }) => {
  return (
    <li
      className={classNames(classes.menuItem, {
        [classes.isSelected]: isSelected(path),
        [classes.fullScreenMenuListItem]: isFullScreen,
      })}
      onClick={() => onClick(path)}
    >
      <Link className={classes.link} to={path}>
        {text}
      </Link>
    </li>
  );
};
