import React, { FunctionComponent, useState } from 'react';
import classes from './PhotoPage.module.scss';
import { FullScreenImg } from '../../components/FullScreenImg/FullScreenImg';
import { getPhotos } from '../../utils/getPhotos';
import { GridTemplate } from '../../components/GridTemplate/GridTemplate';
import { toggleFreezePage } from '../../utils/toggleFreezePage';

const photosAmount = 126;
const photos = getPhotos(window.innerWidth, photosAmount);
const verticalPhotos = photos.filter((item) => item.isVertical);
const horizontalPhotos = photos.filter((item) => !item.isVertical);

export const PhotoPage: FunctionComponent = () => {
  const [isBigPhotoOpen, setBigPhotoOpen] = useState(false);
  const [bigImgId, setBigImgId] = useState(0);

  const openPhoto = (imgId: number) => {
    if (window.innerWidth > 400) {
      setBigPhotoOpen(true);
      setBigImgId(imgId);
      toggleFreezePage();
    }
  };
  const closePhoto = () => {
    setBigPhotoOpen(false);
    setBigImgId(0);
    toggleFreezePage();
  };
  const changePhoto = (newImgId: number) => {
    if (newImgId == photos.length) {
      newImgId = 0;
    }
    if (newImgId === -1) {
      newImgId = photos.length - 1;
    }
    setBigImgId(newImgId);
  };

  return (
    <>
      <div className={classes.main}>
        <GridTemplate
          verticalImgs={verticalPhotos.slice(0, 3)}
          horizontalImgs={horizontalPhotos.slice(0, 18)}
          onClick={openPhoto}
        />
        <GridTemplate
          verticalImgs={verticalPhotos.slice(3, 6)}
          horizontalImgs={horizontalPhotos.slice(18, 36)}
          onClick={openPhoto}
        />
        <GridTemplate
          verticalImgs={verticalPhotos.slice(6, 9)}
          horizontalImgs={horizontalPhotos.slice(36, 54)}
          onClick={openPhoto}
        />
        <GridTemplate
          verticalImgs={verticalPhotos.slice(9, 12)}
          horizontalImgs={horizontalPhotos.slice(54, 72)}
          onClick={openPhoto}
        />
        <GridTemplate
          verticalImgs={verticalPhotos.slice(12, 15)}
          horizontalImgs={horizontalPhotos.slice(72, 90)}
          onClick={openPhoto}
        />
        <GridTemplate
          verticalImgs={verticalPhotos.slice(15, 18)}
          horizontalImgs={horizontalPhotos.slice(90, 108)}
          onClick={openPhoto}
        />
      </div>
      {isBigPhotoOpen && (
        <FullScreenImg img={photos[bigImgId]} onCloseClick={closePhoto} onMoveClick={changePhoto}></FullScreenImg>
      )}
    </>
  );
};
