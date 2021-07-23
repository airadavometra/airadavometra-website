import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';
import lettersImg from '../../images/letters.png';
import myPhoto from '../../images/my_photo.webp';

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <div className={classes.description}>
        <img className={classes.lettersImage} src={lettersImg} alt="letters" />
        <div>
          <h2 className={classes.textHeader}>Hi. I’m Daria.</h2>
          <p className={classes.text}>
            A holistic software developer
            <br /> and photography enthusiast located in Moscow, Russia.
            <br /> Sometimes I’m also a traveller.
          </p>
        </div>
      </div>
      <img onContextMenu={(e) => e.preventDefault()} className={classes.myPhoto} src={myPhoto} alt="photo" />
    </div>
  );
};
