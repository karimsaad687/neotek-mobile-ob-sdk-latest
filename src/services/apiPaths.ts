export const API_PATHS = {
  IBAN: {
    TOKEN_GENERATION: '/sdk/auth/token',

    VERIFY: '/iban/verify/basic',
    EVENT_INFO: (id: string) => `/event/${id}/info`,
  },

  OB: {
    ACCOUNTS_LINKS: 'ob/accounts-information/v1/accounts-links',
    ACCOUNT_LINK_ACCOUNTS: (PSUId: string, AccountsLinkId: string) =>
      `/ob/accounts-information/v1/accounts-links?PSUId=${PSUId}&AccountsLinkId=${AccountsLinkId}`,

    FINANCIAL_INSTITUTIONS:
      '/financial-institutions-information/v1/financial-institutions',
    INSTITUTION_DATA_GROUPS: (FinancialInstitutionId: string) =>
      `/financial-institutions-information/v1/financial-institutions/${FinancialInstitutionId}/data-groups`,
    GENERATE_TOKEN: '/token',
    CREATE_ACCOUNT_LINK: (psuId: string) => `/accounts-information/v1/accounts-links/${psuId}`,
    UPDATE_NICKNAME: (accountsLinkId: string, psuId: string) =>
      `/accounts-information/v1/accounts-links/${accountsLinkId}/customize?PSUId=${psuId}`,
    DISCONNECT_ACCOUNT: (accountsLinkId: string, psuId: string) =>
      `/accounts-information/v1/accounts-links/${accountsLinkId}?PSUId=${psuId}&Action=Revoke`,
  },
  INCOME_VERIFICATION: {
    GET_INCOME_VERIFICATIONS_REQUESTS: '/income-verification/v1/income-verification-requests',
  },

};
