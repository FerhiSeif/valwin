import React from 'react';
import TitleContainer from './TitleContainer';

import './ImgComponent.css';

const ImgComponent = ({ urlImg, text1, text2, text3, text4 }) => (
  <div className="ImgComponent-container">
    <img src={urlImg} className="ImgContainer" />
    <div className="ImgComponent-text">
      <div>
        <TitleContainer green={true} gras={true}>
          {text1}
        </TitleContainer>
      </div>
      <div>
        <TitleContainer white={true} gras={true}>
          {text2}
        </TitleContainer>
      </div>
      <div>
        <TitleContainer white={true} gras={true}>
          {text3}
        </TitleContainer>
      </div>
      {text4 ? (
        false
      ) : (
        <div>
          <TitleContainer white={true} gras={true}>
            {text4}{' '}
          </TitleContainer>
        </div>
      )}
    </div>
    {/* <div className="Img-Smile-Container"></div>*/}
  </div>
);

export default ImgComponent;
