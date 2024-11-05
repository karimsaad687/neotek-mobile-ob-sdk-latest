import { API_PATHS } from './apiPaths';
import {
  getDataGroup,
  FinancialInstitution,
} from '../sampleData/OB';
import type {
  ApiConfigProps,
  CreateAccountLinkPayloadProps,
  VerifyIbanRequest,
} from '../utils/types';
import apiConfig from '../config';
import { fetchWithHeaders } from './tokenServices';

const { obBaseUrl, ibanBaseUrl, psuId, onErrorHandler } =
  apiConfig as ApiConfigProps;

export const useOBServices = (apiConfig: ApiConfigProps) => {
  //------------------------------IBAN---------------------------------------
  const verifyIban = async (data: VerifyIbanRequest): Promise<any> => {
    const url = `${ibanBaseUrl}${API_PATHS.IBAN.VERIFY}`; // Refactored API path for IBAN verification
    const response = await fetchWithHeaders(url, 'POST', data);
    return response?.Data?.EventId ? response : null;
  };

  const getVerfiyIbanInfoRequest = async (id: string) => {
    const url = `${ibanBaseUrl}${API_PATHS.IBAN.EVENT_INFO(id)}`; // Refactored API path for IBAN event info
    const response = await fetchWithHeaders(url, 'GET');
    return response || null;
  };

  //------------------------------OB---------------------------------------
  const getAccountsLinks = async (
    accountsLinksPage = 1,
    accountsLinkId = null,
    financialInstitutionId = null
  ) => {
    const params = new URLSearchParams();
    if (accountsLinkId) params.append('AccountsLinkId', accountsLinkId);
    params.append('PSUId', psuId ?? '');
    if (financialInstitutionId) {
      params.append('FinancialInstitutionId', financialInstitutionId);
      params.append('FinancialInstitutionName', 'SAMA');
      params.append('Status', 'Active');
      params.append('page', accountsLinksPage.toString());
    }

    const url = `${obBaseUrl}${API_PATHS.OB.ACCOUNTS_LINKS}?${params.toString()}`;

    // const response = getAccountsLinksData;

    const response = await fetchWithHeaders(url, 'GET');

    if (response?.Errors) {
      console.error('API Errors:', response.Errors);
      return null;
    }

    return response;
  };

  const getAccountLinkAccountsDetails = async (
    accountsLinkId: string,
    accountDetailPage: number | null = null
  ) => {
    const params = new URLSearchParams();
    if (accountDetailPage !== null && accountDetailPage > 0) {
      params.append('page', accountDetailPage.toString());
    }
    console.log("API_PATHS.OB.ACCOUNT_LINK_ACCOUNTS" , API_PATHS.OB.ACCOUNT_LINK_ACCOUNTS);

    const baseUrl = `${obBaseUrl}${API_PATHS.OB.ACCOUNT_LINK_ACCOUNTS(psuId ?? '', accountsLinkId)}`;
    const url = params.toString() ? `${baseUrl}&${params.toString()}` : baseUrl;
    const response = await fetchWithHeaders(url, 'GET');
    return response || null;
  };

  const getFinancialInstitutions = async () => {
    // const url = `${obBaseUrl}${API_PATHS.OB.FINANCIAL_INSTITUTIONS}?Page=1`;
    // const response = await fetchWithHeaders(url, 'GET');

    var response = FinancialInstitution;
    return response || [];
  };




  const getInstitutionDataGroups = async () => {
    // const url = `${obBaseUrl}${API_PATHS.OB.INSTITUTION_DATA_GROUPS(FinancialInstitutionId)}`;
    // const response = await fetchWithHeaders(url, 'GET');

    var response = getDataGroup;
    return response?.Data?.DataGroups || null;
  };

  const createAccountLink = async (
    createAccountLinkPayload: CreateAccountLinkPayloadProps,
    apiConfig: ApiConfigProps
  ) => {
    const { obBaseUrl, psuId } = apiConfig;
    const url = `${obBaseUrl}${API_PATHS.OB.CREATE_ACCOUNT_LINK(psuId ?? '')}`;

    try {
      const response = await fetchWithHeaders(
        url,
        'POST',
        createAccountLinkPayload
      );

      if (!response?.Data) {
        apiConfig.onErrorHandler?.(response);
        return false;
      }

      const { RedirectionURL, AccountsLinkId, AccountsLinkStatus } =
        response.Data;
      return {
        redirectionURL: RedirectionURL,
        AccountsLinkId,
        AccountsLinkStatus,
      };
    } catch (error) {
      console.error('Error creating account link:', error);
      apiConfig.onErrorHandler?.(error);
      return false;
    }
  };


  const editNickname = async (
    accountsLinkId: string,
    psuId: string,
    nickname: string
  ) => {
    const url = `${apiConfig.obBaseUrl}${API_PATHS.OB.UPDATE_NICKNAME(accountsLinkId, psuId)}`;
    const payload = {
      Data: {
        FinancialInstitutionNickname: nickname,
      },
    };

    try {
      const response = await fetchWithHeaders(url, 'PATCH', payload);
      return response;
    } catch (error) {
      console.error('Error updating account nickname:', error);
      return null;
    }
  };

  const disconnectAccount = async (accountsLinkId: string) => {
    if (!psuId) {
      console.error('PSU ID is missing');
      onErrorHandler?.(new Error('PSU ID is missing'));
      return;
    }
    const disconnectUrl = `${obBaseUrl}${API_PATHS.OB.DISCONNECT_ACCOUNT(accountsLinkId, psuId)}`;
    try {
      const response = await fetchWithHeaders(disconnectUrl, 'PATCH');

      if (response) {
        return response;
      } else {
        console.error('Failed to disconnect account: Unexpected response');
        return null;
      }
    } catch (error) {
      console.error('Error disconnecting account:', error);
      onErrorHandler?.(error);
      return null;
    }
  };

  return {
    getAccountsLinks,
    getAccountLinkAccountsDetails,
    getFinancialInstitutions,
    getInstitutionDataGroups,
    createAccountLink,
    editNickname,
    disconnectAccount,
    getVerfiyIbanInfoRequest,
    verifyIban,
    fetchWithHeaders,
  };
};
