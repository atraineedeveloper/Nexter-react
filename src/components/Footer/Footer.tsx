import styles from './Footer.module.scss';
import { navLinks } from '../../data/footer';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own
        purposes. This does NOT apply if you plan to produce your own course or tutorials based on
        this project.
      </p>
    </footer>
  );
}
