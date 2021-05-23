import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Layout } from '../Layout/Layout';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { ContactPage } from '../../pages/ContactPage/ContactPage';
import { PortfolioPage } from '../../pages/PortfolioPage/PortfolioPage';
import { PhotoPage } from '../../pages/PhotoPage/PhotoPage';
import { VideoPage } from '../../pages/VideoPage/VideoPage';

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
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/photo">
            <PhotoPage />
          </Route>
          <Route exact path="/video">
            <VideoPage />
          </Route>
          <Route>404 Page not found</Route>
        </Switch>
      </Layout>
    </Router>
  );
};
