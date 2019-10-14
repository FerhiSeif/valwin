import React from 'react';
import phone from '../../icons/phone.svg';
import website from '../../icons/website.svg';
import devanture from '../../images/devanture.png';
import './ListingPharma.css';

const ListingPharma = (props) => {
  return (
    <div className="ListingPharma-container">
      <div className="ListingPharma-container-picture">
        <img
          className="ListingPharma-picture"
          src={devanture}
          alt="pharmacy-front"
        />
      </div>
      <div className="ListingPharma-information">
        <p className="ListingPharma-information-title">Normandie Pharma</p>
        <p className="ListingPharma-information-text">
          18 rue du chemin vert
          <br />
          14000 Caen
        </p>
        <div className="ListingPharma-information-links">
          <div className="ListingPharma-information-links-phone">
            <img
              className="ListingPharma-information-links-icons"
              src={phone}
              alt="phone"
            />
            <a href={props.number}>&nbsp;&nbsp;Appeler |&nbsp;</a>
          </div>
          <div className="ListingPharma-information-links-phone">
            <img
              className="ListingPharma-information-links-icons"
              src={website}
              alt="website"
            />{' '}
            <a href={props.website}>&nbsp;Site web</a>
          </div>
        </div>
      </div>
      <div className="ListingPharma-distance">
        <p className="ListingPharma-distance-information">à 2km</p>
      </div>
    </div>
  );
};

export default ListingPharma;
