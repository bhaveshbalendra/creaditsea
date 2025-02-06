import { useSelector } from "react-redux";
import ReportCard from "../components/ReportCard"; // Import the new component
import { RootState } from "../store/store";
import { ICreditReport } from "../types/creditReportsTypes";

const ReportsPage = () => {
  const { reports } = useSelector((state: RootState) => state.reports);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        📊 All Reports
      </h1>

      {!reports || reports.length === 0 ? (
        <p className="text-red-500 text-center text-lg">
          No reports available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report: ICreditReport, index: number) => (
            <div
              key={index}
              className="transform transition-all hover:scale-105"
            >
              <ReportCard report={report} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
