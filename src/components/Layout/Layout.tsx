import React, { FunctionComponent } from 'react';
import { Header } from '../Header/Header';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
