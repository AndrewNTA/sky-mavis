import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'static/icons/ronin-logo-blue.png';
import EyeIcon from 'static/icons/open-eye-icon.png';
import Button from 'components/buttons/button';
import TextInput from 'components/inputs/textInput';

import './unlock-wallet.css';

const UnlockWallet = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  const ActionComponent = <img className="uw-eye-icon" alt="show" src={EyeIcon} />;
  return <div className="uw-container">
    <div className="uw-header">
      <img className="uw-logo" alt="ronin" src={Logo} />
      <div className="uw-title">{'Ronin Wallet'}</div>
      <div className="uw-desc">{'Your digital Passport'}</div>
    </div>
    <div className="uw-form">
      <div className="uw-form-title">{'Enter password'}</div>
      <TextInput type="password" actionIcon={ActionComponent} />
      <div className="uw-control">
        <Button onClick={goHome} text={'Unlock'} />
      </div>
    </div>
  </div>;
};

export default UnlockWallet;
