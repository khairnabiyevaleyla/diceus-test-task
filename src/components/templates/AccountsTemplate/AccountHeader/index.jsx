import React from 'react';
import styles from './styles.module.scss';

const AccountHeader = ({ logo, companyName, address, metaFields }) => {
  return (
    <div className={styles.header}>
      <div className={styles.main}>
        {logo && (
          <div className={styles.logoWrap}>
            {typeof logo === 'string' ? (
              <img src={logo} alt="" className={styles.logo} />
            ) : (
              logo
            )}
          </div>
        )}
        <div className={styles.info}>
          <h1 className={styles.companyName}>{companyName}</h1>
          {address && <p className={styles.address}>{address}</p>}
        </div>
      </div>
      {metaFields && metaFields.length > 0 && (
        <div className={styles.meta}>
          {metaFields.map((field, index) => (
            <div key={field.label ?? index} className={styles.metaItem}>
              <span className={styles.metaLabel}>{field.label}</span>
              <span className={styles.metaValue}>{field.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountHeader;
