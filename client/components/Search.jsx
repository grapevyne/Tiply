import React, { Component } from 'react';
import AddTipModal from './AddTipModal.jsx';

const Search = props => {
  return (
    <div id="search" className="division">
      <input type="text" placeholder="Zip Code" onChange={props.getZipCode} />
      <button type="button" onClick={() => props.getLocalTips(props.zipCode)}> Enter </button>
      <input
        type="button"
        value="Add a Tip"
        onClick={props.toggleAddTipsButton}
      />
      {props.addTipsBoolean ? <AddTipModal /> : null}
    </div>
  )
};

export default Search;
