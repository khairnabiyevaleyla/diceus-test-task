import { NavLink } from "react-router-dom";
import { useRef } from "react";
import navTabs from "../../../../data/navTab.json";
import styles from "./styles.module.scss";

const NavTab = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={styles.navtab}>
   
      <div 
        className={styles.navtab_items}
        ref={scrollContainerRef}
      >
        {navTabs.map(tab => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.navtab_items_item} ${styles.active}`
                : styles.navtab_items_item
            }
          >
            <i className={tab.icon}></i>
            {tab.name}
          </NavLink>
        ))}
      </div>

      <div className={styles.navtab_btn}>
          <i 
          className="ri-arrow-left-long-line"
          onClick={scrollLeft}
        ></i>
        <i 
          className="ri-arrow-right-long-line"
          onClick={scrollRight}
        ></i>
      </div>
    </div>
  );
};

export default NavTab;