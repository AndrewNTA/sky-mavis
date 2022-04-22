import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import homeSaga from 'containers/home/saga';
import sendStepSaga from 'containers/send-step/saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(homeSaga);
sagaMiddleware.run(sendStepSaga);

export default store;
