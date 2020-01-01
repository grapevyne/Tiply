import React, { Component } from 'react';

const Search = (props) => (

  <div id="search" className="division">
    <input type="text" placeholder="Enter 5-digit Zip Code" onChange={props.getZipCode} className="search-bar" />
    <button type="button" onClick={props.getLocalTips} className="search-button"><i class="fas fa-search-location"></i>Search</button>
    <button type="button" className="add-button"><i class="fas fa-plus"></i> Tip</button>
  </div>

);

export default Search;