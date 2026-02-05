import React from 'react';
import styles from './styles.module.scss';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.id ?? index} className={styles.item}>
          {index > 0 && <span className={styles.separator}> // </span>}
          {item.href ? (
            <a
              href={item.href}
              className={item.isActive ? styles.linkActive : styles.link}
            >
              {item.label}
            </a>
          ) : (
            <span className={item.isActive ? styles.linkActive : styles.text}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
