import mongoose, { Model, Schema } from "mongoose";
import {
  IAccountInformation,
  IBasicDetails,
  ICreditReport,
  IReportSummary,
} from "../types/creditReportsTypes";

// Basic Details Schema
const BasicDetailsSchema = new Schema<IBasicDetails>(
  {
    subscriberName: { type: String, required: true },
    mobilePhoneNumber: { type: String, required: true },
    incomeTaxPan: {
      type: String,
      required: false,
      default: "",
    },
    creditScore: { type: String, required: true },
  },
  { timestamps: true }
);

// Report Summary Schema
const ReportSummarySchema = new Schema<IReportSummary>(
  {
    creditAccountTotal: { type: String, required: true },
    creditAccountActive: { type: String, required: true },
    creditAccountClosed: { type: String, required: true },
    currentBalanceAmount: { type: String, required: true },
    outstandingBalanceSecured: { type: String, required: true },
    outstandingBalanceUnSecured: { type: String, required: true },
    totalCAPSLast7Days: { type: String, required: true },
  },
  { timestamps: true }
);

// Account Information Schema
const AccountInformationSchema = new Schema<IAccountInformation>(
  {
    accountType: { type: String, required: true },
    subscriberName: { type: String, required: true },
    address: { type: String, required: true },
    accountNumber: { type: String, required: true },
    amountOverdue: { type: String, required: true },
    currentBalance: { type: String, required: true },
  },
  { timestamps: true }
);

// Credit Report Schema
const CreditReportSchema = new Schema<ICreditReport>(
  {
    basicDetails: BasicDetailsSchema,
    reportSummary: ReportSummarySchema,
    accountInformation: [AccountInformationSchema],
  },
  { timestamps: true }
);

// Create Mongoose Models
const BasicDetailsModel: Model<IBasicDetails> = mongoose.model<IBasicDetails>(
  "BasicDetails",
  BasicDetailsSchema
);

const ReportSummaryModel: Model<IReportSummary> =
  mongoose.model<IReportSummary>("ReportSummary", ReportSummarySchema);

const AccountInformationModel: Model<IAccountInformation> =
  mongoose.model<IAccountInformation>(
    "AccountInformation",
    AccountInformationSchema
  );

const CreditReportModel: Model<ICreditReport> = mongoose.model<ICreditReport>(
  "CreditReport",
  CreditReportSchema
);

export {
  AccountInformationModel,
  BasicDetailsModel,
  CreditReportModel,
  ReportSummaryModel,
};
