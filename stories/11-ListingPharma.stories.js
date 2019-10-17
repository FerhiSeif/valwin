import React from 'react';
import '../src/App.css';
import ListingPharma from '../src/components/ListingPharma/ListingPharma';
import devanture from '../src/images/devanture.png';

export default {
  title: 'Listing Pharma',
};

const pharmacies = [
  {
    name: 'Pharmacie Valwin',
    address: '5 rue du Klaxon',
    city: '44000 Nantes',
    image: devanture,
    phoneNumber: '0242013698',
    websiteUrl: 'http://valwin.fr/',
    distance: '1',
  },
  {
    name: 'Pharmacie du paradis',
    address: '5 rue du Klaxon',
    city: '44000 Nantes',
    image: devanture,
    phoneNumber: '0242013698',
    websiteUrl: 'http://valwin.fr/',
    distance: '2',
  },
  {
    name: 'Pharmacie de Paris',
    address: '5 rue du Klaxon',
    city: '44000 Nantes',
    image: devanture,
    phoneNumber: '0242013698',
    websiteUrl: 'http://valwin.fr/',
    distance: '1.5',
  },
];

export const toStorybook = () => <ListingPharma pharmacies={pharmacies} />;

toStorybook.story = {
  name: 'Listing Pharma',
};
