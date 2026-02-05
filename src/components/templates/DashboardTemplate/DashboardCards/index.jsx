import WorkQueue from "../DashboardCards/WorkQueue/index.jsx";
import PortfolioGoals from "../DashboardCards/PortfolioGoals/index.jsx";
import QuickActions from "../DashboardCards/QuickActions/index.jsx";
import MarketIntelligence from "../DashboardCards/MarketIntelligence/index.jsx";
import styles from './styles.module.scss';

const DashboardCards = () => {
  return (
    <div className={styles.cards}>
      <WorkQueue />
      <PortfolioGoals />
      <div className={styles.flex}>
        <QuickActions />
        <MarketIntelligence />
      </div>
    </div>
  );
};

export default DashboardCards;
