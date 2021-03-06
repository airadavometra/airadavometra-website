import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import { PhotoItem } from '../PhotoItem/PhotoItem';
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
      <PhotoItem
        cssClassNames={classNames(classes.verticalImg, {
          [classes.verticalImgLeft]: verticalImgPosition === VerticalImgPosition.Left,
          [classes.verticalImgMiddle]: verticalImgPosition === VerticalImgPosition.Middle,
          [classes.verticalImgRight]: verticalImgPosition === VerticalImgPosition.Right,
        })}
        src={verticalImg.imgPath}
        imgId={verticalImg.imgId}
        onClick={onClick}
      />
      {horizontalImgs.map((item) => (
        <PhotoItem
          cssClassNames={classes.horizontalImg}
          src={item.imgPath}
          key={item.imgId}
          imgId={item.imgId}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
