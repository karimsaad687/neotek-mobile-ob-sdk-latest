import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../config';
import { API_PATHS } from './apiPaths';
import axios from 'axios';
import type { ApiConfigProps } from '../utils/types';

//------------------------------TOKEN&HEADERS---------------------------------------

export const generateTokenService = async ({
  ibanBaseUrl,
  clientId,
  clientSecret,
  onErrorHandler,
}: ApiConfigProps): Promise<string | null> => {
  const tokenUrl = `${ibanBaseUrl}${API_PATHS.IBAN.TOKEN_GENERATION}`;

  // Ensure clientId and clientSecret are defined
  if (!clientId || !clientSecret) {
    console.error('Client ID or Client Secret is missing');
    onErrorHandler?.(new Error('Client ID or Client Secret is missing'));
    return null;
  }

  try {
    // Create URLSearchParams only with defined values
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append(
      'scope',
      'ob_connect iban_verification income_verification single_api e_statements'
    );

    // Make the POST request
    const { data } = await axios.post(tokenUrl, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const token = data?.access_token;
    console.log('token', token);

    if (token) {
      await AsyncStorage.setItem('OBToken', token);
      return token;
    }

    return null;
  } catch (err) {
    const error = err as any;
    console.error(
      'Error generating token:',
      error.response?.data || error.message
    );
    onErrorHandler?.(error);

    // Return null in case of error
    return null;
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('OBToken');
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const fetchWithHeaders = async (
  url: string,
  method: 'GET' | 'POST' | 'PATCH',
  data?: any
) => {
  const token = await getToken();
  const headers = {
    'uuidKey': apiConfig.uuidKey,
    'apikey': apiConfig.ibanApiKey,
    'Authorization': token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios({
      baseURL: apiConfig.obBaseUrl,
      method,
      url,
      headers,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
