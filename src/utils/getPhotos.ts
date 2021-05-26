import verticalPhoto1 from '../images/photos/DSC08204-01.jpeg';
import horizontalPhoto11 from '../images/photos/DSC00561-01.jpeg';
import horizontalPhoto12 from '../images/photos/DSC07525-01.jpeg';
import horizontalPhoto13 from '../images/photos/DSC08336-01.jpeg';
import horizontalPhoto14 from '../images/photos/DSC00689-01.jpeg';
import horizontalPhoto21 from '../images/photos/DSC08228-01-01.jpeg';
import horizontalPhoto22 from '../images/photos/DSC07910-01.jpeg';

export type ImgInfo = {
  imgPath: string;
  imgId: number;
  isVertical: boolean;
};

export const getPhotos = (): ImgInfo[] => {
  return [
    {
      imgPath: verticalPhoto1,
      imgId: 0,
      isVertical: true,
    },
    {
      imgPath: horizontalPhoto11,
      imgId: 1,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto12,
      imgId: 2,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto13,
      imgId: 3,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto14,
      imgId: 4,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto21,
      imgId: 5,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto22,
      imgId: 6,
      isVertical: false,
    },
    {
      imgPath: verticalPhoto1,
      imgId: 7,
      isVertical: true,
    },
    {
      imgPath: horizontalPhoto11,
      imgId: 8,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto12,
      imgId: 9,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto13,
      imgId: 10,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto14,
      imgId: 11,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto21,
      imgId: 12,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto22,
      imgId: 13,
      isVertical: false,
    },
    {
      imgPath: verticalPhoto1,
      imgId: 14,
      isVertical: true,
    },
    {
      imgPath: horizontalPhoto11,
      imgId: 15,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto12,
      imgId: 16,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto13,
      imgId: 17,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto14,
      imgId: 18,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto21,
      imgId: 19,
      isVertical: false,
    },
    {
      imgPath: horizontalPhoto22,
      imgId: 20,
      isVertical: false,
    },
  ];
};
