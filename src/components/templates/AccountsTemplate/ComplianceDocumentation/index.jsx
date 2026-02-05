import React from 'react';
import styles from './styles.module.scss';

const ComplianceDocumentation = ({ title, historyLink, items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {historyLink && (
          <a href={historyLink.href} className={styles.historyLink}>
            {historyLink.label} →
          </a>
        )}
      </div>
      <div className={styles.card}>
        <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item.id ?? index} className={styles.item}>
            <span className={styles.check} aria-hidden>
              <i className="ri-check-line" />
            </span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplianceDocumentation;
