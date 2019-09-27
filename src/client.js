import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
