import React, { FunctionComponent } from 'react';
import classes from './VerticalMiddle.module.scss';

export interface VerticalMiddleProps {
  verticalImgPath: string;
  horizontalImgPaths: string[];
}

export const VerticalMiddle: FunctionComponent<VerticalMiddleProps> = ({ verticalImgPath, horizontalImgPaths }) => {
  return (
    <div className={classes.main}>
      {horizontalImgPaths.slice(0, 3).map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
      <img className={classes.verticalImg} src={verticalImgPath} />
      {horizontalImgPaths.slice(3, 5).map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
    </div>
  );
};
