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
  small,
}) => (
  <button
    className={clsx('Button', {
      'Button--medium': medium,
      'Button--large': large,
      'Button--green': green,
      'Button--filtre': filtre,
      'Button--geolocalisation': geolocalisation,
      'Button--small': small,
    })}
    onClick={onClick}
  >
    <span className="TextButton TextComponent-bold"> {children} </span>
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
  small: PropTypes.bool,
};

export default Button;
