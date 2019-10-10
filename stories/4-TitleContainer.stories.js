import React from 'react';
import '../src/App.css';
import TitleContainer from '../src/components/TitleContainer';

export default {
  title: 'WhiteTitle',
};

export const whiteTitle = () => (
  <TitleContainer green={true}>Quelqu’un qui me connaît,</TitleContainer>
);
