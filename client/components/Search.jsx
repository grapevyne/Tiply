import React, { Component } from 'react';
import AddTipModal from './AddTipModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  return (
    <div id="search" className="division">
      <input type="text" placeholder="Zip Code" onChange={props.getZipCode} className="search-input" />
      <button onClick={() => props.fetchTips(props.zipCode)} className="search-button"><FontAwesomeIcon icon={faSearchLocation} />Search Zip</button>
      <button onClick={props.toggleAddTipsButton} className="add-button">
        Add a Tip
      </button>
      {props.addTipsBoolean ? <AddTipModal /> : null}
    </div>
  )
};

export default Search;
