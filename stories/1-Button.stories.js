import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import Button from '../src/components/Button';
import geolocalwhite from '../src/icons/geolocalwhite.svg';
import geolocaldark from '../src/icons/geolocaldark.svg';
import filterbtnDown from '../src/icons/filterbtnDown.svg';
import filterbtnDownSurvol from '../src/icons/filterbtnDownSurvol.svg';
import filterbtnUp from '../src/icons/filterbtnUp.svg';

export default {
  title: 'Button',
};

export const medium = () => (
  <Button onClick={action('clicked')}>Tous les articles</Button>
);

export const large = () => (
  <Button onClick={action('clicked')} large={true}>
    toutes les promotions
  </Button>
);

export const green = () => (
  <Button onClick={action('clicked')} large={true} green={true}>
    Large Button
  </Button>
);

export const filter = () => (
  <Button onClick={() => alert('hii')} filtre={true} large={true}>
    <span className="btn-gelocalText"> Filter par </span>
    <img
      className="icon-filterbtndark"
      src={filterbtnDown}
      alt="filter button icon"
    />
    <img
      className="icon-filterbtngreen"
      src={filterbtnDownSurvol}
      alt="filter button icon"
    />
  </Button>
);

export const geolocalisation = () => (
  <Button onClick={action('clicked')} geolocalisation={true}>
    <img
      className="icon-gelocaldark"
      src={geolocaldark}
      alt="geolocalisation icon"
    />
    <img
      className="icon-gelocalwhite"
      src={geolocalwhite}
      alt="geolocalisation icon"
    />
    <span className="btn-gelocalText"> Position actuelle</span>
  </Button>
);
