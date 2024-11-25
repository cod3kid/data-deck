import { useEffect, useState } from "react";
import { CROWD_FUND_DATA_API } from "../../../utils/apis";

function useCrowdFundData() {
  const [crowdFundData, setCrowdFundData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(CROWD_FUND_DATA_API);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setCrowdFundData(result);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { crowdFundData, isLoading };
}

export default useCrowdFundData;
