import React, { FunctionComponent } from 'react';
import { VideoItem } from '../../components/VideoItem/VideoItem';
import classes from './VideoPage.module.scss';

const videoLinks: string[] = [
  'https://www.youtube.com/embed/O1P0SegrR8w',
  'https://www.youtube.com/embed/wKEOvMF5R-c',
  'https://www.youtube.com/embed/x7HXwgfPjIg',
  'https://www.youtube.com/embed/qDYJ6ewVQqY',
  'https://www.youtube.com/embed/YeFK_7b9qco',
  'https://www.youtube.com/embed/b0M5ElcKh8I',
  //'https://www.youtube.com/embed/aWFmEYVXG-A',
];

export const VideoPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      {videoLinks.map((item, index) => (
        <VideoItem key={index} src={item} />
      ))}
    </div>
  );
};
