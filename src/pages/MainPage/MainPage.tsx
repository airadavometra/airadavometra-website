import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';
import lettersImg from '../../images/letters.png';
import myPhoto from '../../images/my_photo.png';

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <div className={classes.description}>
        <img className={classes.lettersImage} src={lettersImg} alt="letters" />
        <p>
          <b>Hi. I’m Daria.</b>
          <br /> A holistic software developer
          <br /> and photography enthusiast located in Moscow, Russia.
          <br /> Sometimes I’m also a traveller.
        </p>
      </div>
      <img className={classes.myPhoto} src={myPhoto} alt="photo" />
    </div>
  );
};
