import React, { FunctionComponent } from 'react';
import { ContactLink } from '../ContactLink/ContactLink';
import classes from './ContactList.module.scss';
import linkedinLogo from '../../icons/linkedin.svg';
import githubLogo from '../../icons/github.svg';
import emailLogo from '../../icons/email.svg';
import telegramLogo from '../../icons/telegram.svg';
import instagramLogo from '../../icons/instagram.svg';
import youtubeLogo from '../../icons/youtube.svg';

export const ContactList: FunctionComponent = () => {
  return (
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
  );
};
