import {
  SEND_ASSET_SUCCESS,
  SEND_ASSET_REQUEST,
  SEND_ASSET_FAILED,
  RESET_DATA
} from './actions';

const initialState = {
  success: false,
  loading: false,
  error: '',
};

const sendStepReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_ASSET_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case SEND_ASSET_SUCCESS:
    return {
      success: true,
      loading: false,
    };
  case SEND_ASSET_FAILED:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case RESET_DATA:
    return initialState;
  default:
    return state;
  }
};

export default sendStepReducer;
