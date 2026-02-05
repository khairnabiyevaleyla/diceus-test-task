import SectionTitle from "../../../../shared/components/SectionTitle/index.jsx";
import DashboardMyAccountsTable from "../../DashboardMyAccountsTable/index.jsx";
import styles from "./styles.module.scss";
import WorkQueueTable from "./WorkQueueTable/index.jsx";

const cardTabs = [
  { id: 1, label: "Assigned to me", count: 12 },
  { id: 2, label: "Pending review", count: 8 },
  { label: "Referrals", count: 3 },
];
const WorkQueue = () => {
  return (
    <div className={styles.card}>
      <SectionTitle title="Work Queue" paddingLeft="40px" />
      <div className={styles.card_tabs}>
        {cardTabs.map((tab, index) => (
          <p key={index}>
            {tab.label} <span>({tab.count})</span>
          </p>
        ))}
      </div>
      <WorkQueueTable />
    </div>
  );
};

export default WorkQueue;
