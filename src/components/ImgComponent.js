import React from 'react';
import TitleContainer from './TitleContainer';
import './ImgComponent.css';

const ImgComponent = () => (
  <div className="ImgComponent-container">
    <div className="ImgContainer">
      <div className="ImgComponent-text">
        <div>
          <TitleContainer green={true}>Suivi personnalisé</TitleContainer>
        </div>
        <div>
          <TitleContainer white={true}>
            Quelqu’un qui me connaît,
          </TitleContainer>
        </div>
        <div>
          <TitleContainer white={true}>connaît forcément mieux</TitleContainer>
        </div>
        <div>
          <TitleContainer white={true}>mes besoins ! </TitleContainer>
        </div>
      </div>
      <div className="Img-Smile-Container"></div>
    </div>
  </div>
);

export default ImgComponent;
