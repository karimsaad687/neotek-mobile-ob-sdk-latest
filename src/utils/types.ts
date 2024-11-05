export type RootStackParamList = {
  ObConnect: undefined;
  addAccount: undefined;
  IncomeVerificationDetails: {
    AccountsLinkIds: string[];
    TransactionFromTimestamp: Date;
    TransactionToTimestamp: Date;
  };
  RequestedStatment: undefined;
  StatmentDetails: undefined;
  MangeAccount: {
    accountsLinkId: string;
    transactionDate: string;
    expiryDate: string;
  };
};
export interface ApiConfigProps {
  uuidKey: string;
  obBaseUrl: string;
  ibanBaseUrl: string;
  psuId?: string;
  clientId?: string;
  clientSecret?: string;
  obApiKey: string;
  ibanApiKey: string;
  onErrorHandler?: (e: any) => void;
}

export interface CreateAccountLinkPayloadProps {
  Data: {
    FinancialInstitutionId: string;
    SecurityProfile: string;
    DataGroups: Array<{ Id: string; Permissions: Array<string> }>;
    PSUId: string;
    UserLoginId: string;
    ExpirationDateTime: string;
    TransactionFromDateTime: string;
    TransactionToDateTime: string;
    AccountType: Array<string>;
    AccountSubType: Array<string>;
    Purpose: Array<string>;
  };
}

export interface EditNicknamePayloadProps {
  FinancialInstitutionNickname: string;
}
export interface VerifyIbanRequest {
  IBAN: string;
  POIType: string;
  POINumber: string;
}

export type Status = 'Active' | 'Inactive';
