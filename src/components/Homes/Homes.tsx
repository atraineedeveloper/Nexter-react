import styles from './Homes.module.scss';
import { homes } from '../../data/homes';
import HomeCard from './HomeCard';

export default function Homes() {
  return (
    <section className={styles.homes}>
      {homes.map((h) => (
        <HomeCard key={h.id} home={h} />
      ))}
    </section>
  );
}
