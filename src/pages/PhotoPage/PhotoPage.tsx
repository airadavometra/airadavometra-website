import React, { FunctionComponent } from 'react';
import { VerticalLeft } from '../../components/GridItems/VerticalLeft/VerticalLeft';
import { VerticalMiddle } from '../../components/GridItems/VerticalMiddle/VerticalMiddle';
import { VerticalRight } from '../../components/GridItems/VerticalRight/VerticalRight';
import { HorizontalMiddle } from '../../components/GridItems/HorizontalMiddle/HorizontalMiddle';
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
      <VerticalLeft
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
      />
      <HorizontalMiddle horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
      <VerticalMiddle
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
      />
      <HorizontalMiddle horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
      <VerticalRight
        verticalImgPath={verticalPhoto1}
        horizontalImgPaths={[horizontalPhoto11, horizontalPhoto12, horizontalPhoto13, horizontalPhoto14]}
      />
      <HorizontalMiddle horizontalImgPaths={[horizontalPhoto21, horizontalPhoto22]} />
    </div>
  );
};
