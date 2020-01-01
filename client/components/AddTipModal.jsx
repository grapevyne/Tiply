import React, { Component } from 'react';

const AddTipModal = props => (
  
  <div className="addModal">
    <h1>Add a Tip</h1>
    <input placeholder = "Header"></input>
    <textarea rows = "4" cols = "50" placeholder = "Blurb" ></textarea>
    <input placeholder = "Location"></input>
    <div className = "cancelOrAccept">
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  </div>

);

export default AddTipModal;