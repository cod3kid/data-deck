import "./style.css";

const Table = ({ listKey, data, tableHeaders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map(({ label }) => {
            return <th key={label}>{label}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {data.map((content) => {
          return (
            <tr key={content[listKey]}>
              {tableHeaders.map(({ value }) => (
                <td key={`${listKey}|${value}`}>{content[value]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
