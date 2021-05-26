import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import { GridItemHorizontal } from '../GridItemHorizontal/GridItemHorizontal';
import { GridItemVertical, VerticalImgPosition } from '../GridItemVertical/GridItemVertical';
import classes from './GridTemplate.module.scss';

export interface GridTemplateProps {
  imgPaths: ImgInfo[];
  onClick(imgId: number): void;
}

export const GridTemplate: FunctionComponent<GridTemplateProps> = ({ imgPaths, onClick }) => {
  return (
    <div className={classes.main}>
      <GridItemVertical
        imgPaths={imgPaths.slice(0, 5)}
        verticalImgPosition={VerticalImgPosition.Left}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={imgPaths.slice(5, 7)} onClick={onClick} />
      <GridItemVertical
        imgPaths={imgPaths.slice(7, 12)}
        verticalImgPosition={VerticalImgPosition.Middle}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={imgPaths.slice(12, 14)} onClick={onClick} />
      <GridItemVertical
        imgPaths={imgPaths.slice(14, 19)}
        verticalImgPosition={VerticalImgPosition.Right}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={imgPaths.slice(19, 21)} onClick={onClick} />
    </div>
  );
};
