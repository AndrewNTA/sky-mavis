export const SEND_ASSET_REQUEST = 'SEND_ASSET_REQUEST';
export const SEND_ASSET_FAILED = 'SEND_ASSET_FAILED';
export const SEND_ASSET_SUCCESS = 'SEND_ASSET_SUCCESS';

export const RESET_DATA = 'RESET_DATA';

export const sendAssetRequest = payload => {
  return {
    type: SEND_ASSET_REQUEST,
    payload
  };
};

export const sendAssetFailed = error => {
  return {
    type: SEND_ASSET_FAILED,
    error,
  };
};

export const sendAssetSuccess = response => {
  return {
    type: SEND_ASSET_SUCCESS,
    response
  };
};

export const resetData = () => {
  return {
    type: RESET_DATA,
  };
};
