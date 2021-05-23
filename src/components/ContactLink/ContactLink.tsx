import React, { FunctionComponent } from 'react';
import classes from './ContactLink.module.scss';

export interface ContactLinkProps {
  linkLogoPath: string;
  linkText: string;
  link: string;
}

export const ContactLink: FunctionComponent<ContactLinkProps> = ({ linkLogoPath, linkText, link }) => {
  return (
    <a className={classes.link} href={link} target="_blank" rel="noopener noreferrer">
      <img className={classes.linkLogo} src={linkLogoPath} />
      <p className={classes.linkText}>{linkText}</p>
    </a>
  );
};
