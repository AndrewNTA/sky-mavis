import UsdIcon from 'static/icons/usd-icon.svg';
import EurIcon from 'static/icons/eur-icon.svg';
import YenIcon from 'static/icons/yen-icon.svg';
import {
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILED
} from './actions';
import { SEND_ASSET_SUCCESS } from '../send-step/actions';

const initialState = {
  asset: [],
  loading: false,
  error: '',
};

const getIcon = id => {
  switch (id) {
  case 'usd':
    return UsdIcon;
  case 'eur':
    return EurIcon;
  case 'yen':
    return YenIcon;
  default:
    return '';
  }
};

const mapResponse = assets => {
  if (!assets) {
    return [];
  }
  return assets.map(a => {
    const icon = getIcon(a.id);
    return {
      id: a.id,
      icon,
      primaryCurrency: a['primary_currency'] || '',
      primaryValue: a['primary_value'] || 0,
      secondaryCurrency: a['secondary_currency'] || '',
      secondaryValue: a['secondary_value'] || 0,
    };
  });
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ACCOUNT_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case SEND_ASSET_SUCCESS:
  case GET_ACCOUNT_SUCCESS:
    return {
      assets: mapResponse(action.response),
      loading: false,
      error: ''
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
