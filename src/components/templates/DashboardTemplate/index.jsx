import DashboardCards from "./DashboardCards/index.jsx";
import DashboardMyAccountsTable from "./DashboardMyAccountsTable/index.jsx";
import styles from "./styles.module.scss";

const DashboardTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <DashboardCards />
      <div className={styles.tableSection}>
  <DashboardMyAccountsTable />
      </div>
    </div>
  );
};

export default DashboardTemplate;
