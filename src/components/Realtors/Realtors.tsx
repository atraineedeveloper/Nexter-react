import React from 'react';
import styles from './Realtors.module.scss';
import { realtors } from '../../data/realtors';
import { imgUrl } from '../../utils/imgUrl';

export default function Realtors() {
  return (
    <div className={styles.realtors}>
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className={styles.list}>
        {realtors.map((r) => (
          <React.Fragment key={r.id}>
            <img
              src={imgUrl(`img/${r.image}`)}
              alt={r.name}
              className={styles.img}
            />
            <div>
              <h4 className="heading-4 heading-4--light">{r.name}</h4>
              <p className={styles.sold}>{r.housesSold} houses sold</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
