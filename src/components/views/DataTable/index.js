import { useState } from "react";
import useCrowdFundData from "./useCrowdFundData";
import { tableHeaders, DATA_PER_PAGE } from "../../../utils/constants";
import "./style.css";
import Table from "../../common/Table";
import Button from "../../common/Button";

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
        listKey="s.no"
        data={crowdFundData.slice(
          (currentPage - 1) * DATA_PER_PAGE,
          (currentPage - 1) * DATA_PER_PAGE + 5
        )}
        tableHeaders={tableHeaders}
      />
      <Button label="Prev" onClick={handlePrevClick} />{" "}
      <Button label="Next" onClick={handleNextClick} />
    </div>
  );
};

export default DataTable;
