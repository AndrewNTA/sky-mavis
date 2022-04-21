import React from 'react';
import PropTypes from 'prop-types';
import './text-input.css';

const TextInput = props => {
  const { type, readonly, actionIcon, defaultValue, ...otherProps } = props;
  return <div className={`r-text-input-container ${readonly && 'readonly'}`}>
    {
      readonly ?
        <div className="r-text-input-readonly">
          {defaultValue}
        </div> :
        <input
          {...otherProps}
          type={type}
          className="r-text-input"
        />
    }
    {actionIcon}
  </div>;
};
TextInput.propTypes = {
  type: PropTypes.string,
  readonly: PropTypes.bool,
  actionIcon: PropTypes.node,
  defaultValue: PropTypes.string,
};
TextInput.defaultProps = {
  type: 'text',
  readonly: false,
  defaultValue: '',
};

export default TextInput;