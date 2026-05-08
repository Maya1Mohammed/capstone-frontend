import styles from './styles/AuthButton.module.css';

export default function AuthButton({ children, type = 'button' }) {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
}
