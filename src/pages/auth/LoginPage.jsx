import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout          from '../../components/layout/AuthLayout';
import AuthInput           from '../../components/ui/AuthInput';
import AuthButton          from '../../components/ui/AuthButton';
import AuthDivider         from '../../components/ui/AuthDivider';
import ForgotPasswordModal from '../../components/ui/ForgotPasswordModal';
import styles from './styles/LoginPage.module.css';

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function LoginPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AuthLayout>
        <div className={styles.headingRow}>
          <h1 className={styles.heading}>Welcome Back</h1>
          <p className={styles.subheading}>Sign in to your account</p>
        </div>

        <form className={styles.form} noValidate aria-label="Sign in form">
          <AuthInput
            id="login-email"
            label="Email Address"
            type="email"
            placeholder="technician@precision.ai"
            icon={<IconMail />}
          />
          <AuthInput
            id="login-password"
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={<IconLock />}
          />
          <div className={styles.forgotRow}>
            <button
              type="button"
              className={styles.forgotBtn}
              onClick={() => setModalOpen(true)}
            >
              Forgot password?
            </button>
          </div>
          <AuthButton type="submit">
            Sign In <IconArrowRight />
          </AuthButton>
        </form>

        <AuthDivider />

        <p className={styles.footer}>
          Don&rsquo;t have an account?{' '}
          <Link to="/sign-up" className={styles.link}>
            Create Account
          </Link>
        </p>
      </AuthLayout>

      <ForgotPasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
