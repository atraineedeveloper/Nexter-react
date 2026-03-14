import styles from './Story.module.scss';

export default function StoryPictures() {
  return (
    <div className={styles.pictures}>
      <img src="/img/story-1.jpeg" alt="Couple with new house" className={styles.img1} />
      <img src="/img/story-2.jpeg" alt="New house" className={styles.img2} />
    </div>
  );
}
