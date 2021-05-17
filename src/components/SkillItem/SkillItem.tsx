import React, { FunctionComponent } from 'react';
import classes from './SkillItem.module.scss';

export interface SkillItemProps {
  skillLogos: SkillLogo[];
  skillName: string;
  className: string;
}
export type SkillLogo = {
  path: string;
  alt: string;
};

export const SkillItem: FunctionComponent<SkillItemProps> = ({ skillLogos, skillName, className }) => {
  return (
    <div className={className}>
      <h2 className={classes.header}>{skillName}</h2>
      <div className={classes.iconsContainer}>
        {skillLogos.map((item, index) => (
          <img className={classes.icon} key={index} src={item.path} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};
