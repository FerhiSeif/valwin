import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TitleContainer.css';

const TitleContainer = ({ children, white, green }) => (
  <div
    className={clsx('TitleContainer', {
      'TitleContaine-white': white,
      'TitleContainer-green': green,
    })}
  >
    {children}
  </div>
);

TitleContainer.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  green: PropTypes.bool,
};

export default TitleContainer;
