import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import Header from '../src/components/Header';

export default {
  title: 'Header',
};

export const header = () => <Header />;
