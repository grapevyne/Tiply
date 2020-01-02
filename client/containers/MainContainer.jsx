import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTipModal from '../components/AddTipModal.jsx';
import Banner from '../components/Banner.jsx';
import Search from '../components/Search.jsx';
import TagsBox from '../components/TagsBox.jsx';
import TipsContainer from './TipsContainer.jsx';
import { getZipCode, getLocalTips, upvote, downvote, getDummyTips, toggleAddTipsButton, } from '../actions/actions';


const mapStateToProps = state => ({
  addTipsBoolean: state.tips.toggleAddTipsButton,
  zipCode: state.tips.zipCode,
  currentTips: state.tips.currentTips
});

const mapDispatchToProps = dispatch => ({
  getZipCode: (e) => {
    dispatch(getZipCode(e.target.value));
  },
  getLocalTips: () => {
    dispatch(getLocalTips());
  },
  upvote: (id) => {
    dispatch(upvote(id));
  },
  downvote: (id) => {
    dispatch(downvote(id));
  },
  getDummyTips: () => {
    dispatch(getDummyTips());
  },
  toggleAddTipsButton: () => {
    dispatch(toggleAddTipsButton())
  },

}) 

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='container'>
        <Banner />
        <Search 
          toggleAddTipsButton = {this.props.toggleAddTipsButton}
          addTipsBoolean = {this.props.addTipsBoolean}
          getZipCode={this.props.getZipCode}
          getLocalTips={this.props.getLocalTips}
        />
        <TagsBox />
        <TipsContainer
          currentTips={this.props.currentTips}
          getDummyTips={this.props.getDummyTips}
          upvote={this.props.upvote}
          downvote={this.props.downvote}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);