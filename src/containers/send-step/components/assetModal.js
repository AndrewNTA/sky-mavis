import React from 'react';
import PropTypes from 'prop-types';
import formatCurrencyPrice from 'utils/formatCurrecyPrice';
import CloseBtn from 'static/icons/close-icon.png';
import './asset-modal.css';

const AssetModal = props => {
  const { options, onSelect, selectedId, onClose } = props;
  return <div className="r-asset-modal">
    <div className="ram-overlay" />
    <div className="ram-main">
      <div className="ram-header">
        <span className="ram-header-title">{'Assets'}</span>
        <img
          alt="close"
          className="ram-close-btn"
          src={CloseBtn}
          onClick={onClose}
        />
      </div>
      <div className="ram-list">
        {options && options.map(o => {
          const {
            id,
            icon,
            primaryValue,
            primaryCurrency,
            secondaryValue,
            secondaryCurrency,
          } = o;
          return <div
            className={`ram-item ${id === selectedId && 'selected'}`}
            key={`${id}_${primaryCurrency}`}
            onClick={() => onSelect(id)}
          >
            <img alt={primaryCurrency} src={icon} className="ram-currency-icon" />
            <div>
              <div className="ram-group">
                <span className="ram-primary-value">{formatCurrencyPrice(primaryValue)}</span>
                <span className="ram-primary-currency">{primaryCurrency}</span>
              </div>
              <div className="ram-group">
                <span className="ram-secondary-value">{formatCurrencyPrice(secondaryValue)}</span>
                <span className="ram-secondary-currency">{secondaryCurrency}</span>
              </div>
            </div>
          </div>;
        }
        )}
      </div>
    </div>
  </div>;
};
AssetModal.propTypes = {
  selectedId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    id: PropTypes.string,
    primaryValue: PropTypes.number,
    secondaryValue: PropTypes.number,
    primaryCurrency: PropTypes.string,
    secondaryCurrency: PropTypes.string,
  })),
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
};
export default AssetModal;
