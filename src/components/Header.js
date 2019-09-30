import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import './Header.css';
import logo from '../icons/logo.svg';

const Header = () => (
  <header className="Header">
    <div className="Header-top">
      <img src={logo} className="Header-logo" alt="logo normandie pharma" />
      <HeaderLink to="/nos-pharmacies">Trouvez votre pharmacie</HeaderLink>
      <HeaderLink to="/contact">Nous rejoindre</HeaderLink>
    </div>
    <nav className="Header-menu">
      <ul className="Header-menu-list">
        <li>
          <Link className="Header-menu-item" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/notre-groupement">
            Notre groupement
          </Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/nos-partenaires ">
            Nos partenaires
          </Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/nos-pharmacies">
            Nos pharmacies
          </Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/nos-promotions">Nos promotions</Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/notre-blog">Notre blog</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
