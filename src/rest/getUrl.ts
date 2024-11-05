// import { IBAN_REST_ENDPOINTS } from './ibanRestEndpoints';
// import { OB_REST_ENDPOINTS } from './obRestEndpoints';

// //IBAN

// export const getVerifyIbanUrl = (baseUrl: string) => {
//   return baseUrl + IBAN_REST_ENDPOINTS.IBAN + IBAN_REST_ENDPOINTS.VERIFY;
// };

// export const getVerifyIbanInfoUrl = (baseUrl: string, ID: string) => {
//   return (
//     baseUrl + IBAN_REST_ENDPOINTS.EVENT + `${ID}/` + IBAN_REST_ENDPOINTS.INFO
//   );
// };

// export const getOBGenerateToken = (baseUrl: string) => {
//   return baseUrl + OB_REST_ENDPOINTS.OBAUTH;
// };

// export const getOBAccountsLinks = (baseUrl: string, tenantId: string) => {
//   return (
//     baseUrl +
//     OB_REST_ENDPOINTS.SELF_MANAGED_PROFILES +
//     OB_REST_ENDPOINTS.PSU_USERS +
//     tenantId +
//     '/' +
//     OB_REST_ENDPOINTS.PROFILES +
//     OB_REST_ENDPOINTS.ACCOUNTS_LINKS
//   );
// };

// export const getOBAccountsLinkAccountsDetails = (
//   baseUrl: string,
//   tenantId: string,
//   accountLinkId: string
// ) => {
//   return (
//     baseUrl +
//     OB_REST_ENDPOINTS.PROFILE_ACCOUNTS_INFO +
//     OB_REST_ENDPOINTS.PSU_USERS +
//     tenantId +
//     '/' +
//     OB_REST_ENDPOINTS.ACCOUNTS_LINKS +
//     `/${accountLinkId}/` +
//     OB_REST_ENDPOINTS.ACCOUNTS
//   );
// };

// export const getDisconnectOBAccountsLink = (
//   baseUrl: string,
//   psuId: string,
//   accountsLinkId: string
// ) => {
//   return (
//     baseUrl +
//     OB_REST_ENDPOINTS.SELF_MANAGED_PROFILES +
//     OB_REST_ENDPOINTS.PSU_USERS +
//     `/${psuId}/` +
//     OB_REST_ENDPOINTS.PROFILES +
//     OB_REST_ENDPOINTS.ACCOUNTS_LINKS +
//     `/${accountsLinkId}` +
//     '?action=Revoke'
//   );
// };

// export const getUpdateNicknameLink = (
//   baseUrl: string,
//   tenantId: string,
//   linkId: string
// ) => {
//   return (
//     baseUrl +
//     OB_REST_ENDPOINTS.SELF_MANAGED_PROFILES +
//     OB_REST_ENDPOINTS.PSU_USERS +
//     tenantId +
//     '/' +
//     OB_REST_ENDPOINTS.PROFILES +
//     OB_REST_ENDPOINTS.ACCOUNTS_LINKS +
//     `/${linkId}` +
//     OB_REST_ENDPOINTS.NICKNAME
//   );
// };

// export const getOBFinancialInstitutions = (baseUrl: string) => {
//   return baseUrl + OB_REST_ENDPOINTS.FINANCIAL_INSTITUTION;
// };

// export const getOBFinancialInstitutionDataGroups = (
//   baseUrl: string,
//   FinancialInstitutionId: string
// ) => {
//   return (
//     baseUrl +
//     OB_REST_ENDPOINTS.FINANCIAL_INSTITUTION +
//     '/' +
//     FinancialInstitutionId +
//     OB_REST_ENDPOINTS.FINANCIAL_INSTITUTION_DATA_GROUPS
//   );
// };

// export const getOBProfileIDPath = (tenantId: string) => {
//   return (
//     OB_REST_ENDPOINTS.SELF_MANAGED_PROFILES +
//     OB_REST_ENDPOINTS.PSU_USERS +
//     tenantId +
//     '/' +
//     OB_REST_ENDPOINTS.PROFILES
//   );
// };

// export const getOBCreateAccountLink = (baseUrl: string, tenantId: string) => {
//   return (
//     baseUrl + getOBProfileIDPath(tenantId) + OB_REST_ENDPOINTS.ACCOUNTS_LINKS
//   );
// };

// // export const getIdentifyIbanUrl = (baseUrl: string) => {
// //   return baseUrl + IBAN_REST_ENDPOINTS.IBAN + IBAN_REST_ENDPOINTS.IDENTIFY;
// // };

// // export const getAliasInquiryUrl = (baseUrl: string) => {
// //   return baseUrl + IBAN_REST_ENDPOINTS.IBAN + IBAN_REST_ENDPOINTS.ALIAS + IBAN_REST_ENDPOINTS.INQUIRY;
// // };

// // export const getBulkIBANVerificationUrl = (baseUrl: string) => {
// //   return baseUrl + IBAN_REST_ENDPOINTS.IBAN + IBAN_REST_ENDPOINTS.BULK + IBAN_REST_ENDPOINTS.VERIFY;
// // };

// // export const getBulkIBANVerificationResultUrl = (baseUrl: string, RequestId: string) => {
// //   return baseUrl + IBAN_REST_ENDPOINTS.IBAN + IBAN_REST_ENDPOINTS.BULK + IBAN_REST_ENDPOINTS.VERIFY + `/${RequestId}`;
// // };
