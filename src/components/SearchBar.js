import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './SearchBar.css';

const SearchBar = ({ large, green }) => (
  <div className="SearchBar-container">
    <div className="SearchBar">
      <span className="SearchBar-text">Trouvez une pharmacie </span>
      <input
        className="SearchBar-Input"
        placeholder="Nom, ville, code postal ...."
      />
    </div>
    <div className="SearchBar-group-Button">
      <span className="SearchBar-Button-cont">
        <img src={require('../icons/search.png')} className="text-white" />
      </span>
    </div>
  </div>
);

export default SearchBar;
