import {
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILED
} from './actions';

const initialState = {
  asset: [],
  loading: false,
  error: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ACCOUNT_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_ACCOUNT_SUCCESS:
    return {
      assets: action.response,
      loading: false,
    };
  case GET_ACCOUNT_FAILED:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return state;
  }
};

export default homeReducer;
