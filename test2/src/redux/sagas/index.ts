import { all, fork } from 'redux-saga/effects';
import { servicesSagaWatcher } from './servicesSaga';
import { detailSagaWatcher } from './detailSags';

function* rootSaga() {
  yield all([ fork(servicesSagaWatcher), fork(detailSagaWatcher) ]);
}

export default rootSaga;
