import React, { FunctionComponent } from 'react';
import { ImgInfo } from '../../utils/getPhotos';
import { GridItemHorizontal } from '../GridItemHorizontal/GridItemHorizontal';
import { GridItemVertical, VerticalImgPosition } from '../GridItemVertical/GridItemVertical';
import classes from './GridTemplate.module.scss';

export interface GridTemplateProps {
  verticalImgs: ImgInfo[];
  horizontalImgs: ImgInfo[];
  onClick(imgId: number): void;
}

export const GridTemplate: FunctionComponent<GridTemplateProps> = ({ horizontalImgs, verticalImgs, onClick }) => {
  return (
    <div className={classes.main}>
      <GridItemVertical
        verticalImg={verticalImgs[0]}
        horizontalImgs={horizontalImgs.slice(0, 4)}
        verticalImgPosition={VerticalImgPosition.Left}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(4, 6)} onClick={onClick} />
      <GridItemVertical
        verticalImg={verticalImgs[1]}
        horizontalImgs={horizontalImgs.slice(6, 10)}
        verticalImgPosition={VerticalImgPosition.Middle}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(10, 12)} onClick={onClick} />
      <GridItemVertical
        verticalImg={verticalImgs[2]}
        horizontalImgs={horizontalImgs.slice(12, 16)}
        verticalImgPosition={VerticalImgPosition.Right}
        onClick={onClick}
      />
      <GridItemHorizontal imgPaths={horizontalImgs.slice(16, 18)} onClick={onClick} />
    </div>
  );
};
