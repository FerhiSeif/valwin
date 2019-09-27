import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.css';

const Button = ({ children, onClick, large, green }) => (
  <button
    className={clsx('Button', {
      'Button--large': large,
      'Button--green': green,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  large: PropTypes.bool,
  green: PropTypes.bool,
};

export default Button;
