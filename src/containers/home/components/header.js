import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccountIcon from 'static/icons/account-icon.png';

import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const goUnlockWallet = () => {
    navigate('/unlock-wallet');
  };
  return <div className="h-header">
    <div className="h-user-info">
      <span className="h-dot-icon" />
      <span className="h-user-name">{'Ronin Wallet'}</span>
    </div>
    <div className="h-user-account">
      <img
        alt="account"
        className="h-account-icon"
        src={AccountIcon}
        onClick={goUnlockWallet}
        title={'Logout'}
      />
    </div>
  </div>;
};

export default Header;