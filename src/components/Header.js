import React from 'react';
import { Link } from 'react-router-dom';
import mapsvg from '../icons/map.svg';
import accessibility from '../icons/accessibility.png';
import HeaderLink from './HeaderLink';
import './Header.css';
import logo from '../icons/logo.svg';
import DropDown from './DropdownMenue';

const Header = () => (
  <header className="Header">
    <div className="Header-top">
      <div className="Header-top-logo">
        <img src={logo} className="Header-logo" alt="logo normandie pharma" />
      </div>
      <div className="Header-top-link">
        {/*dropdown*/}
        <div className="Header-resp-toggle">
          <DropDown />
        </div>
        <div className="Header-link-container">
          <img src={mapsvg} style={{ marginRight: '10px' }} />
          <HeaderLink to="/nos-pharmacies">Trouvez votre pharmacie</HeaderLink>
        </div>
        <div>
          <hr className="Header-hr" />
        </div>
        <div className="Header-link-container">
          <img
            src={accessibility}
            style={{ marginRight: '10px', width: '31px' }}
          />
          <HeaderLink to="/contact">Nous rejoindre</HeaderLink>
        </div>
      </div>
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
          <Link className="Header-menu-item" to="/nos-promotions">
            Nos promotions
          </Link>
        </li>
        <li>
          <Link className="Header-menu-item" to="/notre-blog">
            Notre blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
