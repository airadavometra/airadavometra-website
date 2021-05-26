import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import classes from './GridItemHorizontal.module.scss';

export interface GridItemHorizontalProps {
  imgPaths: ImgInfo[];
  onClick(imgId: number): void;
}

export const GridItemHorizontal: FunctionComponent<GridItemHorizontalProps> = ({ imgPaths, onClick }) => {
  return (
    <div className={classes.main}>
      {imgPaths.map((item) => (
        <img
          onContextMenu={(e) => e.preventDefault()}
          className={classes.horizontalImg}
          key={item.imgId}
          src={item.imgPath}
          onClick={() => onClick(item.imgId)}
        />
      ))}
    </div>
  );
};
