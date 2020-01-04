import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputHeader, inputBlurb, inputLocation, toggleTagsDropdown, toggleAddTipsButton, addTip, assignTag } from '../actions/actions';

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
  },

  assignTag: (tag) => {
    dispatch(assignTag(tag))
  }
});

const mapStateToProps = state => ({
  tagsDropdownBoolean: state.tips.toggleTagsDropdown,
  tagList: state.tips.tagList,
  tipData: {
    header: state.tips.inputHeader,
    blurb: state.tips.inputBlurb,
    zip: state.tips.inputLocation,
  },
})

const AddTipModal = props => (
  <div className="addModal">
    <h1 className="modal-h1">Add a Tip</h1>
    <input type="text" placeholder="Header" onChange={props.inputHeaderFunction} onKeyDown={e => console.log(e.target.value.length)} />
    <textarea rows="4" cols="50" placeholder="Blurb" onChange={props.inputBlurb} ></textarea>
    <input type="text" placeholder="Location" onChange={props.inputLocation} />
    <span className="green">30 char limit for header.</span>
    <span className="green">255 char limit for blurb.</span>
    <div className="dropDownTags">
      <button onClick={props.toggleTagsDropdown} >Click me to see all Available Tags!</button>
      {props.tagsDropdownBoolean ? <h1> I love you </h1> : null}
    </div>

    <div className="tagsDiv">
        {props.tagList.map(el => {
          return <div className="tag" onClick={(e) => {props.assignTag(el); e.target.classList.toggle('selected')}}>{el}</div>
        })}
    </div>

    <div className="cancelOrAccept">
      <button onClick={props.toggleAddTipsButton} >Cancel</button>
      <button className="modal-submit" onClick={() => props.addTip(props.tipData)}>Submit</button>
    </div>
  </div>

);

export default connect(mapStateToProps, mapDispatchToProps)(AddTipModal);