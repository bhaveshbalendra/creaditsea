import { Document } from "mongoose";

// Basic Details Interface
export interface IBasicDetails extends Document {
  subscriberName: string;
  mobilePhoneNumber: string;
  incomeTaxPan: string;
  creditScore: string;
}

// Report Summary Interface
export interface IReportSummary extends Document {
  creditAccountTotal: string;
  creditAccountActive: string;
  creditAccountClosed: string;
  currentBalanceAmount: string;
  outstandingBalanceSecured: string;
  outstandingBalanceUnSecured: string;
  totalCAPSLast7Days: string;
}

// Account Information Interface
export interface IAccountInformation extends Document {
  accountType: string;
  subscriberName: string;
  address: string;
  accountNumber: string;
  amountOverdue: string;
  currentBalance: string;
}

// Credit Report Interface (Includes embedded subdocuments)
export interface ICreditReport extends Document {
  basicDetails: IBasicDetails;
  reportSummary: IReportSummary;
  accountInformation: IAccountInformation[];
}
