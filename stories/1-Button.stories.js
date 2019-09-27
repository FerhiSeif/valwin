import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import Button from '../src/components/Button';

export default {
  title: 'Button',
};

export const medium = () => (
  <Button onClick={action('clicked')}>Medium Button</Button>
);

export const large = () => (
  <Button onClick={action('clicked')} large={true}>
    Large Button
  </Button>
);

export const green = () => (
  <Button onClick={action('clicked')} large={true} green={true}>
    Large Button
  </Button>
);
