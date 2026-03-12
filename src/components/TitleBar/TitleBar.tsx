import styles from './TitleBar.module.css';

interface Props {
  theme: string;
  onThemeToggle: () => void;
}

export function TitleBar({ theme, onThemeToggle }: Props) {
  return (
    <div className={styles.titleBar}>
      <div className={styles.buttons}>
        <span className={`${styles.dot} ${styles.close}`} />
        <span className={`${styles.dot} ${styles.minimize}`} />
        <span className={`${styles.dot} ${styles.maximize}`} />
      </div>
      <span className={styles.title}>portfolio — bash</span>
      <button className={styles.themeToggle} onClick={onThemeToggle} aria-label="Toggle theme">
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </div>
  );
}
