import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classes from './ContactLink.module.scss';

export interface ContactLinkProps {
  linkLogoPath: string;
  linkText: string;
  linkPath: string;
}

export const ContactLink: FunctionComponent<ContactLinkProps> = ({ linkLogoPath, linkText, linkPath }) => {
  return (
    <Link className={classes.link} to={linkPath}>
      <img className={classes.linkLogo} src={linkLogoPath} />
      <p className={classes.linkText}>{linkText}</p>
    </Link>
  );
};
