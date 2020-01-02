import React, { Component } from 'react';
import AddTipModal from './AddTipModal.jsx';

const Search = props => {
  return (
    <div id="search" className="division">
      <input type="text" placeholder="Zip Code" onChange={props.getZipCode} />
      <button onClick={() => props.getLocalTips(props.zipCode)}> Enter </button>
      <button
        onClick={props.toggleAddTipsButton}>
        Add a Tip
      </button>
      {props.addTipsBoolean ? <AddTipModal /> : null}
    </div>
  )
};

export default Search;
