import React, { FunctionComponent, useState } from 'react';
import classes from './PhotoPage.module.scss';
import { FullScreenImg } from '../../components/FullScreenImg/FullScreenImg';
import { getPhotos } from '../../utils/getPhotos';
import { GridTemplate } from '../../components/GridTemplate/GridTemplate';

export const PhotoPage: FunctionComponent = () => {
  const photos = getPhotos(window.innerWidth, 126);
  const [isBigPhotoOpen, setBigPhotoOpen] = useState(false);
  const [bigImgId, setBigImgId] = useState(0);

  const openPhoto = (imgId: number) => {
    if (window.innerWidth > 400) {
      setBigPhotoOpen(true);
      setBigImgId(imgId);
      document.body.classList.add('frozen');
    }
  };
  const closePhoto = () => {
    setBigPhotoOpen(false);
    setBigImgId(0);
    document.body.classList.remove('frozen');
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

  console.log(photos.length);

  return (
    <>
      <div className={classes.main}>
        <GridTemplate imgPaths={photos.slice(0, 21)} onClick={openPhoto} />
        <GridTemplate imgPaths={photos.slice(21, 42)} onClick={openPhoto} />
        <GridTemplate imgPaths={photos.slice(42, 63)} onClick={openPhoto} />
        <GridTemplate imgPaths={photos.slice(63, 84)} onClick={openPhoto} />
        <GridTemplate imgPaths={photos.slice(84, 105)} onClick={openPhoto} />
        <GridTemplate imgPaths={photos.slice(105, 126)} onClick={openPhoto} />
      </div>
      <FullScreenImg
        img={photos[bigImgId]}
        show={isBigPhotoOpen}
        onCloseClick={closePhoto}
        onMoveClick={changePhoto}
      ></FullScreenImg>
    </>
  );
};
