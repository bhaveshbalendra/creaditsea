import { ICreditReport } from "../types/creditReportsTypes";

interface ReportCardProps {
  report: ICreditReport;
}

const ReportCard: React.FC<ReportCardProps> = ({ report }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-300 shadow-md rounded-lg p-6 transition-all hover:shadow-lg">
      {/* Basic Details */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {report.basicDetails?.subscriberName || "Unknown Name"}
      </h2>
      <p className="text-gray-600">
        <strong>Credit Score:</strong>{" "}
        <span className="text-blue-500 font-semibold">
          {report.basicDetails?.creditScore || "N/A"}
        </span>
      </p>
      <p className="text-gray-600">
        <strong>Mobile:</strong>{" "}
        {report.basicDetails?.mobilePhoneNumber || "N/A"}
      </p>
      <p className="text-gray-600">
        <strong>PAN:</strong> {report.basicDetails?.incomeTaxPan || "N/A"}
      </p>

      {/* Report Summary */}
      <h3 className="text-lg font-semibold text-gray-700 mt-6 border-b pb-2">
        Report Summary
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-gray-700">
        <p>
          <strong>Total Accounts:</strong>{" "}
          {report.reportSummary?.creditAccountTotal || "N/A"}
        </p>
        <p>
          <strong>Active:</strong>{" "}
          {report.reportSummary?.creditAccountActive || "N/A"}
        </p>
        <p>
          <strong>Closed:</strong>{" "}
          {report.reportSummary?.creditAccountClosed || "N/A"}
        </p>
        <p>
          <strong>Current Balance:</strong> ₹
          {report.reportSummary?.currentBalanceAmount || "N/A"}
        </p>
        <p>
          <strong>Secured Balance:</strong> ₹
          {report.reportSummary?.outstandingBalanceSecured || "N/A"}
        </p>
        <p>
          <strong>Unsecured Balance:</strong> ₹
          {report.reportSummary?.outstandingBalanceUnSecured || "N/A"}
        </p>
        <p>
          <strong>CAPS (7 Days):</strong>{" "}
          {report.reportSummary?.totalCAPSLast7Days || "N/A"}
        </p>
      </div>

      {/* Account Information */}
      <h3 className="text-lg font-semibold text-gray-700 mt-6 border-b pb-2">
        Account Information
      </h3>
      {report.accountInformation?.length > 0 ? (
        <div className="mt-4 space-y-4">
          {report.accountInformation.map((account, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg border">
              <p className="text-gray-700">
                <strong>Account Type:</strong> {account.accountType || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Subscriber:</strong> {account.subscriberName || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {account.address || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Account #:</strong> {account.accountNumber || "N/A"}
              </p>
              <p className="text-red-500">
                <strong>Amount Overdue:</strong> ₹
                {account.amountOverdue || "N/A"}
              </p>
              <p className="text-green-600">
                <strong>Current Balance:</strong> ₹
                {account.currentBalance || "N/A"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-2">No account information available.</p>
      )}
    </div>
  );
};

export default ReportCard;
