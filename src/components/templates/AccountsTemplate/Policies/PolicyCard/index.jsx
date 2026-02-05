import React from 'react';
import styles from './styles.module.scss';

const PolicyCard = ({ icon, iconClass, iconColor, policyName, premium, effectiveDate }) => {
  const iconEl = icon ?? (iconClass ? (
    <i className={iconClass} style={iconColor ? { color: iconColor } : undefined} aria-hidden />
  ) : null);
  return (
    <div className={styles.card}>
      {iconEl && <div className={styles.icon}>{iconEl}</div>}
      <h3 className={styles.name}>{policyName}</h3>
      <p className={styles.premium}>Premium: {premium}</p>
      <p className={styles.effDate}>Eff. Date: {effectiveDate}</p>
    </div>
  );
};

export default PolicyCard;
