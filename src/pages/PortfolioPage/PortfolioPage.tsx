import React, { FunctionComponent } from 'react';
import classes from './PortfolioPage.module.scss';
import htmlImg from '../../icons/html5.svg';
import cssImg from '../../icons/css3.svg';
import jsImg from '../../icons/javascript.svg';
import tsImg from '../../icons/typescript.svg';
import reactImg from '../../icons/react.svg';
import reduxImg from '../../icons/redux.svg';
import sassImg from '../../icons/sass.svg';
import figmaImg from '../../icons/figma.svg';
import photoshopImg from '../../icons/photoshop.svg';
import csharpImg from '../../icons/csharp.svg';
import dotnetImg from '../../icons/dotnet.svg';
import githubImg from '../../icons/github.svg';
import { useMedia } from 'react-use';
import classNames from 'classnames';
import { SkillInfo, SkillList } from '../../components/SkillList/SkillList';
import { ExperienceInfo, ExperienceList } from '../../components/ExperienceList/ExperienceList';

const experienceInfoArray: ExperienceInfo[] = [
  {
    isOpen: true,
    year: '2021',
    title: 'Started doing front-end',
    text: 'I realized that I am actually very interested in front-end development, especially in accessibility, usability and design. So I started working with a poor and ugly CRM UI, written on .NET legacy technologies in a back-end style. I made a React components library and a pipeline based on semantic versioning rules to automatically publish it to NPM. I also created a new web app using React, Redux and TypeScript as a first example. After that I conducted a demo to my teammates. I hope I set the direction of web development.',
  },
  {
    isOpen: false,
    year: '2019',
    title: 'Became a back-end developer',
    text: 'I had been working on a CRM system for about two years. I had been doing new features and a lot of refactoring, because it was a really old and confusing code base... Also there was a big refactoring project for order documents processes, I had to not only rewrite existing code with new process engine but also make it process multiple customers in one request and deal with high load. That was a knotty problem! I also had been participating in architecturing and some mentoring and management.',
  },
  {
    isOpen: false,
    year: '2017',
    title: 'Became a QA automation engeneer',
    text: 'I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I had been helping to create new team of engineers and participated in the improvement of autotesting process and tools.',
  },
  {
    isOpen: false,
    year: '2017',
    title: 'Got my bachelor in computer science in RSUH, Moscow',
    text: 'I had been studying a lot of maths and programming, just a little bit of everything. Oh, I wish I could remember all that...',
  },
];
const skillInfoArray: SkillInfo[] = [
  {
    skillName: 'Front-end',
    skillLogos: [
      { logoPath: htmlImg, logoAlt: 'html5' },
      { logoPath: cssImg, logoAlt: 'css3' },
      { logoPath: jsImg, logoAlt: 'javascript' },
      { logoPath: tsImg, logoAlt: 'typescript' },
      { logoPath: reactImg, logoAlt: 'react' },
      { logoPath: reduxImg, logoAlt: 'redux' },
      { logoPath: sassImg, logoAlt: 'sass' },
    ],
  },
  {
    skillName: 'Design',
    skillLogos: [
      { logoPath: figmaImg, logoAlt: 'figma' },
      { logoPath: photoshopImg, logoAlt: 'photoshop' },
    ],
  },
  {
    skillName: 'Back-end',
    skillLogos: [
      { logoPath: dotnetImg, logoAlt: 'dot-net' },
      { logoPath: csharpImg, logoAlt: 'c-sharp' },
    ],
  },
];

export const PortfolioPage: FunctionComponent = () => {
  const isMobile = useMedia('(max-width: 500px)');
  const downloadButton = (
    <a
      className={classNames(classes.download, classes.skillsItem)}
      href="/Artemova Daria CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </a>
  );

  return (
    <div className={classes.main}>
      <div className={classes.skillsAndExperience}>
        {isMobile && downloadButton}
        <section>
          <ExperienceList experienceInfoArray={experienceInfoArray} />
        </section>
        <section className={classes.skills}>
          {!isMobile && downloadButton}
          <SkillList skillInfoArray={skillInfoArray} />
        </section>
      </div>
      <a
        className={classes.githubSection}
        href="https://github.com/airadavometra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={classes.githubText}>Please feel free {isMobile && <br />} to check out my github account</p>
        <img className={classes.githubLogo} src={githubImg} alt="github" />
      </a>
    </div>
  );
};
