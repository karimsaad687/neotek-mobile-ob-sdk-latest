// import { getDisconnectOBAccountsLink, getOBCreateAccountLink, getOBGenerateToken, getUpdateNicknameLink } from '../rest/getUrl';
// import { useAxios } from './useAxios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// export interface ApiConfigProps {
//   uuidKey: any;
//   obBaseUrl: string;
//   ibanBaseUrl: string;
//   psuId?: string;
//   clientId?: string;
//   clientSecret?: string;
//   obApiKey: string;
//   ibanApiKey: string;
//   onErrorHandler?: (e: any) => void;
// }
// interface CreateAccountLinkPayloadProps {
//   Data: {
//     FinancialInstitutionId: string;
//     SecurityProfile: string;
//     DataGroups: Array<{ Id: string; Permissions: Array<string> }>;
//     PSUId: string;
//     UserLoginId: string;
//     ExpirationDateTime: string;
//     TransactionFromDateTime: string;
//     TransactionToDateTime: string;
//     AccountType: Array<string>;
//     AccountSubType: Array<string>;
//     Purpose: Array<string>;
//   };
// }
// export interface VerifyIbanRequest {
//   IBAN: string;
//   POIType: string;
//   POINumber: string;
// }
// export interface IdentifyIbanRequest {
//   IBAN: string;
//   Name: string;
// }
// export interface AliasInquiryRequest {
//   bank: string;
//   proxyType: string;
//   proxyValue: string;
//   participantBankID: string;
// }
// export interface BulkIBANVerificationInquiryRequest {
//   BulkFile: string;
// }
// export interface VerifyIbanRequest {
//   IBAN: string;
//   POIType: string;
//   POINumber: string;
// }

// export const useOBServices = (apiConfig: ApiConfigProps) => {
//   const { obBaseUrl, ibanBaseUrl, psuId, clientId, clientSecret, obApiKey, onErrorHandler } = apiConfig;
//   const { api: apiOB } = useAxios(obApiKey);

//   const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
//   const getToken = async (): Promise<string | null> => {
//     try {
//       return await AsyncStorage.getItem('OBToken');
//     } catch (error) {
//       console.error('Error retrieving token:', error);
//       return null;
//     }
//   };

//   const getGenerateTokenParams = () => {
//     const params = new URLSearchParams();
//     params.append('grant_type', 'client_credentials');
//     params.append('client_id', clientId ?? '');
//     params.append('client_secret', clientSecret ?? '');
//     params.append('scope', 'ob_connect iban_verification income_verification');
//     return params;
//   };

//   const generateTokenService = async () => {
//     try {
//       const contentType = 'application/x-www-form-urlencoded';
//       const response = await apiOB('POST', getOBGenerateToken(ibanBaseUrl), getGenerateTokenParams(), contentType);
//       if (!response || !response?.data || !response?.data?.access_token) return null;
//       const tempOBToken = response?.data?.access_token;
//       await AsyncStorage.setItem('OBToken', tempOBToken);
//       return tempOBToken;
//     } catch (err) {
//       if (onErrorHandler) onErrorHandler(err);
//     }
//   };

//   const verifyIban = async (data: VerifyIbanRequest): Promise<any> => {
//     const token = await getToken();

//     const headers = {
//       uuidKey: apiConfig.uuidKey,
//       apikey: apiConfig.ibanApiKey,
//       Authorization: token ? `Bearer ${token}` : '',
//       'Content-Type': 'application/json',
//     };
//     const url = `${apiConfig.ibanBaseUrl}/iban/verify/basic`;

