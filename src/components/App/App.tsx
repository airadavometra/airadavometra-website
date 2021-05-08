import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import classes from './App.module.scss';
import HomeIcon from '../../icons/home.svg';
import { Example } from '../../containers/Example';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <div className={classes.main}>
        <HomeIcon />
        <Header text="Hello" />
        <Switch>
          <Route path="/">
            <Example />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
