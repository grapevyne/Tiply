import React, { Component } from 'react';

const Search = (props) => (

  <div id="search" className="division">
    <input type="text" placeholder="Zip Code" onChange={props.getZipCode} className="search-bar" />
    <button type="button" onClick={props.getLocalTips} className="search-button">Search</button>
    <button type="button" className="add-button">ADD</button>
  </div>

);

export default Search;