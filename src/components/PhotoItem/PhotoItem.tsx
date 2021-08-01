import React, { FunctionComponent } from 'react';
import classes from './PhotoItem.module.scss';
import classNames from 'classnames';

export interface PhotoItemProps {
  cssClassNames: string;
  src: string;
  imgId: number;
  onClick(imgId: number): void;
}

export const PhotoItem: FunctionComponent<PhotoItemProps> = ({ cssClassNames, src, imgId, onClick }) => {
  return (
    <img
      className={classNames(cssClassNames, classes.photoItem)}
      onContextMenu={(e) => e.preventDefault()}
      src={src}
      onClick={() => onClick(imgId)}
      alt="photo"
      loading="lazy"
    />
  );
};
