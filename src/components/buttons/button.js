import React from 'react';
import Proptypes from 'prop-types';
import './button.css';

export const FULL = 'full';
export const SMALL = 'small';
export const MEDIUM = 'medium';

export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';

const Button = props => {
  const { size, onClick, text, type } = props;
  const className = `r-${type}-btn ${size === FULL ? FULL : size === MEDIUM ? MEDIUM : SMALL}`;
  return <button
    className={className}
    onClick={onClick}
  >
    {text}
  </button>;
};

Button.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
  size: Proptypes.oneOf([SMALL, MEDIUM, FULL]),
  type: Proptypes.oneOf([PRIMARY, SECONDARY]),
};
Button.defaultProps = {
  size: SMALL,
  type: PRIMARY,
};


export default Button;