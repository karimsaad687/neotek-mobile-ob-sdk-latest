/* eslint-disable prettier/prettier */
// types.ts

import type { ApiConfigProps } from "../../utils/types";

export interface NavigateParams {
  iban: string;
  id: string;
  idType: string | null;
}

export interface VerifyIbanRequest {
  IBAN: string;
  POIType: string;
  POINumber: string;
}
export interface NeotekIBANProps {
  apiConfig: ApiConfigProps;
}
