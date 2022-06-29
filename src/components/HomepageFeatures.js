import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy-to-use.svg').default,
    description: (
      <>
       Laravel IAP was designed from the ground up to be easily installed and
        used to get your in-app purchases features up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/mock-receipts.svg').default,
    description: (
      <>
        Laravel IAP lets you focus on your logic, and we&apos;ll do the chores. Go
        ahead and focus on your business requirements not the receipt tasks.
      </>
    ),
  },
  {
    title: 'Mock Receipts',
    Svg: require('../../static/img/focus-on-what-matters.svg').default,
    description: (
      <>
        Laravel IAP gives you the required tools to mock receipts during development.
        No need to real receipts from different providers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
