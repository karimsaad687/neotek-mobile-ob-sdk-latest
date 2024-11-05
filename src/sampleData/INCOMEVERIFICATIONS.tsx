export const incomeVerificationRequests = {
  Data: {
    RequestId: '265',
    Status: 'InProgress',
    AccountsLinkIds: ['304956278730269626956378529377'],
    IncomeVerifications: [
      {
        IncomeVerificationId: '907',
        Status: 'Requested',
        StatusDescription: 'Requested',
        AccountId: '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
        AccountsLinkId: '304956278730269626956378529377',
        FinancialInstitutionId: 'BSFRSARI',
      },
    ],
  },
};

export const completedVerificationRequests = {
  Data: {
    RequestId: '265',
    Status: 'InProgress',
    AccountsLinkIds: ['304956278730269626956378529377'],
    IncomeVerifications: [
      {
        IncomeVerificationId: '907',
        Status: 'Completed',
        StatusDescription: 'Completed',
        AccountId: '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
        AccountsLinkId: '304956278730269626956378529377',
        FinancialInstitutionId: 'BSFRSARI',
      },
    ],
  },
};

export const verificationRequestDetails = {
  Data: {
    Status: 'Completed',
    IncomeVerification: [
      {
        AccountId: '304956278730269626956378529377',
        CustomerName: 'Mussaud Abu Zaki ',
        LastMonthSalary: 0,
        AverageSalary: 84.32,
        LastDividendAmount: 23.48,
        LastDividendDate: '2016-02-13 00:00:00.0',
        AverageDividend: 28.14,
        Currency: 'SAR',
        PerviousSalaryAmount: 43.38,
        PerviousSalaryDepositDate: '2016-02-14 00:00:00.0',
      },
    ],
  },
};
