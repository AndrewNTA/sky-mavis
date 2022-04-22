import React from 'react';
import PropTypes from 'prop-types';
import OptionIcon from 'static/icons/option-icon.png';

import './asset-input.css';

const AssetInput = ({ selectedAsset, onOpenModal }) => {
  return <div className="r-asset-input-container">
    <div className="r-asset-info">
      {selectedAsset && <>
        <img
          alt={selectedAsset.primaryCurrency}
          className="r-asset-currency-icon"
          src={selectedAsset.icon}
        />
        <span className="r-asset-currency-text">{selectedAsset.primaryCurrency}</span>
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
  selectedAsset: PropTypes.shape({
    primaryCurrency: PropTypes.string,
    icon: PropTypes.string,
  }),
  onOpenModal: PropTypes.func,
};
export default AssetInput;