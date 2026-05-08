import styles from './styles/AuthDivider.module.css';

export default function AuthDivider() {
  return (
    <div className={styles.divider} role="separator" aria-label="or">
      <span className={styles.line} />
      <span className={styles.text}>or</span>
      <span className={styles.line} />
    </div>
  );
}
