import React from 'react';
import PropTypes from 'prop-types';
import OptionIcon from 'static/icons/option-icon.png';

import './asset-input.css';

const AssetInput = ({ selectedCurrency, onOpenModal }) => {
  return <div className="r-asset-input-container">
    <div className="r-asset-info">
      {selectedCurrency && <>
        <img
          alt={selectedCurrency.primaryCurrency}
          className="r-asset-currency-icon"
          src={selectedCurrency.icon}
        />
        <span className="r-asset-currency-text">{selectedCurrency.primaryCurrency}</span>
      </>}
    </div>
    <img
      alt="options"
      src={OptionIcon}
      className="r-asset-option-icon"
      onClick={onOpenModal}
    />
  </div>;
};
AssetInput.propTypes = {
  selectedCurrency: PropTypes.shape({
    primaryCurrency: PropTypes.string,
    icon: PropTypes.string,
  }),
  onOpenModal: PropTypes.func,
};
export default AssetInput;