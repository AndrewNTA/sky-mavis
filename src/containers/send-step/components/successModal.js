import React from 'react';
import PropTypes from 'prop-types';
import Button, { FULL } from 'components/buttons/button';
import './success-modal.css';

const SuccessModal = ({ onConfirm, currency }) => {
  return <div className="success-modal">
    <div className="sm-overlay" />
    <div className="sm-main">
      <div className="sm-title">
        {'Successfully sent'}
      </div>
      <div className="sm-content">
        <div>
          <span>{'Your'}</span>
          <strong className="sm-currency">{currency}</strong>
          <span>{'has been sent!'}</span>
        </div>
        <div>{'Thank you for using our service'}</div>
      </div>
      <Button
        onClick={onConfirm}
        text={'OK'}
        size={FULL}
      />
    </div>
  </div>;
};
SuccessModal.propTypes = {
  onConfirm: PropTypes.func,
  currency: PropTypes.string,
};
export default SuccessModal;
