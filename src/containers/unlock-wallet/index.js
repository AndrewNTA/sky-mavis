import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'static/icons/ronin-logo-blue.png';
import EyeIcon from 'static/icons/open-eye-icon.png';
import Button from 'components/buttons/button';
import TextInput from 'components/inputs/textInput';

import './unlock-wallet.css';

const UnlockWallet = () => {
  const [pass, setPass] = useState('');
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  const handleChange = e => {
    const value = e.target.value;
    setPass(value);
  };
  const handleToggle = () => {
    setIsShow(isShow => !isShow);
  };
  const handleSubmit = () => {
    if (!pass) {
      alert('Please enter your password!');
    } else {
      goHome();
    }
  };
  const ActionComponent = <img
    className="uw-eye-icon"
    alt="show"
    src={EyeIcon}
    onClick={handleToggle}
  />;
  return <div className="uw-container">
    <div className="uw-header">
      <img className="uw-logo" alt="ronin" src={Logo} />
      <div className="uw-title">{'Ronin Wallet'}</div>
      <div className="uw-desc">{'Your digital Passport'}</div>
    </div>
    <div className="uw-form">
      <div className="uw-form-title">{'Enter password'}</div>
      <TextInput
        type={isShow ? 'text' : 'password'}
        actionIcon={ActionComponent}
        value={pass}
        onChange={handleChange}
      />
      <div className="uw-control">
        <Button onClick={handleSubmit} text={'Unlock'} />
      </div>
    </div>
  </div>;
};

export default UnlockWallet;
