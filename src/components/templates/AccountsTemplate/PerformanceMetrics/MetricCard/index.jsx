import React from 'react';
import styles from './styles.module.scss';

const MetricCard = ({
  title,
  value,
  subtext,
  secondaryLine,
  statusDots,
  progressBars,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {statusDots != null && (
        <div className={styles.dots} aria-hidden>
          {statusDots.map((filled, i) => (
            <span
              key={i}
              className={filled ? styles.dotFilled : styles.dotEmpty}
            />
          ))}
        </div>
      )}
      {value != null && (
        <div className={styles.valueWrap}>
          <span className={styles.value}>{value}</span>
          {subtext && <span className={styles.subtext}>{subtext}</span>}
        </div>
      )}
      {secondaryLine && (
        <p className={styles.secondaryLine}>{secondaryLine}</p>
      )}
      {progressBars && progressBars.length > 0 && (
        <div className={styles.bars}>
          {progressBars.map((bar, i) => (
            <div key={bar.label ?? i} className={styles.barRow}>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${bar.percent}%` }}
                />
              </div>
              <span className={styles.barLabel}>
                {bar.label} — {bar.percent}%
              </span>
            </div>
          ))}
        </div>
      )}
      {ctaLabel && (
        <a href={ctaHref} className={styles.cta}>
          {ctaLabel} →
        </a>
      )}
    </div>
  );
};

export default MetricCard;
