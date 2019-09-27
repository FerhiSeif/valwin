import React from 'react';

import './Footer.css';
import logo from '../icons/logo-small.svg';

const Footer = () => (
  <footer className="Footer">
    <img src={logo} className="Footer-logo" alt="logo normandie pharma" />
    <div>&#9400; Valwin 2019</div>
  </footer>
);

export default Footer;
