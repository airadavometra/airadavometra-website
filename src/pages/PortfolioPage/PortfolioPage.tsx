import React, { FunctionComponent } from 'react';
import { ExperienceItem } from '../../components/ExperienceItem/ExperienceItem';
import { SkillItem } from '../../components/SkillItem/SkillItem';
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

export const PortfolioPage: FunctionComponent = () => {
  return (
    <>
      <div className={classes.main}>
        <section>
          <ul className={classes.experienceList}>
            <li className={classes.experienceItem}>
              <ExperienceItem
                isOpen={true}
                year="2021"
                title="Started doing front-end"
                text="My teammates and I support not only CRM system but also a poor and ugly front-end part which is made in back-end style. So I started working on its improvement, because I’m really interested in front-end development. For now I made our own React components library and started to use it in new pages code. Even though I’m not an experienced front-end developer, I study a lot and teach my teammates. "
              />
            </li>
            <li className={classes.experienceItem}>
              <ExperienceItem
                isOpen={false}
                year="2019"
                title="Became a back-end developer"
                text="I had been working on a CRM system. I did new features and a lot of refactoring, because it was a really old code base... There was a big refactoring project for order documents processes where I had to not only rewrite existing code but also make it work with multiple customers in one request and deal with high load. I also participated in architecturing and some management and I usually mentored and trained interns during their internsip."
              />
            </li>
            <li className={classes.experienceItem}>
              <ExperienceItem
                isOpen={false}
                year="2017"
                title="Became a QA automation engeneer"
                text="I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and the code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I helped other teams whith autotests and participated in the improvement of autotesting process and tools."
              />
            </li>
            <li className={classes.experienceItem}>
              <ExperienceItem
                isOpen={false}
                year="2017"
                title="Got my bachelor in computer science in RSUH, Moscow"
                text="I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and the code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I helped other teams whith autotests and participated in the improvement of autotesting process and tools."
              />
            </li>
          </ul>
        </section>
        <section className={classes.skills}>
          <a
            className={`${classes.download} ${classes.skillsItem}`}
            href="/resume.pdf"
            //download="Artemova Daria front-end developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <SkillItem
            className={classes.skillsItem}
            skillName="Front-end"
            skillLogos={[
              { path: htmlImg, alt: 'html5' },
              { path: cssImg, alt: 'css3' },
              { path: jsImg, alt: 'javascript' },
              { path: tsImg, alt: 'typescript' },
              { path: reactImg, alt: 'react' },
              { path: reduxImg, alt: 'redux' },
              { path: sassImg, alt: 'sass' },
            ]}
          />
          <SkillItem
            className={classes.skillsItem}
            skillName="Design"
            skillLogos={[
              { path: figmaImg, alt: 'figma' },
              { path: photoshopImg, alt: 'photoshop' },
            ]}
          />
          <SkillItem
            className={classes.skillsItem}
            skillName="Back-end"
            skillLogos={[
              { path: dotnetImg, alt: 'dot-net' },
              { path: csharpImg, alt: 'c-sharp' },
            ]}
          />
        </section>
      </div>
      <a
        className={classes.githubSection}
        href="https://github.com/airadavometra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={classes.githubText}>Please feel free to check out my github account</p>
        <img className={classes.githubLogo} src={githubImg} alt="github" />
      </a>
    </>
  );
};
