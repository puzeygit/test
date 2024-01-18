import {   FetchDetailRequestActionInterface, FetchDetailSuccessResponseInterface, FetchDetailSuccessActionInterface, FetchDetailFailureActionInterface, DetailtRequestInterface  } from '../types';
import {  FETCH_DETAIL_FAILURE, FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS, } from './types';


export const fetchDetailRequest = (data: DetailtRequestInterface): FetchDetailRequestActionInterface => ({
  type: FETCH_DETAIL_REQUEST,
  payload: data
});

export const fetchDetailSuccess = (data: FetchDetailSuccessResponseInterface): FetchDetailSuccessActionInterface => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: data,
});

export const fetchDetailFailure = (error: string): FetchDetailFailureActionInterface => ({
  type: FETCH_DETAIL_FAILURE,
  payload: {
    message: error
  },
});


