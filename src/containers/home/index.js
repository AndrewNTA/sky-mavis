import React from 'react';
import AccountIcon from 'static/icons/account-icon.png';
import CopyIcon from 'static/icons/copy-icon.png';
import RoninLogo from 'static/icons/ronin-logo-white.png';
import CardIcon from 'static/icons/card-icon.png';
import SendIcon from 'static/icons/send-icon.svg';
import SwapIcon from 'static/icons/swap-icon.png';
import EurIcon from 'static/icons/eur-icon.svg';
import YenIcon from 'static/icons/yen-icon.svg';

import './home.css';

const Home = () => {
  return <div>
    <div className="home-header">
      <div className="home-user-info">
        <span className="home-dot-icon" />
        <span className="home-user-name">{'Ronin Wallet'}</span>
      </div>
      <div className="home-user-account">
        <img alt="account" className="home-account-icon" src={AccountIcon} />
      </div>
    </div>
    <div className="home-main">
      <div className="home-card-container">
        <div className="home-card-top">
          <div>
            <span className="home-card-wallet-title">{'My wallet'}</span>
            <span className="home-card-number">{'(7300 3700 3800 3334)'}</span>
          </div>
          <img alt="copy" className="home-copy-icon" src={CopyIcon} />
        </div>
        <div className="home-card-bottom">
          <div>
            <div className="home-currency-first">
              {'1,000 USD'}
            </div>
            <div className="home-currency-second">
              {'23,046,000 VND'}
            </div>
          </div>
          <img alt="logo" className="home-logo" src={RoninLogo} />
        </div>
      </div>
      <div className="home-control-group">
        <div className="home-action-btn">
          <div className="home-action-icon">
            <img alt="card" className="home-card-icon" src={CardIcon} />
          </div>
          <div className="home-action-text">{'Deposit'}</div>
        </div>
        <div className="home-action-btn">
          <div className="home-action-icon">
            <img alt="send" className="home-send-icon" src={SendIcon} />
          </div>
          <div className="home-action-text">{'Send'}</div>
        </div>
        <div className="home-action-btn">
          <div className="home-action-icon">
            <img alt="swap" className="home-swap-icon" src={SwapIcon} />
          </div>
          <div className="home-action-text">{'Swap'}</div>
        </div>
      </div>
    </div>
    <div className="home-assets">
      <div className="home-assets-title">{'Assets'}</div>
      <div className="home-assets-item">
        <img alt="eur" className="home-currency-icon" src={EurIcon} />
        <div>
          <div className="home-item-first-line">{'50 EUR'}</div>
          <div className="home-item-second-line">{'1,531,972 VND'}</div>
        </div>
      </div>
      <div className="home-assets-item">
        <img alt="yen" className="home-currency-icon" src={YenIcon} />
        <div>
          <div className="home-item-first-line">{'10,000 YEN'}</div>
          <div className="home-item-second-line">{'2,103,317 VND'}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
