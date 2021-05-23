import React, { FunctionComponent } from 'react';
import classes from './FullScreenImg.module.scss';
import closeImg from '../../icons/close.svg';
import nextImg from '../../icons/next.svg';
import previousImg from '../../icons/previous.svg';

export interface FullScreenImgProps {
  imgPath: string;
}

export const FullScreenImg: FunctionComponent<FullScreenImgProps> = ({ imgPath }) => {
  return (
    <div className={classes.main}>
      <button className={classes.button}>
        <img src={previousImg} alt="Previous image button" />
      </button>
      <img className={classes.photo} src={imgPath} alt="Photo" />
      <div className={classes.buttonsGroup}>
        <button className={classes.button}>
          <img src={closeImg} alt="Close button" />
        </button>
        <button className={classes.button}>
          <img src={nextImg} alt="Next image button" />
        </button>
      </div>
    </div>
  );
};
