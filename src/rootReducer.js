import { combineReducers } from 'redux';
import homeReducer from 'containers/home/reducer';
import sendStepReducer from 'containers/send-step/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  sendStep: sendStepReducer,
});

export default rootReducer;
