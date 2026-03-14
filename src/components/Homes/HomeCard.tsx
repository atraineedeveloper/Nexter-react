import type { Home } from '../../types';
import Icon from '../Icon/Icon';
import styles from './Homes.module.scss';

interface HomeCardProps {
  home: Home;
}

export default function HomeCard({ home }: HomeCardProps) {
  return (
    <div className={styles.home}>
      <img src={`/img/${home.image}`} alt={home.name} className={styles.img} />
      <Icon id="icon-heart-full" className={styles.like} />
      <h5 className={styles.name}>{home.name}</h5>
      <div className={styles.location}>
        <Icon id="icon-map-pin" />
        <p>{home.location}</p>
      </div>
      <div className={styles.rooms}>
        <Icon id="icon-profile-male" />
        <p>{home.rooms} rooms</p>
      </div>
      <div className={styles.area}>
        <Icon id="icon-expand" />
        <p>
          {home.area} m<sup>2</sup>
        </p>
      </div>
      <div className={styles.price}>
        <Icon id="icon-key" />
        <p>{home.price}</p>
      </div>
      <button className={`btn ${styles.btn}`}>Contact realtor</button>
    </div>
  );
}
