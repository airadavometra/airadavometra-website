import React, { FunctionComponent } from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import classes from './Menu.module.scss';

export interface MenuProps {
  isFullScreen: boolean;
  isSelected(id: string): boolean;
  onClick(id: string): void;
}
export const Menu: FunctionComponent<MenuProps> = ({ isFullScreen, isSelected, onClick }) => {
  return (
    <ul className={isFullScreen ? classes.fullScreenMenuList : classes.menu}>
      <MenuItem isFullScreen={isFullScreen} isSelected={isSelected} text="About me" path="/" onClick={onClick} />
      <MenuItem
        isFullScreen={isFullScreen}
        isSelected={isSelected}
        text="Portfolio"
        path="/portfolio"
        onClick={onClick}
      />
      <MenuItem isFullScreen={isFullScreen} isSelected={isSelected} text="Photo" path="/photo" onClick={onClick} />
      <MenuItem isFullScreen={isFullScreen} isSelected={isSelected} text="Video" path="/video" onClick={onClick} />
      {/* <MenuItem isFullScreen={isFullScreen}  isSelected={isSelected} text="Blog" path="/blog" onClick={onClick} /> */}
      <MenuItem isFullScreen={isFullScreen} isSelected={isSelected} text="Contact" path="/contact" onClick={onClick} />
    </ul>
  );
};
