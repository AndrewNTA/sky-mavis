import React from 'react';
import Logo from 'static/icons/ronin-logo-blue.png';
import EyeIcon from 'static/icons/open-eye-icon.png';

import './unlock-wallet.css';

const UnlockWallet = () => {
  return <div className="uw-container">
    <div className="uw-header">
      <img className="uw-logo" alt="ronin" src={Logo} />
      <div className="uw-title">{'Ronin Wallet'}</div>
      <div className="uw-desc">{'Your digital Passport'}</div>
    </div>
    <div className="uw-form">
      <div className="uw-form-title">{'Enter password'}</div>
      <div className="r-input-container">
        <input type="password" className="r-input" />
        <div className="r-input-icon-wrapper">
          <img className="r-input-icon" alt="show" src={EyeIcon} />
        </div>
      </div>
    </div>
  </div>;
};

export default UnlockWallet;
