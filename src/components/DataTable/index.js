import "./style.css";
import useCrowdFundData from "./useCrowdFundData";
import { tableHeaders } from "../../utils/constants";

const DataTable = () => {
  const crowdFundData = useCrowdFundData();

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
          {crowdFundData.map((data) => {
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
