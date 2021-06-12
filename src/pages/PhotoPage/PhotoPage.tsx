import React, { FunctionComponent, useState } from 'react';
import classes from './PhotoPage.module.scss';
import { FullScreenImg } from '../../components/FullScreenImg/FullScreenImg';
import { getPhotos } from '../../utils/getPhotos';
import { GridTemplate } from '../../components/GridTemplate/GridTemplate';

export const PhotoPage: FunctionComponent = () => {
  // TODO: вынести получение фоток из компонента, так как иначе оно вызывается на каждом рендере
  // TODO: Вынести 126 в константу
  const photos = getPhotos(window.innerWidth, 126);
  // TODO: В функции getPhotos можно сразу собирать массивы для горизонтальных и вертикальных фоток и не делать доп фильтры
  const verticalPhotos = photos.filter((item) => item.isVertical);
  const horizontalPhotos = photos.filter((item) => !item.isVertical);
  const [isBigPhotoOpen, setBigPhotoOpen] = useState(false);
  const [bigImgId, setBigImgId] = useState(0);

  const openPhoto = (imgId: number) => {
    if (window.innerWidth > 400) {
      setBigPhotoOpen(true);
      setBigImgId(imgId);
      // TODO: Можно вынести в отдельную функцию util и назвать типа "freezePage"
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

  // TODO: Убрать лог
  console.log(photos.length);

  return (
    <>
      <div className={classes.main}>
        {/* TODO: Сделать массив нужной длины и мапить по нему, внутри мапа считать длину слайса */}
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
      <FullScreenImg
        img={photos[bigImgId]}
        show={isBigPhotoOpen}
        onCloseClick={closePhoto}
        onMoveClick={changePhoto}
      ></FullScreenImg>
    </>
  );
};
