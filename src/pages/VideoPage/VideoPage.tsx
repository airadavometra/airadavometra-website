import React, { FunctionComponent } from 'react';
import classes from './VideoPage.module.scss';

export const VideoPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/wKEOvMF5R-c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/x7HXwgfPjIg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/qDYJ6ewVQqY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/YeFK_7b9qco"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/b0M5ElcKh8I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.videoItem}
        src="https://www.youtube.com/embed/aWFmEYVXG-A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
