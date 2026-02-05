import Table from "../../../../../shared/components/Table";
import data from "../../../../../../data/workQueueData.json";
import styles from "./styles.module.scss";

const getStatusClass = (status) => {
  switch (status) {
    case "New":
      return styles.new;
    case "Pending Review":
      return styles.pending;
    case "Approved":
      return styles.approved;
    case "Rejected":
      return styles.rejected;
    case "Completed":
      return styles.completed;
    default:
      return "";
  }
};

const columns = [
  {
    key: "name",
    title: "ORIGINATOR",
    render: (row) => (
      <div className={styles.flex}>
        <div className={styles.avatar}>{row.initials}</div>
        <span className={styles.name}>{row.name}</span>
      </div>
    ),
  },

  {
    key: "client",
    title: "CLIENT/LINE",
    render: (row) => (
      <>
        <div className={styles.client}>{row.client}</div>
        <small className={styles.line}>{row.line}</small>
      </>
    ),
  },

  { key: "type", title: "TYPE" },

  {
    key: "status",
    title: "STATUS",
    render: (row) => (
      <p className={styles.status}>
        <span className={`${getStatusClass(row.status)}`}></span>
        {row.status}
      </p>
    ),
  },

  { key: "date", title: "CREATED" },

  {
    key: "menu",
    title: "",
    render: () => <div className={styles.menu}><i className="ri-more-2-line"></i></div>,
  },
];

const WorkQueueTable = () => {
  return <Table columns={columns} data={data} />;
};

export default WorkQueueTable;
