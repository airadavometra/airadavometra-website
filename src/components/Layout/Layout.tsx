import React, { FunctionComponent } from 'react';
import { Header } from '../Header/Header';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
