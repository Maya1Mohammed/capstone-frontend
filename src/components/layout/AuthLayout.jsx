import logoSrc from '../../assets/no_bg_image.png';
import styles from './styles/AuthLayout.module.css';

const CHIPS = [
  {
    label: 'Real-Time Analysis',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: 'Zero-Trust Security',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: 'AI-Powered Insights',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H7a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9.5A4 4 0 0 1 12 2z"/>
        <line x1="9" y1="17" x2="9" y2="17.01"/>
        <line x1="15" y1="17" x2="15" y2="17.01"/>
      </svg>
    ),
  },
];

export default function AuthLayout({ children }) {
  return (
    <main className={styles.page} aria-label="Authentication">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.aurora} aria-hidden="true">
        <div className={styles.auroraBlob1} />
        <div className={styles.auroraBlob2} />
        <div className={styles.auroraBlob3} />
        <div className={styles.auroraBlob4} />
      </div>

      <div className={styles.rays} aria-hidden="true">
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
      </div>

      <div className={styles.scanLine} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.split}>
        <div className={styles.leftPanel}>
          <div className={styles.leftInner}>

            <div className={styles.logoArea}>
              <img
                src={logoSrc}
                alt="PrecisionAI logo"
                className={styles.logo}
                width={72}
                height={72}
              />
            </div>

            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>PRECISIONAI</span>
              <h2 className={styles.heroHeadline}>
                Built for those<br />
                who demand<br />
                <em className={styles.heroAccent}>more.</em>
              </h2>
              <div className={styles.heroDivider} aria-hidden="true" />
              <p className={styles.heroDesc}>
                The intelligent platform that gives technicians
                real-time insight, zero-trust security, and
                sub-millisecond accuracy — at every step.
              </p>
            </div>

            <ul className={styles.stats}>
              {CHIPS.map(({ label, icon }) => (
                <li key={label} className={styles.stat}>
                  <span className={styles.statIcon} aria-hidden="true">{icon}</span>
                  <span className={styles.statLabel}>{label}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.card}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
