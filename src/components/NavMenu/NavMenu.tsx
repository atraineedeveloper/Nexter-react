import styles from './NavMenu.module.scss';
import { navLinks } from '../../data/footer';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`} aria-label="Main navigation">
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close navigation menu"
        />
        <ul className={styles.nav}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
