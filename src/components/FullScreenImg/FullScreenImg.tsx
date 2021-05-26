import React, { FunctionComponent } from 'react';
import classes from './FullScreenImg.module.scss';
import closeImg from '../../icons/close.svg';
import nextImg from '../../icons/next.svg';
import previousImg from '../../icons/previous.svg';
import { ImgInfo } from '../../utils/getPhotos';

export interface FullScreenImgProps {
  img: ImgInfo;
  show: boolean;
  onCloseClick(): void;
  onMoveClick(imgId: number): void;
}

export const FullScreenImg: FunctionComponent<FullScreenImgProps> = ({ img, show, onCloseClick, onMoveClick }) => {
  return show ? (
    <div className={classes.main}>
      <div className={classes.closeButton}>
        <button className={classes.button} onClick={() => onCloseClick()}>
          <img src={closeImg} alt="Close button" />
        </button>
      </div>
      <div className={classes.photoContainer}>
        <button className={classes.button}>
          <img src={previousImg} alt="Previous image button" onClick={() => onMoveClick(img.imgId - 1)} />
        </button>
        <img className={classes.photo} src={img.imgPath} alt="Photo" onContextMenu={(e) => e.preventDefault()} />
        <button className={classes.button}>
          <img src={nextImg} alt="Next image button" onClick={() => onMoveClick(img.imgId + 1)} />
        </button>
      </div>
    </div>
  ) : null;
};
