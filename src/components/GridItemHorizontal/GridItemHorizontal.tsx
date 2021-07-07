import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import { Photo } from '../Photo/Photo';
import classes from './GridItemHorizontal.module.scss';

export interface GridItemHorizontalProps {
  imgPaths: ImgInfo[];
  onClick(imgId: number): void;
}

export const GridItemHorizontal: FunctionComponent<GridItemHorizontalProps> = ({ imgPaths, onClick }) => {
  return (
    <div className={classes.main}>
      {imgPaths.map((item) => (
        <Photo
          classNames={classes.horizontalImg}
          src={item.imgPath}
          key={item.imgId}
          imgId={item.imgId}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
