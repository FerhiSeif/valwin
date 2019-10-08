import React from 'react';
import './Footer.css';
import normPharmalogo from '../icons/logo-small.svg';
import logo1 from '../icons/logo.svg';
import valwinlogo from '../images/Logo_Valwin_2018.svg';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container">
      <div className="Footer-logosContainer">
        <img
          src={normPharmalogo}
          className="Footer-logo"
          alt="logo normandie pharma"
        />
        <div className="Footer-secondlogo">
          <img src={valwinlogo} className="Footer-logo" alt="logo valwin" />
        </div>
      </div>

      <ul className="Footer-list">
        <li className="Footer-list-item title-list-item">Contactez-nous</li>
        <li className="Footer-list-item">Adresse</li>
        <li className="Footer-list-item">Code postal + ville</li>
        <li className="Footer-list-item">Email</li>
        <li className="Footer-list-item">Téléphone</li>
      </ul>

      <ul className="Footer-list">
        <li className="Footer-list-item title-list-item"> Suivez-nous</li>
        <li className="Footer-list-item">Facebook</li>
        <li className="Footer-list-item">Twitter</li>
      </ul>

      <hr className="hr-footer" />

      <ul className="Footer-list">
        <li className="Footer-list-item title-list-item">Site internet</li>
        <li className="Footer-list-item">Groupement</li>
        <li className="Footer-list-item">Partenaores</li>
        <li className="Footer-list-item">Promotions</li>
        <li className="Footer-list-item">Actualité santé</li>
      </ul>

      <ul className="Footer-list">
        <li className="Footer-list-item title-list-item">Information</li>
        <li className="Footer-list-item">Plan du site</li>
        <li className="Footer-list-item">Mentions légales</li>
        <li className="Footer-list-item">CGU</li>
        <li className=" Footer-list-item FooterCopyright">
          <p className="Footer-texcopyrigth">&#9400; Valwin 2019</p>
          <p className="Footer-texcopyrigth">Mise à jour le 25/02/2019</p>
        </li>
      </ul>
    </div>
    <div className="Footer-resp">
      <div className="Footer-res-display">
        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item">Contactez-nous</li>
          <li className="Footer-list-item">Adresse</li>
          <li className="Footer-list-item">Code postal + ville</li>
          <li className="Footer-list-item">Email</li>
          <li className="Footer-list-item">Téléphone</li>
        </ul>

        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item">Information</li>
          <li className="Footer-list-item">Plan du site</li>
          <li className="Footer-list-item">Mentions légales</li>
          <li className="Footer-list-item">CGU</li>
        </ul>

        <ul className="Footer-list">
          <li className="Footer-list-item title-list-item"> Suivez-nous</li>
          <li className="Footer-list-item">Facebook</li>
          <li className="Footer-list-item">Twitter</li>
        </ul>
      </div>
      <div className="Footer-logoResp-container">
        <div className="Footer-logo-resp">
          <img
            src={valwinlogo}
            className="Footer-logo Footer-secondlogo"
            alt="logo normandie pharma"
          />

          <img
            src={logo1}
            className="Footer-logo"
            alt="logo normandie pharma"
          />
        </div>
        <div className="Footer-copyright-resp">
          <p className="Footer-texcopyrigth">&#9400; Valwin 2019</p>
          <p className="Footer-texcopyrigth">Mise à jour le 25/02/2019</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
