import {  FetchServicesFailureActionInterface, FetchServicesRequestActionInterface, FetchServicesSuccessActionInterface, FetchServicesSuccessResponseInterface  } from '../types';
import {  FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS } from './types';


export const fetchPostsRequest = (): FetchServicesRequestActionInterface => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesSuccess = (data: FetchServicesSuccessResponseInterface): FetchServicesSuccessActionInterface => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: data,
});

export const fetchServicesFailure = (error: string): FetchServicesFailureActionInterface => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    message: error
  },
});


