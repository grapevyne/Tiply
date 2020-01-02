import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputHeader, inputBlurb, inputLocation, toggleTagsDropdown, toggleAddTipsButton, addTip } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  inputHeaderFunction: e => {
    dispatch(inputHeader(e.target.value))
  },

  inputBlurb: e => { 
    dispatch(inputBlurb(e.target.value))
  },
  
  inputLocation: e => { 
    dispatch(inputLocation(e.target.value))
  },

  toggleTagsDropdown: () => {
    dispatch(toggleTagsDropdown())
  },

  toggleAddTipsButton: () => { 
    dispatch(toggleAddTipsButton())
  },

  addTip: (tipData) => {
    dispatch(addTip(tipData))
  }
});

const mapStateToProps = state => ({
  tagsDropdownBoolean: state.tips.toggleTagsDropdown,
  tipData: {
    header: state.tips.inputHeader,
    blurb: state.tips.inputBlurb,
    zip: state.tips.inputLocation,
  },
})

const AddTipModal = props => (
  <div className="addModal">
    <h1>Add a Tip</h1>
    <input type = "text" placeholder = "Header" onChange = {props.inputHeaderFunction} ></input>
    <textarea rows = "4" cols = "50" placeholder = "Blurb" onChange = {props.inputBlurb} ></textarea>
    <input placeholder = "Location" onChange = {props.inputLocation} ></input>
    
    <div className = "dropDownTags">
      <button onClick = {props.toggleTagsDropdown} >Click me to see all Available Tags!</button>
      {props.tagsDropdownBoolean? <h1> I love you </h1>: null}
    </div>

    <div className = "cancelOrAccept">
      <button onClick = {props.toggleAddTipsButton} >Cancel</button>
      <button onClick={() => props.addTip(props.tipData)}>Submit</button>
      {/* <button onClick={() => console.log(props.tipData)}>Submit</button> */}
    </div>
  </div>

);

export default connect(mapStateToProps, mapDispatchToProps)(AddTipModal);