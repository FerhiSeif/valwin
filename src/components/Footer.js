import React from 'react';

import './Footer.css';
import logo from '../icons/logo-small.svg';
import logo1 from '../icons/logo.svg';

const Footer = () => (
  <div>
    <footer className="Footer">
      <div>
        <img src={logo} className="Footer-logo" alt="logo normandie pharma" />
      </div>
      <div>
        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item">Contactez-nous</li>
          <li className="Footer-list-item">Adresse</li>
          <li className="Footer-list-item">Code postal + ville</li>
          <li className="Footer-list-item">Email</li>
          <li className="Footer-list-item">Téléphone</li>
        </ul>
      </div>
      <div>
        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item"> Suivez-nous</li>
          <li className="Footer-list-item">Facebook</li>
          <li className="Footer-list-item">Twitter</li>
        </ul>
      </div>
      <div>
        <hr className="hr-footer" />
      </div>
      <div>
        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item">Site internet</li>
          <li className="Footer-list-item">Groupement</li>
          <li className="Footer-list-item">Partenaores</li>
          <li className="Footer-list-item">Promotions</li>
          <li className="Footer-list-item">Actualité santé</li>
        </ul>
      </div>
      <div>
        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item">Information</li>
          <li className="Footer-list-item">Plan du site</li>
          <li className="Footer-list-item">Mentions légales</li>
          <li className="Footer-list-item">CGU</li>
          <div className="FooterCopyright">
            <p className="text-copyrigth">&#9400; Valwin 2019</p>
            <p className="text-copyrigth">Mise à jour le 25/02/2019</p>
          </div>
        </ul>
      </div>
    </footer>
    <div className="Footer-resp">
      <footer className="Footer-res-dosplay">
        <div>
          <ul className="Footer-list">
            <li className="Footer-list-item title-list-item">Contactez-nous</li>
            <li className="Footer-list-item">Adresse</li>
            <li className="Footer-list-item">Code postal + ville</li>
            <li className="Footer-list-item">Email</li>
            <li className="Footer-list-item">Téléphone</li>
          </ul>
        </div>
        <div>
          <ul className="Footer-list">
            <li className="Footer-list-item title-list-item">Information</li>
            <li className="Footer-list-item">Plan du site</li>
            <li className="Footer-list-item">Mentions légales</li>
            <li className="Footer-list-item">CGU</li>
          </ul>
        </div>
        <div>
          <ul className="Footer-list">
            <li className="Footer-list-item title-list-item"> Suivez-nous</li>
            <li className="Footer-list-item">Facebook</li>
            <li className="Footer-list-item">Twitter</li>
          </ul>
        </div>
      </footer>
      <div style={{ flex: '1', display: 'flex' }}>
        <div className="Footer-logo-resp">
          <img
            src={logo1}
            className="Footer-logo"
            alt="logo normandie pharma"
          />
        </div>
        <div className="Footer-copyright-resp">
          <p className="text-copyrigth">&#9400; Valwin 2019</p>
          <p className="text-copyrigth">Mise à jour le 25/02/2019</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
