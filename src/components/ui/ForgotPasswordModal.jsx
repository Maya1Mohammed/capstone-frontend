import { useState } from 'react';
import styles from './styles/ForgotPasswordModal.module.css';

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconCheck = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setEmail('');
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Reset password"
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close modal"
        >
          <IconClose />
        </button>

        {step === 1 && (
          <div className={styles.content}>
            <div className={styles.iconBadge}>
              <IconMail />
            </div>
            <div className={styles.copy}>
              <h2 className={styles.heading}>Reset Password</h2>
              <p className={styles.subtext}>
                Enter the email address linked to your account and
                we&rsquo;ll send you a secure reset link.
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="reset-email" className={styles.label}>
                  Email Address
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <input
                    id="reset-email"
                    type="email"
                    placeholder="technician@precision.ai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Reset Link <IconArrowRight />
              </button>
            </form>
            <button type="button" className={styles.cancelBtn} onClick={handleClose}>
              Back to Sign In
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={`${styles.content} ${styles.contentConfirm}`}>
            <div className={`${styles.iconBadge} ${styles.iconBadgeSuccess}`}>
              <IconCheck />
            </div>
            <div className={styles.copy}>
              <h2 className={styles.heading}>Check Your Inbox</h2>
              <p className={styles.subtext}>
                We&rsquo;ve sent a password reset link to{' '}
                <strong className={styles.emailHighlight}>
                  {email || 'your email address'}
                </strong>
                . The link expires in 15 minutes.
              </p>
            </div>
            <p className={styles.resendNote}>
              Didn&rsquo;t receive it?{' '}
              <button
                type="button"
                className={styles.resendBtn}
                onClick={() => setStep(1)}
              >
                Try again
              </button>
            </p>
            <button type="button" className={styles.submitBtn} onClick={handleClose}>
              Back to Sign In <IconArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
