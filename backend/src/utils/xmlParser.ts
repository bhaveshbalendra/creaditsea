import xml2js from "xml2js";

const parseXML = async (xmlData: string) => {
  try {
    const result = await xml2js.parseStringPromise(xmlData);

    if (!result || !result.INProfileResponse) {
      throw new Error("Invalid XML format: Missing INProfileResponse");
    }

    const inProfileResponse = result.INProfileResponse;
    console.log(inProfileResponse);
    if (
      !inProfileResponse.Current_Application ||
      !inProfileResponse.CAIS_Account
    ) {
      throw new Error("XML Data does not contain required sections.");
    }

    return {
      basicDetails: {
        subscriberName: `${inProfileResponse.Current_Application[0].Current_Application_Details[0].Current_Applicant_Details[0].First_Name[0].trim()} ${inProfileResponse.Current_Application[0].Current_Application_Details[0].Current_Applicant_Details[0].Last_Name[0].trim()}`,
        mobilePhoneNumber:
          inProfileResponse.Current_Application[0].Current_Application_Details[0].Current_Applicant_Details[0].MobilePhoneNumber[0].trim(),
        incomeTaxPan:
          inProfileResponse.CAIS_Account[0].CAIS_Account_DETAILS[0].CAIS_Holder_Details[0].Income_TAX_PAN[0].trim(),
        creditScore: inProfileResponse.SCORE[0].BureauScore[0].trim(),
      },
      reportSummary: {
        creditAccountTotal:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Credit_Account[0].CreditAccountTotal[0].trim(),
        creditAccountActive:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Credit_Account[0].CreditAccountActive[0].trim(),
        creditAccountClosed:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Credit_Account[0].CreditAccountClosed[0].trim(),
        currentBalanceAmount:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Total_Outstanding_Balance[0].Outstanding_Balance_All[0].trim(),
        outstandingBalanceSecured:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Total_Outstanding_Balance[0].Outstanding_Balance_Secured[0].trim(),
        outstandingBalanceUnSecured:
          inProfileResponse.CAIS_Account[0].CAIS_Summary[0].Total_Outstanding_Balance[0].Outstanding_Balance_UnSecured[0].trim(),
        totalCAPSLast7Days:
          inProfileResponse.TotalCAPS_Summary[0].TotalCAPSLast7Days[0].trim(),
      },
      accountInformation:
        inProfileResponse.CAIS_Account[0].CAIS_Account_DETAILS.map(
          (account: any) => ({
            accountType: account.Account_Type[0].trim(),
            subscriberName: account.Subscriber_Name[0].trim(),
            address: `${account.CAIS_Holder_Address_Details[0].First_Line_Of_Address_non_normalized[0].trim()}, ${account.CAIS_Holder_Address_Details[0].City_non_normalized[0].trim()}, ${account.CAIS_Holder_Address_Details[0].State_non_normalized[0].trim()} ${account.CAIS_Holder_Address_Details[0].ZIP_Postal_Code_non_normalized[0].trim()}`,
            accountNumber: account.Account_Number[0].trim(),
            amountOverdue: account.Amount_Past_Due[0].trim(),
            currentBalance: account.Current_Balance[0].trim(),
          })
        ),
    };
  } catch (error) {
    console.error("Error parsing XML:", error);
    throw new Error("Failed to parse XML data.");
  }
};

export default parseXML;
