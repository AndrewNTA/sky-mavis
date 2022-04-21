export const GET_ACCOUNT_REQUEST = 'GET_ACCOUNT_REQUEST';
export const GET_ACCOUNT_FAILED = 'GET_ACCOUNT_FAILED';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';

export const getAccountRequest = () => {
  return {
    type: GET_ACCOUNT_REQUEST,
  };
};

export const getAccountFailed = error => {
  return {
    type: GET_ACCOUNT_FAILED,
    error,
  };
};

export const getAccountSuccess = response => {
  return {
    type: GET_ACCOUNT_SUCCESS,
    response
  };
};
