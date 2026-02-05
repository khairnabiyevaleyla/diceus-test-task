import React from 'react';
import styles from './styles.module.scss';

  const TableActions = ({ 
  onFilter, 
  onSort, 
  onGroup, 
  onNew,
  onSearch,
  searchPlaceholder = "Search",
  showSearch = false,
  showFilter = false,
  showSort = false,
  showGroup = false,
  showNew = false,
  newButtonText = "+ New"
}) => {
  if (!showSearch && !showFilter && !showSort && !showGroup && !showNew) {
    return null;
  }

  return (
    <div className={styles.tableActions}>
      {showSearch && (
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className={styles.searchInput}
            onChange={onSearch}
          />
        </div>
      )}
      
      <div className={styles.actionButtons}>
        {showFilter && (
          <button className={styles.actionButton} onClick={onFilter}>
            Filter
          </button>
        )}
        
        {showSort && (
          <button className={styles.actionButton} onClick={onSort}>
            Sort
          </button>
        )}
        
        {showGroup && (
          <button className={styles.actionButton} onClick={onGroup}>
            Group
          </button>
        )}
        
        {showNew && (
          <button className={styles.newButton} onClick={onNew}>
            {newButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default TableActions;