import React from 'react';
import TitleContainer from './TitleContainer';

import './ImgComponent.css';

const ImgComponent = ({ urlImg, text1, text2, text3, text4 }) => {
  return (
    <div className="ImgComponent-container">
      <div style={{ background: `url(${urlImg})` }} className="ImgContainer" />
      <div className="ImgComponent-text">
        <div>
          <TitleContainer green={true} bold={true}>
            {text1}
          </TitleContainer>
        </div>
        {text2 == undefined ? (
          false
        ) : (
          <div>
            <TitleContainer white={true} bold={true}>
              {text2}
            </TitleContainer>
          </div>
        )}
        {text3 == undefined ? (
          false
        ) : (
          <div>
            <TitleContainer white={true} bold={true}>
              {text3}
            </TitleContainer>
          </div>
        )}
        {text4 == undefined ? (
          false
        ) : (
          <div>
            <TitleContainer white={true} bold={true}>
              {text4}{' '}
            </TitleContainer>
          </div>
        )}
      </div>
      {/* <div className="Img-Smile-Container"></div>*/}
    </div>
  );
};

export default ImgComponent;
