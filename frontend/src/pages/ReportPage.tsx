import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReportCard from "../components/ReportCard";
import baseURL from "../constants/baseURL";
import useGetReportByID from "../hooks/getReportByID";
import { setReportsIds } from "../store/slices/creditReportSlice";
import { RootState } from "../store/store";

const ReportPage = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetReportByID(id); // Fetch new data when `id` changes

  const { report, reportIDs } = useSelector(
    (state: RootState) => state.reports
  );

  // Handle report deletion
  const handleDelete = async () => {
    try {
      // Make API call to delete the report
      const response = await axios.delete(`${baseURL}/report/${id}`);

      if (response.data.success) {
        // Remove the deleted report from Redux
        const updatedReports = reportIDs.filter((report) => report.id !== id);
        dispatch(setReportsIds(updatedReports));

        // Reload the page and redirect to /reports
        window.location.reload(); // This will reload the page

        // Optionally, navigate to /reports after reload (if needed)
        setTimeout(() => navigate("/reports"), 100);
        alert("Report deleted successfully!");
      } else {
        alert("Failed to delete report. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting report:", error);
      alert("Failed to delete report. Please try again.");
    }
  };

  if (!report) {
    return <div className="text-red-500 p-4 text-center">No report found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Report Details
      </h1>

      {/* Report Card */}
      <ReportCard report={report} />

      {/* Delete Button */}
      <div className="my-6 flex justify-center">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Delete Report
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
