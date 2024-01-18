import { combineReducers } from 'redux';
import { servicesReducer } from './servicesReducer';
import { DetailState, ServicesState } from '../types';
import detailReducer from './detailsReducer';


export interface RootState {
  services: ServicesState;
  detail: DetailState
}

const rootReducer = combineReducers({
  services: servicesReducer,
  detail: detailReducer
});

export default rootReducer;