import React, { FunctionComponent } from 'react';
import { ExperienceItem } from '../../components/ExperienceItem/ExperienceItem';
import classes from './PortfolioPage.module.scss';

export const PortfolioPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <section>
        <ul className={classes.experienceList}>
          <li className={classes.experienceItem}>
            <ExperienceItem
              year="2021"
              title="Started doing front-end"
              text="My teammates and I support not only CRM system but also a poor and ugly front-end part which is made in back-end style. So I started working on its improvement, because I’m really interested in front-end development. For now I made our own React components library and started to use it in new pages code. Even though I’m not an experienced front-end developer, I study a lot and teach my teammates. "
            />
          </li>
          <li className={classes.experienceItem}>
            <ExperienceItem
              year="2019"
              title="Became a back-end developer"
              text="I had been working on a CRM system. I did new features and a lot of refactoring, because it was a really old code base... There was a big refactoring project for order documents processes where I had to not only rewrite existing code but also make it work with multiple customers in one request and deal with high load. I also participated in architecturing and some management and I usually mentored and trained interns during their internsip."
            />
          </li>
          <li className={classes.experienceItem}>
            <ExperienceItem
              year="2017"
              title="Became a QA automation engeneer"
              text="I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and the code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I helped other teams whith autotests and participated in the improvement of autotesting process and tools."
            />
          </li>
          <li className={classes.experienceItem}>
            <ExperienceItem
              year="2017"
              title="Got my bachelor in computer science in RSUH, Moscow"
              text="I started my carrier as a QA automation engeneer in CRM system just after my university graduation. I had been studying documentation and the code, creating test cases, writing tests and analysing test runs. I had covered the whole code base with autotests for a year. After that I helped other teams whith autotests and participated in the improvement of autotesting process and tools."
            />
          </li>
        </ul>
      </section>
      <section className={classes.skills}>
        <button className={classes.download}>Download CV</button>
      </section>
    </div>
  );
};
