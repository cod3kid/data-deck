import { useState } from "react";
import useCrowdFundData from "./useCrowdFundData";
import { tableHeaders, DATA_PER_PAGE } from "../../../utils/constants";
import "./style.css";
import Table from "../../common/Table";

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
    <div>
      <Table
        data={crowdFundData.slice(
          (currentPage - 1) * DATA_PER_PAGE,
          (currentPage - 1) * DATA_PER_PAGE + 5
        )}
        tableHeaders={tableHeaders}
      />

      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default DataTable;
