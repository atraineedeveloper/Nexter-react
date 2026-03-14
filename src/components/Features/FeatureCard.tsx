import type { Feature } from '../../types';
import Icon from '../Icon/Icon';
import styles from './Features.module.scss';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className={styles.feature}>
      <Icon id={feature.iconId} className={styles.icon} />
      <h4 className="heading-4 heading-4--dark">{feature.title}</h4>
      <p className={styles.text}>{feature.text}</p>
    </div>
  );
}
