import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.css';

const Button = ({
  children,
  onClick,
  large,
  green,
  filtre,
  geolocalisation,
}) => (
  <button
    className={clsx('Button', {
      'Button--large': large,
      'Button--green': green,
      'Button--filtre': filtre,
      'Button--geolocalisation': geolocalisation,
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
  filtre: PropTypes.bool,
  geolocalisation: PropTypes.bool,
};

export default Button;
