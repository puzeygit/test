import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_SERVICES_REQUEST } from '../actions/types';
import { FetchServicesSuccessResponseInterface } from '../types';
import { getServicesRequest } from '../../api/api';
import { fetchServicesFailure, fetchServicesSuccess } from '../actions/servicesActions';


function* fetchServicesWorker(): Generator {
  try {
    const response = (yield call(getServicesRequest)) as FetchServicesSuccessResponseInterface;
    yield put(fetchServicesSuccess(response));
  } catch (error) {
    yield put(fetchServicesFailure('error fetch posts'));
  }
}

export function* servicesSagaWatcher(): Generator {
  yield takeLatest(FETCH_SERVICES_REQUEST, fetchServicesWorker);
}