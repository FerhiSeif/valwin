import React, { Component } from 'react';
import bioderma from '../images/bioderma.png';
import biogaran from '../images/biogaran.png';
import gibaud from '../images/gibaud.png';
import gifrer from '../images/gifrer.png';
import './Partners.css';

class Partners extends Component {
  render() {
    return (
      <div className="Partners-container">
        <div className="Partners-servol-yellow">
          <img className="Partners-logo" src={bioderma} />
        </div>
        <div className="Partners-servol-yellow">
          <img className="Partners-logo" src={biogaran} />
        </div>
        <div className="Partners-servol-green">
          <img className="Partners-logo" src={gibaud} />
        </div>
        <div className="Partners-servol-yellow">
          <img className="Partners-logo" src={gifrer} />
        </div>
      </div>
    );
  }
}

export default Partners;
