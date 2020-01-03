import React, { Component } from 'react';
import AddTipModal from './AddTipModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  return (
    <div id="search" className="division">
      <input type="text" placeholder="Enter 5-digit ZIP Code" onChange={props.getZipCode} className="search-input" />
      <button onClick={() => props.fetchTips(props.zipCode)} className="search-button"><FontAwesomeIcon icon={faSearchLocation} />Search</button>
      <button onClick={props.toggleAddTipsButton} className="add-button">
        <FontAwesomeIcon icon={faPlusCircle} />
        Add a Tip
      </button>
      {props.addTipsBoolean ? <AddTipModal /> : null}
    </div>
  )
};

export default Search;
