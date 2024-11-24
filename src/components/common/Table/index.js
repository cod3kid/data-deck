import "./style.css";

const Table = ({ listKey, data, tableHeaders }) => {
  return (
    <table className="table" role="table" aria-label="Data Table">
      <thead>
        <tr>
          {tableHeaders.map(({ label }) => {
            return (
              <th scope="col" key={label}>
                {label}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {data.map((content) => {
          return (
            <tr scope="row" key={content[listKey]}>
              {tableHeaders.map(({ value }) => (
                <td role="cell" key={`${listKey}|${value}`}>
                  {content[value]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
