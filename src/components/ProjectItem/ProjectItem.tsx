import React, { FunctionComponent } from 'react';
import classes from './ProjectItem.module.scss';
import githubLinkImg from '../../icons/githubYellow.svg';
import linkImg from '../../icons/link.svg';
import classNames from 'classnames';

export interface ProjectItemProps {
  projectInfo: ProjectInfo;
}

export type ProjectInfo = {
  projectName: string;
  projectDesc: string;
  projectPic: string;
  projectLink: string;
  projectGithubLink: string;
};

export const ProjectItem: FunctionComponent<ProjectItemProps> = ({ projectInfo }) => {
  return (
    <div className={classes.main}>
      <img className={classes.projectPreviewImg} src={projectInfo.projectPic} />
      <div className={classes.overlay}>
        <section className={classes.text}>
          <div className={classes.title}>{projectInfo.projectName}</div>
          <div className={classes.description}>{projectInfo.projectDesc}</div>
        </section>
        <a className={classNames(classes.link, classes.projectLink)} href={projectInfo.projectLink}>
          <img className={classNames(classes.icon, classes.projectIcon)} src={linkImg} alt="App link" />
        </a>
        <a className={classNames(classes.link, classes.projectGithubLink)} href={projectInfo.projectGithubLink}>
          <img
            className={classNames(classes.icon, classes.projectGithubIcon)}
            src={githubLinkImg}
            alt="App github link"
          />
        </a>
      </div>
    </div>
  );
};
