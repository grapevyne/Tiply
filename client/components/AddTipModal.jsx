import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputHeader, inputBlurb, inputLocation, toggleTagsDropdown, toggleAddTipsButton } from '../actions/actions';


const mapStateToProps = state => ({
  tagsDropdownBoolean: state.tips.toggleTagsDropdown,
  tagList: state.tips.tagList,
})

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

});


const AddTipModal = props => (
  <div className="addModal">
    <h1 className="modal-h1">Add a Tip</h1>
    <input type="text" placeholder="Header" onChange={props.inputHeaderFunction} />
    <textarea rows="4" cols="50" placeholder="Blurb" onChange={props.inputBlurb} ></textarea>
    <input placeholder="Location" onChange={props.inputLocation} ></input>

    <div className="dropDownTags">
      <button onClick={props.toggleTagsDropdown} >Click me to see all Available Tags!</button>
      {props.tagsDropdownBoolean ? <h1> I love you </h1> : null}
    </div>

    <div className="cancelOrAccept">
      <button onClick={props.toggleAddTipsButton} className="cancel">Cancel</button>
      <button className="modal-submit">Submit</button>
    </div>
  </div>

);

export default connect(mapStateToProps, mapDispatchToProps)(AddTipModal);