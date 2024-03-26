import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Boost accuracy of your LLM app with foresight',
    Svg: require('@site/static/img/foreai_emblem_bg_rounded_white.svg').default,
    description: (
      <>
        <p>Delve into the wealth of knowledge within our <a href="/docs/category/foresight">documentation</a>.</p>
        <p>Alternatively, experience the power of <a href="https://foresight.foreai.co">foresight</a> firsthand.</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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