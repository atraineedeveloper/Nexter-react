import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <button
        className={`${styles.navBtn} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <span className={styles.bar} />
      </button>
    </div>
  );
}
