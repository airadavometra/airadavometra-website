import React, { FunctionComponent } from 'react';
import classes from './HorizontalMiddle.module.scss';

export interface HorizontalMiddleProps {
  horizontalImgPaths: string[];
}

export const HorizontalMiddle: FunctionComponent<HorizontalMiddleProps> = ({ horizontalImgPaths }) => {
  return (
    <div className={classes.main}>
      {horizontalImgPaths.map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
    </div>
  );
};
