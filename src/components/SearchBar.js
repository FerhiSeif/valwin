import React from 'react';
import search from '../icons/search.svg';
import './SearchBar.css';

const SearchBar = () => (
  <div className="SearchBar-container">
    <div className="SearchBar">
      <span className="SearchBar-text">Trouvez une pharmacie </span>
      <input
        type="text"
        className="SearchBar-Input"
        placeholder="Nom, ville, code postal ...."
      />
    </div>
    <button className="SearchBar-group-Button SearchBar-Button-cont">
      <img src={search} className="text-white" alt="search icon" />
    </button>
  </div>
);

export default SearchBar;
