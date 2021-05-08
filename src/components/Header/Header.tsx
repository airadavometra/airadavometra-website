import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import logoImg from '../../images/logo.png';

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.main}>
      <img className={classes.logo} src={logoImg} alt="logo" />
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/">
            About me
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/photo">
            Photo
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/video">
            Video
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/blog">
            Blog
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};
