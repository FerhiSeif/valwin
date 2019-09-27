import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HeaderLink.css';

const HeaderLink = ({ children,icon,  to }) => (
  <Link className="HeaderLink" to={to}>
    {icon}
    {children}
  </Link>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default HeaderLink;
