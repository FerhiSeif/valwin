import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import WhiteTitle from '../src/components/WhiteTitle';

export default {
  title: 'WhiteTitle',
};

export const whiteTitle = () => (
  <WhiteTitle>Quelqu’un qui me connaît,</WhiteTitle>
);
