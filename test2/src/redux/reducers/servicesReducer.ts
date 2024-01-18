import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE, } from '../actions/types';
import { ServicesActions, ServicesState } from '../types';


const initialState: ServicesState = {
  services: [],
  isLoading: false,
  isError: false,
};

export const servicesReducer = (state = initialState, action: ServicesActions) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        services: action.payload
      };
    case FETCH_SERVICES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true 
      };
    default:
      return state;
  }
};

export default servicesReducer;