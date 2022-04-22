import { put, all, takeEvery } from 'redux-saga/effects';
import service from 'service';
import { sendAssetSuccess, sendAssetFailed, SEND_ASSET_REQUEST } from './actions';

const catchExceptionError = (error) => ({
  type: 'EXCEPTION_ERROR',
  error,
});

function* sendAssetSaga(action) {
  try {
    const res = yield service.post(
      '/api/assets',
      action.payload
    );
    if (res.status === 200) {
      yield put(sendAssetSuccess(res.data));
    } else {
      yield put(sendAssetFailed('Error occur when sending asset'));
    }
  } catch (e) {
    yield put(catchExceptionError(e));
  }
}

function* sendStepSaga() {
  yield all([
    takeEvery(SEND_ASSET_REQUEST, sendAssetSaga),
  ]);
}

export default sendStepSaga;
