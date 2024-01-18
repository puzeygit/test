import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from "redux";
import { FETCH_DETAIL_REQUEST } from '../actions/types';
import { FetchDetailRequestActionInterface, FetchDetailSuccessResponseInterface } from '../types';
import { getDetailRequest } from '../../api/api';
import { fetchDetailFailure, fetchDetailSuccess } from '../actions/detailActions';


function* fetchDetailWorker(action: Action<typeof FETCH_DETAIL_REQUEST> & FetchDetailRequestActionInterface): Generator {
  try {
    const { id } = action.payload;
    const response = (yield call(getDetailRequest, id)) 
    if (response){
      yield put(fetchDetailSuccess(response as FetchDetailSuccessResponseInterface));
    }
  } catch (error) {
    yield put(fetchDetailFailure('error fetch posts'));
  }
}

export function* detailSagaWatcher(): Generator {
  yield takeLatest(FETCH_DETAIL_REQUEST, fetchDetailWorker);
}