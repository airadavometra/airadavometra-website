export type ImgInfo = {
  imgPath: string;
  imgId: number;
  isVertical: boolean;
};

export const getPhotos = (screenWidth: number, count: number): ImgInfo[] => {
  console.log(`getPhotos(${screenWidth}, ${count})`);
  const path = screenWidth > 1000 ? '/photos/big/' : screenWidth > 400 ? '/photos/medium/' : '/photos/small/';

  const result = [];

  let verticalCount = 0;
  let horizontalCount = 0;
  let totalCount = 0;
  for (let i = 0; i < count / 21; i++) {
    for (let j = 0; j < 3; j++) {
      result.push({ imgPath: `${path}v/${verticalCount}.jpg`, imgId: totalCount, isVertical: true });
      verticalCount++;
      totalCount++;
    }
    for (let j = 0; j < 18; j++) {
      result.push({ imgPath: `${path}h/${horizontalCount}.jpg`, imgId: totalCount, isVertical: false });
      horizontalCount++;
      totalCount++;
    }
  }

  return result;
};
