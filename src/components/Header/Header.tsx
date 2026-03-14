import styles from './Header.module.scss';
import { imgUrl } from '../../utils/imgUrl';

export default function Header() {
  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `linear-gradient(rgba(16,29,44,.93), rgba(16,29,44,.93)), url(${imgUrl('img/hero.jpeg')})`,
      }}
    >
      <img src={imgUrl('img/logo.png')} alt="Nexter logo" className={styles.logo} />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className={`btn ${styles.btn}`}>View our properties</button>
      <div className={styles.seenOnText}>Seen on</div>
      <div className={styles.seenOnLogos}>
        <img src={imgUrl('img/logo-bbc.png')} alt="Seen on logo 1" />
        <img src={imgUrl('img/logo-forbes.png')} alt="Seen on logo 2" />
        <img src={imgUrl('img/logo-techcrunch.png')} alt="Seen on logo 3" />
        <img src={imgUrl('img/logo-bi.png')} alt="Seen on logo 4" />
      </div>
    </header>
  );
}
