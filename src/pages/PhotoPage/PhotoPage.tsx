import React, { FunctionComponent } from 'react';
import { GridItemHorizontal } from '../../components/GridItemHorizontal/GridItemHorizontal';
import { GridItemVertical, VerticalImgPosition } from '../../components/GridItemVertical/GridItemVertical';
import classes from './PhotoPage.module.scss';
import verticalPhoto1 from '../../images/photos/DSC08204-01.jpeg';
import horizontalPhoto11 from '../../images/photos/DSC00561-01.jpeg';
import horizontalPhoto12 from '../../images/photos/DSC07525-01.jpeg';
import horizontalPhoto13 from '../../images/photos/DSC08336-01.jpeg';
import horizontalPhoto14 from '../../images/photos/DSC00689-01.jpeg';
import horizontalPhoto21 from '../../images/photos/DSC08228-01-01.jpeg';
import horizontalPhoto22 from '../../images/photos/DSC07910-01.jpeg';

export const PhotoPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <GridItemVertical
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
        verticalImgPosition={VerticalImgPosition.Left}
      />
      <GridItemHorizontal horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
      <GridItemVertical
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
        verticalImgPosition={VerticalImgPosition.Middle}
      />
      <GridItemHorizontal horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
      <GridItemVertical
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
        verticalImgPosition={VerticalImgPosition.Right}
      />
      <GridItemHorizontal horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
    </div>
  );
};
