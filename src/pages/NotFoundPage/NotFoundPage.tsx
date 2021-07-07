import React, { FunctionComponent } from 'react';
import classes from './NotFoundPage.module.scss';
import notFoundImg from '../../icons/404.svg';
import classNames from 'classnames';

export const NotFoundPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <img className={classNames(classes.mainItem, classes.notFoundImage)} src={notFoundImg} alt="Not found image" />
      <div className={classNames(classes.mainItem, classes.notFoundTitle)}>
        Sorry, page you are looking for does not exist...
      </div>
      <div className={classNames(classes.mainItem, classes.notFoundText)}>Please try any link of the menu</div>
    </div>
  );
};
