import React, { Component } from 'react';
import { imageArticle } from '../images/imageArticle.png';
import './PromoCard.css';

class PromoCard extends Component {
  render() {
    return (
      <div className="PromoCard-container">
        {/* <img src={require('../icons/zoom.png')}/>zoom.png */}
        <div
          className="PromoCard-zoom" /* src={require('../icons/imageArticle.png')}*/
        />
        <div
          className="PromoCard-imgContainer" /* src={require('../icons/imageArticle.png')}*/
        />
        <div
          className="PromoCard-coeur" /* src={require('../icons/coeur.png')}*/
        />
        <p className="PromoCard-title">BIODERMA</p>
        <p className="PromoCard-text">CDERM Lait hydratant douceur T/200ml</p>
        <hr className="PromoCard-hr" />
        <p className="PromoCard-price"> 6,46 €</p>
      </div>
    );
  }
}

export default PromoCard;
