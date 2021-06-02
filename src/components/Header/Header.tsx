import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import logoImg from '../../images/logo.png';
import burgerImg from '../../icons/burger.svg';
import closeImg from '../../icons/closeMenu.svg';
import classNames from 'classnames';

interface MenuItemProps {
  isSelected(id: string): boolean;
  text: string;
  path: string;
  onClick(id: string): void;
}
const MenuItem: FunctionComponent<MenuItemProps> = ({ isSelected, text, path, onClick }) => {
  return (
    <li
      className={classNames(classes.menuItem, { [classes.isSelected]: isSelected(path) })}
      onClick={() => onClick(path)}
    >
      <Link className={classes.link} to={path}>
        {text}
      </Link>
    </li>
  );
};

interface MenuProps {
  className: string;
  isSelected(id: string): boolean;
  onClick(id: string): void;
}
const Menu: FunctionComponent<MenuProps> = ({ className, isSelected, onClick }) => {
  return (
    <ul className={className}>
      <MenuItem isSelected={isSelected} text="About me" path="/" onClick={onClick} />
      <MenuItem isSelected={isSelected} text="Portfolio" path="/portfolio" onClick={onClick} />
      <MenuItem isSelected={isSelected} text="Photo" path="/photo" onClick={onClick} />
      <MenuItem isSelected={isSelected} text="Video" path="/video" onClick={onClick} />
      {/* <MenuItem isSelected={isSelected} text="Blog" path="/blog" onClick={onClick} /> */}
      <MenuItem isSelected={isSelected} text="Contact" path="/contact" onClick={onClick} />
    </ul>
  );
};

interface FullScreenMenuProps {
  className: string;
  isSelected(id: string): boolean;
  onClick(id: string): void;
  onCloseClick(): void;
}
const FullScreenMenu: FunctionComponent<FullScreenMenuProps> = ({ className, isSelected, onClick, onCloseClick }) => {
  return (
    <div className={className}>
      <button className={classes.close} onClick={onCloseClick}>
        <img src={closeImg} alt="close menu button" />
      </button>
      <Menu className={classes.fullScreenMenuList} isSelected={isSelected} onClick={onClick} />
    </div>
  );
};

export const Header: FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isSelected = (id: string) => selectedItem === id;

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const goToPage = (id: string) => {
    setMenuOpen(false);
    setSelectedItem(id);
  };

  return (
    <header className={classes.main}>
      <img className={classes.logo} src={logoImg} alt="logo" />
      <Menu className={classes.menu} isSelected={isSelected} onClick={setSelectedItem} />
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
