---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import React, { FunctionComponent } from 'react';
import classes from './<%= Name %>.module.scss';

export interface <%= Name %>Props {}

export const <%= Name %>: FunctionComponent = () => {
  return (
    <div className={classes.main}>
    </div>
  );
};
