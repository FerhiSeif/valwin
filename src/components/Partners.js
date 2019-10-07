import React, { Component } from 'react';
import PartnerSurvol from './PartnerSurvol';
import bioderma from '../images/bioderma.png';
import biogaran from '../images/biogaran.png';
import gibaud from '../images/gibaud.png';
import gifrer from '../images/gifrer.png';
import './Partners.css';

const partners = [bioderma, biogaran, gibaud, gifrer];
const survolcolor = ['green', 'greenlight', 'yellow', 'yellowlight'];

//repeat table arr n times
const makeRepeated = (arr, n) => Array.from({ length: n }, () => arr).flat();

class Partners extends Component {
  render() {
    let rest = partners.length / 4;
    let mod = partners.length % 4;
    let newSurvolTab = makeRepeated(survolcolor, rest).concat(
      survolcolor.slice(0, mod)
    );
    return (
      <div className="Partners-container">
        {partners.map((partner, i) => (
          <div className="Partners-itemhover">
            <PartnerSurvol color={newSurvolTab[i]} />
            <img className="Partners-logo" src={partner} alt="Partner logo" />
          </div>
        ))}
      </div>
    );
  }
}

export default Partners;
