import React, { FunctionComponent } from 'react';
import { Menu } from '../Menu/Menu';
import classes from './Fullscreenmenu.module.scss';
import closeImg from '../../icons/closeMenu.svg';

export interface FullScreenMenuProps {
  className: string;
  isSelected(id: string): boolean;
  onClick(id: string): void;
  onCloseClick(): void;
}
export const FullScreenMenu: FunctionComponent<FullScreenMenuProps> = ({
  className,
  isSelected,
  onClick,
  onCloseClick,
}) => {
  return (
    <div className={className}>
      <button className={classes.close} onClick={onCloseClick}>
        <img src={closeImg} alt="close menu button" />
      </button>
      <Menu isFullScreen={true} isSelected={isSelected} onClick={onClick} />
    </div>
  );
};
