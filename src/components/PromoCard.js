import React, { Component } from 'react';
import favoritePromo from '../icons/coeur.svg';
import promoZoomIcon from '../icons/zoom.svg';
import './PromoCard.css';

const PromoCard = ({ promoImg, promoTitle, promoText, promoPrice }) => {
  return (
    <div className="PromoCard-container">
      <img src={promoZoomIcon} className="PromoCard-zoom" />
      <img src={promoImg} className="PromoCard-img" />
      <img src={favoritePromo} className="PromoCard-coeur" />
      <p className="PromoCard-title">{promoTitle}</p>
      <p className="PromoCard-text">{promoText}</p>
      <hr className="PromoCard-hr" />
      <p className="PromoCard-price"> {promoPrice}</p>
    </div>
  );
};

export default PromoCard;
