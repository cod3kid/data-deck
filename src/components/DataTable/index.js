import React from "react";
import "./style.css";
import { dummyTableData, tableHeaders } from "../../utils/constants";

const DataTable = () => {
  return (
    <div>
      <table border="1" className="data-table">
        <tr>
          {tableHeaders.map((label) => {
            return <th>{label}</th>;
          })}
        </tr>

        {dummyTableData.map((data) => {
          return (
            <tr>
              <td>{data["s.no"]}</td>
              <td>{data["percentage.funded"]}</td>
              <td>{data["amt.pledged"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DataTable;
