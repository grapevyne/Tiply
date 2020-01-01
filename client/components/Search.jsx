import React, { Component } from 'react';

const Search = (props) => (
  
  <div id="search" className="division">
    <input type="text" placeholder="Zip Code" onChange={props.getZipCode} />
    <button type="button" onClick={props.getLocalTips}>Search</button>
    <button type="button">ADD</button>
  </div>

);

export default Search;