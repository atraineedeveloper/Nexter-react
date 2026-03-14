import styles from './Gallery.module.scss';
import { galleryImages } from '../../data/gallery';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      {galleryImages.map((img) => (
        <figure
          key={img.id}
          className={`${styles.galleryItem} ${styles[`galleryItem${img.id}` as keyof typeof styles]}`}
        >
          <img
            src={`/img/gal-${img.id}.jpeg`}
            alt={img.alt}
            className={styles.galleryImg}
          />
        </figure>
      ))}
    </section>
  );
}
