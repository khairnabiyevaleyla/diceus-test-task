import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import AccountHeader from './AccountHeader';
import NeedsAttentionPanel from './NeedsAttentionPanel';
import PerformanceMetrics from './PerformanceMetrics';
import Policies from './Policies';
import AccountStatus from './AccountStatus';
import ComplianceDocumentation from './ComplianceDocumentation';
import accountDashboard from '../../../data/accountDashboard.json';
import styles from './styles.module.scss';

const AccountsTemplate = () => {
  const { breadcrumbs, accountHeader, needsAttention, performanceMetrics, policies, accountStatus, complianceDocumentation } = accountDashboard;

  const logo = (
    <i
      className="ri-ship-2-line"
      style={{ fontSize: 28, color: '#3b82f6' }}
      aria-hidden
    />
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbsWrap}>
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <div className={styles.topRow}>
        <div className={styles.headerCol}>
          <AccountHeader
            logo={logo}
            companyName={accountHeader.companyName}
            address={accountHeader.address}
            metaFields={accountHeader.metaFields}
          />
        </div>
        <div className={styles.attentionCol}>
          <NeedsAttentionPanel title={needsAttention.title} items={needsAttention.items} />
        </div>
      </div>

      <PerformanceMetrics title={performanceMetrics.title} metrics={performanceMetrics.metrics} />

      <Policies title={policies.title} policies={policies.policies} />

      <div className={styles.bottomRow}>
        <div className={styles.statusCol}>
          <AccountStatus title={accountStatus.title} steps={accountStatus.steps} />
        </div>
        <div className={styles.complianceCol}>
          <ComplianceDocumentation
            title={complianceDocumentation.title}
            historyLink={complianceDocumentation.historyLink}
            items={complianceDocumentation.items}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountsTemplate;
