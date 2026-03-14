import styles from './Story.module.scss';
import { imgUrl } from '../../utils/imgUrl';

export default function StoryPictures() {
  return (
    <div
      className={styles.pictures}
      style={{
        backgroundImage: `linear-gradient(rgba(198,153,99,.5), rgba(198,153,99,.5)), url(${imgUrl('img/back.jpg')})`,
      }}
    >
      <img src={imgUrl('img/story-1.jpeg')} alt="Couple with new house" className={styles.img1} />
      <img src={imgUrl('img/story-2.jpeg')} alt="New house" className={styles.img2} />
    </div>
  );
}
