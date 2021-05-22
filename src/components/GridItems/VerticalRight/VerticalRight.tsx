import React, { FunctionComponent } from 'react';
import classes from './VerticalRight.module.scss';

export interface VerticalRightProps {
  verticalImgPath: string;
  horizontalImgPaths: string[];
}

export const VerticalRight: FunctionComponent<VerticalRightProps> = ({ verticalImgPath, horizontalImgPaths }) => {
  return (
    <div className={classes.main}>
      {horizontalImgPaths.map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
      <img className={classes.verticalImg} src={verticalImgPath} />
    </div>
  );
};
