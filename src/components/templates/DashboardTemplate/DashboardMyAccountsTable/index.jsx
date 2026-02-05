import React from "react";
import Table from "../../../shared/components/Table/index.jsx";
import data from "../../../../data/myAccountsTable.json";
import styles from "./styles.module.scss";
import TableActions from "../../../shared/components/TableActions/index.jsx";
import SectionTitle from "../../../shared/components/SectionTitle/index.jsx";

const DashboardMyAccountsTable = () => {
  const getWinnabilityLevel = (percentage) => {
    if (percentage >= 80) return { level: "Very Strong", dots: 4 };
    if (percentage >= 60) return { level: "Strong", dots: 3 };
    if (percentage >= 40) return { level: "Medium", dots: 2 };
    return { level: "Weak", dots: 1 };
  };

  const getStatusClass = (status) => {
    const normalizedStatus = status.toLowerCase().replace(/\s+/g, "-");

    switch (normalizedStatus) {
      case "active":
        return styles.active;
      case "under-review":
        return styles.pending;
      case "new":
        return styles.new;
      case "approved":
        return styles.approved;
      case "rejected":
        return styles.rejected;
      case "completed":
        return styles.completed;
      default:
        return styles.new;
    }
  };

  const columns = [
    {
      key: "accountName",
      title: "ACCOUNT NAME/TYPE",
      render: (row) => (
        <div className={styles.accountInfo}>
          <div className={styles.accountName}>{row.accountName}</div>
          <small className={styles.accountType}>{row.accountType}</small>
        </div>
      ),
    },
    {
      key: "line",
      title: "LINE",
    },
    {
      key: "broker",
      title: "BROKER",
    },
    {
      key: "renewalDate",
      title: "RENEWAL DATE",
    },
    {
      key: "premium",
      title: "PREMIUM",
      render: (row) => <div className={styles.premium}>${row.premium}</div>,
    },
    {
      key: "ratedPremium",
      title: "RATED PREMIUM",
      render: (row) => <div>${row.ratedPremium}</div>,
    },
    {
      key: "lossRatio",
      title: "LOSS RATIO",
      render: (row) => (
        <span
          className={`${styles.badge} ${styles[`badge-${row.lossRatioStatus}`]}`}
        >
          {row.lossRatio}%
        </span>
      ),
    },
    {
      key: "appetite",
      title: "APPETITE",
      render: (row) => <div className={styles.appetite}>{row.appetite}</div>,
    },
    {
      key: "status",
      title: "STATUS",
      render: (row) => (
        <p className={styles.status}>
          <span className={getStatusClass(row.status)}></span>
          {row.status}
        </p>
      ),
    },
    {
      key: "triage",
      title: "TRIAGE",
      render: (row) => <div className={styles.triageBadge}>{row.triage}</div>,
    },
    {
      key: "win",
      title: "WINNABILITY",
      render: (row) => {
        const { level, dots } = getWinnabilityLevel(row.win);
        return (
          <div className={styles.winnabilityContainer}>
            <div className={styles.winnabilityDots}>
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index < dots ? styles.dotActive : ""}`}
                ></span>
              ))}
            </div>
            <span className={styles.winnabilityLabel}>{level}</span>
          </div>
        );
      },
    },
    {
      key: "menu",
      title: "",
      render: () => (
        <div className={styles.menu}>
          <i className="ri-more-2-line"></i>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
    <div className={styles.tableHeader}>  
      <SectionTitle title="My Accounts" paddingLeft="40px" />
      <TableActions
        showSearch={true}
        showNew={true}
        showSort={true}
        showGroup={true}
        searchPlaceholder="Search"
        onNew={() => console.log("New clicked")}
      /></div>

      <Table columns={columns} data={data} />
    </div>
  );
};

export default DashboardMyAccountsTable;
