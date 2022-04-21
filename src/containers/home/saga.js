import { put, all, takeEvery } from 'redux-saga/effects';
import service from 'service';
import { getAccountSuccess, getAccountFailed, GET_ACCOUNT_REQUEST } from './actions';

const catchExceptionError = (error) => ({
  type: 'EXCEPTION_ERROR',
  error,
});

function* getAccountSaga() {
  try {
    const res = yield service.get(
      '/api/account',
    );
    if (res.status === 200) {
      yield put(getAccountSuccess(res.data));
    } else {
      yield put(getAccountFailed('Error occur when fetching account data'));
    }
  } catch (e) {
    yield put(catchExceptionError(e));
  }
}

function* homeSaga() {
  yield all([
    takeEvery(GET_ACCOUNT_REQUEST, getAccountSaga),
  ]);
}

export default homeSaga;
