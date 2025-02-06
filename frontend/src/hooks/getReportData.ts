import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseURL from "../constants/baseURL";
import { setReports } from "../store/slices/creditReportSlice";

const useGetReportData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${baseURL}/reports`);
        dispatch(setReports(res.data)); // Store data in Redux
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, [dispatch]);

  return null; // No return needed as it's updating Redux state
};

export default useGetReportData;
