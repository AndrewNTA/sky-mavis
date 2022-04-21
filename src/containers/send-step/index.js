import React, { useState, useMemo } from 'react';
import BackIcon from 'static/icons/back-icon.png';
import { useNavigate } from 'react-router-dom';
import Button, { SECONDARY, MEDIUM} from 'components/buttons/button';
import TextInput from 'components/inputs/textInput';
import AssetInput from './components/assetInput';
import AssetModal from './components/assetModal';
import SuccessModal from './components/successModal';
import { options } from './mockData';
import { findOption } from './utils';

import './send-step.css';

const SendStep = () => {
  const [selectedId, setSelectedId] = useState('eur');
  const [isShow, setIsShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  
  const selectedCurrency = useMemo(() => findOption(selectedId, options), [selectedId]);

  const handleSelectCurrency = id => {
    setSelectedId(id);
    setIsShow(false);
  };
  const handleCloseModal = () => {
    setIsShow(false);
  };
  const handleOpenModal = () => {
    setIsShow(true);
  };
  const goHome = () => {
    navigate('/');
  };
  const handleConfirm = () => {
    goHome();
  };
  const AmountActionIcon = <div className="st-max-icon">
    {'Max'}
  </div>;
  
  return <div className="st-container">
    {isSuccess && <SuccessModal
      onConfirm={handleConfirm}
      currency={selectedCurrency ? selectedCurrency.primaryCurrency : ''}
    />}
    {isShow && <AssetModal
      options={options}
      onSelect={handleSelectCurrency}
      selectedId={selectedId}
      onClose={handleCloseModal}
    />}
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
        <div className="st-form-label">{'asset'}</div>
        <AssetInput
          selectedCurrency={selectedCurrency}
          onOpenModal={handleOpenModal}
        />
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
        onClick={goHome}
        text={'Cancel'}
        type={SECONDARY}
      />
      <Button
        size={MEDIUM}
        onClick={() => { setIsSuccess(true); }}
        text={'Send'}
      />
    </div>
  </div>;
};

export default SendStep;
