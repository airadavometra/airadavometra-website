import React, { FunctionComponent } from 'react';
import classes from './VerticalLeft.module.scss';

export interface VerticalLeftProps {
  verticalImgPath: string;
  horizontalImgPaths: string[];
}

export const VerticalLeft: FunctionComponent<VerticalLeftProps> = ({ verticalImgPath, horizontalImgPaths }) => {
  return (
    <div className={classes.main}>
      <img className={classes.verticalImg} src={verticalImgPath} />
      {horizontalImgPaths.map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
    </div>
  );
};
