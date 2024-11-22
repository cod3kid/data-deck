import React, { useEffect } from "react";
import "./style.css";
import useCrowdFundData from "./useCrowdFundData";
import { dummyTableData, tableHeaders } from "../../utils/constants";

const DataTable = () => {
  const crowdFundData = useCrowdFundData();

  console.log(crowdFundData);
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
