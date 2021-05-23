import React, { FunctionComponent } from 'react';
import classes from './GridItemVertical.module.scss';

export interface GridItemVerticalProps {
  verticalImgPath: string;
  horizontalImgPaths: string[];
  verticalImgPosition: VerticalImgPosition;
}
export enum VerticalImgPosition {
  Left = 1,
  Right = 2,
  Middle = 3,
}

export const GridItemVertical: FunctionComponent<GridItemVerticalProps> = ({
  verticalImgPath,
  horizontalImgPaths,
  verticalImgPosition,
}) => {
  switch (verticalImgPosition) {
    case VerticalImgPosition.Left: {
      return (
        <div className={classes.main}>
          <img className={`${classes.verticalImg} ${classes.verticalImgLeft}`} src={verticalImgPath} />
          {horizontalImgPaths.map((item, index) => (
            <img className={classes.horizontalImg} key={index} src={item} />
          ))}
        </div>
      );
    }
    case VerticalImgPosition.Right: {
      return (
        <div className={classes.main}>
          {horizontalImgPaths.map((item, index) => (
            <img className={classes.horizontalImg} key={index} src={item} />
          ))}
          <img className={`${classes.verticalImg} ${classes.verticalImgRight}`} src={verticalImgPath} />
        </div>
      );
    }
    case VerticalImgPosition.Middle: {
      return (
        <div className={classes.main}>
          {horizontalImgPaths.slice(0, 3).map((item, index) => (
            <img className={classes.horizontalImg} key={index} src={item} />
          ))}
          <img className={`${classes.verticalImg} ${classes.verticalImgMiddle}`} src={verticalImgPath} />
          {horizontalImgPaths.slice(3, 5).map((item, index) => (
            <img className={classes.horizontalImg} key={index} src={item} />
          ))}
        </div>
      );
    }
  }
};
