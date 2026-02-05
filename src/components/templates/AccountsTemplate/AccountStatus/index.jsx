import React from 'react';
import styles from './styles.module.scss';

const AccountStatus = ({ title, steps }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.card}>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id ?? index}>
              {index > 0 && <div className={styles.connector} aria-hidden />}
              <div className={styles.step}>
                <span
                  className={step.completed ? styles.circleDone : styles.circlePending}
                  aria-hidden
                >
                  <i className={`ri-check-line ${step.completed ? styles.checkIcon : styles.checkIconPending}`} />
                </span>
                <span className={styles.label}>{step.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountStatus;
