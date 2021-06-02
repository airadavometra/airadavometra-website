import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import classes from './GridItemVertical.module.scss';

export interface GridItemVerticalProps {
  verticalImg: ImgInfo;
  horizontalImgs: ImgInfo[];
  verticalImgPosition: VerticalImgPosition;
  onClick(imgId: number): void;
}
export enum VerticalImgPosition {
  Left = 1,
  Right = 2,
  Middle = 3,
}

export const GridItemVertical: FunctionComponent<GridItemVerticalProps> = ({
  verticalImg,
  horizontalImgs,
  verticalImgPosition,
  onClick,
}) => {
  return (
    <div className={classes.main}>
      <img
        onContextMenu={(e) => e.preventDefault()}
        className={classNames(classes.verticalImg, {
          [classes.verticalImgLeft]: verticalImgPosition === VerticalImgPosition.Left,
          [classes.verticalImgMiddle]: verticalImgPosition === VerticalImgPosition.Middle,
          [classes.verticalImgRight]: verticalImgPosition === VerticalImgPosition.Right,
        })}
        src={verticalImg.imgPath}
        onClick={() => onClick(verticalImg.imgId)}
      />
      {horizontalImgs.map((item) => (
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
