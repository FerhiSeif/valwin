import React from 'react';
import '../src/App.css';
import Header from '../src/components/Header';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Header',
};

export const header = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
