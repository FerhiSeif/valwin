import React from 'react';
import Slider from 'react-slick';
import imageValeur from '../images/smallimgback.png';
import introImg from '../images/groupementIntroImg.png';
import TitleContainer from './TitleContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './IntroCarousel.css';

const Imgs = [imageValeur, introImg, introImg];
const text1 = 'Suivi personnalisé';
const text2 = 'Quelqu’un qui me connaît,';
const text3 = 'forcément mieux mes';
const text4 = 'besoins ! ';

const Image = ({ url }) => (
  <img className="ImageCrousel-container " src={url} />
);

class IntroCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true,
      responsive: ['448px', '752px', '960px '],
      //   beforeChange: function(currentSlide, nextSlide) {
      //     console.log('before change', currentSlide, nextSlide);
      //   },
      //   afterChange: function(currentSlide) {
      //     console.log('after change', currentSlide);
      //   },
    };
    return (
      <div>
        <Slider {...settings}>
          {' '}
          {Imgs.map((elm, i) => (
            <div>
              <Image url={elm} />
            </div>
          ))}
        </Slider>
        <div className="SliderImgComponent-text">
          <div>
            <TitleContainer green={true} gras={true}>
              {text1}{' '}
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
          <div>
            <TitleContainer white={true} gras={true}>
              {text4}{' '}
            </TitleContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCarousel;
