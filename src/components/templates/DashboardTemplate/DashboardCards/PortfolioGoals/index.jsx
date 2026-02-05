import React from 'react';
import SectionTitle from '../../../../shared/components/SectionTitle';
import styles from './styles.module.scss';

const PortfolioGoals = () => {
  const goals = [
    {
      title: "PORTFOLIO LOSS RATIO TARGET",
      target: "TG:55%",
      current: 48.2,
      status: "-6.8% (GOOD)",
      statusType: "good",
      segments: [
        { percentage: 48.2, color: '#3ab979' },
        { percentage: 6.8, color: '#f4b740' },
        { percentage: 45, color: '#e74c3c' }
      ],
      showIndicator: true,
      indicatorPosition: 55
    },
    {
      title: "RENEWAL RETENTION",
      target: "TG:85-90%",
      current: 88,
      status: "ON TARGET",
      statusType: "success",
      segments: [
        { percentage: 20, color: '#e74c3c' },
        { percentage: 60, color: '#f4b740' },
        { percentage: 20, color: '#3ab979' }
      ],
      showPercentage: true
    },
    {
      title: "NEW BUSINESS TARGET",
      current: "$8.1M",
      target: "$12M",
      percentage: 67,
      type: "progress"
    },
    {
      title: "ANNUAL GWP TARGET",
      current: "$28.4M",
      target: "$42M",
      percentage: 68,
      type: "progress"
    }
  ];

  return (
    <div className={styles.card}>
      <SectionTitle title="Portfolio goals" />
      
      <div className={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.goalItem}>
            <div className={styles.goalHeader}>
              <h4 className={styles.goalTitle}>{goal.title}</h4>
              {goal.target && <span className={styles.targetLabel}>{goal.target}</span>}
            </div>

            {goal.type === "progress" ? (
              <div className={styles.progressGoal}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${goal.percentage}%` }}
                  >
                    <span className={styles.currentValue}>{goal.current}</span>
                  </div>
                  <span className={styles.targetValue}>{goal.target}</span>
                </div>
                <span className={styles.percentageLabel}>{goal.percentage}%</span>
              </div>
            ) : (
              <>
                <div className={styles.barContainer}>
                  {goal.showIndicator && (
                    <div 
                      className={styles.indicator} 
                      style={{ left: `${goal.indicatorPosition}%` }}
                    >
                      <div className={styles.indicatorArrow}></div>
                    </div>
                  )}
                  <div className={styles.segmentedBar}>
                    {goal.segments.map((segment, idx) => (
                      <div
                        key={idx}
                        className={styles.segment}
                        style={{
                          width: `${segment.percentage}%`,
                          backgroundColor: segment.color
                        }}
                      >
                        {goal.showPercentage && idx === 2 && (
                          <span className={styles.percentageOnBar}>{goal.current}%</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.status} ${styles[goal.statusType]}`}>
                  {goal.status}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGoals;