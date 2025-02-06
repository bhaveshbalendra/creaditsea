import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseURL from "../constants/baseURL";
import { setReportsIds } from "../store/slices/creditReportSlice";

const useGetReportIDs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${baseURL}/get-ids`);
        dispatch(setReportsIds(res.data)); // Store data in Redux
      } catch (error) {
        console.error("Error fetching ids:", error);
      }
    };

    fetchReports();
  }, [dispatch]);

  return null; // No return needed as it's updating Redux state
};

export default useGetReportIDs;
