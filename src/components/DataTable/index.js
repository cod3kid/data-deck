import React from "react";
import "./style.css";
import { dummyTableData, tableHeaders } from "../../utils/constants";

const DataTable = () => {
  return (
    <div>
      <table border="1" className="data-table">
        <thead>
          <tr>
            {tableHeaders.map((label) => {
              return <th key={label}>{label}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {dummyTableData.map((data) => {
            return (
              <tr key={data["s.no"]}>
                <td>{data["s.no"]}</td>
                <td>{data["percentage.funded"]}</td>
                <td>{data["amt.pledged"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
