import React from 'react';
import BackIcon from 'static/icons/back-icon.png';
import Button, { SECONDARY, MEDIUM} from 'components/buttons/button';
import TextInput from 'components/inputs/textInput';

import './send-step.css';

const SendStep = () => {
  const AmountActionIcon = <div className="st-max-icon">
    {'Max'}
  </div>;
  return <div className="st-container">
    <div className="st-header">
      <img alt="back" src={BackIcon} className="st-back-icon" />
      <span className="st-header-title">{'Send Assets'}</span>
    </div>
    <div className="st-form">
      <div className="st-form-row">
        <div className="st-form-label">{'from'}</div>
        <TextInput
          readonly={true}
          defaultValue={'My wallet (7300...3334)'}
        />
      </div>
      <div className="st-form-row">
        <div className="st-form-label">{'to'}</div>
        <TextInput />
      </div>
      <div className="st-form-row">
        <div className="st-group-label">
          <div className="st-form-label">{'amount'}</div>
          <div className="st-group-label-right">{'available: 50 EUR'}</div>
        </div>
        <TextInput
          actionIcon={AmountActionIcon}
        />
      </div>
    </div>
    <div className='st-control-group'>
      <Button
        size={MEDIUM}
        onClick={() => {}}
        text={'Cancel'}
        type={SECONDARY}
      />
      <Button
        size={MEDIUM}
        onClick={() => {}}
        text={'Send'}
      />
    </div>
  </div>;
};

export default SendStep;
