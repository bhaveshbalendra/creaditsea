import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import baseURL from "../constants/baseURL";
import { setReport } from "../store/slices/creditReportSlice";

const useGetReportByID = (id: string | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    const fetchReport = async () => {
      try {
        const res = await axios.get(`${baseURL}/report/${id}`);
        dispatch(setReport(res.data)); // Update Redux store
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, [id, dispatch]);

  return null;
};

export default useGetReportByID;
