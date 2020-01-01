import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputHeader, inputBlurb, inputLocation } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  inputHeaderFunction: e => {
    dispatch(inputHeader(e.target.value))
  },

  inputBlurb: e => { 
    dispatch(inputBlurb(e.target.value))
  },
  
  inputLocation: e => { 
    dispatch(inputLocation(e.target.value))
  }
});

const AddTipModal = props => (
  <div className="addModal">
    <h1>Add a Tip</h1>
    <input type = "text" placeholder = "Header" onChange = {props.inputHeaderFunction} ></input>
    <textarea rows = "4" cols = "50" placeholder = "Blurb" onChange = {props.inputBlurb} ></textarea>
    <input placeholder = "Location" onChange = {props.inputLocation} ></input>
    <div className = "cancelOrAccept">
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  </div>

);

export default connect(mapDispatchToProps)(AddTipModal);