//     try {
//       const response = await axios.post(url, data, {
//         headers,
//       });
//       if (!response?.data?.Data || !response.data.Data.EventId) {
//         return null;
//       }
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const getVerfiyIbanInfoRequest = async (id: string) => {
//     try {
//       const token = await getToken();

//       const headers = {
//         uuidKey: apiConfig.uuidKey,
//         apikey: apiConfig.ibanApiKey,
//         Authorization: token ? `Bearer ${token}` : '',
//         'Content-Type': 'application/json',
//       };
//       const url = `${apiConfig.ibanBaseUrl}/event/${id}/info`;
//       const response = await axios.get(url, { headers });

//       if (!response?.data) {
//         console.log('No data received in response.');
//         return null;
//       }
//       if (!response) {
//         console.log('No valid data found in response:', response.data);
//         return null;
//       }

//       return response.data;
//     } catch (error) {
//       console.error('Error fetching IBAN verification:', error);
//       throw error;
//     }
//   };

//   const getAccountsLinks = async (accountsLinksPage = 1, accountsLinkId = null, financialInstitutionId = null) => {
//     try {
//       const token = await getToken();
//       const headers = {
//         uuidKey: apiConfig.uuidKey,
//         apikey: apiConfig.obApiKey,
//         Authorization: token ? `Bearer ${token}` : '',
//         'Content-Type': 'application/json',
//       };

//       const baseUrl = `${apiConfig.obBaseUrl}/accounts-information/v1/accounts-links?`;
//       const params = [];

//       if (accountsLinkId) {
//         params.push(`AccountsLinkId=${accountsLinkId}`);
//       }

//       params.push(`PSUId=${psuId}`);

//       if (financialInstitutionId) {
//         params.push(`FinancialInstitutionId=${financialInstitutionId}`);
//       }

//       params.push(`FinancialInstitutionName=SAMA`);
//       params.push(`Status=Active`);
//       params.push(`page=${accountsLinksPage}`);

//       const url = baseUrl + params.join('&');
//       console.log('getAccountsLinks URL' + url);

//       const getOBAccountsLinksResponse = await axios.get(url, { headers });
//       if (getOBAccountsLinksResponse.data?.Errors) {
//         console.error('API Errors:', getOBAccountsLinksResponse.data.Errors);
//         return onErrorHandler ? onErrorHandler(getOBAccountsLinksResponse) : null;
//       } else if (getOBAccountsLinksResponse.data?.Meta?.TotalPages === 0) {
//         console.warn('No accounts found, TotalPages is 0');
//         return [];
//       } else {
//         return getOBAccountsLinksResponse.data;
//       }
//     } catch (err) {
//       console.error('Error fetching accounts links:', err);
//       if (onErrorHandler) onErrorHandler(err);
//     }
//   };

//   const getAccountLinkAccountsDetails = async (
//     id: string,
//     accountDetailPage: number | null = null,
//     psuId: string | null = null,
//     onErrorHandler?: (error: any) => void
//   ) => {
//     try {
//       const token = await getToken();
//       const headers = {
//         uuidKey: apiConfig.uuidKey,
//         apikey: apiConfig.obApiKey,
//         Authorization: token ? `Bearer ${token}` : '',
//         'Content-Type': 'application/json',
//       };

//       const queryParams = new URLSearchParams();

//       if (accountDetailPage !== null && accountDetailPage > 0) {
//         queryParams.append('page', accountDetailPage.toString());
//       }
//       if (psuId) {
//         queryParams.append('PSUId', psuId);
//       }
//       let baseUrl = `${apiConfig.obBaseUrl}accounts-information/v1/accounts-link/${id}`;
//       if (queryParams.toString()) {
//         baseUrl += `/accounts`;
//       }
//       const url = queryParams.toString() ? `${baseUrl}?${queryParams.toString()}` : baseUrl;

//       const accountResponse = await axios.get(url, { headers });

//       if (accountResponse.data?.Errors) {
//         console.error('API Errors:', accountResponse.data.Errors);
//         if (onErrorHandler) onErrorHandler(accountResponse);
//         return null;
//       }
//       return accountResponse;
//     } catch (err) {
//       console.error('Error fetching account link accounts details:', err);
//       if (onErrorHandler) onErrorHandler(err);
//       return null;
//     }
//   };

//   const saveNickName = async (id: string, value: string) => {
//     try {
//       const updateNicknameResponse = await apiOB('PATCH', getUpdateNicknameLink(obBaseUrl, psuId ?? '', id), {
//         Data: {
//           FinancialInstitutionNickname: value,
//         },
//       });

//       if (updateNicknameResponse?.status !== 200) {
//         return onErrorHandler ? onErrorHandler(updateNicknameResponse) : false;
//       }

//       return true;
//     } catch (err) {
//       if (onErrorHandler) onErrorHandler(err);
//     }
//   };

//   const disconnectFromOB = async (id: string) => {
//     try {
//       const response = await apiOB('PATCH', getDisconnectOBAccountsLink(obBaseUrl, psuId ?? '', id));

//       if (!response || response?.status !== 200) {
//         return onErrorHandler ? onErrorHandler(response) : false;
//       } else if (response?.status === 200) {
//         return true;
//       }
//     } catch (e) {
//       if (onErrorHandler) onErrorHandler(e);
//       return false;
//     }
//   };

//   const getFinancialInstitutions = async () => {
//     try {
//       const url = `${apiConfig.obBaseUrl}/financial-institutions-information/v1/financial-institutions?Page=1`;

//       console.log('Fetching financial institutions from URL:', url);

//       const response = await axios.get(url, {
//         headers: {
//           uuidKey: apiConfig.uuidKey,
//           apikey: apiConfig.obApiKey,
//         },
//       });

//       if (response?.status === 200) {
//         return response.data || [];
//       } else {
//         console.warn('Failed to fetch financial institutions:', response);
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching financial institutions:', error.message || error);
//       return [];
//     }
//   };

//   const getInstitutionDataGroups = async (FinancialInstitutionId: string) => {
//     try {
//       const url = `${apiConfig.obBaseUrl}/financial-institutions-information/v1/financial-institutions/${FinancialInstitutionId}/data-groups`;
//       console.log('Request URL: ' + url);

//       const token = await getToken();

//       const response = await axios.get(url, {
//         headers: {
//           'Content-Type': 'application/json',
//           uuidKey: apiConfig.uuidKey,
//           apikey: apiConfig.obApiKey,
//           Authorization: token ? `Bearer ${token}` : '',
//         },
//       });

//       console.log('Response Data:', JSON.stringify(response.data, null, 2));

//       if (!response.data || !response.data.Data || !response.data.Data.DataGroups) {
//         return onErrorHandler ? onErrorHandler(response.data) : { error: 'Invalid response structure' };
//       }
//       return response.data.Data.DataGroups;
//     } catch (e) {
//       if (onErrorHandler) onErrorHandler(e);
//       return { error: e.message || 'An error occurred' };
//     }
//   };
//   const createAccountLink = async (createAccountLinkPayload: CreateAccountLinkPayloadProps) => {
//     try {
//       const response = await apiOB('POST', getOBCreateAccountLink(obBaseUrl, psuId ?? ''), createAccountLinkPayload);
//       if (!response || !response.data || !response.data.Data) return onErrorHandler ? onErrorHandler(response) : false;
//       const redirectionURL = response.data.Data.RedirectionURL;
//       const AccountsLinkId = response.data.Data.AccountsLinkId;
//       const AccountsLinkStatus = response.data.Data.AccountsLinkStatus;
//       return { redirectionURL, AccountsLinkId, AccountsLinkStatus };
//     } catch (e) {
//       if (onErrorHandler) onErrorHandler(e);
//       return false;
//     }
//   };

//   return {
//     generateTokenService,
//     getAccountsLinks,
//     // getAccountLinkDetails,
//     getAccountLinkAccountsDetails,
//     saveNickName,
//     disconnectFromOB,
//     getFinancialInstitutions,
//     getInstitutionDataGroups,
//     createAccountLink,
//     getVerfiyIbanInfoRequest,
//     delay,
//     verifyIban,
//     // identifyIbanRequest,
//     // aliasInquiryRequest,
//     // bulkIBANVerificationInquiryRequest,
//     // bulkIBANVerificationInquiryResultRequest,
//   };
// };
