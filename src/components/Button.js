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
  medium,
  geolocalisation,
}) => (
  <button
    className={clsx('Button', {
      'Button--medium': medium,
      'Button--large': large,
      'Button--green': green,
      'Button--filtre': filtre,
      'Button--geolocalisation': geolocalisation,
    })}
    onClick={onClick}
  >
    <span className="TextButton"> {children} </span>
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  large: PropTypes.bool,
  green: PropTypes.bool,
  filtre: PropTypes.bool,
  medium: PropTypes.bool,
  geolocalisation: PropTypes.bool,
};

export default Button;
