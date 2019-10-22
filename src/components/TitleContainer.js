import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TitleContainer.css';

const TitleContainer = ({ children, white, green, textWhite, gras }) => (
  <div
    className={clsx('TitleContainer', {
      'TitleContaine-white': white,
      'TitleContaine-textwhite': textWhite,
      'TitleContainer-green': green,
      'TitleContainer-gras': gras,
    })}
  >
    {children}
  </div>
);

TitleContainer.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  green: PropTypes.bool,
  textWhite: PropTypes.bool,
  gras: PropTypes.bool,
};

export default TitleContainer;
