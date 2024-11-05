// import { API_PATHS } from './apiPaths';

import type { ApiConfigProps } from '../utils/types';
import { incomeVerificationRequests } from '../sampleData/INCOMEVERIFICATIONS';
// import { fetchWithHeaders } from './tokenServices';

export const useIncomeServices = (apiConfig: ApiConfigProps) => {
  const { psuId } = apiConfig;

  //------------------------------INCOME---------------------------------------
  const getIncomeVerificationRequests = async ({
    TransactionFromTimestamp,
    TransactionToTimestamp,
    AccountsLinkIds,
  }: any) => {
    const params = new URLSearchParams();

    params.append('PSUId', psuId ?? '');
    params.append('AccountsLinkIds', AccountsLinkIds);
    params.append('TransactionFromTimestamp', TransactionFromTimestamp);
    params.append('TransactionToTimestamp', TransactionToTimestamp);

    // const url = `${API_PATHS.INCOME_VERIFICATION.GET_INCOME_VERIFICATIONS_REQUESTS}?${params.toString()}`;

    const response = incomeVerificationRequests;
    // const response = await fetchWithHeaders(url, 'GET');

    // if (response?.Errors) {
    //   console.error('API Errors:', response.Errors);
    //   return null;
    // }
    // return response?.Meta?.TotalPages === 0 ? [] : response;

    return response;
  };
  const getIncomeVerificationDetails = async ({
    TransactionFromTimestamp,
    TransactionToTimestamp,
    AccountsLinkIds,
  }: any) => {
    const params = new URLSearchParams();

    params.append('PSUId', psuId ?? '');
    params.append('AccountsLinkIds', AccountsLinkIds);
    params.append('TransactionFromTimestamp', TransactionFromTimestamp);
    params.append('TransactionToTimestamp', TransactionToTimestamp);

    // const url = `${API_PATHS.INCOME_VERIFICATION.GET_INCOME_VERIFICATIONS_REQUESTS}?${params.toString()}`;

    const response = incomeVerificationRequests;
    // const response = await fetchWithHeaders(url, 'GET');

    // if (response?.Errors) {
    //   console.error('API Errors:', response.Errors);
    //   return null;
    // }
    // return response?.Meta?.TotalPages === 0 ? [] : response;

    return response;
  };
  return {
    getIncomeVerificationRequests,
    getIncomeVerificationDetails,
  };
};
