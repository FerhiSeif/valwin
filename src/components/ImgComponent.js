import React from 'react';
import WhiteTitle from './WhiteTitle';
import './ImgComponent.css';

const ImgComponent = () => (
  <div className="ImgComponent-container">
    <div className="ImgContainer">
      <div className="ImgComponent-text">
        <div className="GreenTitle-container">
          <p className="GreenTitle-text">Suivi personnalisé </p>
        </div>
        <div>
          <WhiteTitle>Quelqu’un qui me connaît,</WhiteTitle>
        </div>
        <div>
          <WhiteTitle>connaît forcément mieux</WhiteTitle>
        </div>
        <div>
          <WhiteTitle>mes besoins ! </WhiteTitle>
        </div>
      </div>
      <div className="Img-Smile-Container"></div>
    </div>
  </div>
);

export default ImgComponent;
