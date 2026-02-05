import React from "react";
import styles from "./styles.module.scss";
import SectionTitle from "../../../../shared/components/SectionTitle";

const news = [
  {
    id: 1,
    text: "Rate hardening in Cyber market – +15% YoY",
    type: "red"
  },
  {
    id: 2,
    text: "New capacity entering Marine market",
    type: "yellow"
  },
  {
    id: 3,
    text: "Environmental regulatory changes in CA",
    type: "blue"
  }
];

const MarketIntelligence = () => {
  return (
    <div className={styles.card}>
      <SectionTitle title="Market Intelligence" />

      <div className={styles.card_content}>
        {news.map(item => (
          <p key={item.id}>
            <span
              className={`${styles.indicator} ${styles[item.type]}`}
            ></span>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MarketIntelligence;
