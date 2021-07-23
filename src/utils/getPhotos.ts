export type ImgInfo = {
  imgPath: string;
  imgId: number;
  isVertical: boolean;
};

export const getPhotos = (screenWidth: number, count: number): ImgInfo[] => {
  const path = '/photos/medium/';

  const result = [];
  let verticalCount = 0;
  let horizontalCount = 0;
  let totalCount = 0;
  const verticalAmountInTemplate = 3;
  const horizontalAmountInTemplate = 18;
  const totalAmountInTemplate = verticalAmountInTemplate + horizontalAmountInTemplate;

  for (let i = 0; i < count / totalAmountInTemplate; i++) {
    for (let j = 0; j < verticalAmountInTemplate; j++) {
      result.push({ imgPath: `${path}v/${verticalCount}.jpg`, imgId: totalCount, isVertical: true });
      verticalCount++;
      totalCount++;
      for (let j = 0; j < horizontalAmountInTemplate / verticalAmountInTemplate; j++) {
        result.push({ imgPath: `${path}h/${horizontalCount}.jpg`, imgId: totalCount, isVertical: false });
        horizontalCount++;
        totalCount++;
      }
    }
  }

  return result;
};
