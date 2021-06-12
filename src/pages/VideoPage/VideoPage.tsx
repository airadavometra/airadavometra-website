import React, { FunctionComponent } from 'react';
import { VideoItem } from '../../components/VideoItem/VideoItem';
import classes from './VideoPage.module.scss';

export const VideoPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      {/* TODO: Также можно вынести данные в масив */}
      <VideoItem src="https://www.youtube.com/embed/wKEOvMF5R-c" />
      <VideoItem src="https://www.youtube.com/embed/x7HXwgfPjIg" />
      <VideoItem src="https://www.youtube.com/embed/qDYJ6ewVQqY" />
      <VideoItem src="https://www.youtube.com/embed/YeFK_7b9qco" />
      <VideoItem src="https://www.youtube.com/embed/b0M5ElcKh8I" />
      <VideoItem src="https://www.youtube.com/embed/aWFmEYVXG-A" />
    </div>
  );
};
