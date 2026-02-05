import React from 'react';
import styles from './styles.module.scss';

const NeedsAttentionPanel = ({ title, items }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.accent} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          <i className="ri-error-warning-line" aria-hidden />
          {title}
        </h2>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={item.id ?? index} className={styles.item}>
              <div className={styles.itemMain}>{item.primary}</div>
              {item.secondary && (
                <div className={styles.itemSecondary}>{item.secondary}</div>
              )}
              {item.ctaLabel && (
                <a href={item.ctaHref} className={styles.cta}>
                  {item.ctaLabel} →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NeedsAttentionPanel;
