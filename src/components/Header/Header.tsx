import React, { FunctionComponent, useState } from 'react';
import classes from './Header.module.scss';
import logoImg from '../../images/logo.png';
import burgerImg from '../../icons/burger.svg';
import classNames from 'classnames';
import { Menu } from '../Menu/Menu';
import { FullScreenMenu } from '../FullScreenMenu/FullScreenMenu';

export const Header: FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isSelected = (path: string) => selectedItem === path;

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const goToPage = (path: string) => {
    setMenuOpen(false);
    setSelectedItem(path);
  };

  return (
    <header className={classes.main}>
      <img className={classes.logo} src={logoImg} alt="logo" />
      <Menu isFullScreen={false} isSelected={isSelected} onClick={setSelectedItem} />
      <button className={classes.burger} onClick={openMenu}>
        <img className={classes.burger} src={burgerImg} alt="menu button" />
      </button>
      <FullScreenMenu
        onCloseClick={closeMenu}
        className={classNames(classes.fullScreenMenu, { [classes.fullScreenMenuOpen]: isMenuOpen })}
        isSelected={isSelected}
        onClick={goToPage}
      />
    </header>
  );
};
