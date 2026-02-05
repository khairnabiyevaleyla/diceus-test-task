import React from "react";
import styles from "./styles.module.scss";
import SectionTitle from "../../../../shared/components/SectionTitle";

const actions = [
  { id: 1, label: "New Submission" },
  { id: 2, label: "Quote Builder" },
  { id: 3, label: "Risk Models" },
  { id: 4, label: "Documents Upload" }
];

const QuickActions = () => {
  return (
    <div className={styles.card}>
      <SectionTitle title="Quick Actions" />
      <div className={styles.card_actions}>
        {actions.map(action => (
          <p key={action.id}>
            {action.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
