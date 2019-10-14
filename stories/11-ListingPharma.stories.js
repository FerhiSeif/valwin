import React from 'react';
import '../src/App.css';
import ListingPharma from '../src/components/ListingPharma/ListingPharma';

export default {
  title: 'Listing Pharma',
};

export const toStorybook = () => <ListingPharma />;

toStorybook.story = {
  name: 'Listing Pharma',
};
