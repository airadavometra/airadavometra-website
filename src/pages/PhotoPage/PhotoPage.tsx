import React, { FunctionComponent, useState } from 'react';
import classes from './PhotoPage.module.scss';
import { FullScreenImg } from '../../components/FullScreenImg/FullScreenImg';
import { getPhotos } from '../../utils/getPhotos';
import { GridTemplate } from '../../components/GridTemplate/GridTemplate';
import { toggleFreezePage } from '../../utils/toggleFreezePage';

const photosAmount = 126;
const photosAmountTemplate = new Array(6).fill('');
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
        {photosAmountTemplate.map((_, index) => (
          <GridTemplate
            key={index}
            verticalImgs={verticalPhotos.slice(index * 3, index * 3 + 3)}
            horizontalImgs={horizontalPhotos.slice(index * 18, index * 18 + 18)}
            onClick={openPhoto}
          />
        ))}
      </div>
      {isBigPhotoOpen && (
        <FullScreenImg img={photos[bigImgId]} onCloseClick={closePhoto} onMoveClick={changePhoto}></FullScreenImg>
      )}
    </>
  );
};
