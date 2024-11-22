import "./style.css";
import useCrowdFundData from "./useCrowdFundData";
import { tableHeaders, DATA_PER_PAGE } from "../../../utils/constants";
import { useState } from "react";

const DataTable = () => {
  const crowdFundData = useCrowdFundData();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    let totalData = crowdFundData.length;
    if (currentPage * DATA_PER_PAGE <= totalData) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="data-card">
      <table border="1" className="data-table">
        <thead>
          <tr>
            {tableHeaders.map((label) => {
              return <th key={label}>{label}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {crowdFundData
            .slice(
              (currentPage - 1) * DATA_PER_PAGE,
              (currentPage - 1) * DATA_PER_PAGE + 5
            )
            .map((data) => {
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

      {/* Pagination */}
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default DataTable;
