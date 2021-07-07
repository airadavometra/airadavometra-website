import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Layout } from '../Layout/Layout';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { ContactPage } from '../../pages/ContactPage/ContactPage';
import { PortfolioPage } from '../../pages/PortfolioPage/PortfolioPage';
import { PhotoPage } from '../../pages/PhotoPage/PhotoPage';
import { VideoPage } from '../../pages/VideoPage/VideoPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

const ScrollToTop: FunctionComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: FunctionComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          {/* <Route exact path="/blog">
            <BlogPage />
          </Route> */}
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
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
