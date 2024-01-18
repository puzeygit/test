import {
  FETCH_DETAIL_REQUEST,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE, } from '../actions/types';
import { DetailActions, DetailState } from '../types';

const initialDetaState: DetailState = {
  detail: null,
  isLoading: false,
  isError: false,
};

export const detailReducer = (state = initialDetaState, action: DetailActions) => {
  switch (action.type) {
    case FETCH_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detail: {...action.payload}
      };
    case FETCH_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true 
      };
    default:
      return state;
  }
};

export default detailReducer;