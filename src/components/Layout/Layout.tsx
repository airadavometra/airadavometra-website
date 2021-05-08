import React, { FunctionComponent } from 'react';
import { Header } from '../Header/Header';
import classes from './Layout.module.scss';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={classes.main}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
