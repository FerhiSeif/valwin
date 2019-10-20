import React from 'react';
import ImgComponent from '../src/components/ImgComponent';
import urlImg from '../src/images/smallimgback.png';

export default {
  title: 'ImgComponent',
};

export const imgComponent = () => (
  <ImgComponent
    urlImg={urlImg}
    text1="ffff"
    text2="GGGGGG"
    text3="hhhhh"
    text4="dfdfdf"
  />
);
