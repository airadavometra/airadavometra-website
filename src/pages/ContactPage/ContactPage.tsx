import React, { FunctionComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classes from './ContactPage.module.scss';
import linkedinLogo from '../../icons/contact/linkedin.svg';
import githubLogo from '../../icons/contact/github.svg';
import emailLogo from '../../icons/contact/email.svg';
import telegramLogo from '../../icons/contact/telegram.svg';
import instagramLogo from '../../icons/contact/instagram.svg';
import youtubeLogo from '../../icons/contact/youtube.svg';
import pinLogo from '../../icons/pin.svg';
import { ContactLink } from '../../components/ContactLink/ContactLink';

export const ContactPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <YMaps>
        <Map
          className={classes.map}
          defaultState={{
            center: [55.752068564993, 37.61748330508703],
            zoom: 4,
          }}
          options={{ suppressMapOpenBlock: true, suppressObsoleteBrowserNotifier: true }}
        >
          <Placemark
            geometry={[55.752068564993, 37.61748330508703]}
            options={{
              iconColor: '#f7c003',
              preset: 'islands#circleDotIcon',
              iconLayout: 'default#image',
              iconImageHref: pinLogo,
              iconImageSize: [48, 48],
              iconImageOffset: [-24, -48],
            }}
          />
        </Map>
      </YMaps>
      <div className={classes.contactsContainer}>
        <h2 className={classes.title}>You can reach me here</h2>
        <ul className={classes.contacts}>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={linkedinLogo} linkPath="/" linkText="LinkedIn" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={githubLogo} linkPath="/" linkText="GitHub" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={emailLogo} linkPath="/" linkText="E-mail" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={telegramLogo} linkPath="/" linkText="Telegram" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={instagramLogo} linkPath="/" linkText="Instagram" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={youtubeLogo} linkPath="/" linkText="Youtube" />
          </li>
        </ul>
      </div>
    </div>
  );
};
