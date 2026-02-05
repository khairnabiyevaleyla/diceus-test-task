import React from 'react';
import MetricCard from './MetricCard';
import styles from './styles.module.scss';

const PerformanceMetrics = ({ title, metrics }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.id ?? index}
            title={metric.title}
            value={metric.value}
            subtext={metric.subtext}
            secondaryLine={metric.secondaryLine}
            statusDots={metric.statusDots}
            progressBars={metric.progressBars}
            ctaLabel={metric.ctaLabel}
            ctaHref={metric.ctaHref}
          />
        ))}
      </div>
    </section>
  );
};

export default PerformanceMetrics;
