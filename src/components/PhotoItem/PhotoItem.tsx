import React, { FunctionComponent } from 'react';

export interface PhotoItemProps {
  classNames: string;
  src: string;
  imgId: number;
  onClick(imgId: number): void;
}

export const PhotoItem: FunctionComponent<PhotoItemProps> = ({ classNames, src, imgId, onClick }) => {
  return (
    <img onContextMenu={(e) => e.preventDefault()} className={classNames} src={src} onClick={() => onClick(imgId)} />
  );
};
