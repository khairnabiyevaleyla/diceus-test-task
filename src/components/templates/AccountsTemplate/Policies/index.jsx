import React from 'react';
import PolicyCard from './PolicyCard';
import styles from './styles.module.scss';

const Policies = ({ title, policies }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.list}>
        {policies.map((policy, index) => (
          <PolicyCard
            key={policy.id ?? index}
            icon={policy.icon}
            iconClass={policy.iconClass}
            iconColor={policy.iconColor}
            policyName={policy.policyName}
            premium={policy.premium}
            effectiveDate={policy.effectiveDate}
          />
        ))}
      </div>
    </section>
  );
};

export default Policies;
