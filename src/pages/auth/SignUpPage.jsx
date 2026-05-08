import { Link } from 'react-router-dom';
import AuthLayout  from '../../components/layout/AuthLayout';
import AuthInput   from '../../components/ui/AuthInput';
import AuthButton  from '../../components/ui/AuthButton';
import AuthDivider from '../../components/ui/AuthDivider';
import styles from './styles/SignUpPage.module.css';

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

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

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function SignUpPage() {
  return (
    <AuthLayout>
      <h1 className={styles.heading}>Create Account</h1>

      <form className={styles.form} noValidate aria-label="Create account form">
        <AuthInput
          id="signup-fullname"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<IconUser />}
        />
        <AuthInput
          id="signup-email"
          label="Email Address"
          type="email"
          placeholder="technician@precision.ai"
          icon={<IconMail />}
        />
        <AuthInput
          id="signup-password"
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<IconLock />}
        />
        <AuthInput
          id="signup-confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          icon={<IconShield />}
        />
        <AuthButton type="submit">
          Create Account <IconArrowRight />
        </AuthButton>
      </form>

      <AuthDivider />

      <p className={styles.footer}>
        Already have an account?{' '}
        <Link to="/login" className={styles.link}>
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
