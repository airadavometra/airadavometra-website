import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Layout } from '../Layout/Layout';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { ContactPage } from '../../pages/ContactPage/ContactPage';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route>404 Page not found</Route>
        </Switch>
      </Layout>
    </Router>
  );
};
