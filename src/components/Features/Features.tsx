import styles from './Features.module.scss';
import { features } from '../../data/features';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className={styles.features}>
      {features.map((f) => (
        <FeatureCard key={f.id} feature={f} />
      ))}
    </section>
  );
}
