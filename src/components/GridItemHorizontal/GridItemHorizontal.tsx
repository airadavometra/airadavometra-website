import React, { FunctionComponent } from 'react';
import classes from './GridItemHorizontal.module.scss';

export interface GridItemHorizontalProps {
  horizontalImgPaths: string[];
}

export const GridItemHorizontal: FunctionComponent<GridItemHorizontalProps> = ({ horizontalImgPaths }) => {
  return (
    <div className={classes.main}>
      {horizontalImgPaths.map((item, index) => (
        <img className={classes.horizontalImg} key={index} src={item} />
      ))}
    </div>
  );
};
