import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import AccountIcon from 'static/icons/account-icon.png';
import CopyIcon from 'static/icons/copy-icon.png';
import RoninLogo from 'static/icons/ronin-logo-white.png';
import CardIcon from 'static/icons/card-icon.png';
import SendIcon from 'static/icons/send-icon.svg';
import SwapIcon from 'static/icons/swap-icon.png';
import EurIcon from 'static/icons/eur-icon.svg';
import YenIcon from 'static/icons/yen-icon.svg';
import { getAccountRequest } from './actions';

import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({
    getAccountRequest,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.getAccountRequest();
  }, []);
  
  const goToSendStep = () => {
    navigate('/send-step');
  };
  return <div>
    <div className="h-header">
      <div className="h-user-info">
        <span className="h-dot-icon" />
        <span className="h-user-name">{'Ronin Wallet'}</span>
      </div>
      <div className="h-user-account">
        <img alt="account" className="h-account-icon" src={AccountIcon} />
      </div>
    </div>
    <div className="h-main">
      <div className="h-card-container">
        <div className="h-card-top">
          <div>
            <span className="h-card-wallet-title">{'My wallet'}</span>
            <span className="h-card-number">{'(7300 3700 3800 3334)'}</span>
          </div>
          <img alt="copy" className="h-copy-icon" src={CopyIcon} />
        </div>
        <div className="h-card-bottom">
          <div>
            <div className="h-currency-first">
              {'1,000 USD'}
            </div>
            <div className="h-currency-second">
              {'23,046,000 VND'}
            </div>
          </div>
          <img alt="logo" className="h-logo" src={RoninLogo} />
        </div>
      </div>
      <div className="h-control-group">
        <div className="h-action-btn">
          <div className="h-action-icon">
            <img alt="card" className="h-card-icon" src={CardIcon} />
          </div>
          <div className="h-action-text">{'Deposit'}</div>
        </div>
        <div className="h-action-btn">
          <div className="h-action-icon">
            <img alt="send" className="h-send-icon" src={SendIcon} onClick={goToSendStep}/>
          </div>
          <div className="h-action-text">{'Send'}</div>
        </div>
        <div className="h-action-btn">
          <div className="h-action-icon">
            <img alt="swap" className="h-swap-icon" src={SwapIcon} />
          </div>
          <div className="h-action-text">{'Swap'}</div>
        </div>
      </div>
    </div>
    <div className="h-assets">
      <div className="h-assets-title">{'Assets'}</div>
      <div className="h-assets-item">
        <img alt="eur" className="h-currency-icon" src={EurIcon} />
        <div>
          <div className="h-item-first-line">{'50 EUR'}</div>
          <div className="h-item-second-line">{'1,531,972 VND'}</div>
        </div>
      </div>
      <div className="h-assets-item">
        <img alt="yen" className="h-currency-icon" src={YenIcon} />
        <div>
          <div className="h-item-first-line">{'10,000 YEN'}</div>
          <div className="h-item-second-line">{'2,103,317 VND'}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
