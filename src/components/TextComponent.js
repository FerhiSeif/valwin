import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TextComponent.css';

const TextComponent = ({ children, black, large, green, small, telNumber }) => (
  <p
    className={clsx('TextComponent', {
      'TextH2--large': large,
      'TextH1--black': black,
      'TextH1--green': green,
      'TextH3--small': small,
      'Text--telNumber': telNumber,
    })}
  >
    {children}
  </p>
);

TextComponent.propTypes = {
  children: PropTypes.node,
  telNumber: PropTypes.bool,
  large: PropTypes.bool,
  black: PropTypes.bool,
  green: PropTypes.bool,
  small: PropTypes.bool,
};

export default TextComponent;
