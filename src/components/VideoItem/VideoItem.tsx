import React, { FunctionComponent } from 'react';
import classes from './VideoItem.module.scss';

export interface VideoItemProps {
  src: string;
}

export const VideoItem: FunctionComponent<VideoItemProps> = ({ src }) => {
  return (
    <div className={classes.main}>
      <iframe
        className={classes.videoItem}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
