import React, { Component } from 'react';
import AddTipModal from './AddTipModal.jsx';

const Search = props => {
  return (
    <div id="search" className="division">
      <input type="text" placeholder="Zip Code" onChange={props.getZipCode} className="search-bar" />
      <button onClick={props.getLocalTips} className="search-button">Enter</button>
      <input
        type="button"
        value="Add a Tip"
        onClick={props.toggleAddTipsButton}
        className="add-button"
      />
      {props.addTipsBoolean ? <AddTipModal /> : null}
    </div>

  )
};

export default Search;
