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
      <YMaps key={'en_US'} query={{ lang: 'en_US' }}>
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
            <ContactLink
              linkLogoPath={linkedinLogo}
              link="https://www.linkedin.com/in/daria-artemova-a13003188/"
              linkText="LinkedIn"
            />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={githubLogo} link="https://github.com/airadavometra" linkText="GitHub" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={emailLogo} link="mailto:airadavometra@yandex.ru?" linkText="E-mail" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink linkLogoPath={telegramLogo} link="https://t.me/airadavometra" linkText="Telegram" />
          </li>
          <li className={classes.contactItem}>
            <ContactLink
              linkLogoPath={instagramLogo}
              link="https://www.instagram.com/airadavometra/"
              linkText="Instagram"
            />
          </li>
          <li className={classes.contactItem}>
            <ContactLink
              linkLogoPath={youtubeLogo}
              link="https://www.youtube.com/user/dbelaya15/featured"
              linkText="Youtube"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
