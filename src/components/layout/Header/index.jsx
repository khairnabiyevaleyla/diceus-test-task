import NavTab from "../../shared/components/NavTab";
import styles from "./styles.module.scss";

const Header = () => {
  return (
   <> <div className={styles.header}>
      <div className={styles.header_text}>
        Hi Arthur, welcome! You have 12 open tasks.
      </div>
      <div className={styles.header_search}>
        <div className={styles.header_search_input}>
          <input type="text" placeholder="Search" />
        </div>
        <span>AR</span>
      </div>
    </div>
    <NavTab/></>
  );
};

export default Header;
