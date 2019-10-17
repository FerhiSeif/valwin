import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import TitleContainer from '../src/components/TitleContainer';

export default {
  title: 'Title Container',
};

export const titleContainer = () => (
  <TitleContainer textWhite={true}>Quelqu’un qui me connaît,</TitleContainer>
);

export const titlegreen = () => (
  <TitleContainer green={true}>Quelqu’un qui me connaît,</TitleContainer>
);
