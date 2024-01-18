import { Action } from 'redux';
import { FETCH_DETAIL_FAILURE, FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS, FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS } from '../actions/types';


export interface IService {
  id: string;
  name: string;
}

export interface IDetail {
  id: string;
  name: string;
  price: number;
  content: string
}

export interface ServicesState {
  services: IService[];
  isLoading: boolean;
  isError: boolean;
}

export interface DetailState {
  detail: IDetail | null;
  isLoading: boolean;
  isError: boolean;
}

export type ServicesActions = 
FetchServicesRequestActionInterface
  | FetchServicesSuccessActionInterface
  | FetchServicesFailureActionInterface
  ;

export type DetailActions = 
FetchDetailRequestActionInterface
  | FetchDetailSuccessActionInterface
  | FetchDetailFailureActionInterface
  ;

  export interface FetchServicesSuccessResponseInterface extends Array<IService> {
  }
  
  export interface FetchDetailSuccessResponseInterface extends IDetail {
  }
  
  export interface ServicesFailureResponseInterface {
    message: string;
  }
  
  export interface DetailFailureResponseInterface {
    message: string;
  }

// Services
export interface FetchServicesRequestActionInterface extends Action<typeof FETCH_SERVICES_REQUEST> {
  type: typeof FETCH_SERVICES_REQUEST;
}

export interface FetchServicesSuccessActionInterface extends Action<typeof FETCH_SERVICES_SUCCESS> {
  type: typeof FETCH_SERVICES_SUCCESS;
  payload: FetchServicesSuccessResponseInterface;
}

export interface FetchServicesFailureActionInterface extends Action<typeof FETCH_SERVICES_FAILURE> {
  type: typeof FETCH_SERVICES_FAILURE;
  payload: ServicesFailureResponseInterface;
}

// Detail


export interface DetailtRequestInterface {
  id: string;
}

export interface FetchDetailRequestActionInterface extends Action<typeof FETCH_DETAIL_REQUEST> {
  type: typeof FETCH_DETAIL_REQUEST;
  payload: DetailtRequestInterface;
}

export interface FetchDetailSuccessActionInterface extends Action<typeof FETCH_DETAIL_SUCCESS> {
  type: typeof FETCH_DETAIL_SUCCESS;
  payload: FetchDetailSuccessResponseInterface;
}

export interface FetchDetailFailureActionInterface extends Action<typeof FETCH_DETAIL_FAILURE> {
  type: typeof FETCH_DETAIL_FAILURE;
  payload: DetailFailureResponseInterface;
}


