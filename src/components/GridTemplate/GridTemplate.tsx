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
  const verticalImgs = imgPaths.filter((p) => p.isVertical);
  const horizontalImgs = imgPaths.filter((p) => !p.isVertical);
  return (
    <div className={classes.main}>
      <GridItemVertical
        imgPaths={verticalImgs.slice(0, 1).concat(horizontalImgs.slice(0, 4))}
        verticalImgPosition={VerticalImgPosition.Left}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(4, 6)} onClick={onClick} />
      <GridItemVertical
        imgPaths={verticalImgs.slice(1, 2).concat(horizontalImgs.slice(6, 10))}
        verticalImgPosition={VerticalImgPosition.Middle}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(10, 12)} onClick={onClick} />
      <GridItemVertical
        imgPaths={verticalImgs.slice(2, 3).concat(horizontalImgs.slice(12, 16))}
        verticalImgPosition={VerticalImgPosition.Right}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(16, 18)} onClick={onClick} />
    </div>
  );
};
