import { useState } from "react";
import useCrowdFundData from "./useCrowdFundData";
import { tableHeaders, DATA_PER_PAGE } from "../../../utils/constants";
import "./style.css";
import Table from "../../common/Table";
import Pagination from "../../common/Pagination";
import Spinner from "../../common/Spinner";

const DataTable = () => {
  const { crowdFundData, isLoading } = useCrowdFundData();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading)
    return (
      <div className="spinner-parent">
        <Spinner />
      </div>
    );

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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(crowdFundData.length / DATA_PER_PAGE)}
      />
    </div>
  );
};

export default DataTable;
