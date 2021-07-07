import React, { FunctionComponent } from 'react';

export interface PhotoProps {
  classNames: string;
  src: string;
  imgId: number;
  onClick(imgId: number): void;
}

export const Photo: FunctionComponent<PhotoProps> = ({ classNames, src, imgId, onClick }) => {
  return (
    <img onContextMenu={(e) => e.preventDefault()} className={classNames} src={src} onClick={() => onClick(imgId)} />
  );
};
