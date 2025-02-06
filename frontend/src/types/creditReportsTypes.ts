// Basic Details Interface
export interface IBasicDetails {
  subscriberName: string;
  mobilePhoneNumber: string;
  incomeTaxPan: string;
  creditScore: string;
}

// Report Summary Interface
export interface IReportSummary {
  creditAccountTotal: string;
  creditAccountActive: string;
  creditAccountClosed: string;
  currentBalanceAmount: string;
  outstandingBalanceSecured: string;
  outstandingBalanceUnSecured: string;
  totalCAPSLast7Days: string;
}

// Account Information Interface
export interface IAccountInformation {
  accountType: string;
  subscriberName: string;
  address: string;
  accountNumber: string;
  amountOverdue: string;
  currentBalance: string;
}

// Credit Report Interface
export interface ICreditReport {
  basicDetails: IBasicDetails;
  reportSummary: IReportSummary;
  accountInformation: IAccountInformation[];
}
