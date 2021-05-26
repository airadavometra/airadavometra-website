import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import logoImg from '../../images/logo.png';
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

export const Header: FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  console.log(window.location.pathname);

  const isSelected = (id: string) => selectedItem === id;

  return (
    <header className={classes.main}>
      <img className={classes.logo} src={logoImg} alt="logo" />
      <ul className={classes.menu}>
        <MenuItem isSelected={isSelected} text="About me" path="/" onClick={setSelectedItem} />
        <MenuItem isSelected={isSelected} text="Portfolio" path="/portfolio" onClick={setSelectedItem} />
        <MenuItem isSelected={isSelected} text="Photo" path="/photo" onClick={setSelectedItem} />
        <MenuItem isSelected={isSelected} text="Video" path="/video" onClick={setSelectedItem} />
        {/* <MenuItem isSelected={isSelected} text="Blog" path="/blog" onClick={setSelectedItem} /> */}
        <MenuItem isSelected={isSelected} text="Contact" path="/contact" onClick={setSelectedItem} />
      </ul>
    </header>
  );
};
