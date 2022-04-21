import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardIcon from 'static/icons/card-icon.png';
import SendIcon from 'static/icons/send-icon.svg';
import SwapIcon from 'static/icons/swap-icon.png';

import './control-group.css';

const ControlGroup = () => {
  const navigate = useNavigate();
  const goToSendStep = () => {
    navigate('/send-step');
  };
  return <div className="h-control-group">
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
  </div>;
};

export default ControlGroup;