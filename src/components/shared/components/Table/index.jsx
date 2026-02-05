  import styles from "./styles.module.scss";

  const Table = ({ columns, data }) => {
    return (
      <table className={styles.table}>
        
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {columns.map(col => (
                <td key={col.key}>
                  {col.render
                    ? col.render(row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    );
  };

  export default Table;
