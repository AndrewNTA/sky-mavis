import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import BackIcon from 'static/icons/back-icon.png';
import { useNavigate } from 'react-router-dom';
import Button, { SECONDARY, MEDIUM} from 'components/buttons/button';
import TextInput from 'components/inputs/textInput';
import AssetInput from './components/assetInput';
import AssetModal from './components/assetModal';
import SuccessModal from './components/successModal';
import { findOption } from './utils';
import { sendAssetRequest, resetData } from './actions';

import './send-step.css';
import isEmpty from '../../utils/isEmpty';

const SendStep = () => {
  const [selectedId, setSelectedId] = useState('eur');
  const [isShow, setIsShow] = useState(false);
  const [toAddress, setToAddress] = useState('');
  const [valueInput, setValueInput] = useState('');
  
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({
    sendAssetRequest,
    resetData,
  }, dispatch), [dispatch]);
  const assetsList = useSelector(state => state.home?.assets) || [];
  const isSuccess = useSelector(state => state.sendStep?.success);
  if (isEmpty(assetsList)) {
    goHome();
  }
  
  const selectedAsset = useMemo(() => findOption(selectedId, assetsList), [selectedId, assetsList]);

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
  const handleConfirm = () => {
    actions.resetData();
    goHome();
  };
  const handleSetMax = () => {
    setValueInput(selectedAsset.primaryValue);
  };
  const handleChangeValue = e => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setValueInput(e.target.value);
    }
  };
  const handleSend = () => {
    if (!toAddress) {
      alert('Please enter the receive address');
      return;
    }
    if (!valueInput) {
      alert('Please enter the amount');
      return;
    }
    const value = parseInt(valueInput);
    if (value > selectedAsset.primaryValue) {
      alert('Please enter the amount do not exceed max amount');
      return;
    }
    const postData = {
      id: selectedId,
      value,
    };
    actions.sendAssetRequest(postData);
  };

  const AmountActionIcon = <div className="st-max-icon" onClick={handleSetMax}>
    {'Max'}
  </div>;
  
  return <div className="st-container">
    {isSuccess && <SuccessModal
      onConfirm={handleConfirm}
      currency={selectedAsset ? selectedAsset.primaryCurrency : ''}
    />}
    {isShow && <AssetModal
      options={assetsList}
      onSelect={handleSelectCurrency}
      selectedId={selectedId}
      onClose={handleCloseModal}
    />}
    <div className="st-header">
      <img alt="back" src={BackIcon} className="st-back-icon" onClick={goHome}/>
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
        <TextInput
          value={toAddress}
          onChange={e => { setToAddress(e.target.value);}}
        />
      </div>
      <div className="st-form-row">
        <div className="st-form-label">{'asset'}</div>
        <AssetInput
          selectedAsset={selectedAsset}
          onOpenModal={handleOpenModal}
        />
      </div>
      <div className="st-form-row">
        <div className="st-group-label">
          <div className="st-form-label">{'amount'}</div>
          <div className="st-group-label-right">
            <span>{'available:'}</span>
            <span>{
              selectedAsset ? ` ${selectedAsset.primaryValue} ${selectedAsset.primaryCurrency}` : ''
            }</span>
          </div>
        </div>
        <TextInput
          value={valueInput}
          onChange={handleChangeValue}
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
        onClick={handleSend}
        text={'Send'}
      />
    </div>
  </div>;
};

export default SendStep;
