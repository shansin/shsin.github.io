'use client';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ size = 'default' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.button} ${size === 'small' ? styles.small : ''}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className={styles.text}>
        {isDark ? 'Dark 🌙' : 'Light ☀️'}
      </span>
      <span className={styles.switchText}>
        → {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}